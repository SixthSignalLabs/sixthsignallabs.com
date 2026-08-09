# Sixth Signal Labs

Production-ready marketing site for Sixth Signal Labs, built with Next.js App Router, TypeScript, Tailwind CSS, Motion for React, and Lucide.

## Run locally

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run typecheck
npm run lint
npm run build
```

The standard production build uses Next.js’s supported webpack path for compatibility with restricted build environments. `npm run build:turbopack` is available for environments where Turbopack worker ports are permitted.

## Content and deployment

- Homepage content and placeholder state live in `lib/site-data.ts`.
- Brand assets live in `public/brand/`; the lockup and favicon derivatives preserve the supplied logo artwork.
- Set `NEXT_PUBLIC_SITE_URL` if the production origin differs from `https://sixthsignallabs.com`.
- Replace the three project slots only with verified case studies.
- Confirm the contact email, social links, legal destinations, and testimonial before launch. They are deliberately labelled or modeled as placeholders today.
