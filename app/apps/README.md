# App microsites

`_template` is a private Next.js App Router folder. It is the starting point for
small, app-specific sites and does not create a public route by itself.

## Create an app site

1. Copy `app/apps/_template` to a URL-safe app slug, for example:

   ```sh
   cp -R app/apps/_template app/apps/example-app
   ```

2. Edit `app/apps/example-app/_data/app-data.ts`. At minimum, replace the app
   name, tagline, support address, and `canonicalBasePath`.
3. Put the app icon and optional product screenshots in
   `public/apps/example-app/`, then reference those files from `app-data.ts`
   using paths such as `/apps/example-app/icon.png`.
4. Replace the clearly marked draft legal copy and have it reviewed before
   publishing.

The example above creates these routes:

- `/apps/example-app`
- `/apps/example-app/privacy`
- `/apps/example-app/terms`

Canonical production URLs use `SITE_URL` in `lib/seo-config.ts`:
`https://www.sixthsignallabs.com`. Preview environment variables cannot change
production canonical or sitemap URLs.

Before publishing a new app:

- Register its real product data in `lib/app-catalog.ts` for the `/apps` directory.
- Keep drafts in `lib/seo-exclusions.json` and retain their `noindex` metadata.
  Remove an exclusion only when the corresponding publication gate is cleared.
- The sitemap discovers filesystem page routes automatically and excludes private
  folders and the explicit draft/redirect list. Dynamic routes require concrete
  URL registration before publishing.
- Give each public page unique metadata, a self-canonical, and page-specific
  social metadata. `withPageSocial` prevents inherited social text from drifting.
- Add real image dimensions to `lib/image-dimensions.json` when adding social art.
- Link back to `/apps` in the app footer.
- Run `npm run build && npm run seo:check` and inspect the audit results.

WordLilt's product page is public; its legal pages retain the pending legal-review
restriction. Oryfin remains a draft across all four routes. See `docs/seo-audit.md`.
