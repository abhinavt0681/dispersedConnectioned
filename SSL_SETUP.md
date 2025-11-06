# SSL Certificate Setup with Let's Encrypt

## Prerequisites

1. **Domain Name Required**: Let's Encrypt cannot issue certificates for IP addresses. You need a domain name.

2. **DNS Configuration**: Your domain must have an A record pointing to your EC2 instance:
   - Type: A
   - Name: @ (or your subdomain like www)
   - Value: 3.149.192.146
   - TTL: 300 (or default)

3. **EC2 Security Group**: Ports 80 and 443 must be open:
   - Port 80 (HTTP) - for Let's Encrypt validation
   - Port 443 (HTTPS) - for secure connections

## Setup Steps

### Step 1: Configure DNS

1. Go to your domain registrar (where you bought the domain)
2. Find DNS management / DNS settings
3. Add an A record:
   - **Type**: A
   - **Name**: @ (or leave blank for root domain) or `www` for www.yourdomain.com
   - **Value**: 3.149.192.146
   - **TTL**: 300

4. Wait for DNS propagation (can take a few minutes to 48 hours, usually 5-30 minutes)

5. Verify DNS is working:
   ```bash
   dig yourdomain.com
   # or
   nslookup yourdomain.com
   ```
   Should return: 3.149.192.146

### Step 2: Create .env File

```bash
cd ~/dispersedConnectioned
cp .env.example .env
nano .env
```

Edit the file with your domain and email:
```
DOMAIN_NAME=yourdomain.com
SSL_EMAIL=your-email@example.com
```

### Step 3: Update docker-compose.yml

The docker-compose.yml is already configured to read from .env file.

### Step 4: Deploy

```bash
# Make sure port 443 is open in EC2 security group first!
./deploy.sh
```

### Step 5: Verify SSL

After deployment, check:
- `https://yourdomain.com` should work
- Browser should show a valid SSL certificate (green lock icon)

## Troubleshooting

### Certificate Request Fails

1. **Check DNS**: Make sure your domain points to 3.149.192.146
   ```bash
   dig yourdomain.com
   ```

2. **Check Ports**: Ensure ports 80 and 443 are open in EC2 security group

3. **Check Logs**: 
   ```bash
   docker-compose logs dispersed-connection
   ```

4. **Rate Limits**: Let's Encrypt has rate limits (50 certs per domain per week). If you hit the limit, wait or use staging.

### Using Staging (for testing)

If you want to test first without hitting rate limits, modify `start.sh` to use `--staging` flag:
```bash
certbot --nginx --staging -n --agree-tos --email "$SSL_EMAIL" -d "$DOMAIN_NAME"
```

### Manual Certificate Renewal

Certificates auto-renew, but you can manually renew:
```bash
docker exec dispersed-connection certbot renew
docker exec dispersed-connection service nginx reload
```

## Notes

- Certificates expire every 90 days, but Certbot auto-renews them
- The first certificate request happens automatically when the container starts
- If SSL setup fails, the container will continue running on HTTP only

