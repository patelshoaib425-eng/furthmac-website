# Furthmac Solutions — Corporate Website (PRD)

## Problem Statement
Premium, enterprise-level, fully responsive marketing website for "Furthmac Solutions",
an industrial relocation & installation engineering company (Pune, India).
Goal: trust, engineering expertise, safety, industrial excellence — Awwwards-level craft.

## Brand
- Name: Furthmac Solutions | Tagline: "Your Trusted Engineering Partner"
- Email: Info@furthmacsolutions.com | Phone/WhatsApp: +91 9420582563
- Address: SR. No. 107/1, Village Nere, Taluka Mulshi, Pune – 411033, Maharashtra, India
- Colors: Navy #0B1F3A, Red #E11D2E, Gold #D4AF37, Paper #F9FAFB, Ink #050A11
- Fonts: Cabinet Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (labels)

## Architecture
- Frontend: React (CRA/craco), Tailwind, framer-motion, lenis (smooth scroll),
  react-fast-marquee, shadcn ui (Input/Textarea/Select/Sonner). Light default + dark toggle.
- Backend: FastAPI + MongoDB. Emergent-managed Resend email.
- Sections: Header, Hero (masked reveal + parallax), Marquee, About (manifesto),
  Services (bento), Projects/Capabilities, Why Choose Us, Contact (form+map+WhatsApp), Footer.

## Backend
- POST /api/contact — stores enquiry in `contacts`, emails company (best-effort).
- GET /api/contact — list enquiries.
- Env: EMERGENT_EMAIL_KEY, EMAIL_FROM_NAME, COMPANY_EMAIL.

## Implemented (2026-08-04)
- Full single-page site, all 7 sections, both themes, SEO meta, responsive.
- Contact form verified end-to-end via UI (stores + success toast).
- Google Map embed for Pune address; WhatsApp deep links.

## Known Notes
- Email delivery to Info@furthmacsolutions.com is currently BLOCKED as "undeliverable"
  by the provider because the domain mailbox/MX is not live yet. Submissions ALWAYS
  save to MongoDB regardless. Will deliver once the real inbox/domain is active.

## Backlog (P1/P2)
- Admin view for enquiries; blog/insights; multi-page routing; services detail pages;
  testimonials/logos once real clients exist; sitemap.xml + robots.txt.
