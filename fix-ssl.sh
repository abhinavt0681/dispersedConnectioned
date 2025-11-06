#!/bin/bash

# Quick fix script to install SSL certificate

echo "========================================="
echo "SSL Certificate Installation Fix"
echo "========================================="
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cat > .env << 'EOF'
DOMAIN_NAME=dispersedconnection.com
SSL_EMAIL=abhinavt0681@gmail.com
EOF
    echo "✓ .env file created"
fi

# Load environment variables
export $(cat .env | grep -v '^#' | xargs)

# Check if container is running
if ! docker ps | grep -q dispersed-connection; then
    echo "ERROR: Container is not running!"
    echo "Start it with: docker-compose up -d"
    exit 1
fi

echo "Step 1: Restarting container to load environment variables..."
docker-compose down
docker-compose up -d

echo ""
echo "Step 2: Waiting for container to start..."
sleep 10

echo ""
echo "Step 3: Installing SSL certificate..."
docker exec dispersed-connection certbot --nginx \
    -n \
    --agree-tos \
    --email "$SSL_EMAIL" \
    -d "$DOMAIN_NAME" \
    --redirect

if [ $? -eq 0 ]; then
    echo ""
    echo "✓ SSL certificate installed successfully!"
    echo ""
    echo "Step 4: Reloading Nginx..."
    docker exec dispersed-connection service nginx reload
    
    echo ""
    echo "========================================="
    echo "SUCCESS! Your site should now work at:"
    echo "  https://$DOMAIN_NAME"
    echo "========================================="
else
    echo ""
    echo "✗ SSL installation failed. Check the errors above."
    echo ""
    echo "Common issues:"
    echo "1. DNS not pointing to this server"
    echo "2. Port 80 not accessible (needed for Let's Encrypt validation)"
    echo "3. Rate limit exceeded (wait a few hours)"
    echo ""
    echo "Check logs: docker logs dispersed-connection"
fi

