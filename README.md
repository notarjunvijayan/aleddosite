# Aleddo Technologies Website
> High-performance digital presence for Aleddo Technologies — delivering bespoke AI applications, agentic workflow automation, custom software, and enterprise data engineering across Dubai, UAE and Ernakulam, India.

---

## 🚀 Key Features & Pages

- **Hero Section (`/`)**: Dynamic 100dvh mobile-optimized viewport height, rotating scroll indicator ring, and GSAP vertical grid line draw animations.
- **AI Studio & Digital Employees (`/ai-studio`)**: Packages hardened client delivery patterns into Digital Employees — AI colleagues built to run whole roles across HR, Finance, Sales, and Operations. Highlights 4 deployment models (Aleddo Cloud, Private VPC, GovCloud, Hybrid), a 3-tier commercial pricing model, and structured JSON-LD schema markup.
- **Services & Delivery Paths (`/services`)**: Comprehensive breakdown of Aleddo AI solutions, enterprise software architectures, and automated agent workflows.
- **About & Solutions Showcase (`AboutAleddo.astro`)**: Reusable `SolutionCard` components with 100% full-bleed WebP background imagery and sticky left-pane section navigation.
- **Dubai AI Seal Showcase (`DubaiAiSeal.astro`)**: Government DCAI AI Ecosystem Hub recognition feature with animated Dubai skyline vector graphics.
- **Contact Page (`/contact`)**: 2-column layout showcasing global office locations (Dubai & India), direct phone/email channels, social links (LinkedIn, WhatsApp, Instagram), interactive service pills, and contact form.
- **Full-Screen Mobile Navigation (`Navbar.astro`)**: Fast, snappy mobile menu overlay with staggered GSAP entrance animations and background scroll locking.
- **Reusable UI Components**: `SolutionButton.astro` featuring flexible size variants (`sm`, `md`, `lg`) with WCAG 2.1 AA compliant 44px+ minimum touch targets and focus-visible indicators.
- **Sitewide Footer (`Footer.astro`)**: Clean 4-column enterprise layout with full-bleed line draw dividers.

---

## 🛠️ Technology Stack, Performance & Accessibility

- **Framework**: [Astro 5](https://astro.build) (Static SSG)
- **Styling**: Tailwind CSS v4 with custom design tokens:
  - Main Background: Dark Navy (`#02033B`)
  - Primary Text: Ice Cyan (`#C2ECF7`)
  - Accent Color: Cyan (`#56CBEB`)
  - Dividers: 30% Brand Primary (`border-brand-text/30`)
- **Animations**: GSAP 3 & GSAP ScrollTrigger with `power4.out` easing, magnetic mouse interactions, and `prefers-reduced-motion` accessibility support.
- **Accessibility (a11y)**: WCAG 2.1 AAA contrast ratios, keyboard skip to main content links, ARIA landmark regions, and high-visibility `focus-visible` focus rings.
- **SEO & Schema**: Page-level JSON-LD structured data (`SoftwareApplication`, `ProfessionalService`), canonical URLs, and OpenGraph/Twitter Card social meta.
- **Typography**: Local Clash Grotesk (`.woff2`) fonts with explicit `<link rel="preload" crossorigin="anonymous">` optimization to eliminate FOUT (Flash of Unstyled Text) on mobile WebKit and desktop browsers.
- **Image Optimization**: Fully compressed WebP asset workflow with explicit dimensions, lazy/eager loading strategies, and decoding hints.

---

## ⚙️ Development Commands

All commands are executed from the project root directory:

| Command | Action |
| :--- | :--- |
| `npm install` | Install all project dependencies |
| `astro dev --background` | Start local development server in background mode |
| `astro dev status` | Check running status of the background dev server |
| `astro dev logs` | View real-time logs from the background dev server |
| `astro dev stop` | Stop the background development server |
| `npm run build` | Compile static production site to `./dist/` |
| `npm run preview` | Preview production build locally before deployment |

---

## 📍 Global Office Locations

- **Dubai, UAE**:  
  Aleddo Technologies, 6th Floor, Meydan Grandstand, Meydan, Nad Al Sheba, Dubai, UAE  
  📞 `+971 502978387` | ✉️ `contact@aleddotechnologies.com`

- **India**:  
  Aleddo Technologies, Ernakulam, Kerala, India  
  📞 `+91 9061228972` | ✉️ `contact@aleddotechnologies.com`

---

&copy; 2026 Aleddo Technologies. All rights reserved.
