#!/bin/bash

# Ensure directories for DB/media exist when mapped via volumes
if [ -n "$DJANGO_DB_PATH" ]; then
    mkdir -p "$(dirname "$DJANGO_DB_PATH")"
fi

if [ -n "$DJANGO_MEDIA_ROOT" ]; then
    mkdir -p "$DJANGO_MEDIA_ROOT"
fi

# Start Nginx to respond to the HTTP-01 challenge for Certbot
service nginx start

# Check if domain is provided via environment variable, otherwise skip SSL
if [ -n "$DOMAIN_NAME" ] && [ -n "$SSL_EMAIL" ]; then
    echo "Attempting to obtain SSL certificate for $DOMAIN_NAME..."
    # Update nginx server_name if it's still the default
    sed -i "s/server_name _;/server_name $DOMAIN_NAME www.$DOMAIN_NAME;/" /etc/nginx/sites-available/default || true
    service nginx reload
    
    # Request SSL certificates via Certbot (non-interactive)
    certbot --nginx -n --agree-tos --email "$SSL_EMAIL" -d "$DOMAIN_NAME" || {
        echo "SSL certificate setup failed. Continuing with HTTP only..."
        # Update nginx config to listen on port 80 only if SSL fails
        sed -i 's/listen 443 ssl;/# listen 443 ssl;/' /etc/nginx/sites-available/default || true
    }
    # Reload Nginx to apply the SSL certificate
    service nginx reload
else
    echo "DOMAIN_NAME or SSL_EMAIL not set. Skipping SSL setup. Running HTTP only."
fi

# Start Gunicorn to serve the Django app
echo "Starting Gunicorn..."
gunicorn --workers 3 --bind 0.0.0.0:8000 dispersedconnection.wsgi:application
