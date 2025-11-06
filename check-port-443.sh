#!/bin/bash

# Script to check if port 443 is open in EC2 Security Group
# This provides instructions since we can't directly query AWS API

echo "========================================="
echo "Port 443 Security Group Check"
echo "========================================="
echo ""

echo "To check if port 443 is open in your EC2 Security Group:"
echo ""
echo "1. Go to AWS Console: https://console.aws.amazon.com/ec2/"
echo ""
echo "2. Navigate to: EC2 → Instances → Select your instance"
echo ""
echo "3. Click on the 'Security' tab (or Security Groups link)"
echo ""
echo "4. Click on your Security Group"
echo ""
echo "5. Check 'Inbound rules' - you should see:"
echo "   - Type: HTTPS (or Custom TCP)"
echo "   - Port: 443"
echo "   - Source: 0.0.0.0/0 (or your IP)"
echo ""
echo "6. If port 443 is NOT listed, click 'Edit inbound rules' and add:"
echo "   - Type: HTTPS"
echo "   - Port: 443"
echo "   - Source: 0.0.0.0/0"
echo "   - Description: Allow HTTPS"
echo ""
echo "7. Also ensure port 80 is open (for Let's Encrypt validation):"
echo "   - Type: HTTP"
echo "   - Port: 80"
echo "   - Source: 0.0.0.0/0"
echo ""

# Test from outside (if possible)
echo "Testing HTTPS from this server..."
if curl -I -k -s --max-time 5 https://dispersedconnection.com 2>&1 | head -1 | grep -q "HTTP"; then
    echo "✓ HTTPS is accessible"
else
    echo "✗ HTTPS is NOT accessible (may be blocked by Security Group)"
fi

echo ""
echo "You can also test from your local machine:"
echo "  curl -I https://dispersedconnection.com"
echo "  or visit: https://dispersedconnection.com in your browser"
echo ""

