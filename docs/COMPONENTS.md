# NextWebHosting — Component Documentation

This document describes the design system, shared primitives, and UI components created for NextWebHosting.

---

## 1. Design Tokens & Color System

The visual identity is defined in `src/app/globals.css` and mapped in `src/lib/constants.ts`:

| Token | Hex Value | Semantic Role |
| :--- | :--- | :--- |
| **Primary** | `#2563EB` (Tailwind Blue 600) | Primary actions, brand highlights, active states |
| **Accent** | `#38BDF8` (Tailwind Sky 400) | Secondary glow, gradient stops, live indicators |
| **Dark Background**| `#0F172A` (Tailwind Slate 900) | Luxury dark mode, deep footer canvas, contrast |
| **Secondary Dark** | `#111827` (Tailwind Gray 900) | Card backgrounds, subtle surface elevation |
| **White** | `#FFFFFF` | Clean daylight backgrounds, high-contrast text |

---

## 2. Shared Primitives (`src/components/shared/`)

### `SectionHeader`
Renders a standardized section heading with an optional badge, H2 title, and descriptive subtitle.
- **Props**:
  - `badge?: string`: Pill badge text displayed above the title.
  - `title: string`: Main section heading.
  - `description?: string`: Subtitle text.
  - `align?: "left" | "center"`: Defaults to `"center"`.
  - `className?: string`: Custom styling overrides.

### `AnimatedContainer`
Scroll-triggered animation wrapper powered by Framer Motion's `whileInView`.
- **Props**:
  - `animation?: string`: Preset key (`"fadeInUp"`, `"fadeInLeft"`, `"fadeInRight"`, `"scaleIn"`).
  - `variants?: Variants`: Custom Framer Motion variants.
  - `delay?: number`: Stagger delay in seconds.
  - `once?: boolean`: Trigger once (default `true`).

### `GradientText`
Text styling utility that applies a smooth blue-to-sky gradient clip.
- **Usage**:
  ```tsx
  <GradientText>Premium Web Solutions</GradientText>
  ```

### `MagneticButton`
Physics-driven interactive button that magnetically tracks cursor proximity before returning to center on mouse leave.
- **Props**:
  - `children: ReactNode`: Button label and icon.
  - `onClick?: () => void`: Click callback.

### `FloatingElement`
Creates a continuous subtle vertical floating/bobbing animation for decorative graphics and badges.
- **Props**:
  - `duration?: number`: Seconds per cycle (default `3`).
  - `y?: number`: Vertical displacement in pixels (default `10`).

### `ScrollProgress`
Fixed horizontal indicator pinned to the top viewport edge (`z-[60]`) reflecting page scroll percentage with spring physics.

### `BrandIcons`
Vector SVG implementations for brands removed from standard Lucide distributions:
- `<LinkedinIcon />`
- `<InstagramIcon />`
- `<XTwitterIcon />`
- `<GithubIcon />`

---

## 3. Agency Section Components (`src/components/sections/`)

### `FounderSection`
Introduces the Founder & CEO with an Apple-style editorial two-column layout:
- **Left Column**: High-resolution editorial portrait frame, glowing blue ambient halo, glassmorphic nameplate, placeholder badge, and philosophy blockquote.
- **Right Column**: Eyebrow badge, name heading, role, 5 professional focus tags, narrative description paragraphs, 3 numbered strategic highlight cards (Technology, Design, Vision), accessible social icon buttons (LinkedIn, GitHub, Instagram, X, Email), and direct "Let's Talk" CTA button.
- **Features**:
  - Semantic HTML landmarks (`<section>`, `<figure>`, `<blockquote>`, `<cite>`).
  - Automated Schema.org `Person` JSON-LD injection.
  - Framer Motion scroll and hover interactions with `prefers-reduced-motion` compliance.
  - Fully decoupled data layer via [`src/data/founder.ts`](file:///E:/NextWebHosting%20Website/src/data/founder.ts).

---

## 3. Layout Components (`src/components/layout/`)

### `Header`
- Sticky header with glassmorphic backdrop blur on scroll (`backdrop-blur-md`).
- Automatic hide on scroll-down and reveal on scroll-up via `useScroll` and `useMotionValueEvent`.
- Active path indicator with Framer Motion spring layout animation.
- Responsive mobile menu trigger.

### `MobileNav`
- Slide-out sheet drawer from the right screen edge.
- Smooth link navigation with auto-close on selection.
- Contact channels and social media links.

### `Footer`
- 5-column responsive layout.
- Newsletter subscription capture form.
- Direct contact details (`nextwebhosting.dev@gmail.com`, `9579111964`).
- Legal links and dynamic copyright year.

---

## 4. UI Components (`src/components/ui/`)

Powered by `@base-ui/react` primitives and styled with Tailwind CSS:
- **`Button`**: Supports variants (`default`, `outline`, `secondary`, `ghost`, `destructive`, `link`), sizes (`sm`, `default`, `lg`, `icon`), and `asChild` delegation.
- **`Accordion`**: Collapsible accordion supporting both single and multiple selection modes.
- **`Card`**: Elevated surface container with header, content, and footer slots.
- **`Input` & `Textarea`**: Accessible text fields with error states and focus rings.
- **`Sheet` & `Dialog`**: Modal and drawer primitives with backdrop transitions.
