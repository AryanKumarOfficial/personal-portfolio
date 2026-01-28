# Enterprise Platform Deployment Guide

This guide covers the setup and deployment of the Portfolio Platform on an AWS EC2 instance using Neon Postgres.

## 1. Neon Database Setup

1.  **Create a Neon Project**: Go to [console.neon.tech](https://console.neon.tech) and create a new project.
2.  **Get Connection String**: Copy the connection string (Direct Connection). It looks like:
    ```
    postgres://user:password@ep-xyz.aws-region.neon.tech/dbname?sslmode=require
    ```
3.  **Note**: This project uses `@prisma/client` with standard connection pooling. Neon handles pooling automatically or you can use their pooled connection string (`-pool` domain) if preferred, but for this setup, the standard connection string works fine.

## 2. AWS EC2 Setup

1.  **Launch Instance**:
    *   OS: Ubuntu 22.04 LTS (recommended).
    *   Type: t2.micro or t3.small.
    *   Security Group: Allow ports 22 (SSH), 80 (HTTP), 443 (HTTPS).

2.  **SSH into Instance**:
    ```bash
    ssh -i your-key.pem ubuntu@your-ec2-ip
    ```

3.  **Install Dependencies**:
    ```bash
    # Update & Upgrade
    sudo apt update && sudo apt upgrade -y

    # Install Node.js 20
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs

    # Install Yarn
    sudo npm install -g yarn pm2

    # Install Git & Nginx
    sudo apt install -y git nginx
    ```

4.  **Clone Repository**:
    ```bash
    sudo mkdir -p /var/www/portfolio
    sudo chown ubuntu:ubuntu /var/www/portfolio
    git clone https://github.com/AryanKumarOfficial/personal-portfolio.git /var/www/portfolio
    cd /var/www/portfolio
    ```

5.  **Configure Environment**:
    Create a `.env` file in `/var/www/portfolio`:
    ```bash
    nano .env
    ```
    Paste the following (fill in real values):
    ```env
    DATABASE_URL="postgres://user:pass@host/db?sslmode=require"

    # Auth
    NEXTAUTH_SECRET="generate-a-long-random-string"
    NEXTAUTH_URL="https://your-domain.com"
    AUTH_GITHUB_ID="your-github-client-id"
    AUTH_GITHUB_SECRET="your-github-client-secret"

    # Event Bus (Optional - defaults to In-Memory if omitted)
    # RABBITMQ_URL="amqp://user:pass@host:5672"

    # AI
    OPENAI_API_KEY="sk-..."
    ```

## 3. GitHub Secrets Setup

Go to your Repository Settings -> Secrets and Variables -> Actions -> **New Repository Secret**. Add:

| Secret Name | Value |
|-------------|-------|
| `EC2_HOST` | Your EC2 Public IP |
| `EC2_USER` | `ubuntu` |
| `EC2_SSH_KEY` | Content of your `.pem` key file |
| `DATABASE_URL` | Neon Connection String |
| `NEXTAUTH_SECRET` | Same as in .env |
| `NEXTAUTH_URL` | `https://your-domain.com` |
| `AUTH_GITHUB_ID` | GitHub OAuth Client ID |
| `AUTH_GITHUB_SECRET` | GitHub OAuth Client Secret |

## 4. Initial Deploy & PM2

1.  **Manual Build (First Time)**:
    ```bash
    cd /var/www/portfolio
    yarn install
    npx prisma generate
    npx prisma migrate deploy
    yarn build
    ```

2.  **Start with PM2**:
    ```bash
    pm2 start npm --name "portfolio" -- start
    pm2 save
    pm2 startup
    # (Run the command output by pm2 startup)
    ```

## 5. Nginx & SSL (Certbot)

1.  **Configure Nginx**:
    ```bash
    sudo nano /etc/nginx/sites-available/default
    ```
    Replace content with:
    ```nginx
    server {
        server_name your-domain.com;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```

2.  **Restart Nginx**:
    ```bash
    sudo systemctl restart nginx
    ```

3.  **SSL with Certbot**:
    ```bash
    sudo apt install -y certbot python3-certbot-nginx
    sudo certbot --nginx -d your-domain.com
    ```

## 6. Admin Panel Setup

1.  **Login**: Go to `https://your-domain.com/api/auth/signin` and login with GitHub.
2.  **Database Access**: Since the first user isn't automatically an Admin in the schema, you may need to manually update the role if you added RBAC logic (currently role defaults to USER but access is open for demo).
    *   *To strictly enforce Admin access in the future, check `src/app/admin/layout.tsx` comments.*

## 7. Troubleshooting

*   **Logs**: `pm2 logs portfolio`
*   **Prisma Errors**: Ensure `npx prisma generate` runs during deployment (handled in workflow).
*   **Database**: Ensure Neon Project is active (it scales to zero after inactivity on free tier).
