// WordLilt product content — single source for landing copy, links, preview
// puzzle data, availability, and legal text.
//
// TODO(product facts) — confirm before advertising any of the following in
// public copy. The current pre-release build implements some of them, but they
// are not yet confirmed for launch:
// - Themed categories: only one category currently has puzzle content.
// - Level progression / category unlocking: unlocking is currently disabled.
// - Time mode ("Time Rush", two minutes): implemented, launch status unconfirmed.
// - Power-ups (currently Hint, Shuffle, Reveal): names and mechanics may change.
// - Bonus words, coins, and rewards: unconfirmed for launch.
// - Release date and store listing: unconfirmed.
// The legal text below reflects the current build: free, supported by Google
// AdMob interstitial and opt-in rewarded ads with Google UMP consent, local-only
// game data, no accounts, analytics, crash reporting, or in-app purchases.
// Revisit it if any of that changes before launch.
// Once confirmed, the features list can expand to six items (categories,
// progression, power-ups) without changing the page components.

const APP_NAME = "WordLilt";
const APP_STORE_TITLE = "WordLilt: Word Search Puzzle";
const APP_TAGLINE = "Find your next little word escape.";
const APP_SUPPORT_EMAIL = "wordlilt@sixthsignallabs.com";
const APP_SUPPORT_HREF = `mailto:${APP_SUPPORT_EMAIL}`;
const APP_PACKAGE = "com.sixthsignallabs.wordlilt";
const LEGAL_LAST_UPDATED = "October 8, 2026";
const LEGAL_APP_SUMMARY = `${APP_NAME} (${APP_PACKAGE}) is a colorful mobile word-search puzzle game by Sixth Signal Labs. Players swipe through a letter grid to uncover hidden words, complete themed puzzles, and progress through levels.`;

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

export type GridCell = readonly [row: number, col: number];

export type WordTone = "rose" | "sky" | "mint" | "amber";

export type PuzzleWord = {
  readonly word: string;
  readonly start: GridCell;
  readonly direction: readonly [rowStep: -1 | 0 | 1, colStep: -1 | 0 | 1];
  readonly foundTone: WordTone | null;
};

export const appData = {
  name: APP_NAME,
  shortName: APP_NAME,
  monogram: "WL",
  storeTitle: APP_STORE_TITLE,
  genreLabel: "Word search puzzle",
  tagline: APP_TAGLINE,
  description:
    "A colorful mobile word-search puzzle game where players swipe through a letter grid to uncover hidden words, complete themed puzzles, and progress through levels.",
  supportingSentence:
    "Swipe through colorful letter grids, uncover hidden words, and enjoy a satisfying puzzle break.",
  footerBlurb:
    "A colorful word-search puzzle game. Swipe through letter grids and uncover hidden words.",
  metadata: {
    title: "WordLilt — Word Search Puzzle | Sixth Signal Labs",
    description:
      "Discover WordLilt, a colorful word-search puzzle game. Swipe through letter grids, uncover hidden words, and enjoy a satisfying puzzle break.",
  },
  androidPackage: APP_PACKAGE,
  appIconPath: "/apps/wordlilt/wordlilt-app-icon.png" as string | null,
  // TODO: replace the illustrative preview with a release-build gameplay
  // screenshot (no debug overlays) under public/apps/wordlilt/.
  productScreenshotPath: null as string | null,
  productScreenshotAlt: `${APP_NAME} gameplay showing a letter grid with highlighted found words`,
  availability: {
    // TODO: set to the verified Google Play listing URL
    // (https://play.google.com/store/apps/details?id=com.sixthsignallabs.wordlilt)
    // only after the listing is live. While null, every store CTA renders a
    // non-interactive "Coming soon to Android" state.
    playStoreUrl: null as string | null,
    playStoreLabel: "Get it on Google Play",
    unavailableLabel: "Coming soon to Android",
  },
  primaryAction: {
    label: "Get the app",
    anchor: "#download",
  },
  secondaryAction: {
    label: "Explore the game",
    href: "#features",
  },
  navigation: [
    { label: "Features", href: "#features" },
    { label: "How to play", href: "#how-to-play" },
  ],
  supportEmail: APP_SUPPORT_EMAIL,
  supportHref: APP_SUPPORT_HREF,
  supportPrompt: `Questions? Contact ${APP_NAME}`,
  developerName: "Sixth Signal Labs",
  developerUrl: "https://sixthsignallabs.com",
  canonicalBasePath: "/apps/wordlilt",
  featuresIntro: {
    label: "Features",
    title: "Simple to start. Satisfying to solve.",
    description:
      "WordLilt keeps the focus on the board: a clean letter grid, a clear word list, and a burst of color as each word falls into place.",
  },
  features: [
    {
      number: "01",
      title: "Swipe to discover",
      description:
        "Find hidden words across the grid — horizontally, vertically, and diagonally.",
    },
    {
      number: "02",
      title: "Watch the puzzle come together",
      description: "Colorful highlights make every discovered word easy to follow.",
    },
    {
      number: "03",
      title: "Enjoy a little word escape",
      description:
        "An inviting letter grid and clear word list keep the puzzle at the center.",
    },
  ],
  howToPlay: {
    label: "How to play",
    title: "Spot it. Swipe it. Find the next.",
    steps: [
      {
        number: "01",
        title: "Scan the grid",
        description: "Look through the letters for a word from your target list.",
      },
      {
        number: "02",
        title: "Trace the word",
        description: "Swipe from its first letter to its last in a straight line.",
      },
      {
        number: "03",
        title: "Complete the puzzle",
        description: "Find the remaining words and enjoy the finished board.",
      },
    ],
    illustration: {
      window: { row: 0, col: 4, rows: 7, cols: 6 },
      foundWords: ["TIGER"],
      tracingWord: "CAT",
    },
  },
  download: {
    label: "Get the app",
    title: "Your next word break starts here.",
    bullets: [
      "Swipe-to-find word puzzles.",
      "Colorful, readable letter grids.",
      "A satisfying game for a little downtime.",
    ],
  },
  previewPuzzle: {
    category: "Animals",
    grid: [
      "QHMSPWOLFK",
      "ULIONYCRDE",
      "JKVESMAPTH",
      "ZNGUWRTBIL",
      "EPADOGHYGS",
      "BBCKNJUMEV",
      "RQEYLHSWRA",
      "ATMAPUKXND",
      "HDSJREOVCM",
      "KWYNGFITQP",
    ],
    words: [
      { word: "CAT", start: [1, 6], direction: [1, 0], foundTone: null },
      { word: "DOG", start: [4, 3], direction: [0, 1], foundTone: null },
      { word: "LION", start: [1, 1], direction: [0, 1], foundTone: "rose" },
      { word: "TIGER", start: [2, 8], direction: [1, 0], foundTone: "sky" },
      { word: "BEAR", start: [5, 1], direction: [1, 1], foundTone: "mint" },
      { word: "WOLF", start: [0, 5], direction: [0, 1], foundTone: null },
      { word: "FOX", start: [9, 5], direction: [-1, 1], foundTone: "amber" },
      { word: "ZEBRA", start: [3, 0], direction: [1, 0], foundTone: null },
    ] satisfies readonly PuzzleWord[],
  },
  publishing: {
    // TODO: set to true once the Privacy Policy and Terms below are approved for
    // publication. Pages stay out of search indexes until this and the Play
    // Store URL are set.
    legalReviewed: false,
  },
  legal: {
    privacy: {
      slug: "privacy",
      documentNumber: "01",
      title: "Privacy Policy",
      description: `How ${APP_NAME} handles information and protects player privacy.`,
      effectiveDate: LEGAL_LAST_UPDATED,
      introduction: [
        LEGAL_APP_SUMMARY,
        `Last updated: ${LEGAL_LAST_UPDATED}.`,
        `Game progress and settings are stored on your device. ${APP_NAME} does not provide an account, cloud sync, or a Sixth Signal Labs user-data backend, and does not include a product analytics SDK or crash-reporting SDK. The free game is supported by Google AdMob ads.`,
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
                "Game progress, such as puzzle progress, found words, and scores.",
                "In-game balances and items, such as coins and hints, and a record of rewards already credited.",
                "App settings, such as sound preferences.",
                "A local ad-frequency record used only to pace interstitial ads on the device.",
              ],
            },
            {
              type: "paragraph",
              text: `Information that may be handled by the operating system or third-party SDKs (not by a ${APP_NAME} server) includes:`,
            },
            {
              type: "list",
              items: [
                "Google AdMob interstitial and rewarded ads, plus Google UMP consent signals and ad-related device signals, including the device advertising ID where available, when ads are allowed.",
                `If device backup is turned on, Android may include ${APP_NAME}'s locally stored game data in your device backup, according to your device and Google account settings.`,
              ],
            },
            {
              type: "paragraph",
              text: `${APP_NAME} does not collect account credentials, does not create ${APP_NAME} user accounts, and does not run a product analytics SDK or crash-reporting SDK. ${APP_NAME} does not request access to your camera, location, microphone, contacts, or photos.`,
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
                "Provide word-search gameplay and keep your progress on your device.",
                "Remember your settings and in-game balances between sessions.",
                "Show ads that support the free game, including optional rewarded ads you choose to watch for an in-game hint, and manage ad consent where Google UMP is presented.",
                `Rely on platform-level protections for ordinary security and abuse prevention; ${APP_NAME} does not operate a separate user-data backend for this purpose.`,
              ],
            },
            {
              type: "paragraph",
              text: `Because ${APP_NAME} does not include a product analytics or crash-reporting SDK, we do not collect in-app telemetry for product improvement beyond what is needed on-device to run the features above.`,
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
              text: `${APP_NAME} does not upload your game data to a Sixth Signal Labs server. Parties that may receive information in limited situations are:`,
            },
            {
              type: "list",
              items: [
                "Google — AdMob ads and UMP consent when ads are requested or consent choices are managed.",
                "Google — Android device backup, if you have turned it on for your device.",
              ],
            },
            {
              type: "paragraph",
              text: `Retention: game progress, in-game balances, and settings remain on your device until you clear app data or uninstall ${APP_NAME}. Ad and consent-related data are subject to Google’s policies. ${APP_NAME} has no server-side retention of your game data because there is no user-data backend.`,
            },
            {
              type: "paragraph",
              text: "Ad and consent requests to Google use standard HTTPS. We do not claim special encryption certifications beyond ordinary platform and transport protections.",
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
                `Where Google UMP consent is shown, you can manage ad personalization and related consent choices, including later through the ad privacy option in ${APP_NAME}’s settings.`,
                "Rewarded ads are optional. You can keep playing without watching them.",
                "You can reset or delete your device advertising ID in your device settings.",
                `Remove ${APP_NAME}’s local data by clearing app storage or uninstalling ${APP_NAME}.`,
                `There is no ${APP_NAME} account, so there is no separate account-deletion flow.`,
              ],
            },
            {
              type: "paragraph",
              text: `Depending on where you live, you may have rights to access, correct, delete, or opt out of certain processing of personal information. Because ${APP_NAME} is local-first and does not maintain a user-data backend, many requests are fulfilled by actions you take on the device. For questions or rights requests that apply to Sixth Signal Labs or ${APP_NAME}, contact ${APP_SUPPORT_EMAIL}.`,
            },
            {
              type: "paragraph",
              text: `We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date above. Continued use of ${APP_NAME} after an update means you should review the revised policy.`,
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
      effectiveDate: LEGAL_LAST_UPDATED,
      introduction: [
        `${LEGAL_APP_SUMMARY} ${APP_NAME} is free and supported by ads; it does not offer user accounts, cloud sync, in-app purchases, or subscriptions in the current product.`,
        `Last updated: ${LEGAL_LAST_UPDATED}.`,
      ],
      sections: [
        {
          id: "acceptance",
          number: "01",
          title: "Acceptance of these terms",
          blocks: [
            {
              type: "paragraph",
              text: `By downloading, installing, or using ${APP_NAME}, you agree to these Terms of Service. These Terms are an agreement between you and Sixth Signal Labs, the operator of ${APP_NAME}.`,
            },
            {
              type: "paragraph",
              text: `You must be able to form a binding contract under applicable law. You must be at least 13 years old (or the age of digital consent in your jurisdiction, if higher). If you are under the age of majority where you live, you may use ${APP_NAME} only with permission from a parent or guardian where required.`,
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
          title: "Using the game",
          blocks: [
            {
              type: "paragraph",
              text: `${APP_NAME} is currently a free, ad-supported game. There is no ${APP_NAME} account to create or secure, and there are no in-app purchases, subscriptions, or paid plans in the current product.`,
            },
            {
              type: "list",
              items: [
                `Use ${APP_NAME} only for lawful purposes and respect others’ rights, including intellectual property rights.`,
                `Do not reverse engineer, interfere with, scrape, or attempt unauthorized access to the app, ads infrastructure, or related systems, except to the limited extent such activity is expressly allowed by law (for example, certain interoperability exceptions).`,
                "The free game may show Google AdMob interstitial ads and optional rewarded ads (with consent where required). Do not block, fraudulently interact with, or manipulate ad delivery.",
                "In-game coins, hints, and other rewards have no monetary value, cannot be purchased, sold, or exchanged for money, and may change as the game is updated.",
                "Your use is also subject to the Google Play terms that apply where you obtained the app.",
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
              text: `Sixth Signal Labs owns ${APP_NAME}, including the software, branding, user interface, puzzles, word lists, artwork, sounds, and related intellectual property, except for third-party components.`,
            },
            {
              type: "paragraph",
              text: `Subject to these Terms, Sixth Signal Labs grants you a limited, revocable, non-exclusive, non-transferable license to use ${APP_NAME} for personal, lawful purposes on devices you own or control.`,
            },
            {
              type: "paragraph",
              text: "Third-party components — including Google Mobile Ads, OS services, fonts, and libraries — remain owned by their respective owners and are subject to their terms.",
            },
            {
              type: "paragraph",
              text: `If you send feedback or suggestions about ${APP_NAME}, Sixth Signal Labs may use them without obligation to you.`,
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
              text: `${APP_NAME} is provided “as is” and “as available.” Sixth Signal Labs does not warrant that puzzles, saved progress, rewards, ads, or other features will be uninterrupted, accurate, or error-free. Because game data is stored on your device, progress may be lost if you clear app data, uninstall ${APP_NAME}, or change devices.`,
            },
            {
              type: "paragraph",
              text: `We may change, suspend, or discontinue ${APP_NAME} (or any part of it) at any time.`,
            },
            {
              type: "paragraph",
              text: `To the maximum extent permitted by law, Sixth Signal Labs is not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, profits, or goodwill, arising from your use of ${APP_NAME}. To the extent a liability cap applies, Sixth Signal Labs’ total liability for claims relating to ${APP_NAME} will not exceed the amounts you paid to Sixth Signal Labs for the app in the twelve months before the claim (which may be zero for this free, ad-supported product).`,
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
              text: "Sixth Signal Labs may update these Terms. For material changes, we will update the “Last updated” date on this page and, where practical, provide an in-app notice or store listing update.",
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

export function getWordCells({ word, start, direction }: PuzzleWord): GridCell[] {
  return Array.from(word, (_, index) => [
    start[0] + direction[0] * index,
    start[1] + direction[1] * index,
  ] as const);
}

export function findPuzzleWord(word: string): PuzzleWord {
  const match = appData.previewPuzzle.words.find((entry) => entry.word === word);
  if (!match) {
    throw new Error(`WordLilt preview puzzle has no word "${word}".`);
  }
  return match;
}

// Fails the build if an edit to the preview puzzle places a word incorrectly.
for (const entry of appData.previewPuzzle.words) {
  const letters = getWordCells(entry)
    .map(([row, col]) => appData.previewPuzzle.grid[row]?.[col] ?? "")
    .join("");
  if (letters !== entry.word) {
    throw new Error(
      `WordLilt preview puzzle: "${entry.word}" reads "${letters}" in the grid.`,
    );
  }
}

export const isPublishingReady =
  appData.availability.playStoreUrl !== null && appData.publishing.legalReviewed;

export const deploymentSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sixthsignallabs.com";

export function getAppUrl(suffix = "") {
  return new URL(`${appData.canonicalBasePath}${suffix}`, deploymentSiteUrl).toString();
}

export function getAppPath(suffix = "") {
  return `${appData.canonicalBasePath}${suffix}`;
}
