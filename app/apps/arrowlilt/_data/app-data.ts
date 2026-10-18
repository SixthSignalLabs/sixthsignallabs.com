// ArrowLilt — single source of truth for landing copy, links, preview data,
// availability, and legal text. Mirror of the WordLilt data structure.

const APP_NAME = "ArrowLilt";
const APP_STORE_TITLE = "ArrowLilt: Tap Away Puzzle";
const APP_TAGLINE = "Clear a path. Grow a little calm.";
const APP_SUPPORT_EMAIL = "arrowlilt@sixthsignallabs.com";
const APP_SUPPORT_HREF = `mailto:${APP_SUPPORT_EMAIL}`;
const APP_PACKAGE = "com.sixthsignallabs.arrowlilt";
const LEGAL_EFFECTIVE_DATE = "October 18, 2026";
const LEGAL_APP_SUMMARY = `${APP_NAME} (${APP_PACKAGE}) is a calm, untimed mobile spatial puzzle game by Sixth Signal Labs. Players tap arrows to clear puzzle boards, advance through sequential botanical chapters, and cultivate a garden collection.`;

export type AppLegalBlock =
  | { readonly type: "paragraph"; readonly text: string }
  | { readonly type: "list"; readonly items: readonly string[] }
  | { readonly type: "notice"; readonly text: string };

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
  shortName: APP_NAME,
  monogram: "AL",
  storeTitle: APP_STORE_TITLE,
  genreLabel: "Calm arrow puzzle",
  tagline: APP_TAGLINE,
  description:
    "Tap arrows, clear each puzzle, and grow your garden. Play at your own pace.",
  supportingSentence:
    "Find connected arrows, slide them off the board, and watch a little garden grow — no timer, no penalty.",
  footerBlurb:
    "A calm, untimed arrow puzzle. Tap to clear the board and grow six botanical collections.",
  metadata: {
    title: "ArrowLilt — Clear a path. Grow a little calm.",
    description:
      "An untimed spatial puzzle where you tap arrows to clear the board and grow a botanical garden. No timer, no lives, no penalty. Play at your own pace.",
  },
  androidPackage: APP_PACKAGE,
  appIconPath: "/apps/arrowlilt/arrowlilt-app-icon.png" as string | null,
  appLogoPath: "/apps/arrowlilt/arrowlilt-wordmark-outlined.svg",
  appMarkPath: "/apps/arrowlilt/arrowlilt-mark.svg",
  productScreenshotPath: null as string | null,
  productScreenshotAlt: `${APP_NAME} puzzle board with colored arrow paths on a cream grid`,
  availability: {
    // TODO: set to the verified Google Play URL once the listing is live.
    playStoreUrl: null as string | null,
    playStoreLabel: "Get it on Google Play",
    unavailableLabel: "Coming soon to Android",
    // TODO: set once the iOS App Store listing is live.
    iosStoreUrl: null as string | null,
    iosLabel: "Download on the App Store",
    iosUnavailableLabel: "iOS — coming soon",
  },
  primaryAction: {
    label: "Get the app",
    anchor: "#download",
  },
  secondaryAction: {
    label: "How to play",
    href: "#how-to-play",
  },
  navigation: [
    { label: "Features", href: "#features" },
    { label: "How to play", href: "#how-to-play" },
    { label: "The garden", href: "#garden" },
  ],
  supportEmail: APP_SUPPORT_EMAIL,
  supportHref: APP_SUPPORT_HREF,
  supportPrompt: `Questions? Contact ${APP_NAME}`,
  developerName: "Sixth Signal Labs",
  developerUrl: "https://sixthsignallabs.com",
  canonicalBasePath: "/apps/arrowlilt",
  privacyTrustLine:
    "No account required. Play offline. Progress is saved locally on your device.",

  featuresIntro: {
    label: "Features",
    title: "Spatial thinking. No pressure.",
    description:
      "ArrowLilt keeps the focus on the board: find which arrows can slide out, clear the grid, and earn a little garden along the way.",
  },
  features: [
    {
      number: "01",
      title: "Tap to clear",
      description:
        "Tap an arrow whose full path can slide off the board. No timer counts down — if a tap is blocked, nothing is lost.",
    },
    {
      number: "02",
      title: "Precise collision rules",
      description:
        "Arrows translate as rigid shapes. Bent paths are checked cell by cell, not just at the head, so the puzzle rewards careful spatial thinking.",
    },
    {
      number: "03",
      title: "Free recovery, always",
      description:
        "Unlimited undo, free restart at any time, and a timed nudge when you're stuck. No lives, no energy to wait for.",
    },
    {
      number: "04",
      title: "120 levels, six chapters",
      description:
        "Campaign levels progress across six botanical chapters. Each chapter unlocks a themed garden collection at its milestones.",
    },
    {
      number: "05",
      title: "A fresh daily board",
      description:
        "One new shared puzzle every day, independent from your campaign. Finish it and share a spoiler-free result.",
    },
    {
      number: "06",
      title: "Optional hints",
      description:
        "Hints highlight a legal move. Earn extras by watching a rewarded ad, or make a one-time Remove Ads purchase — no subscription, no coin economy.",
    },
  ],

  howToPlay: {
    label: "How to play",
    title: "Find it. Tap it. Clear the board.",
    steps: [
      {
        number: "01",
        title: "Study the board",
        description:
          "Look for an arrow whose full path — all its cells — can translate out of the board in its pointing direction without crossing another arrow.",
      },
      {
        number: "02",
        title: "Tap to slide it out",
        description:
          "Tap the arrow. If the path is clear, the arrow slides off and opens space for the next move. Nothing is lost if the path is blocked.",
      },
      {
        number: "03",
        title: "Clear the board to progress",
        description:
          "Remove every arrow to complete the puzzle. Finishing chapter milestones unlocks a plant in your botanical garden.",
      },
    ],
  },

  garden: {
    label: "The garden",
    title: "Progress grows something lasting.",
    description:
      "Six botanical chapters, 36 collectible plants. No timer, no streak penalty — the garden waits whenever you return.",
    highlights: [
      {
        number: "01",
        title: "Six botanical chapters",
        body: "120 sequential puzzles, each chapter themed around a different garden collection.",
      },
      {
        number: "02",
        title: "36 collectible plants",
        body: "A plant unlocks at levels 3, 6, 9, 12, 16, and 20 of each chapter — awarded exactly once.",
      },
      {
        number: "03",
        title: "No pressure to return",
        body: "No timer, no lives, no streak penalty. Come back whenever you like.",
      },
      {
        number: "04",
        title: "A fresh daily board",
        body: "One new shared puzzle per day with a spoiler-free result to share with a friend.",
      },
    ],
  },

  download: {
    label: "Get the app",
    title: "Your first clear board is waiting.",
    bullets: [
      "Untimed play — no penalty for a wrong tap, no lives, no energy.",
      "Six botanical chapters and 36 collectible plants to unlock.",
      "Offline-first — no account needed, progress saved on your device.",
    ],
  },

  legal: {
    privacy: {
      slug: "privacy",
      documentNumber: "01",
      title: "Privacy Policy",
      description: `How ${APP_NAME} handles information and protects player privacy.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      introduction: [
        LEGAL_APP_SUMMARY,
        `Last updated: ${LEGAL_EFFECTIVE_DATE}.`,
        `Game progress, garden collections, and settings are stored locally on your device. ${APP_NAME} does not provide an account, cloud sync, or a Sixth Signal Labs user-data backend, and does not include a product analytics SDK or crash-reporting SDK. The free game is supported by Google AdMob ads, with an optional one-time Remove Ads purchase processed through the app marketplace and verified with RevenueCat.`,
      ],
      sections: [
        {
          id: "information-we-collect",
          number: "01",
          title: "Information we collect",
          blocks: [
            {
              type: "paragraph",
              text: `${APP_NAME} is local-first. Most information is created and stored on your device when you play.`,
            },
            {
              type: "paragraph",
              text: "Information generated or stored on your device includes:",
            },
            {
              type: "list",
              items: [
                "Game progress, including cleared puzzles, active boards, chapter milestones, and daily puzzle records.",
                "Garden collection progress, including unlocked botanical plants and milestone achievements.",
                "In-game balances and items, such as hint credits, timed nudge assistance state, and undo history.",
                "App settings, such as sound and haptic feedback preferences.",
                "A local record of your one-time Remove Ads purchase status to unlock ad-free play.",
                "A local ad-frequency record used only to pace interstitial ads on the device.",
              ],
            },
            {
              type: "paragraph",
              text: `Information that may be handled by the operating system or third-party service providers (not stored on an ${APP_NAME} server) includes:`,
            },
            {
              type: "list",
              items: [
                "Google AdMob interstitial and rewarded ads, plus Google UMP consent signals and ad-related device signals (including the device advertising ID where permitted), when ads are enabled.",
                "RevenueCat: when you make the optional one-time Remove Ads purchase, purchase receipts, transaction identifiers, and anonymous app user IDs are handled by RevenueCat to validate and restore your purchase status across app reinstalls. RevenueCat does not receive your payment card numbers, billing credentials, or personal contact details from ArrowLilt.",
                `If device backup is turned on, Android or iOS may include ${APP_NAME}'s locally stored game data in your device backup, according to your device and platform account settings.`,
              ],
            },
            {
              type: "paragraph",
              text: `${APP_NAME} does not collect account credentials, does not create user accounts, and does not run a product analytics SDK or crash-reporting SDK. ${APP_NAME} does not request access to your camera, precise location, microphone, contacts, or photos.`,
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
              text: `We use information only to operate ${APP_NAME} as described below:`,
            },
            {
              type: "list",
              items: [
                "Provide spatial puzzle gameplay and keep your campaign and garden collection progress on your device.",
                "Remember your settings, hint balances, and unlocked milestones between sessions.",
                "Validate and maintain your one-time Remove Ads entitlement via RevenueCat and the app marketplace.",
                "Show ads that support the free game (unless Remove Ads has been purchased), including optional rewarded ads you choose to watch for extra hints, and manage ad consent choices where Google UMP is presented.",
                `Rely on platform-level protections for ordinary security and abuse prevention; ${APP_NAME} does not operate a separate user-data backend for this purpose.`,
              ],
            },
            {
              type: "paragraph",
              text: `Because ${APP_NAME} does not include a product analytics or crash-reporting SDK, we do not collect in-app telemetry for product improvement beyond what is needed on-device to run the game.`,
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
              text: `${APP_NAME} does not upload your game data to a Sixth Signal Labs server. Parties that may receive information in limited operational situations are:`,
            },
            {
              type: "list",
              items: [
                "Google — AdMob ads and Google UMP consent when ads are requested or consent choices are managed.",
                "RevenueCat — Receipt validation and entitlement verification for the optional one-time Remove Ads purchase.",
                "Google / Apple — App marketplace purchasing, billing, and device backup if enabled for your device.",
              ],
            },
            {
              type: "paragraph",
              text: `Retention: game progress, collection records, and settings remain on your device until you clear app storage or uninstall ${APP_NAME}. Ad, consent, and purchase validation records are subject to the policies of Google and RevenueCat. ${APP_NAME} has no server-side retention of your puzzle or garden data.`,
            },
            {
              type: "paragraph",
              text: "Ad and purchase validation requests use standard HTTPS encryption. We do not claim special encryption certifications beyond standard platform and transport security.",
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
              text: `You control ${APP_NAME} largely through your device and in-app actions:`,
            },
            {
              type: "list",
              items: [
                `Where Google UMP consent is presented, you can manage ad personalization and consent choices, including later through the ad privacy option in ${APP_NAME}'s settings.`,
                "Rewarded ads are always optional. You can play without watching them.",
                "You can purchase the one-time Remove Ads option to permanently disable interstitial ads, and use Restore Purchases if you reinstall the app on the same platform account.",
                "You can reset or delete your device advertising ID in your operating system settings.",
                `Remove ${APP_NAME}'s local data at any time by clearing app storage or uninstalling ${APP_NAME}.`,
                `Because there is no ${APP_NAME} account, there is no separate account-deletion flow.`,
              ],
            },
            {
              type: "paragraph",
              text: `Depending on where you live, you may have legal rights to access, correct, delete, or opt out of certain processing of personal information. Because ${APP_NAME} is local-first and does not maintain a user-data backend, many requests are fulfilled directly by actions you take on your device. For questions or privacy requests, contact ${APP_SUPPORT_EMAIL}.`,
            },
            {
              type: "paragraph",
              text: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date above. Continued use of ${APP_NAME} after an update means you should review the revised policy.`,
            },
          ],
        },
        {
          id: "contact-us",
          number: "05",
          title: "Contact us",
          blocks: [
            {
              type: "paragraph",
              text: `For privacy questions or requests regarding ${APP_NAME} or Sixth Signal Labs, please contact ${APP_SUPPORT_EMAIL}.`,
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
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      introduction: [
        `${LEGAL_APP_SUMMARY} ${APP_NAME} is free to play, supported by ads, and offers an optional one-time in-app purchase to remove ads. It does not offer user accounts, cloud sync, or recurring subscriptions.`,
        `Last updated: ${LEGAL_EFFECTIVE_DATE}.`,
      ],
      sections: [
        {
          id: "acceptance",
          number: "01",
          title: "Acceptance of these terms",
          blocks: [
            {
              type: "paragraph",
              text: `By downloading, installing, or using ${APP_NAME}, you agree to these Terms of Service. These Terms are a binding agreement between you and Sixth Signal Labs, the operator of ${APP_NAME}.`,
            },
            {
              type: "paragraph",
              text: `You must be able to form a binding contract under applicable law. You must be at least 13 years old (or the age of digital consent in your jurisdiction, if higher). If you are under the age of majority where you live, you may use ${APP_NAME} only with permission from a parent or legal guardian where required.`,
            },
            {
              type: "paragraph",
              text: `Our Privacy Policy also applies and should be read together with these Terms. If you do not agree to these Terms or the Privacy Policy, do not download, install, or use ${APP_NAME}.`,
            },
          ],
        },
        {
          id: "using-the-service",
          number: "02",
          title: "Using the game and in-app purchases",
          blocks: [
            {
              type: "paragraph",
              text: `${APP_NAME} is an untimed spatial puzzle game. There is no user account to create or secure, and no recurring subscription.`,
            },
            {
              type: "list",
              items: [
                `Use ${APP_NAME} only for lawful purposes and respect others' rights, including intellectual property rights.`,
                "Do not reverse engineer, interfere with, scrape, or attempt unauthorized access to the app, ads infrastructure, purchase verification systems, or related code.",
                "Free play may show Google AdMob interstitial ads and optional rewarded ads (with consent where applicable). Do not block, fraudulently interact with, or manipulate ad delivery.",
                `In-App Purchases: ${APP_NAME} offers an optional one-time "Remove Ads" purchase. When purchased, all non-rewarded ads are permanently disabled for your installation. Purchases are processed through Google Play or Apple App Store and verified via RevenueCat. Pricing, taxes, currency conversions, and payment methods are determined by the app store platform.`,
                "All in-app purchases are final and non-refundable, except as required by applicable law or the specific refund policies of Google Play or Apple App Store. You can restore your prior purchase on devices using the same platform account via the in-app Restore Purchases option.",
                "In-game hints, plant collectibles, and milestone badges have no monetary value, cannot be purchased with real money outside the app, cannot be redeemed or exchanged for real currency, and cannot be transferred outside the game.",
                "Your use is also subject to the Google Play or Apple App Store terms of service that apply where you obtained the app.",
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
              text: `Sixth Signal Labs owns ${APP_NAME}, including the software, branding, user interface, puzzles, puzzle algorithms, artwork, garden illustrations, sounds, and related intellectual property, except for third-party SDK components.`,
            },
            {
              type: "paragraph",
              text: `Subject to these Terms, Sixth Signal Labs grants you a personal, limited, revocable, non-exclusive, non-transferable license to use ${APP_NAME} for personal, lawful entertainment on devices you own or control.`,
            },
            {
              type: "paragraph",
              text: "Third-party components — including Google Mobile Ads, RevenueCat, platform libraries, and fonts — remain owned by their respective owners and are subject to their respective terms and licenses.",
            },
            {
              type: "paragraph",
              text: `If you provide suggestions, feedback, or ideas regarding ${APP_NAME}, Sixth Signal Labs may use them without obligation, compensation, or attribution to you.`,
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
              text: `${APP_NAME} is provided "as is" and "as available." Sixth Signal Labs does not warrant that puzzles, saved progress, hints, purchase restoration, or game features will always be uninterrupted, accurate, or error-free. Because game data is stored on your device, progress may be lost if you clear app storage, uninstall the app, or change devices without a platform backup.`,
            },
            {
              type: "paragraph",
              text: `We may change, suspend, or discontinue ${APP_NAME} (or any part of it) at any time.`,
            },
            {
              type: "paragraph",
              text: `To the maximum extent permitted by law, Sixth Signal Labs is not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, profits, or goodwill, arising from your use of ${APP_NAME}. To the extent a liability cap applies, Sixth Signal Labs' total liability for claims relating to ${APP_NAME} will not exceed the amounts you actually paid to Sixth Signal Labs for the app in the twelve months before the claim.`,
            },
            {
              type: "paragraph",
              text: "Some jurisdictions do not allow certain warranty exclusions or liability limitations. In those places, the limitations above apply only to the extent permitted by law.",
            },
            {
              type: "paragraph",
              text: `To the extent allowed by law, you agree to be responsible for claims arising from your misuse of ${APP_NAME}.`,
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
              text: `Sixth Signal Labs may update these Terms from time to time. For material changes, we will update the "Last updated" date on this page and, where practical, provide an in-app notice or store listing update.`,
            },
            {
              type: "paragraph",
              text: `Where permitted by law, continued use of ${APP_NAME} after changes become effective constitutes acceptance of the updated Terms.`,
            },
            {
              type: "paragraph",
              text: `Questions about these Terms for ${APP_NAME} / Sixth Signal Labs: ${APP_SUPPORT_EMAIL}.`,
            },
          ],
        },
      ],
    },
  } satisfies Record<"privacy" | "terms", AppLegalDocument>,
} as const;

export const isPublishingReady =
  appData.availability.playStoreUrl !== null;

export const deploymentSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sixthsignallabs.com";

export function getAppUrl(suffix = "") {
  return new URL(`${appData.canonicalBasePath}${suffix}`, deploymentSiteUrl).toString();
}

export function getAppPath(suffix = "") {
  return `${appData.canonicalBasePath}${suffix}`;
}
