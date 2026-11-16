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
- Canonical production origin: `https://www.sixthsignallabs.com`, defined in `lib/seo-config.ts`.
- Portfolio entries describe real apps; add only verified product content.
- Unconfirmed contact and social links and placeholder testimonials are not displayed. Legal text is preserved; obtain review before changing it.

## SEO verification

```bash
npm run build
npm run seo:check
# Check deployed responses after publishing separately:
npm run seo:check:live
```

The verifier requires Python 3 and curl, starts a production Next server on
127.0.0.1:4173 for local checks, and writes results to `docs/seo-evidence/`.
See `docs/seo-audit.md` for findings, intentional draft exclusions, and rollout checks.
