#!/bin/bash

# Install Docker Compose on Ubuntu EC2

echo "Installing Docker Compose..."

# Method 1: Try installing the Docker Compose plugin (recommended)
sudo apt-get update
sudo apt-get install -y docker-compose-plugin

# Verify installation
if docker compose version &> /dev/null; then
    echo "✓ Docker Compose plugin installed successfully!"
    echo "  Use: docker compose (with a space)"
    exit 0
fi

# Method 2: Install standalone docker-compose if plugin method failed
echo "Plugin installation failed, trying standalone installation..."
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify standalone installation
if docker-compose --version &> /dev/null; then
    echo "✓ Docker Compose standalone installed successfully!"
    echo "  Use: docker-compose (with a hyphen)"
    exit 0
fi

echo "✗ Installation failed. Please check the errors above."
exit 1

