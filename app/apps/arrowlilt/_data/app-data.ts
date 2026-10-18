// ArrowLilt — single source of truth for landing copy, links, preview data,
// availability, and legal text. Mirror of the WordLilt data structure.

const APP_NAME = "ArrowLilt";
const APP_STORE_TITLE = "ArrowLilt: Tap Away Puzzle";
const APP_TAGLINE = "Clear a path. Grow a little calm.";
const APP_SUPPORT_EMAIL = "arrowlilt@sixthsignallabs.com";
const APP_SUPPORT_HREF = `mailto:${APP_SUPPORT_EMAIL}`;
const APP_PACKAGE = "com.sixthsignallabs.arrowlilt";

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
      effectiveDate: "[EFFECTIVE DATE — LEGAL REVIEW REQUIRED]",
      introduction: [
        `${APP_NAME} (${APP_PACKAGE}) is a calm, untimed spatial puzzle game by Sixth Signal Labs. Players tap arrows to clear boards and grow a botanical garden collection.`,
        `This document is draft placeholder content. Replace it with a policy that accurately reflects ${APP_NAME}'s data practices and obtain appropriate legal review before publishing.`,
      ],
      sections: [
        {
          id: "information-we-collect",
          number: "01",
          title: "Information we collect",
          blocks: [
            {
              type: "notice",
              text: "DRAFT PLACEHOLDER — document every category of information the app actually collects before publishing.",
            },
            {
              type: "paragraph",
              text: `${APP_NAME} is offline-first. Campaign progress, puzzle state, and garden collection data are stored on your device. No account is required to play.`,
            },
            {
              type: "paragraph",
              text: "Information that may be handled by third-party SDKs (not by an ArrowLilt server) includes:",
            },
            {
              type: "list",
              items: [
                "Google AdMob rewarded ads and any associated consent signals, when you choose to watch a rewarded ad for a hint.",
                "Android device backup may include locally stored game data if device backup is enabled on your device.",
              ],
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
              text: "Explain each purpose for processing information, including providing gameplay, saving progress locally, optional rewarded ads, and product improvement.",
            },
          ],
        },
        {
          id: "sharing-and-retention",
          number: "03",
          title: "Sharing and retention",
          blocks: [
            {
              type: "list",
              items: [
                "Identify any ad network or analytics partners that may receive information.",
                "State how long each category of information is retained.",
                "Describe any cross-device or backup scenarios.",
              ],
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
              text: `Explain applicable choices including ad consent, ad ID reset, and local data deletion. Because ${APP_NAME} is offline-first with no user-data backend, many requests are fulfilled by actions you take on the device.`,
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
              text: `For privacy questions or requests, contact ${APP_SUPPORT_EMAIL}.`,
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
      effectiveDate: "[EFFECTIVE DATE — LEGAL REVIEW REQUIRED]",
      introduction: [
        `${APP_NAME} (${APP_PACKAGE}) is a calm, untimed spatial puzzle game by Sixth Signal Labs. These terms are draft placeholder content and are not legal advice. Replace them with reviewed terms before publishing.`,
      ],
      sections: [
        {
          id: "acceptance",
          number: "01",
          title: "Acceptance of these terms",
          blocks: [
            {
              type: "paragraph",
              text: `By downloading, installing, or using ${APP_NAME}, you agree to these Terms of Service. These Terms are an agreement between you and Sixth Signal Labs.`,
            },
          ],
        },
        {
          id: "using-the-service",
          number: "02",
          title: "Using the game",
          blocks: [
            {
              type: "notice",
              text: "DRAFT PLACEHOLDER — replace with accurate rules for acceptable use and in-app purchase terms.",
            },
            {
              type: "list",
              items: [
                `Use ${APP_NAME} only for lawful purposes and respect the rights of others.`,
                "Do not reverse engineer, interfere with, or attempt unauthorized access to the app or related systems.",
                "A one-time Remove Ads purchase is subject to Google Play or App Store purchase terms.",
                "In-game collectibles have no monetary value and cannot be sold or exchanged.",
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
              text: `Sixth Signal Labs owns ${APP_NAME}, including the software, puzzles, artwork, and related intellectual property. You are granted a limited, non-transferable license to play the game on devices you own or control.`,
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
              text: `${APP_NAME} is provided "as is." Sixth Signal Labs does not warrant that puzzles, saved progress, or features will be uninterrupted or error-free. We may change, suspend, or discontinue the game at any time.`,
            },
            {
              type: "paragraph",
              text: "Add legally reviewed warranty disclaimers and liability limitations appropriate to the app and governing law.",
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
              text: `Sixth Signal Labs may update these Terms. We will update the effective date above when we do. Questions: ${APP_SUPPORT_EMAIL}.`,
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
