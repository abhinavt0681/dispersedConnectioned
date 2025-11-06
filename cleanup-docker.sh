#!/bin/bash

# Clean up Docker to free disk space on EC2

echo "Cleaning up Docker to free disk space..."
echo ""

# Remove stopped containers
echo "Removing stopped containers..."
docker container prune -f

# Remove unused images
echo "Removing unused images..."
docker image prune -a -f

# Remove unused volumes
echo "Removing unused volumes..."
docker volume prune -f

# Remove build cache
echo "Removing build cache..."
docker builder prune -a -f

# Show disk usage
echo ""
echo "Docker disk usage:"
docker system df

echo ""
echo "System disk usage:"
df -h /

