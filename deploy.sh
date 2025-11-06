#!/bin/bash

# Quick deployment script for EC2

set -e  # Exit on error

echo "========================================="
echo "Dispersed Connection Deployment Script"
echo "========================================="

# Load .env file if it exists
if [ -f .env ]; then
    echo "Loading environment variables from .env file..."
    export $(cat .env | grep -v '^#' | xargs)
    echo "DOMAIN_NAME: ${DOMAIN_NAME:-not set}"
    echo "SSL_EMAIL: ${SSL_EMAIL:-not set}"
    echo ""
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker first."
    echo "Run: sudo apt-get update && sudo apt-get install -y docker.io docker-compose"
    exit 1
fi

# Check if Docker Compose is installed (try both plugin and standalone versions)
COMPOSE_CMD=""
if docker compose version &> /dev/null; then
    COMPOSE_CMD="docker compose"
elif command -v docker-compose &> /dev/null; then
    COMPOSE_CMD="docker-compose"
else
    echo "Docker Compose is not installed. Installing..."
    # Install Docker Compose plugin
    sudo apt-get update
    sudo apt-get install -y docker-compose-plugin || {
        echo "Failed to install via apt. Trying standalone installation..."
        sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        sudo chmod +x /usr/local/bin/docker-compose
    }
    # Try again
    if docker compose version &> /dev/null; then
        COMPOSE_CMD="docker compose"
    elif command -v docker-compose &> /dev/null; then
        COMPOSE_CMD="docker-compose"
    else
        echo "Failed to install Docker Compose. Please install manually."
        exit 1
    fi
fi

# Check if user is in docker group or using sudo
DOCKER_CMD="docker"
if ! docker ps &> /dev/null; then
    echo "Note: You may need to run this script with sudo or add your user to the docker group"
    DOCKER_CMD="sudo docker"
    if [[ "$COMPOSE_CMD" == "docker compose" ]]; then
        COMPOSE_CMD="sudo docker compose"
    else
        COMPOSE_CMD="sudo docker-compose"
    fi
fi

echo ""
echo "Step 1: Stopping any existing containers..."
$COMPOSE_CMD down || true

echo ""
echo "Step 2: Building Docker images..."
$COMPOSE_CMD build --no-cache

echo ""
echo "Step 3: Starting containers..."
$COMPOSE_CMD up -d

echo ""
echo "Step 4: Waiting for services to start..."
sleep 10

echo ""
echo "Step 5: Checking container status..."
$COMPOSE_CMD ps

echo ""
echo "========================================="
echo "Deployment Complete!"
echo "========================================="
echo ""
echo "Your services should be available at:"
echo "  - Main site: http://$(curl -s ifconfig.me || echo 'YOUR_EC2_IP')"
echo "  - Melanoma API: http://$(curl -s ifconfig.me || echo 'YOUR_EC2_IP'):8001"
echo "  - Sleep Predictor API: http://$(curl -s ifconfig.me || echo 'YOUR_EC2_IP'):8002"
echo ""
echo "To view logs: $COMPOSE_CMD logs -f"
echo "To view SSL setup logs: $COMPOSE_CMD logs dispersed-connection | grep -i ssl"
echo "To stop: $COMPOSE_CMD down"
echo ""
echo "If SSL didn't install, check logs and run manually:"
echo "  docker exec dispersed-connection certbot --nginx -n --agree-tos --email \$SSL_EMAIL -d \$DOMAIN_NAME"
echo ""

