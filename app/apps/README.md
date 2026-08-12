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

Canonical URLs use `NEXT_PUBLIC_SITE_URL`. The project currently falls back to
`https://sixthsignallabs.com` when that environment variable is absent. Set
`NEXT_PUBLIC_SITE_URL=https://sixthsignalglobal.com` in the deployment
environment if that is the production domain.
