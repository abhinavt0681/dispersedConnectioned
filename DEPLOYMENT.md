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

## Step 3: Prepare Persistent Storage (Recommended)

Attach or allocate a dedicated EBS volume for the SQLite database and media uploads. Example using `/mnt/dc_data`:

```bash
sudo mkfs.xfs /dev/xvdf          # run once on the new volume
sudo mkdir -p /mnt/dc_data
echo '/dev/xvdf /mnt/dc_data xfs defaults,nofail 0 2' | sudo tee -a /etc/fstab
sudo mount -a
sudo chown ubuntu:ubuntu /mnt/dc_data

# ensure folders exist so Docker can mount them
mkdir -p /mnt/dc_data/media
touch /mnt/dc_data/db.sqlite3
```

Expose this path to Docker by creating/adding to an `.env` file in the repo root:

```
DATA_VOLUME_PATH=/mnt/dc_data
DJANGO_DB_PATH=/data/db.sqlite3
DJANGO_MEDIA_ROOT=/data/media
```

If you skip this step, Docker will fall back to a local `./dispersedconnection/data` directory inside the repo.

## Step 4: Navigate to Project Directory

```bash
cd /path/to/dispersedConnectioned
```

## Step 5: Build and Start Containers

```bash
# Build and start all services
docker-compose up -d --build

# Check if containers are running
docker-compose ps

# View logs
docker-compose logs -f
```

## Step 6: Verify Deployment

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

3. **Database & Media**: By default the container reads `DJANGO_DB_PATH` and `DJANGO_MEDIA_ROOT`. Set these via `.env` (see Step 3) so data lives on your mounted EBS volume.

4. **Ports**: Make sure your EC2 security group allows traffic on ports 80, 443, 8001, and 8002.
