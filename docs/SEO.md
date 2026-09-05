# NextWebHosting — SEO Documentation

This document provides a complete audit of the SEO architecture, structured data implementations, and metadata strategies applied across the NextWebHosting application.

---

## 1. Metadata Architecture (`src/lib/metadata.ts`)

Every route in the application utilizes the centralized `constructMetadata` utility function. This guarantees consistent metadata generation and avoids duplicate code.

### Standard Output per Page:
1. **Title**: Structured as `<Page Title> | NextWebHosting` (or just `NextWebHosting` on the homepage).
2. **Meta Description**: Specific to each page's content, 150-160 characters long.
3. **Canonical URL**: Dynamic `alternates.canonical` pointing to the exact canonical route.
4. **Open Graph (Facebook / LinkedIn / Slack)**:
   - `og:title`
   - `og:description`
   - `og:url`
   - `og:site_name`
   - `og:locale` (`en_US`)
   - `og:image` (1200x630 high resolution card)
5. **Twitter Cards (X)**:
   - `twitter:card`: `summary_large_image`
   - `twitter:title`
   - `twitter:description`
   - `twitter:image`
   - `twitter:creator`: `@nextwebhosting`

---

## 2. Structured Data (Schema.org JSON-LD)

### Organization Schema (`src/app/layout.tsx`)
Injected into the root `<head>` on every page to establish corporate identity with search engines:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NextWebHosting",
  "description": "Premium Web Development Agency — Helping businesses establish a modern online presence through high-quality websites that are fast, responsive, accessible, scalable, and SEO-friendly.",
  "url": "https://nextwebhosting.dev",
  "email": "nextwebhosting.dev@gmail.com",
  "telephone": "9579111964",
  "sameAs": [
    "https://www.instagram.com/nextwebhosting.dev",
    "https://x.com/nextwebhosting"
  ]
}
```

### FAQPage Schema (`src/app/faq/page.tsx`)
Enables Google Rich Results with expandable accordion Q&A snippets directly in search results.

---

## 3. Dynamic Sitemap & Robots.txt

### `src/app/sitemap.ts` (`/sitemap.xml`)
Automatically lists all public routes with last-modified timestamps, change frequencies, and crawl priorities:
- `/` (Priority: 1.0, Frequency: weekly)
- `/services` (Priority: 0.9, Frequency: monthly)
- `/portfolio` (Priority: 0.8, Frequency: monthly)
- `/projects` (Priority: 0.8, Frequency: monthly)
- `/about`, `/process`, `/pricing`, `/faq`, `/contact`, `/privacy`, `/terms` (Priority: 0.8)

### `src/app/robots.ts` (`/robots.txt`)
- Grants access to all search crawlers (`*`).
- Disallows private administrative or API routes (`/api/`).
- Points directly to the absolute URL of the dynamic sitemap (`https://nextwebhosting.dev/sitemap.xml`).

---

## 4. Semantic Hierarchy & Heading Flow

- Every page contains strictly **one** `<h1>` element.
- Section headers follow logical `<h2>` progressions.
- Card titles and sub-features use `<h3>` and `<h4>`.
- Anchor links use descriptive labels and avoid vague text like "click here".
- All images include descriptive `alt` tags emphasizing both context and branding.
