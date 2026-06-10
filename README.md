# SDET Portfolio Project - Setup Guide

This guide will walk you through setting up your MySQL database and running your portfolio website.

## Step 1: Create a MySQL Database (Free Resource)

I recommend using **TiDB Cloud (Serverless)** because it offers a generous free tier for MySQL.

1.  Go to [TiDB Cloud](https://pingcap.com/ai-augmented-sdet-portfolio) and sign up for a free account.
2.  Create a **Serverless Cluster**.
3.  Click **Connect** and choose **Prisma**.
4.  Copy the connection string (it looks like `mysql://user:password@host:port/database?sslaccept=strict`).

*Alternatively, if you have MySQL installed locally:*
Your connection string will be: `mysql://root:yourpassword@localhost:3306/portfolio_db`

## Step 2: Update Environment Variables

Open the file named `.env` in the root of this project and replace its content with the following:

```env
# Database Connection
DATABASE_URL="PASTE_YOUR_CONNECTION_STRING_HERE"

# NextAuth Configuration
# Run 'openssl rand -base64 32' in your terminal to generate a secure secret
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

## Step 3: Initialize Database & Seed Admin

Run these commands in your terminal to synchronize the database schema and create the initial admin account:

```bash
# 1. Sync the database schema
npx prisma db push

# 2. Seed the initial admin user
npx prisma db seed
```

**Default Admin Credentials:**
- **Username:** `admin`
- **Password:** `admin123`

## Step 4: Run the Website

Start the development server:

```bash
npm run dev
```

Visit the website at:
- **Portfolio:** [http://localhost:3000](http://localhost:3000)
- **Admin Dashboard:** [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

---

## Technical Stack Used:
- **Framework**: Next.js 15 (App Router)
- **Database**: MySQL via Prisma ORM
- **Auth**: NextAuth.js
- **Styling**: Vanilla CSS (Premium Look)
- **i18n**: Custom Language Context (EN/ID)
- The Coming Soon page is intentionally minimal and self-contained so it can be used as index.html while you build the rest of your site.
- Alternatively remove or change the small override script in index.html that forces COMING_SOON.
