#!/bin/bash

# Install SSL certificate now - fixes the Nginx server_name issue

echo "========================================="
echo "Installing SSL Certificate (Fix Nginx Config)"
echo "========================================="
echo ""

# Check if container is running
if ! docker ps | grep -q dispersed-connection; then
    echo "ERROR: Container is not running!"
    exit 1
fi

echo "Step 1: Updating Nginx server_name to match domain..."
docker exec dispersed-connection sed -i 's/server_name _;/server_name dispersedconnection.com www.dispersedconnection.com;/' /etc/nginx/sites-available/default

echo "Step 2: Testing Nginx configuration..."
docker exec dispersed-connection nginx -t

if [ $? -ne 0 ]; then
    echo "ERROR: Nginx configuration test failed!"
    exit 1
fi

echo "Step 3: Reloading Nginx..."
docker exec dispersed-connection service nginx reload

echo "Step 4: Installing SSL certificate using existing cert..."
docker exec dispersed-connection certbot install --cert-name dispersedconnection.com --nginx

if [ $? -eq 0 ]; then
    echo ""
    echo "✓ SSL certificate installed successfully!"
    echo ""
    echo "Step 5: Final Nginx reload..."
    docker exec dispersed-connection service nginx reload
    
    echo ""
    echo "========================================="
    echo "SUCCESS! Your site should now work at:"
    echo "  https://dispersedconnection.com"
    echo "========================================="
else
    echo ""
    echo "✗ SSL installation failed. Trying alternative method..."
    echo ""
    echo "Step 4b: Trying certbot --nginx with domain..."
    docker exec dispersed-connection certbot --nginx \
        -n \
        --agree-tos \
        --email abhinavt0681@gmail.com \
        -d dispersedconnection.com \
        --redirect
    
    if [ $? -eq 0 ]; then
        echo "✓ SSL installed using alternative method!"
        docker exec dispersed-connection service nginx reload
    else
        echo "✗ Both methods failed. Check logs:"
        echo "  docker logs dispersed-connection"
    fi
fi

