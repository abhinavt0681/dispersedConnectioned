# Deployment Guide for EC2

## Prerequisites

1. **Docker and Docker Compose** installed on your EC2 instance
2. **Domain name** (optional - for SSL) or use EC2 public IP
3. **Security Group** configured to allow:
   - Port 80 (HTTP)
   - Port 443 (HTTPS)
   - Port 22 (SSH)

## Step 1: Install Docker and Docker Compose

```bash
# Update system
sudo apt-get update

# Install Docker
sudo apt-get install -y docker.io docker-compose

# Start Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Add your user to docker group (to run without sudo)
sudo usermod -aG docker $USER
# Log out and back in for this to take effect
```

## Step 2: Configure Your Domain (Optional)

If you have a domain name:
1. Point your domain's A record to your EC2 instance's public IP
2. Update `dispersedconnection/nginx/default` with your domain
3. Update `dispersedconnection/start.sh` with your domain and email

If you don't have a domain:
- The app will work on HTTP only
- You'll need to modify the start script to skip SSL

## Step 3: Navigate to Project Directory

```bash
cd /path/to/dispersedConnectioned
```

## Step 4: Build and Start Containers

```bash
# Build and start all services
docker-compose up -d --build

# Check if containers are running
docker-compose ps

# View logs
docker-compose logs -f
```

## Step 5: Verify Deployment

- Main site: `http://YOUR_EC2_IP` or `http://your-domain.com`
- Melanoma detector API: `http://YOUR_EC2_IP:8001`
- Sleep predictor API: `http://YOUR_EC2_IP:8002`

## Troubleshooting

### Check container logs
```bash
docker-compose logs dispersed-connection
docker-compose logs melanoma-detector-fastapi
docker-compose logs sleep-cycle-predictor-fastapi
```

### Restart services
```bash
docker-compose restart
```

### Stop services
```bash
docker-compose down
```

### Rebuild after code changes
```bash
docker-compose up -d --build
```

## Important Notes

1. **SSL Certificate**: The current setup tries to get SSL certificates automatically. If you don't have a domain configured, this will fail. You may need to modify `start.sh` to skip SSL setup.

2. **Static Files**: Make sure static files are collected. The Dockerfile does this automatically during build.

3. **Database**: SQLite database is created automatically on first run.

4. **Ports**: Make sure your EC2 security group allows traffic on ports 80, 443, 8001, and 8002.

