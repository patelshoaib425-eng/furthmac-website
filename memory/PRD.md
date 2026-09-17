# Furthmac Solutions — Corporate Website (PRD)

## Problem Statement
Premium, enterprise-level, fully responsive multi-page corporate website for "Furthmac Solutions",
an industrial engineering company (www.furthmac.com). Siemens/ABB-style corporate design.
STRICT RULE: no fake testimonials, no fake client logos, no invented project case studies or statistics.

## Brand
- Name: Furthmac Solutions | Tagline: "Your Trusted Engineering Partner"
- Email: info@furthmac.com | Domain: https://www.furthmac.com (hardcoded in all canonical/meta/schema)
- Theme: Dark navy #0A2A5E, white, orange #FF6A1A
- Logo assets: /app/frontend/public/wordmark.png and wordmark-dark.png (backgrounds removed via Python PIL;
  regenerate programmatically if modified). Header/Footer switch logo by scroll state; size h-[60px] sm:h-[76px].

## Architecture
- Frontend: React + React Router (multi-page SPA), Tailwind, Framer Motion, Lenis smooth scroll, Lucide icons.
- Backend: FastAPI + Motor (MongoDB). Resend for contact-form email.
- Pages: Home, About, Services (index + 15 dynamic detail pages at /services/:slug),
  Industries, Careers (placeholder), Blog (placeholder), Contact, Legal, 404.
- Key files:
  - /app/frontend/src/App.js — routing + Lenis setup
  - /app/frontend/src/data/content.js — all services/industries/text data
  - /app/frontend/src/pages/ServiceDetail.jsx — dynamic template for 15 services
  - /app/frontend/src/components/site/Header.jsx, Footer.jsx — logo switching logic
  - /app/frontend/public/index.html, robots.txt, sitemap.xml — SEO, www.furthmac.com only

## Backend
- POST /api/contact — saves enquiry to `contacts`, triggers Resend email.
- DB schema `contacts`: { _id, name, company, email, phone, service, message, created_at }
- Env: MONGO_URL, DB_NAME, Resend key, EMAIL_FROM_NAME, etc. (backend/.env)

## Implemented
- Full multi-page architecture with React Router; all core pages built.
- 15 dynamic service detail pages.
- Contact form saves to MongoDB + Resend email trigger (verified end-to-end).
- Domain hardening: all preview/temporary URLs removed; canonical/meta hardcoded to www.furthmac.com.
- Logo assets processed (background removal) and sized in Header/Footer (60px mobile / 76px desktop).
- Portfolio/Testimonials sections removed entirely (no-fake-content rule).

## Known Notes
- Email DELIVERY to info@furthmac.com is pending client-side MX record activation for the domain;
  DB saving works perfectly regardless.
- Careers and Blog pages are intentionally empty placeholder structures awaiting real client content.

## Deployment Readiness (checked 2026-07, static analysis — report only, user deferred fix)
- ONE BLOCKER: backend/.env line 5 `EMAIL_FROM_NAME=Furthmac Solutions` is unquoted with spaces;
  fix = `EMAIL_FROM_NAME="Furthmac Solutions"`. User chose to leave as-is for now.
- All other checks PASSED: env usage (REACT_APP_BACKEND_URL, MONGO_URL/DB_NAME), ports (3000/8001),
  supervisor config, CORS, no hardcoded secrets, no compilation errors, query limits, no destructive startup.

## Backlog
- P1: Populate Careers page with real content (currently placeholder).
- P1: Populate Blog page with real content (currently placeholder).
- P1: Client activates MX records for info@furthmac.com so Resend delivery works.
- P2: Fix EMAIL_FROM_NAME quoting before deployment.
- P2: Admin view for enquiries; testimonials/logos only once real clients exist.
