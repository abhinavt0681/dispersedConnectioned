#!/bin/bash

# Start Nginx to respond to the HTTP-01 challenge for Certbot
service nginx start

# Request SSL certificates via Certbot
certbot --nginx -n --agree-tos --email abhinavt0681@gmail.com -d dispersedconnection.com

# Reload Nginx to apply the SSL certificate
service nginx reload

# Start Gunicorn to serve the Django app
gunicorn --workers 3 --bind 0.0.0.0:8000 dispersedconnection.wsgi:application
