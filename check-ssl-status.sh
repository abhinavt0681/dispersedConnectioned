#!/bin/bash

# Check SSL certificate status and troubleshoot

echo "========================================="
echo "SSL Certificate Status Check"
echo "========================================="
echo ""

# Check if .env exists
if [ -f .env ]; then
    echo "✓ .env file exists"
    export $(cat .env | grep -v '^#' | xargs)
    echo "  DOMAIN_NAME: ${DOMAIN_NAME:-not set}"
    echo "  SSL_EMAIL: ${SSL_EMAIL:-not set}"
else
    echo "✗ .env file not found!"
    echo "  Run: ./setup-ssl.sh"
    exit 1
fi

echo ""
echo "Checking container status..."
if docker ps | grep -q dispersed-connection; then
    echo "✓ Container is running"
else
    echo "✗ Container is not running!"
    exit 1
fi

echo ""
echo "Checking DNS..."
if [ -n "$DOMAIN_NAME" ]; then
    DNS_IP=$(dig +short $DOMAIN_NAME | tail -1)
    EC2_IP=$(curl -s ifconfig.me)
    echo "  Domain: $DOMAIN_NAME"
    echo "  DNS points to: $DNS_IP"
    echo "  EC2 IP: $EC2_IP"
    if [ "$DNS_IP" = "$EC2_IP" ]; then
        echo "  ✓ DNS is correctly configured"
    else
        echo "  ✗ DNS mismatch! Update your A record to point to $EC2_IP"
    fi
fi

echo ""
echo "Checking SSL certificate in container..."
docker exec dispersed-connection certbot certificates 2>/dev/null || echo "  No certificates found or certbot not accessible"

echo ""
echo "Checking Nginx SSL configuration..."
docker exec dispersed-connection cat /etc/nginx/sites-available/default | grep -A 5 "listen 443" || echo "  No SSL configuration found in Nginx"

echo ""
echo "Recent container logs (SSL related):"
docker logs dispersed-connection 2>&1 | tail -20 | grep -i -E "(ssl|certbot|certificate|domain)" || echo "  No SSL-related logs found"

echo ""
echo "========================================="
echo "To manually install SSL certificate:"
echo "========================================="
echo "docker exec dispersed-connection certbot --nginx \\"
echo "    -n --agree-tos \\"
echo "    --email $SSL_EMAIL \\"
echo "    -d $DOMAIN_NAME \\"
echo "    --redirect"
echo ""

