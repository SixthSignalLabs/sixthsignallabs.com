# HyperPulse microsite

Local implementation of `/apps/hyperpulse`, `/apps/hyperpulse/support`, `/apps/hyperpulse/privacy`, and `/apps/hyperpulse/terms`. Nothing deployed or submitted.

## Content and shared details

`_data/app-data.ts` centralizes app identity, navigation, features, limitations, help, legal text, metadata, and store availability. The template was copied and adapted without changing `app/apps/_template/` or unrelated pages. Shared `Container` and `SectionLabel` components and Geist typography are reused.

Per the owner's instructions, operator and effective date follow ArrowLilt: Sixth Signal Labs and October 18, 2026. Support is `hyperpulse@sixthsignallabs.com`. The minimum age is 13, or the local age of digital consent if higher, matching the other app sites; guardian permission is required where applicable. This eligibility requirement is not presented as a verified store content rating.

The owner confirmed there is no legal postal address. Address fields and address requirements have been removed. The other public app terms do not specify a governing jurisdiction; HyperPulse therefore uses general applicable-law and mandatory-consumer-rights wording without inventing a country or exclusive forum.

Publication notices, draft labels, incomplete-value prose, and artificial review-approval gates have been removed. The pages emit `index, follow`. This website metadata setting does not assert completion of mobile-app production signing, store submission, or independent legal review.

Google Play and App Store URLs are optional availability settings. Neither listing is verified, so both remain null and no store CTA is shown. The honest “Google Play release in preparation” message remains. A real App Store URL additionally requires iOS publication approval. These are unavailable destinations, not placeholder links.

## Files and assets

The microsite has a shared layout; landing, support, privacy and terms routes; scoped CSS; and header, footer, hero, store CTA, and legal-page components. The obsolete publication-notice component was removed. `app/sitemap.ts` adds all four routes.

Three approved files were copied unchanged into `public/apps/hyperpulse/` from the supplied Android brand asset pack:

- `hyperpulse-wordmark-transparent.png`: 1060 × 172.
- `bolt-mark-transparent.png`: 439 × 512.
- `icon-1024.png`: 1024 × 1024.

Their bytes and hashes were verified against the supplied originals. No reference-board crops, QA screenshots, fabricated screenshots, or altered logos are used.

## Source and retained disclosures

The application source is `/Users/kaveen/Files/Dev/Personal/SixthSignalLabs/Apps/HyperPulse`. Current routes, domain model, repository, backup, calculations, Coach, theme, and asset code were checked against the feature and readiness documents. The pre-expansion `FEATURE_AUDIT.md` is historical; current implementation and `FEATURE_COMPLETION_REPORT.md` supersede its missing-feature list.

Privacy and support retain accurate descriptions of local SQLite storage without separate app encryption, possible OS backups, manual wellness entries, local deterministic Coach rules, foreground timer limitations, and user-controlled exports. Supported JSON imports merge validated records, skip existing session/routine IDs and check-in dates, preserve profile/preferences/selected routine, and reject conflicting unfinished sessions. The selected-file limit is 5 MB. Erasing the database does not remove separately exported files, OS backups, correspondence, website logs, or store records.

Neither the website nor the native app includes a configured product-analytics SDK. Website hosting logs are disclosed separately from local app data. Provider-specific processing and retention are described without invented durations, locations, or certifications.

No AI coaching, accounts, cloud backup/sync, social features, nutrition/hydration, custom exercises, health-platform/wearable integration, automatic workout recognition, background alarms/reminders, exercise videos, timed/distance tracking, monetization, medical outcomes, or guaranteed results are advertised.

## Website configuration

Canonical URLs follow `NEXT_PUBLIC_SITE_URL` with the unchanged fallback `https://sixthsignallabs.com`. The existing app-sites README mentions `sixthsignalglobal.com` as an alternative deployment origin; no deployment change was made. There is no configured basePath or static-export output. Internal routes use `next/link`; PNGs use `next/image`. All four routes are statically prerendered under the current Next configuration. No dependency, runtime API, authentication, database, middleware, or server action was added.

## Verification

Initial implementation passed formatting, typecheck, production build, and lint (one pre-existing unused ArrowRight warning in ArrowLilt). All four routes appeared in the prerender manifest and sitemap. The website has no configured test suite.

Browser checks covered widths 320, 360, 768, and 1440 pixels, with no overflow; keyboard traversal and focus outlines; 44 × 44 CSS-pixel link targets at measured mobile/desktop widths; reduced motion; navigation, anchors, email syntax, image dimensions and alt text; and legal/help content with JavaScript disabled. Print PDFs for Privacy and Terms generated with navigation hidden. These were practical checks, not an assistive-technology certification audit. The current follow-up updates legal copy, removes publication banners, and changes robots metadata; verification results are reported in the task response.

## Mobile release status

The mobile release remains a separate task. Generated Android release configuration still uses development signing. Production keystore/signing, store versioning and upgrade checks, Play Console/Data Safety/content rating/developer verification/listing/review, actual hosted URLs, native JSON import completion, and broader accessibility/device/performance QA remain outstanding in app documentation. No QA APK is marketed and no approved iOS release is implied.

The read-only dependency audit performed during implementation returned five high-severity findings through Expo CLI/code-signing tooling, including node-forge and Zod. Its suggested Expo 44 downgrade is incompatible with the Expo 58 app. No dependency remediation was applied.
