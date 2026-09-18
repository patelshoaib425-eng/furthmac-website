# Furthmac Solutions — Static Website (HTML/CSS)

A plain HTML + CSS version of the Furthmac Solutions corporate website.
No frameworks, no build step, no backend required — it runs on any static
hosting (Hostinger, cPanel, Netlify, GitHub Pages, or even locally).

## What's inside

| Item | Details |
|---|---|
| Pages | 27 HTML pages: Home, About, Services index, 15 service pages, Industries, Careers, Blog, Contact, Privacy, Terms, Cookie Policy, 404, Thank-you |
| Styles | `assets/styles.css` — single stylesheet, navy `#0A2A5E` / orange `#FF6A1A` theme, Poppins + Inter fonts |
| Scripts | `assets/main.js` — mobile menu, sticky header, scroll-reveal animations. Icons via Lucide CDN |
| Contact form | FormSubmit (free) — submissions are emailed to `info@furthmac.com` |
| SEO | Per-page titles/descriptions, canonical URLs to `https://www.furthmac.com`, `sitemap.xml`, `robots.txt`, Organization + FAQ schema markup |

## How to publish (Hostinger)

1. Open hPanel → **File Manager** (or FTP) → `public_html/`
2. Upload **everything in this folder except `generate.py` and this README**
   (all `.html` files, `services/`, `assets/`, `sitemap.xml`, `robots.txt`, `.htaccess`)
3. Point the domain `furthmac.com` to this hosting (if not already) — done.

## IMPORTANT: activate the contact form (one-time, 2 minutes)

The contact form uses FormSubmit. The **first** time someone submits the form,
FormSubmit sends a confirmation email to `info@furthmac.com` with an
"Activate" link. **Click that link once** — after that, every enquiry arrives
in your inbox as an email. Until activated, submissions are held by FormSubmit.

## Editing content

All text, services, FAQs and industries live in `generate.py` (same data as
the React version). After editing, regenerate the pages:

```bash
python3 generate.py
```

Then re-upload the changed HTML files. `assets/styles.css` and
`assets/main.js` can be edited directly.

## Notes

- The 15 service detail pages live under `services/` and use `../` relative
  paths — keep the folder structure intact when uploading.
- `thanks.html` is the page visitors see after submitting the contact form.
- `.htaccess` maps missing pages to `404.html` (Apache/Hostinger).
