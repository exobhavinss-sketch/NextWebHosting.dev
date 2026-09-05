# NextWebHosting — Installation Guide

This guide details everything required to clone, configure, run, and test the NextWebHosting website locally and in development environments.

---

## 1. Prerequisites

Before installing, ensure your environment meets the following specifications:

- **Node.js**: v18.18.0 or later (Node.js 20+ LTS recommended)
- **npm**: v9.0.0+ (or `pnpm` / `yarn` / `bun`)
- **Git**: For version control
- **Modern Browser**: Chrome, Firefox, Safari, or Edge

Check your versions:
```bash
node -v
npm -v
```

---

## 2. Setup & Installation

### Step 1: Clone or Navigate to Project
```bash
git clone https://github.com/nextwebhosting/nextwebhosting-website.git
cd nextwebhosting-website
```

### Step 2: Install Dependencies
Install all production and development dependencies:
```bash
npm install
```

Installed packages include:
- **Next.js 16 (App Router)**: Core React framework
- **React 19 & React-DOM 19**: Modern UI rendering engine
- **TypeScript 5**: Complete static type checking
- **Tailwind CSS v4**: Next-gen styling with `@theme` variables
- **Framer Motion**: Production animation physics and scroll triggers
- **@base-ui/react & shadcn**: Fully accessible primitive components
- **Lucide Icons**: Crisp vector UI icons
- **React Hook Form & Zod**: Form handling and strict runtime schema validation

---

## 3. Environment Variables Configuration

Create a `.env.local` file in the root directory if you plan to integrate transactional email dispatch:

```bash
cp .env.example .env.local
```

Example `.env.local` contents:
```env
# Next.js Public Configuration
NEXT_PUBLIC_SITE_URL=https://nextwebhosting.dev
NEXT_PUBLIC_CONTACT_EMAIL=nextwebhosting.dev@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=9579111964

# Email Provider Configuration (Optional for production forms)
# RESEND_API_KEY=re_123456789
```

---

## 4. Running Locally

### Development Mode
Start the Next.js development server with Turbopack:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser. Turbopack provides instant Hot Module Replacement (HMR).

### Production Build & Local Test
To simulate exact production behavior:
```bash
# 1. Compile and generate static pages
npm run build

# 2. Serve the optimized production build
npm run start
```
The production server will be running at [http://localhost:3000](http://localhost:3000).

---

## 5. Verification & Code Quality

Run static type checking and linting:
```bash
# TypeScript verification
npx tsc --noEmit

# Lint verification
npm run lint
```
