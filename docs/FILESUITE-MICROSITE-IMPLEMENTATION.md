# FileSuite microsite implementation

Implemented locally on November 12, 2026. No deployment performed.

## Current legal publication state

The publisher requested removal of draft, approval-status, and release-review
language and confirmed that FileSuite should be described as using Google
AdMob, following WordLilt. The public Privacy Policy and Terms & Conditions
now show **November 12, 2026** under Last updated. They are indexable and both
legal routes are included in the sitemap. Landing copy and metadata no longer
refer to legal drafts or pending release review.

WordLilt’s acceptance, license, advertising/UMP, privacy choices, liability,
updates, and contact conventions were adapted to FileSuite. File-specific
privacy details come from the newly available FileSuite release privacy
record and Android configuration. The FileSuite support address is
`filesuite@sixthsignallabs.com`, as provided in that release record.

AdMob interstitial/rewarded ads, UMP consent, advertising-ID handling, and ad
privacy choices are documented on the publisher’s explicit instruction to
treat them as implemented. The inspected native source did not yet include
those SDKs; this website task does not add them to the Android app. The public
copy no longer claims the app has no advertising SDK or internet access.
Earlier sections below describe the initial implementation and are superseded
by this current-state section where they discuss draft status, legal indexing,
contact information, missing assets, or advertising.


## Repository discovery and plan

This repository uses Next.js 16 App Router, React 19, TypeScript, Tailwind 4,
Lucide icons, Geist fonts, and shared studio CSS tokens. App sites live under
`app/apps/<slug>` with private `_components` and `_data` directories, a layout,
landing page, and `privacy` / `terms` routes. `_template` is private and does not
create public routes. No applicable AGENTS.md was found in the repository or
ancestor directories inspected.

The implementation plan was to copy the template shell, use WordLilt’s legal
renderer and optional store CTA pattern, keep FileSuite content in local data,
add only app-scoped brand overrides, then verify the production output.

### References followed

- `_template`: route organization, header and footer source, legal document
  types (reused as type-only imports), canonical URL helpers, metadata approach,
  optional icon/screenshot configuration, and shared design tokens.
- ArrowLilt: app-specific hero, responsive screenshot slot, store availability
  state, app-local publishing facts, and separation of product facts from
  unverified launch claims.
- WordLilt: copied legal renderer with numbered sections, desktop contents,
  notices, counterpart links, shared header/footer, legal metadata conventions,
  and optional Google Play CTA. The CTA is a Server Component because it needs
  no browser state. Legal text was rewritten for FileSuite; no game, currency,
  ad SDK, or purchase clauses were inherited. Legal header says “Publication
  status” and links say “Terms & Conditions.”
- GeoPixly: on-device utility positioning, numbered feature showcase, privacy
  explanation, final download section, and studio/footer links.

## Files and routes

- `/apps/filesuite`: hero, five features, four-step workflow, local-processing
  explanation, six native disclosure FAQs, final availability section.
- `/apps/filesuite/privacy`: FileSuite-specific privacy draft.
- `/apps/filesuite/terms`: FileSuite-specific terms draft.
- `_data/app-data.ts`: content, asset slots, legal documents, availability, URLs.
- `_data/metadata.ts`: complete canonical, Open Graph, and Twitter metadata for
  each page; absolute titles avoid duplicate publisher/app suffixes.
- `_components`: template-derived header/footer, WordLilt-derived legal renderer
  and store CTA, FileSuite hero.
- `filesuite.css`: scoped existing token overrides using primary blue #2563EB,
  teal #14B8A6, cyan #06B6D4, slate #1F2937, and background #F3F6FB.
- Existing `Container` and `SectionLabel`, root fonts, skip link, focus styles,
  and reduced-motion handling are reused. No dependencies were added.

Only the new FileSuite directory, this document, and FileSuite’s entry in
`app/sitemap.ts` were changed. Other app websites, shared components, and
`public/.well-known/assetlinks.json` were not edited.

## Store integration and product evidence

There was no FileSuite source, release documentation, package ID, store URL,
logo, or screenshot anywhere in the inspected repository. The supplied brief
is the only product-scope evidence. Public copy identifies the tools as planned
scope and local processing as the product design; no released implementation
has been verified.

Set the single `playStoreUrl` constant at the top of
`app/apps/filesuite/_data/app-data.ts` to the verified listing URL. All three
CTAs, the Android availability FAQ, final availability copy, and structured
data derive from this value. The current null value renders non-interactive
“Coming soon to Android” labels and no Google Play link or download URL.
No package ID or release date was invented.

There is no separate app directory/registry in this project. `lib/site-data.ts`
contains studio portfolio case studies requiring real screenshots; FileSuite
was not added there with fabricated imagery. The sitemap and internal footer
navigation provide the relevant integration for this microsite.

## SEO and accessibility

- Unique requested titles and descriptions, canonical URLs, complete page-level
  Open Graph and Twitter metadata, application name, responsive viewport.
- Canonicals honor `NEXT_PUBLIC_SITE_URL`, falling back to
  `https://sixthsignallabs.com`, matching existing apps.
- No FileSuite social image is fabricated; image metadata uses empty arrays
  until configured, preventing inherited studio social imagery. Root publisher
  favicon remains until a genuine FileSuite icon is supplied.
- `SoftwareApplication` JSON-LD uses the existing inline-script approach with
  escaped less-than characters. It includes name, Android OS, utility category,
  description, page URL, and publisher. No offers, price, ratings, reviews,
  release dates, or current download availability are asserted.
- Landing page is indexable and included in `/sitemap.xml`. Draft legal pages
  deliberately use `noindex, follow` and stay out of the sitemap. After review,
  replace draft language/status, change their robots metadata to indexable, and
  add both legal URLs to the sitemap. This avoids indexing unfinished legal
  policies or putting noindex URLs in the sitemap.
- Existing `/robots.txt` allows crawling and advertises the sitemap; no global
  robots rules were changed.
- One H1 per page, semantic sections/navigation, decorative icons hidden from
  assistive technology, native keyboard-operated FAQ disclosures, visible focus,
  text-only feature overview instead of a pretend app screenshot.
- Landing content is server-rendered and has no app-specific animation or
  client-side state. Actual screenshots, when supplied, use Next Image with
  responsive sizing and descriptive alt text.

## Legal adaptations and release review

Both documents are explicitly “Draft — not yet effective,” dated November 12,
2026, and identify unresolved details in visible notices. They are not legally
approved. No claim of zero collection, no ads, no accounts, guaranteed cleanup,
preservation of originals, or blanket storage access was invented.

Privacy covers selected photos/PDFs, intended on-device processing, system
picker and permissions to verify, temporary copies/cache/history to verify,
exports and destination apps, unverified SDK/telemetry inventory, retention,
backup/deletion caveats, applicable rights enquiries, children, and updates.
Terms cover purpose, permitted use, authorization for source files, backups,
quality/size/format/PDF limitations, output verification, intellectual property,
third parties, proposed warranty/liability wording, app updates, and contact.

Before treating these as released-app legal documents, obtain:

1. Android source/build, manifest, dependencies, permissions, network behavior,
   file-picker implementation, temporary-storage/cleanup/history behavior,
   exported-result handling, backup settings, and original-file preservation.
2. Confirmed SDK/service inventory: ads, consent, analytics, diagnostics, crash
   reporting, data categories, purposes, recipients, retention, and controls.
3. Audience/children’s requirements, legal entity/address, relevant jurisdictions,
   statutory rights, lawful bases, transfers, agreement mechanisms, warranty and
   liability clauses, and final effective date approved by a human reviewer.
4. Support mailbox confirmation: `hello@sixthsignallabs.com` is reused from the
   studio site, whose existing configuration labels it unconfirmed. No new
   FileSuite-specific mailbox was invented; confirm delivery before release.

## Asset checklist

Place supplied release assets under `public/apps/filesuite/`, matching other
apps. This directory is not created with empty or invented image files.

| Asset | Status | Required action |
| --- | --- | --- |
| App icon / logo | Missing | Supply approved square icon, preferably 1024px PNG; set `appIconPath`. Current FS monogram is the template’s text fallback, not a claimed final logo. |
| Hero screenshot | Missing | Supply a real Android release screenshot; set `productScreenshotPath`, verify dimensions and alt text. Current hero is a text feature index, not simulated UI. |
| Feature screenshots | Missing | Supply real compress/resize/convert/images-to-PDF/PDF-compress screens; add only if useful to explaining verified workflows. |
| Social sharing image | Missing | Supply approved 1200×630 artwork; set `socialImagePath`. |
| App favicon/icon metadata | Missing | `appIconPath` enables app and Apple icon metadata; publisher favicon currently remains inherited. |
| Shared Play badge | No shared badge found | Existing apps use styled text CTAs; reused that approach. No external badge is needed. |

## Verification and commands

Repository inspection used `rg --files`, `rg`, `cat`, and `git status` against
all requested reference sites, shared components, data, assets, SEO routes, and
configuration. The Sites skill was applied for local repository work; no Site
registration, publication, new framework, or hosting configuration was added.

| Command / check | Result |
| --- | --- |
| `npm run lint` | Passed, zero errors; existing unused `ArrowRight` warning at `app/apps/arrowlilt/page.tsx:2`. No FileSuite lint warnings. |
| `npm run typecheck` | Passed after correcting an initial capitalization error in legal notice booleans. |
| `npm run build` | Passed; all 30 pages generated, including all three FileSuite routes and existing app routes. First attempt caught the same boolean error; corrected and rebuilt successfully. |
| `git diff --check` | Passed. |
| `npm run start -- --hostname 127.0.0.1 --port 3100` | Production preview served successfully; local networking required sandbox escalation. |
| `node /tmp/check-filesuite.mjs` | Passed browser/HTTP assertions for all 3 pages × 3 viewports, JSON-LD parsing, one H1, canonical paths, matching OG/Twitter titles, robots directives, absence of unverified Play links, FAQ click, anchors, navigation, sitemap, and robots. |
| `node /tmp/check-filesuite-keyboard.mjs` | Passed 320px overflow, keyboard Tab to skip link, Enter to main content, FAQ Enter activation, and computed focus outline. Initial harness omitted native Enter character; corrected harness and passed. |
| Reference sites regression smoke check | All 9 ArrowLilt, WordLilt, GeoPixly landing/privacy/terms routes returned HTTP 200. |

No automated unit/integration test runner or test command exists in the
repository. Browser checks used the installed Brave Chromium browser through
its DevTools protocol with a temporary profile, without adding dependencies.
The initial sandboxed browser launch and localhost connection were blocked;
scoped escalated launches succeeded.

Nine screenshots were captured under `/tmp/filesuite-qa/`, with results in
`results.json`: mobile 375×812, tablet 768×1024, desktop 1440×1000, each covering
landing/privacy/terms. Landing screenshots at all three widths and representative
legal screenshots were visually inspected. No horizontal overflow occurred on
any page; a separate 320px landing check also passed. Screenshots are temporary
QA artifacts, not product assets. No screen-reader, physical Android, Safari,
or external rich-result validator check was performed. JSON-LD was parsed and
asserted in the browser; search engines may require additional verified store
or commercial fields for rich results.

## Remaining blockers

Website implementation and available technical checks are complete. Release
claims and final legal publication still need app evidence and human review.
Real branding/screenshots, a verified Google Play URL, and confirmed support
contact remain unavailable. These do not prevent the functional coming-soon
microsite from running. No deployment was requested or performed.


## Supplied asset update

The publisher subsequently supplied the actual Android home screenshot at
`Apps/Filesuite/release/assets/phone-screenshots/01-home.png`. It is copied
unchanged to `public/apps/filesuite/01-home.png` and configured as the hero
image, replacing the text-only feature overview. Its intrinsic size is
1080×1920; Next Image provides responsive output, descriptive alt text, and
priority loading. The source screenshot visibly includes recent files and
History navigation; storage/retention behavior still needs source review.

The earlier missing-hero checklist entry is superseded by this update. Two
blue icon/wordmark images were also shown inline, but no local source paths
were provided for those images. Their paths were requested; the existing
native release icon differs visually and is not substituted for the supplied
branding.

Asset-update validation: `npm run build` passed (including TypeScript and all
30 static pages); `npx eslint app/apps/filesuite` and `git diff --check` passed.
`sips` confirmed 1080×1920 source dimensions. A Node assertion against the
production HTML confirmed the screenshot reference, dimensions, and alt text.
No new browser screenshots were captured for this asset-only update.


## Supplied branding update

The publisher provided `Apps/Filesuite/design` as the source for the two inline
branding images. Both files were visually inspected and copied unchanged:

- `filesuite-logo.png` (1254×1254) →
  `public/apps/filesuite/filesuite-app-icon.png`.
- `LogoWithText.png` (2172×724) →
  `public/apps/filesuite/filesuite-wordmark.png`.

The header now uses the complete supplied wordmark with responsive sizing;
its home link retains an accessible FileSuite label. App/Apple icon metadata
uses the supplied square icon. Open Graph and Twitter previews use the supplied
wordmark. These updates supersede the missing-logo/icon/social-image entries
and the earlier request for local paths. No generated artwork, cropping, or
background removal was applied. The existing Android release screenshot stays
in the hero. Store availability and legal review status remain unverified.

Branding-update checks: production build (including TypeScript), FileSuite
ESLint, and whitespace checks passed. Browser checks at 320, 375, 768, and
1440px confirmed both images loaded, no horizontal overflow, app icon metadata,
and the supplied wordmark in Open Graph metadata. Screenshots were captured at
`/tmp/filesuite-branding-{width}.png`; 320px and 1440px captures were visually
inspected. Temporary browser and preview server were stopped after checking.


## Screenshot logo replacement

At the publisher’s request, the website now uses
`public/apps/filesuite/01-home-branded.png`. The original `01-home.png` is
preserved. Only the 99×99px logo area at x55/y156 was replaced with the supplied
blue icon; all text, layout, and other screenshot pixels remain unchanged.
The final file remains 1080×1920. A raw RGB comparison verified zero changed
pixels outside that rectangle. The final result was visually inspected.

The built-in imagegen tool was used with the prompt: replace only the old
header icon with the supplied rounded document/compression icon; preserve all
other text, UI, dimensions, and framing. Its draft altered surrounding pixels
and was discarded. Final compositing used Sharp and the original supplied icon
to preserve the screenshot precisely. This is now a publisher-requested branded
edit of the release capture, rather than an unmodified emulator screenshot.

Legal-publication update validation: production build including TypeScript
passed; scoped ESLint and whitespace checks passed. Production HTML assertions
verified the November 12, 2026 date, AdMob/UMP disclosures, FileSuite support
address, indexable robots metadata, absence of draft/review notices, and both
legal URLs in the generated sitemap.
