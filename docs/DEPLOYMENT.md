# NextWebHosting — Deployment Guide

This project is architected to build and deploy cleanly across all standard web hosting providers without requiring any code modifications.

---

## 1. Vercel (Recommended)

Next.js is built by Vercel; deployment on Vercel provides native edge caching and zero-config builds.

### Quick Deploy via Dashboard:
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset: **Next.js** (Auto-detected).
5. Build Command: `npm run build` (or `next build`).
6. Output Directory: `.next` (default).
7. Click **"Deploy"**.

### Deploy via Vercel CLI:
```bash
npm install -g vercel
vercel
# For production:
vercel --prod
```

---

## 2. Netlify

Deploying on Netlify leverages the `@netlify/plugin-nextjs` automatic runtime.

### Steps:
1. Create a `netlify.toml` in your repository root (or let Netlify auto-detect Next.js):
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```
2. Log into [Netlify](https://app.netlify.com) and select **"Add new site" > "Import an existing project"**.
3. Connect your Git repository.
4. Set Build command to `npm run build` and publish directory to `.next`.
5. Click **"Deploy Site"**.

---

## 3. Render

Deploy as a Web Service on Render:

1. Log into [Render](https://dashboard.render.com).
2. Click **"New +"** and choose **"Web Service"**.
3. Connect your repository.
4. Configure the service:
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Plan**: Free or Starter
5. Add Environment Variables:
   - `NODE_ENV=production`
   - `PORT=3000`
6. Click **"Create Web Service"**.

---

## 4. GitHub Actions / GitHub Deployments

To automate testing and deployment with GitHub Actions:

Create `.github/workflows/deploy.yml`:
```yaml
name: CI / Production Build Check

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Set up Node.js
      uses: actions/setup-node@v4
      with:
        node-version: 20
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run TypeScript check
      run: npx tsc --noEmit

    - name: Build Next.js
      run: npm run build
```

---

## 5. Deployment Verification Checklist

Before publishing to production domains:
- [x] All 17 routes compile statically (`npm run build` exits code 0).
- [x] Robots.txt resolves at `/robots.txt` with correct sitemap reference.
- [x] Dynamic XML sitemap resolves at `/sitemap.xml`.
- [x] Favicon and Web Manifest load properly at `/manifest.json`.
- [x] Open Graph social card tags (`og:image`, `twitter:card`) point to absolute URLs.
- [x] Contact form inputs submit with valid state handling.
