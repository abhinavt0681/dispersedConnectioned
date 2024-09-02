# Use the official Python image with the same version you've been developing with
FROM python:3.12.2-slim

# Set the working directory
WORKDIR /app

# Install Nginx and any system dependencies
RUN apt-get update && apt-get install -y nginx

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

# Expose the port that Nginx will use
EXPOSE 80

# Command to run Gunicorn server and Nginx
CMD service nginx start && gunicorn --workers 3 --bind 0.0.0.0:8000 dispersedconnection.wsgi:application
