# NextWebHosting — Project Structure Documentation

This document outlines the architecture, directory tree, and module relationships for the NextWebHosting website.

---

## 1. Directory Tree Overview

```text
NextWebHosting Website/
├── docs/                        # Complete project documentation
│   ├── INSTALLATION.md          # Local setup and toolchains
│   ├── DEPLOYMENT.md            # Vercel, Netlify, Render & GitHub guide
│   ├── PROJECT_STRUCTURE.md     # Architecture and directory breakdown
│   ├── COMPONENTS.md            # Reusable UI component catalog
│   ├── SEO.md                   # Metadata, Schema.org and indexing audit
│   └── PERFORMANCE.md           # Lighthouse optimization and Core Web Vitals
├── public/                      # Static assets served at root
│   ├── images/                  # Original illustrations & mockups
│   │   ├── hero-illustration.jpg
│   │   ├── services-illustration.jpg
│   │   ├── dashboard-mockup.jpg
│   │   ├── about-illustration.jpg
│   │   ├── process-illustration.jpg
│   │   ├── portfolio-restaurant.jpg
│   │   ├── portfolio-gym.jpg
│   │   ├── portfolio-dental.jpg
│   │   ├── portfolio-realestate.jpg
│   │   ├── portfolio-lawfirm.jpg
│   │   ├── portfolio-startup.jpg
│   │   └── portfolio-portfolio.jpg
│   └── manifest.json            # PWA Web App Manifest
├── src/
│   ├── app/                     # Next.js App Router routes & pages
│   │   ├── about/page.tsx       # About company, mission, values
│   │   ├── blog/page.tsx        # Blog / Insights placeholder
│   │   ├── contact/page.tsx     # Contact & consultation page
│   │   ├── faq/page.tsx         # Comprehensive categorized FAQs
│   │   ├── portfolio/           # Portfolio showcase
│   │   │   ├── page.tsx         # Server component with SEO metadata
│   │   │   └── portfolio-client.tsx # Client-side interactive filter
│   │   ├── pricing/page.tsx     # Transparent pricing tiers
│   │   ├── privacy/page.tsx     # Privacy Policy legal document
│   │   ├── process/page.tsx     # 5-step development process
│   │   ├── projects/page.tsx    # Dedicated Case Studies & Projects page
│   │   ├── services/page.tsx    # 19 business & technical services
│   │   ├── terms/page.tsx       # Terms & Conditions legal document
│   │   ├── globals.css          # CSS theme variables & animations
│   │   ├── layout.tsx           # Global Root layout with Header/Footer/Schema
│   │   ├── not-found.tsx        # Branded 404 error page
│   │   ├── page.tsx             # Interactive Home Page
│   │   ├── robots.ts            # Dynamic robots.txt generation
│   │   └── sitemap.ts           # Dynamic XML sitemap generation
│   ├── components/
│   │   ├── layout/              # Persistent structural components
│   │   │   ├── header.tsx       # Sticky glassmorphism navigation header
│   │   │   ├── footer.tsx       # 5-column comprehensive footer
│   │   │   └── mobile-nav.tsx   # Slide-in mobile drawer
│   │   ├── sections/            # Home page modular section blocks
│   │   │   ├── hero.tsx         # Animated hero with badges & floating UI
│   │   │   ├── services-overview.tsx # Services grid preview
│   │   │   ├── featured-projects.tsx # Portfolio preview cards
│   │   │   ├── process-section.tsx   # Step-by-step roadmap
│   │   │   ├── tech-stack.tsx        # Technology badges
│   │   │   ├── why-choose-us.tsx     # Value propositions
│   │   │   ├── testimonials.tsx      # Standards & commitment guarantees
│   │   │   ├── faq-section.tsx       # Accordion FAQ
│   │   │   ├── cta-section.tsx       # Conversion banner
│   │   │   └── contact-form.tsx      # React Hook Form + Zod form
│   │   ├── shared/              # Reusable design system primitives
│   │   │   ├── animated-container.tsx # Framer Motion scroll wrapper
│   │   │   ├── brand-icons.tsx        # Vector icons for GitHub, X, Instagram
│   │   │   ├── floating-element.tsx   # Smooth physics bobbing effect
│   │   │   ├── gradient-text.tsx      # Multi-stop linear gradient text
│   │   │   ├── magnetic-button.tsx    # Mouse-following magnetic button
│   │   │   ├── page-transition.tsx    # Smooth route entrance transition
│   │   │   ├── scroll-progress.tsx    # Fixed top scroll progress bar
│   │   │   └── section-header.tsx     # Standardized section headings
│   │   └── ui/                  # Accessible Base UI / shadcn components
│   │       ├── accordion.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── tabs.tsx
│   │       └── textarea.tsx
│   ├── data/                    # Structured data sources
│   │   ├── faq.ts               # Categorized FAQ repository
│   │   ├── navigation.ts        # Main and footer navigation links
│   │   ├── portfolio.ts         # Portfolio item specifications
│   │   ├── pricing.ts           # Pricing plans and feature matrices
│   │   ├── process.ts           # 5 development lifecycle steps
│   │   ├── services.ts          # 19 comprehensive service offerings
│   │   └── tech-stack.ts        # Technology categories and tools
│   ├── hooks/                   # Custom reusable React hooks
│   │   ├── use-media-query.ts   # Responsive breakpoint listener
│   │   └── use-scroll-animation.ts # Intersection observer helper
│   ├── lib/                     # Utilities and helpers
│   │   ├── animations.ts        # Framer Motion animation variants
│   │   ├── constants.ts         # Site metadata and brand palette
│   │   ├── metadata.ts          # Dynamic SEO metadata constructor
│   │   └── utils.ts             # Tailwind classnames merger (`cn`)
│   └── types/                   # TypeScript interfaces and types
│       └── index.ts             # Domain models (Service, Project, etc.)
├── package.json                 # Project dependencies and npm scripts
├── tsconfig.json                # TypeScript strict configuration
└── next.config.ts               # Next.js engine options
```

---

## 2. Architecture Principles

1. **Server-First By Default**: Pages (`page.tsx`) remain React Server Components to maximize SEO crawling, reduce client JavaScript payloads, and enable instantaneous HTML streaming.
2. **Targeted Client Interactivity**: Interactive islands (`use client`) are reserved strictly for animations (`framer-motion`), mobile menus (`Sheet`), and validated input forms (`react-hook-form`).
3. **Single Source of Truth**: All navigational links, service catalogs, project specs, and brand colors are centralized in `src/data/` and `src/lib/constants.ts`.
