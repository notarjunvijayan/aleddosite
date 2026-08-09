# Aleddo Technologies Website
> High-performance digital presence for Aleddo Technologies — delivering bespoke AI applications, agentic workflow automation, custom software, and enterprise data engineering across Dubai, UAE and Ernakulam, India.

---

## 🚀 Key Features & Pages

- **Hero Section (`/`)**: Dynamic 100dvh mobile-optimized viewport height, rotating scroll indicator ring, and GSAP vertical grid line draw animations.
- **About & Solutions Showcase (`AboutAleddo.astro`)**: Reusable `SolutionCard` components with 100% full-bleed WebP background imagery and sticky left-pane section navigation.
- **Dubai AI Seal Showcase (`DubaiAiSeal.astro`)**: Government DCAI AI Ecosystem Hub recognition feature with animated Dubai skyline vector graphics.
- **Contact Page (`/contact`)**: 2-column layout showcasing global office locations (Dubai & India), direct phone/email channels, social links (LinkedIn, WhatsApp, Instagram), interactive service pills, and contact form.
- **Full-Screen Mobile Navigation (`Navbar.astro`)**: Fast, snappy mobile menu overlay with staggered GSAP entrance animations and background scroll locking.
- **Custom 404 Page (`/404`)**: High-impact gradient 404 typography and navigation routes.
- **Sitewide Footer (`Footer.astro`)**: Clean 4-column enterprise layout with full-bleed line draw dividers.

---

## 🛠️ Technology Stack & Performance

- **Framework**: [Astro 5](https://astro.build) (Static SSG)
- **Styling**: Tailwind CSS v4 with custom design tokens:
  - Main Background: Dark Navy (`#03045A`)
  - Primary Text: Ice Cyan (`#B9E6F2`)
  - Accent Color: Cyan (`#6FC7E1`)
  - Dividers: 25% Brand Primary (`border-brand-text/25`)
- **Animations**: GSAP 3 & GSAP ScrollTrigger with `power4.out` easing and `prefers-reduced-motion` accessibility support.
- **Typography**: Local Clash Grotesk (`.woff2`) fonts with explicit `<link rel="preload" crossorigin="anonymous">` optimization to eliminate FOUT (Flash of Unstyled Text) on mobile WebKit and desktop browsers.
- **Image Optimization**: Fully compressed WebP asset workflow (>98% compression efficiency, total image directory < 250 KB).

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
