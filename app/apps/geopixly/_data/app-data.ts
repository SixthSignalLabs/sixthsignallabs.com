// GeoPixly product content — single source for landing copy, links, and draft legal text.

const APP_NAME = "GeoPixly";
const APP_TAGLINE = "Fast, verifiable location stamping.";
const APP_SUPPORT_EMAIL = "geopixly@sixthsignallabs.com";

export type AppLegalBlock =
  | {
      readonly type: "paragraph";
      readonly text: string;
    }
  | {
      readonly type: "list";
      readonly items: readonly string[];
    }
  | {
      readonly type: "notice";
      readonly text: string;
    };

export type AppLegalDocument = {
  readonly slug: "privacy" | "terms";
  readonly documentNumber: string;
  readonly title: string;
  readonly description: string;
  readonly effectiveDate: string;
  readonly introduction: readonly string[];
  readonly sections: readonly {
    readonly id: string;
    readonly number: string;
    readonly title: string;
    readonly blocks: readonly AppLegalBlock[];
  }[];
};

export const appData = {
  name: APP_NAME,
  shortName: "GeoPixly",
  bundleId: "com.sixthsignallabs.geopixly",
  tagline: APP_TAGLINE,
  description:
    "Camera app that stamps precise GPS, date/time, and field telemetry as a visual overlay onto photos — on-device. Photos stay on the phone unless the user shares them.",
  supportingSentence:
    "Built for field inspectors, surveyors, travelers, and anyone who needs to remember or prove where a photo was taken.",
  privacyTrustLine:
    "On-device stamping. Photos stay on your phone unless you choose to share them.",
  verifiedChromeCopy: "VERIFIED BY GEOPIXLY",
  appIconPath: "/apps/geopixly/geopixly-app-icon.png" as string | null,
  productScreenshotPath: null as string | null,
  productScreenshotAlt: `${APP_NAME} camera HUD with GPS stamp overlay`,
  primaryAction: {
    label: "Get the app",
    href: "#download",
  },
  storeLinks: {
    playStore: {
      label: "Get it on Google Play",
      href: "#PLAY_STORE_URL — PLACEHOLDER",
    },
    appStore: null as { label: string; href: string } | null,
  },
  supportEmail: APP_SUPPORT_EMAIL,
  developerName: "Sixth Signal Labs",
  developerUrl: "https://sixthsignallabs.com",
  canonicalBasePath: "/apps/geopixly",
  featuresIntro: {
    label: "Product features",
    title: "Precision you can see in the frame.",
    description:
      "Live stamp preview, on-device GPS overlays, and templates that fit inspection, survey, travel, and audit work — without sending photos to the cloud.",
  },
  features: [
    {
      number: "01",
      title: "Live optical HUD",
      description:
        "See the stamp overlay before you shoot. Compose with GPS, time, and telemetry already in the viewfinder.",
    },
    {
      number: "02",
      title: "On-device GPS stamping",
      description:
        "Burn coords, address, altitude, accuracy, heading, and date/time into the photo — processed on your phone.",
    },
    {
      number: "03",
      title: "Five ready templates",
      description:
        "Minimal, Professional, Map View, Coordinates Only, and Full Audit Details — switch the look without rebuilding the stamp.",
    },
    {
      number: "04",
      title: "Deep customize",
      description:
        "Choose fields, corner position, formats, opacity, and watermark so the overlay matches your workflow.",
    },
    {
      number: "05",
      title: "Local catalog & map",
      description:
        "Browse geotagged captures on a map. Save, share, or keep the original — everything stays local-first.",
    },
  ],
  featuresTrustNote:
    "Camera and precise location while in use. No background location. Local-first catalog.",
  useCasesIntro: {
    label: "Use cases",
    title: "Remember it. Prove it.",
    description:
      "Four common jobs, four templates that fit — so every capture carries the context you need later.",
  },
  useCases: [
    {
      number: "01",
      title: "Field inspection & job sites",
      description:
        "Document site conditions with stamped location and time so reports and handoffs stay unambiguous.",
      template: "Professional",
    },
    {
      number: "02",
      title: "Survey & coordinates-first docs",
      description:
        "When the number on the photo matters most, keep the overlay lean and coordinate-forward.",
      template: "Coordinates Only",
    },
    {
      number: "03",
      title: "Travel & memory",
      description:
        "Light stamps that mark where you stood — enough to remember the place without crowding the frame.",
      template: "Minimal",
    },
    {
      number: "04",
      title: "Audit-style project notes",
      description:
        "Full telemetry plus a custom watermark when you need a denser record for project or compliance notes.",
      template: "Full Audit Details",
    },
  ],
  download: {
    label: "Get the app",
    title: "Stamp location. Keep photos yours.",
    bullets: [
      "Live stamp preview in the optical HUD before capture",
      "Five templates plus deep customize for your workflow",
      "On-device stamping — photos stay on your phone unless you share",
    ],
  },
  legal: {
    privacy: {
      slug: "privacy",
      documentNumber: "01",
      title: "Privacy Policy",
      description: `How ${APP_NAME} handles photos, location, and related information on your device.`,
      effectiveDate: "September 19, 2026",
      introduction: [
        "GeoPixly (com.sixthsignallabs.geopixly) is a mobile camera app by Sixth Signal Labs. It captures photos, reads device GPS, reverse-geocodes an address via the operating system, and composites a visual GPS stamp overlay on-device. Users can save stamped photos to the device library, browse a local catalog and map of past captures, customize stamp templates, and share via the system share sheet.",
        "Last updated: September 19, 2026.",
        "GPS stamping and photo processing happen on your device. Photos and the in-app catalog stay on your phone unless you choose to save or share them through the OS. GeoPixly does not provide an account, cloud sync, photo upload backend, product analytics SDK, or crash-reporting SDK.",
      ],
      sections: [
        {
          id: "information-we-collect",
          number: "01",
          title: "Information we collect",
          blocks: [
            {
              type: "paragraph",
              text: "GeoPixly is local-first. Most information is created and stored on your device when you use the app. Photos stay on your phone unless you save them to the device photo library or share them through the system share sheet.",
            },
            {
              type: "paragraph",
              text: "Information generated or stored on your device includes:",
            },
            {
              type: "list",
              items: [
                "Photos captured in the app, stored under the app’s local document directory, with an optional save to the device photo library.",
                "Catalog metadata such as photo URI, dimensions, coordinates, address fields, and stamp configuration, kept in local storage.",
                "App settings and stamp preferences in local storage.",
                "A local ad-frequency counter used only to pace interstitial ads on the device.",
                "Camera images and precise location while you use the app (foreground / when-in-use), when you grant those permissions.",
              ],
            },
            {
              type: "paragraph",
              text: "Information that may be handled by the operating system or third-party SDKs (not by a GeoPixly server) includes:",
            },
            {
              type: "list",
              items: [
                "Google AdMob banner and interstitial ads, plus Google UMP consent signals and ad-related device signals when ads are allowed.",
                "Google Maps map tiles when you use the in-app gallery map (Android Maps).",
                "OS reverse-geocoding for address text on the stamp (coordinates are sent to the platform geocoder, not to a GeoPixly server).",
                "Unsplash CDN image fetches used only for stamp customize / preview sample imagery.",
                "If you share a photo, the destination app you choose via the system share sheet may receive that file.",
              ],
            },
            {
              type: "paragraph",
              text: "GeoPixly does not collect account credentials, does not create GeoPixly user accounts, and does not run a product analytics SDK or crash-reporting SDK. GeoPixly does not use background location or the microphone.",
            },
          ],
        },
        {
          id: "how-we-use-information",
          number: "02",
          title: "How we use information",
          blocks: [
            {
              type: "paragraph",
              text: "We use information only to operate GeoPixly as described below:",
            },
            {
              type: "list",
              items: [
                "Provide GPS-stamped photo capture and on-device overlay compositing.",
                "Maintain the on-device catalog and map of past captures.",
                "Apply and remember stamp templates and customization preferences.",
                "Support optional save to the device photo library and sharing through the OS share sheet.",
                "Show ads that support the free app, and manage ad consent where Google UMP is presented.",
                "Rely on platform-level protections for ordinary security and abuse prevention; GeoPixly does not operate a separate user-data backend for this purpose.",
              ],
            },
            {
              type: "paragraph",
              text: "Because GeoPixly does not include a product analytics or crash-reporting SDK, we do not collect in-app telemetry for product improvement beyond what is needed on-device to run the features above.",
            },
          ],
        },
        {
          id: "sharing-and-retention",
          number: "03",
          title: "Sharing and retention",
          blocks: [
            {
              type: "paragraph",
              text: "GeoPixly does not operate cloud photo storage and does not upload your photos to a Sixth Signal Labs server. Parties that may receive information in limited situations are:",
            },
            {
              type: "list",
              items: [
                "Google — AdMob ads, UMP consent, and Maps tiles when those features are used.",
                "The operating system geocoder — coordinates used to produce address text for the stamp.",
                "Unsplash — preview sample imagery only, via CDN fetch.",
                "Apps you choose — if you share a photo through the system share sheet.",
              ],
            },
            {
              type: "paragraph",
              text: "Retention: photos, catalog metadata, and settings remain on your device until you delete them in the app, clear app data, or uninstall GeoPixly. Ad and consent-related data are subject to Google’s policies. GeoPixly has no server-side retention of user photos or catalog data because there is no user-data backend.",
            },
            {
              type: "paragraph",
              text: "When information is sent to third parties (for example ads, maps, Unsplash preview images, or OS geocoding), those requests use standard HTTPS. Local data stays on the device; Android backup of app data is disabled (allowBackup false) so OS cloud backup does not copy GeoPixly’s local store. We do not claim special encryption certifications beyond ordinary platform and transport protections.",
            },
          ],
        },
        {
          id: "choices-and-rights",
          number: "04",
          title: "Your choices and rights",
          blocks: [
            {
              type: "paragraph",
              text: "You control GeoPixly largely through your device and in-app actions:",
            },
            {
              type: "list",
              items: [
                "Camera, precise location (when in use), and photo library save permissions can be changed or revoked in your OS settings.",
                "Where Google UMP consent is shown, you can manage ad personalization and related consent choices.",
                "Delete photos and catalog entries in the app, or remove remaining local data by clearing app storage or uninstalling GeoPixly.",
                "There is no GeoPixly account, so there is no separate account-deletion flow.",
              ],
            },
            {
              type: "paragraph",
              text: `Depending on where you live, you may have rights to access, correct, delete, or opt out of certain processing of personal information. Because GeoPixly is local-first and does not maintain a user-data backend, many requests are fulfilled by actions you take on the device. For questions or rights requests that apply to Sixth Signal Labs or GeoPixly, contact ${APP_SUPPORT_EMAIL}.`,
            },
            {
              type: "paragraph",
              text: "We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date above. Continued use of GeoPixly after an update means you should review the revised policy.",
            },
          ],
        },
      ],
    },
    terms: {
      slug: "terms",
      documentNumber: "02",
      title: "Terms of Service",
      description: `The terms that govern access to and use of ${APP_NAME}.`,
      effectiveDate: "September 19, 2026",
      introduction: [
        "GeoPixly (com.sixthsignallabs.geopixly) is a mobile camera app by Sixth Signal Labs. It captures photos, reads device GPS, reverse-geocodes an address via the operating system, and composites a visual GPS stamp overlay on-device. You can save stamped photos to the device library, browse a local catalog and map of past captures, customize stamp templates, and share via the system share sheet. GeoPixly is free and supported by ads; it does not offer user accounts, cloud sync, photo upload to GeoPixly servers, or in-app subscriptions in the current product.",
        "Last updated: September 19, 2026.",
      ],
      sections: [
        {
          id: "acceptance",
          number: "01",
          title: "Acceptance of these terms",
          blocks: [
            {
              type: "paragraph",
              text: "By downloading, installing, or using GeoPixly, you agree to these Terms of Service. These Terms are an agreement between you and Sixth Signal Labs, the operator of GeoPixly.",
            },
            {
              type: "paragraph",
              text: "You must be able to form a binding contract under applicable law. You must be at least 13 years old (or the age of digital consent in your jurisdiction, if higher). If you are under the age of majority where you live, you may use GeoPixly only with permission from a parent or guardian where required.",
            },
            {
              type: "paragraph",
              text: "Our Privacy Policy also applies and should be read together with these Terms. If you do not agree to these Terms or the Privacy Policy, do not download, install, or use GeoPixly.",
            },
          ],
        },
        {
          id: "using-the-service",
          number: "02",
          title: "Using the service",
          blocks: [
            {
              type: "paragraph",
              text: "GeoPixly is currently a free, ad-supported app. There is no GeoPixly account to create or secure, and there are no in-app subscriptions or paid plans in the current product.",
            },
            {
              type: "list",
              items: [
                "Use GeoPixly only for lawful purposes and respect others’ privacy, property, publicity, and intellectual property rights.",
                "Do not misuse location stamping to harass, deceive, commit fraud, or violate laws.",
                "Do not reverse engineer, interfere with, scrape, or attempt unauthorized access to the app, ads infrastructure, or related systems, except to the limited extent such activity is expressly allowed by law (for example, certain interoperability exceptions).",
                "The free service may show Google AdMob banner and interstitial ads (with consent where required). Do not block, fraudulently interact with, or manipulate ad delivery.",
                "Camera and precise location (when in use) permissions are required for core features. Denying them may limit or disable stamping and related functionality.",
                "You are responsible for how you capture, stamp, save, and share photos, including sharing images that contain location information.",
                "Your use is also subject to the Apple App Store or Google Play terms that apply to where you obtained the app.",
              ],
            },
          ],
        },
        {
          id: "ownership",
          number: "03",
          title: "Ownership and licenses",
          blocks: [
            {
              type: "paragraph",
              text: "Sixth Signal Labs owns GeoPixly, including the software, branding, user interface, stamp templates and designs provided by the app, and related intellectual property, except for third-party components and your own content.",
            },
            {
              type: "paragraph",
              text: "Subject to these Terms, Sixth Signal Labs grants you a limited, revocable, non-exclusive, non-transferable license to use GeoPixly for personal, lawful purposes on devices you own or control.",
            },
            {
              type: "paragraph",
              text: "You retain rights in photos you capture. By using the app, you grant Sixth Signal Labs only the limited rights needed to operate on-device features such as local processing and stamping. GeoPixly does not upload your photos to Sixth Signal Labs servers, and these Terms do not grant a broad cloud hosting license.",
            },
            {
              type: "paragraph",
              text: "If you share a photo through the system share sheet, the terms of the destination app or service apply between you and that third party. Third-party components — including Google Ads and Maps, OS services, fonts, libraries, and Unsplash preview imagery — remain owned by their respective owners and are subject to their terms.",
            },
            {
              type: "paragraph",
              text: "If you send feedback or suggestions about GeoPixly, Sixth Signal Labs may use them without obligation to you.",
            },
          ],
        },
        {
          id: "availability-and-liability",
          number: "04",
          title: "Availability and liability",
          blocks: [
            {
              type: "paragraph",
              text: "GeoPixly is provided “as is” and “as available.” Sixth Signal Labs does not warrant that GPS, geocoding, stamps, maps, ads, or other features will be uninterrupted, accurate, or error-free. Location accuracy depends on your device, operating system, and environment.",
            },
            {
              type: "paragraph",
              text: "We may change, suspend, or discontinue GeoPixly (or any part of it) at any time.",
            },
            {
              type: "paragraph",
              text: "To the maximum extent permitted by law, Sixth Signal Labs is not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, profits, or goodwill, arising from your use of GeoPixly. To the extent a liability cap applies, Sixth Signal Labs’ total liability for claims relating to GeoPixly will not exceed the amounts you paid to Sixth Signal Labs for the app in the twelve months before the claim (which may be zero for this free, ad-supported product).",
            },
            {
              type: "paragraph",
              text: "Some jurisdictions do not allow certain warranty exclusions or liability limitations. In those places, the limitations above apply only to the extent permitted by law.",
            },
            {
              type: "paragraph",
              text: "To the extent allowed by law, you agree to be responsible for claims arising from your misuse of GeoPixly or from content you capture, stamp, save, or share.",
            },
          ],
        },
        {
          id: "changes-and-contact",
          number: "05",
          title: "Changes and contact",
          blocks: [
            {
              type: "paragraph",
              text: "Sixth Signal Labs may update these Terms. For material changes, we will update the “Last updated” date on this page and, where practical, provide an in-app notice or store listing update.",
            },
            {
              type: "paragraph",
              text: "Where permitted by law, continued use of GeoPixly after changes become effective constitutes acceptance of the updated Terms.",
            },
            {
              type: "paragraph",
              text: `Questions about these Terms for GeoPixly / Sixth Signal Labs: ${APP_SUPPORT_EMAIL}.`,
            },
          ],
        },
      ],
    },
  } satisfies Record<"privacy" | "terms", AppLegalDocument>,
} as const;

export const deploymentSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sixthsignallabs.com";

export function getAppUrl(suffix = "") {
  return new URL(`${appData.canonicalBasePath}${suffix}`, deploymentSiteUrl).toString();
}

export function getAppPath(suffix = "") {
  return `${appData.canonicalBasePath}${suffix}`;
}
