// Complete these values before publishing Oryfin's App Store website URLs.
// Missing required values keep every Oryfin route out of search indexes and
// produce a visible review notice instead of publishing placeholder text.
export const oryfinPublishing = {
  operatorName: null as string | null,
  postalAddress: null as string | null,
  supportEmail: null as string | null,
  effectiveDate: null as string | null,
  governingJurisdiction: null as string | null,
  appStoreUrl: null as string | null,
  canonicalOrigin: process.env.NEXT_PUBLIC_SITE_URL?.trim() || null,
  supabaseEmailSignInShips: null as boolean | null,
  appStoreAgeRating: null as string | null,
  telephone: null as string | null,
  approvedSupportResponseMessage: null as string | null,
} as const;

export const oryfin = {
  name: "Oryfin",
  shortName: "Oryfin",
  bundleId: "com.sixthsignallabs.oryfin",
  tagline: "Your money, finally clear.",
  description:
    "A local-first personal money tracker for understanding spending, planning budgets, following savings goals, and estimating what may be safe to spend.",
  basePath: "/apps/oryfin",
  appIconPath: "/apps/oryfin/oryfin-app-icon-1024.png",
  logoPath: "/apps/oryfin/oryfin-logo-primary.svg",
  darkLogoPath: "/apps/oryfin/oryfin-logo-on-dark.png",
  developerName: "Sixth Signal Labs",
  developerUrl: "https://sixthsignallabs.com",
} as const;

export const externalLinks = {
  appleSubscriptions: "https://apps.apple.com/account/subscriptions",
  applePrivacy: "https://www.apple.com/legal/privacy/en-ww/",
  appleStandardEula: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
  revenueCatPrivacy: "https://www.revenuecat.com/privacy",
  supabasePrivacy: "https://supabase.com/privacy",
} as const;

export const landingFeatureGroups = [
  {
    number: "01",
    title: "Record the details that matter",
    description:
      "Manually record income, expenses, transfers, and refunds with categories, account labels, merchants, notes, tags, and transaction dates.",
  },
  {
    number: "02",
    title: "Plan the month ahead",
    description:
      "Set monthly category budgets and thresholds, create recurring income and expense schedules, and view upcoming items in a financial calendar.",
  },
  {
    number: "03",
    title: "See the bigger picture",
    description:
      "Follow savings contributions, review spending breakdowns and trends, and estimate Safe to Spend from the information you enter.",
  },
] as const;

export const verifiedCapabilities = [
  "Manual income, expense, transfer, and refund tracking",
  "Categories, account labels, merchants, notes, tags, and transaction dates",
  "Monthly category budgets with configurable thresholds",
  "Recurring income and expense schedules with a financial calendar",
  "Savings goals and contribution progress",
  "Spending breakdowns, trends, and Safe to Spend estimates",
  "A user-selected currency",
  "Optional local budget and goal notifications",
  "An optional biometric app lock",
  "User-initiated transaction CSV sharing for Pro",
] as const;

export const supportTopics = [
  {
    id: "transactions",
    title: "Transactions",
    paragraphs: [
      "Use Transactions to add income, an expense, or a transfer. Each entry can include an amount, currency, category, account label, merchant, notes, tags, and date. Refunds are recorded from an existing expense and reduce recorded spending.",
      "Open a transaction to review it, then choose Edit or Delete. Deleting a transaction does not delete its category, budget, or any unrelated record.",
    ],
  },
  {
    id: "budgets",
    title: "Budgets and thresholds",
    paragraphs: [
      "Budgets apply to an expense category for the current month. The free plan supports up to three monthly budgets; Pro removes that limit.",
      "A threshold controls when a budget is shown as needing attention. If notifications are enabled, Oryfin can send a local update when recorded activity crosses the threshold or goes over budget. It does not schedule automatic daily budget reminders in this release.",
    ],
  },
  {
    id: "goals",
    title: "Savings goals",
    paragraphs: [
      "Create a goal with a name, target amount, amount already saved, target date, and optional notes. Open an existing goal to add a contribution or edit its details.",
      "The free plan supports one active goal. Pro supports unlimited goals. Goal contributions shown in Oryfin are planning records and do not move money between real accounts.",
    ],
  },
  {
    id: "recurring-calendar",
    title: "Recurring schedules and calendar",
    paragraphs: [
      "Recurring entries can represent income or expenses on weekly, biweekly, monthly, quarterly, yearly, or custom-day schedules. The financial calendar shows scheduled items and lets you record an occurrence.",
      "Oryfin does not connect to a biller or bank, pay a bill, or automatically verify whether a scheduled item occurred.",
    ],
  },
  {
    id: "safe-to-spend",
    title: "Safe to Spend",
    paragraphs: [
      "Safe to Spend is an estimate based on available income, completed expenses, unpaid recurring expenses through the end of the month, and a planned monthly savings contribution. Transfers are excluded and recorded refunds reduce spending.",
      "The result depends on the completeness and accuracy of the information you enter. It is a planning estimate, not a balance, guarantee, or financial recommendation.",
    ],
  },
  {
    id: "notifications",
    title: "Notifications",
    paragraphs: [
      "Notifications are optional and require operating-system permission. Oryfin can generate local budget updates after relevant transaction changes and goal updates after progress changes.",
      "You can turn notifications off in Oryfin and manage permission in device settings. Notification text may be visible on the lock screen according to your operating-system settings.",
    ],
  },
  {
    id: "biometric-lock",
    title: "Biometric lock",
    paragraphs: [
      "Enable Biometric lock in Settings after Face ID, Touch ID, or device biometrics are enrolled. The operating system performs the check and reports success or failure to Oryfin.",
      "The biometric lock does not add separate encryption to Oryfin's local database and is not a substitute for securing the device itself.",
    ],
  },
  {
    id: "csv-sharing",
    title: "CSV sharing",
    paragraphs: [
      "Pro users can choose Export transactions in Settings. Oryfin prepares CSV text containing transaction dates, types, amounts in minor units, currencies, merchants, categories, account labels, notes, tags, and recurring status, then opens the operating-system share sheet.",
      "The destination you choose controls what happens next. Some share destinations may receive the CSV as text rather than as a file attachment.",
    ],
  },
  {
    id: "purchases",
    title: "Purchases and subscriptions",
    paragraphs: [
      "Choose Restore purchases in Oryfin Settings or on the Pro screen while signed into the Apple Account used for the purchase. Oryfin asks Apple and RevenueCat for the current entitlement status.",
      "Manage or cancel an Apple subscription from Apple's subscription-management page. Deleting local data, signing out, deleting an account, or deleting Oryfin does not automatically cancel an Apple subscription.",
    ],
  },
] as const;

const requiredPublishingValues = [
  ["Legal operator name", oryfinPublishing.operatorName],
  ["Legal postal address", oryfinPublishing.postalAddress],
  ["Support email", oryfinPublishing.supportEmail],
  ["Effective date", oryfinPublishing.effectiveDate],
  ["Governing jurisdiction", oryfinPublishing.governingJurisdiction],
  ["Canonical website origin", oryfinPublishing.canonicalOrigin],
  ["Supabase email sign-in shipping decision", oryfinPublishing.supabaseEmailSignInShips],
  ["Final App Store age rating", oryfinPublishing.appStoreAgeRating],
] as const;

export const launchBlockers = requiredPublishingValues
  .filter(([, value]) => value === null || value === "")
  .map(([label]) => label);

export const isPublishingReady = launchBlockers.length === 0;

export const metadataOrigin =
  oryfinPublishing.canonicalOrigin ?? "https://sixthsignallabs.com";

export function getOryfinPath(suffix = "") {
  return `${oryfin.basePath}${suffix}`;
}

export function getOryfinUrl(suffix = "") {
  return new URL(getOryfinPath(suffix), metadataOrigin).toString();
}

export function getSupportMailto(subject = "Oryfin support") {
  return oryfinPublishing.supportEmail
    ? `mailto:${oryfinPublishing.supportEmail}?subject=${encodeURIComponent(subject)}`
    : null;
}
