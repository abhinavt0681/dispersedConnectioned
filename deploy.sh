#!/bin/bash

# Quick deployment script for EC2

set -e  # Exit on error

echo "========================================="
echo "Dispersed Connection Deployment Script"
echo "========================================="

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker first."
    echo "Run: sudo apt-get update && sudo apt-get install -y docker.io docker-compose"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if user is in docker group or using sudo
DOCKER_CMD="docker"
if ! docker ps &> /dev/null; then
    echo "Note: You may need to run this script with sudo or add your user to the docker group"
    DOCKER_CMD="sudo docker"
fi

COMPOSE_CMD="docker-compose"
if ! docker-compose version &> /dev/null; then
    COMPOSE_CMD="sudo docker-compose"
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
echo "To view logs: docker-compose logs -f"
echo "To stop: docker-compose down"
echo ""

