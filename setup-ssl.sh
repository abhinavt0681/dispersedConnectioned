#!/bin/bash

# SSL Setup Script for Let's Encrypt

echo "========================================="
echo "SSL Certificate Setup"
echo "========================================="
echo ""

# Check if .env file exists
if [ ! -f .env ]; then
    echo "Creating .env file..."
    echo ""
    read -p "Enter your domain name (e.g., example.com): " DOMAIN_NAME
    read -p "Enter your email for Let's Encrypt: " SSL_EMAIL
    
    cat > .env << EOF
# SSL Configuration for Let's Encrypt
DOMAIN_NAME=$DOMAIN_NAME
SSL_EMAIL=$SSL_EMAIL
EOF
    
    echo ""
    echo ".env file created with your settings."
else
    echo ".env file already exists. Current settings:"
    cat .env
    echo ""
    read -p "Do you want to update it? (y/n): " UPDATE
    if [ "$UPDATE" = "y" ]; then
        read -p "Enter your domain name (e.g., example.com): " DOMAIN_NAME
        read -p "Enter your email for Let's Encrypt: " SSL_EMAIL
        
        cat > .env << EOF
# SSL Configuration for Let's Encrypt
DOMAIN_NAME=$DOMAIN_NAME
SSL_EMAIL=$SSL_EMAIL
EOF
        echo ".env file updated."
    fi
fi

echo ""
echo "========================================="
echo "IMPORTANT: Before deploying, make sure:"
echo "========================================="
echo "1. Your domain's A record points to: 3.149.192.146"
echo "2. Port 80 and 443 are open in EC2 security group"
echo "3. DNS has propagated (check with: dig yourdomain.com)"
echo ""
echo "Then run: ./deploy.sh"
echo ""

