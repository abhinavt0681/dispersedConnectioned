# Use the official Python image with the same version you've been developing with
FROM python:3.12.2-slim

# Set the working directory
WORKDIR /app

# Install Nginx, Certbot, and any system dependencies
RUN apt-get update && apt-get install -y nginx certbot python3-certbot-nginx

# Copy the requirements.txt first to leverage Docker cache
COPY requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Django app code into the container
COPY . .

# Collect static files
RUN python manage.py collectstatic --noinput

# Copy the Nginx configuration file
COPY nginx/default /etc/nginx/sites-available/default

# Create symbolic link only if it doesn't already exist
RUN if [ ! -f /etc/nginx/sites-enabled/default ]; then ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/; fi

# Make sure the start.sh script is executable
RUN chmod +x /app/start.sh

# Expose the ports that Nginx will use
EXPOSE 80
EXPOSE 443

# Use the start.sh script to handle SSL setup and start Nginx and Gunicorn
CMD ["/app/start.sh"]
