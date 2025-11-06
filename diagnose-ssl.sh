#!/bin/bash

# Comprehensive SSL Diagnostic Script
# Run this on your EC2 instance to diagnose HTTPS issues

echo "========================================="
echo "SSL/HTTPS Diagnostic Tool"
echo "========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check 1: .env file
echo "1. Checking .env file..."
if [ -f .env ]; then
    echo -e "${GREEN}✓ .env file exists${NC}"
    echo "Contents:"
    cat .env
    export $(cat .env | grep -v '^#' | xargs)
    echo ""
else
    echo -e "${RED}✗ .env file NOT found!${NC}"
    echo "Create it with:"
    echo "  echo 'DOMAIN_NAME=dispersedconnection.com' > .env"
    echo "  echo 'SSL_EMAIL=abhinavt0681@gmail.com' >> .env"
    echo ""
fi

# Check 2: Container status
echo "2. Checking container status..."
if docker ps | grep -q dispersed-connection; then
    echo -e "${GREEN}✓ Container is running${NC}"
    CONTAINER_ID=$(docker ps | grep dispersed-connection | awk '{print $1}')
    echo "  Container ID: $CONTAINER_ID"
else
    echo -e "${RED}✗ Container is NOT running!${NC}"
    echo "  Start it with: docker-compose up -d"
    echo ""
fi

# Check 3: Environment variables in container
echo ""
echo "3. Checking environment variables in container..."
if docker ps | grep -q dispersed-connection; then
    echo "DOMAIN_NAME: $(docker exec dispersed-connection printenv DOMAIN_NAME 2>/dev/null || echo 'NOT SET')"
    echo "SSL_EMAIL: $(docker exec dispersed-connection printenv SSL_EMAIL 2>/dev/null || echo 'NOT SET')"
    if [ -z "$(docker exec dispersed-connection printenv DOMAIN_NAME 2>/dev/null)" ]; then
        echo -e "${RED}✗ DOMAIN_NAME not set in container!${NC}"
        echo "  Restart container: docker-compose down && docker-compose up -d"
    fi
fi

# Check 4: DNS
echo ""
echo "4. Checking DNS configuration..."
DOMAIN="dispersedconnection.com"
DNS_IP=$(dig +short $DOMAIN | tail -1)
EC2_IP=$(curl -s ifconfig.me 2>/dev/null || echo "unknown")
echo "  Domain: $DOMAIN"
echo "  DNS resolves to: $DNS_IP"
echo "  EC2 Public IP: $EC2_IP"
if [ "$DNS_IP" = "$EC2_IP" ]; then
    echo -e "${GREEN}✓ DNS is correctly configured${NC}"
else
    echo -e "${RED}✗ DNS mismatch!${NC}"
    echo "  Update your A record to point to: $EC2_IP"
fi

# Check 5: Port 443 in Security Group (can't check directly, but can test)
echo ""
echo "5. Testing port 443 accessibility..."
if timeout 3 bash -c "echo > /dev/tcp/dispersedconnection.com/443" 2>/dev/null; then
    echo -e "${GREEN}✓ Port 443 is accessible from this server${NC}"
else
    echo -e "${YELLOW}⚠ Cannot test port 443 from inside EC2${NC}"
    echo "  Check AWS Console → EC2 → Security Groups"
    echo "  Ensure inbound rule: Port 443, Source: 0.0.0.0/0"
fi

# Check 6: Port 443 listening in container
echo ""
echo "6. Checking if port 443 is listening in container..."
if docker ps | grep -q dispersed-connection; then
    if docker exec dispersed-connection netstat -tlnp 2>/dev/null | grep -q ":443" || \
       docker exec dispersed-connection ss -tlnp 2>/dev/null | grep -q ":443"; then
        echo -e "${GREEN}✓ Port 443 is listening in container${NC}"
    else
        echo -e "${RED}✗ Port 443 is NOT listening in container${NC}"
    fi
fi

# Check 7: SSL certificate status
echo ""
echo "7. Checking SSL certificate..."
if docker ps | grep -q dispersed-connection; then
    CERT_STATUS=$(docker exec dispersed-connection certbot certificates 2>/dev/null)
    if [ -n "$CERT_STATUS" ]; then
        echo -e "${GREEN}✓ Certbot certificates found:${NC}"
        echo "$CERT_STATUS"
    else
        echo -e "${RED}✗ No SSL certificates found${NC}"
        echo "  Certificate was never installed or certbot failed"
    fi
fi

# Check 8: Nginx SSL configuration
echo ""
echo "8. Checking Nginx SSL configuration..."
if docker ps | grep -q dispersed-connection; then
    NGINX_CONFIG=$(docker exec dispersed-connection cat /etc/nginx/sites-available/default 2>/dev/null)
    if echo "$NGINX_CONFIG" | grep -q "listen 443"; then
        echo -e "${GREEN}✓ Nginx has SSL configuration (listen 443)${NC}"
        echo "SSL config snippet:"
        echo "$NGINX_CONFIG" | grep -A 10 "listen 443" | head -10
    else
        echo -e "${RED}✗ Nginx does NOT have SSL configuration${NC}"
        echo "  SSL certificate was never installed"
    fi
fi

# Check 9: Container logs (SSL related)
echo ""
echo "9. Recent SSL-related container logs:"
if docker ps | grep -q dispersed-connection; then
    SSL_LOGS=$(docker logs dispersed-connection 2>&1 | grep -i -E "(ssl|certbot|certificate|domain|error)" | tail -10)
    if [ -n "$SSL_LOGS" ]; then
        echo "$SSL_LOGS"
    else
        echo "  No SSL-related logs found"
    fi
fi

# Check 10: Test HTTPS from outside
echo ""
echo "10. Testing HTTPS connection..."
HTTPS_TEST=$(curl -I -k -s --max-time 5 https://dispersedconnection.com 2>&1 | head -5)
if echo "$HTTPS_TEST" | grep -q "HTTP"; then
    HTTP_CODE=$(echo "$HTTPS_TEST" | head -1 | awk '{print $2}')
    if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "301" ] || [ "$HTTP_CODE" = "302" ]; then
        echo -e "${GREEN}✓ HTTPS is responding (HTTP $HTTP_CODE)${NC}"
    else
        echo -e "${YELLOW}⚠ HTTPS responded but with code: $HTTP_CODE${NC}"
    fi
    echo "$HTTPS_TEST"
else
    echo -e "${RED}✗ HTTPS connection failed${NC}"
    echo "  Error: $HTTPS_TEST"
fi

# Summary and recommendations
echo ""
echo "========================================="
echo "SUMMARY & RECOMMENDATIONS"
echo "========================================="
echo ""

if docker ps | grep -q dispersed-connection; then
    if [ -z "$(docker exec dispersed-connection printenv DOMAIN_NAME 2>/dev/null)" ]; then
        echo -e "${RED}ACTION NEEDED:${NC} Restart container with .env file:"
        echo "  docker-compose down"
        echo "  docker-compose up -d"
        echo ""
    fi
    
    CERT_EXISTS=$(docker exec dispersed-connection certbot certificates 2>/dev/null | grep -c "Certificate Name" || echo "0")
    if [ "$CERT_EXISTS" = "0" ]; then
        echo -e "${YELLOW}ACTION NEEDED:${NC} Install SSL certificate manually:"
        echo "  docker exec dispersed-connection certbot --nginx \\"
        echo "    -n --agree-tos \\"
        echo "    --email abhinavt0681@gmail.com \\"
        echo "    -d dispersedconnection.com \\"
        echo "    --redirect"
        echo "  docker exec dispersed-connection service nginx reload"
        echo ""
    fi
fi

echo "To check EC2 Security Group for port 443:"
echo "  AWS Console → EC2 → Security Groups → Your Security Group"
echo "  Inbound Rules → Add rule:"
echo "    Type: HTTPS"
echo "    Port: 443"
echo "    Source: 0.0.0.0/0"
echo ""

