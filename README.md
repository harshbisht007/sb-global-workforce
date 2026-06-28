# S.B. Global Workforce — Website

A premium, production-ready marketing website for **S.B. Global Workforce**, an overseas manpower recruitment company connecting Indian talent with international employers across the Gulf.

Built with a modern, luxury, conversion-focused design language inspired by Stripe, Linear and Vercel.

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (custom design system)
- **Framer Motion** (scroll & micro-interactions)
- **Lucide Icons**
- `next/image` for optimized imagery
- File-based **SEO**: metadata, sitemap, robots, dynamic OG image, JSON-LD (Schema.org)
- **No backend / no database** — fully static & deployable to any static host or Vercel

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/                      # App Router pages + route-level SEO files
│   ├── layout.tsx            # Root layout (fonts, nav, footer, JSON-LD)
│   ├── page.tsx              # Home (long landing page)
│   ├── about/                # About Us
│   ├── industries/           # Industries We Serve
│   ├── services/             # Services
│   ├── why-choose-us/        # Why Choose Us
│   ├── recruitment-process/  # Recruitment Process
│   ├── countries/            # Countries We Recruit For
│   ├── gallery/              # Gallery (filterable + lightbox)
│   ├── faqs/                 # FAQs
│   ├── contact/              # Contact
│   ├── privacy-policy/       # Privacy Policy
│   ├── terms-and-conditions/ # Terms & Conditions
│   ├── sitemap.ts robots.ts manifest.ts icon.svg opengraph-image.tsx
│   └── not-found.tsx         # 404
├── components/
│   ├── ui/                   # Design-system primitives (Button, Card, etc.)
│   ├── layout/               # Navbar, Footer, WhatsApp button, etc.
│   ├── sections/             # Page sections (Hero, Industries, Process…)
│   └── forms/                # Contact form (WhatsApp hand-off, no backend)
├── data/                     # Typed content (industries, countries, faqs…)
└── lib/                      # utils, site config, SEO & JSON-LD helpers
```

## Customising

- **Contact details, nav, socials** → `src/lib/site.ts`
- **Content** (industries, services, countries, FAQs, testimonials) → `src/data/*`
- **Brand colors / design tokens** → `tailwind.config.ts` + `src/app/globals.css`
- **Live domain** → update `siteConfig.url` in `src/lib/site.ts`

## Notes

- The contact form has no backend; on submit it composes a structured message
  and opens **WhatsApp** with the details pre-filled (graceful, serverless UX).
- Imagery uses Unsplash + flag CDNs via remote patterns in `next.config.mjs`;
  swap for owned photography before launch.
