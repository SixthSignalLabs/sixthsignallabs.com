import type { Metadata } from "next";

// Adapted from _template. All HyperPulse content and publication inputs live here.
// Shared operator, effective date, and age requirement follow the existing app
// sites at the owner's request. There is no postal address. Store URLs remain
// optional availability inputs, not placeholders or legal-publication gates.
export const publishing = {
  operatorName: "Sixth Signal Labs",
  supportEmail: "hyperpulse@sixthsignallabs.com",
  effectiveDate: "October 18, 2026",
  minimumAge: 13,
  googlePlayUrl: null as string | null,
  appStoreUrl: null as string | null,
  iosPublicationApproved: false,
  canonicalOrigin:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://sixthsignallabs.com",
} as const;

export const appData = {
  name: "HyperPulse",
  shortName: "HyperPulse",
  androidPackage: "com.sixthsignallabs.hyperpulse",
  iosBundleId: "com.sixthsignallabs.hyperpulse",
  developerName: "Sixth Signal Labs",
  canonicalBasePath: "/apps/hyperpulse",
  tagline: "Plan every set. See your progress.",
  description:
    "An offline-first strength-training tracker for planning routines, logging workouts, managing rest periods, and understanding progress from your own training records.",
  appIconPath: "/apps/hyperpulse/icon-1024.png",
  appLogoPath: "/apps/hyperpulse/hyperpulse-wordmark-transparent.png",
  appMarkPath: "/apps/hyperpulse/bolt-mark-transparent.png",
  supportDescription:
    "Help with HyperPulse routines, workouts, progress, backups, and local data.",
  developerDescription:
    "Focused tools for everyday use. HyperPulse brings planning, training records, and progress into one considered offline experience.",
  availabilityMessage: "Google Play release in preparation.",
} as const;

export const navigation = [
  { label: "HyperPulse", suffix: "" },
  { label: "Support", suffix: "/support" },
  { label: "Privacy", suffix: "/privacy" },
  { label: "Terms", suffix: "/terms" },
] as const;

type AppSuffix = "" | "/support" | "/privacy" | "/terms";
export function getAppPath(suffix: AppSuffix = "") {
  return `${appData.canonicalBasePath}${suffix}` as `/apps/hyperpulse${AppSuffix}`;
}
export function getAppUrl(suffix: AppSuffix = "") {
  return new URL(getAppPath(suffix), publishing.canonicalOrigin).toString();
}
export function getSupportMailto() {
  return `mailto:${publishing.supportEmail}`;
}
// Reject placeholders and unrelated destinations even when a future editor fills
// a store field. App Store visibility additionally requires release approval.
export function getStoreUrl(platform: "android" | "ios") {
  const value =
    platform === "android" ? publishing.googlePlayUrl : publishing.appStoreUrl;
  if (!value || (platform === "ios" && !publishing.iosPublicationApproved))
    return null;
  try {
    const url = new URL(value);
    const host = platform === "android" ? "play.google.com" : "apps.apple.com";
    return url.protocol === "https:" && url.hostname === host
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}
export function pageMetadata(
  title: string,
  description: string,
  suffix: AppSuffix = "",
): Metadata {
  return {
    title: { absolute: `${title} | HyperPulse` },
    description,
    alternates: { canonical: getAppUrl(suffix) },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: appData.name,
      title,
      description,
      url: getAppUrl(suffix),
      images: [
        {
          url: appData.appIconPath,
          width: 1024,
          height: 1024,
          alt: "HyperPulse app icon",
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [appData.appIconPath],
    },
  };
}

export const features = [
  {
    number: "01",
    title: "Build a plan that fits.",
    description:
      "Resume your training-profile setup with goals, experience, equipment, kg or lb, weekly frequency, and duration preferences. Create multiple routines with targets for sets, reps, load, and rest. Assign weekdays, duplicate routines, or archive and restore them.",
  },
  {
    number: "02",
    title: "Stay with the session.",
    description:
      "Log load, reps, optional RPE, and session notes offline. Edit or undo sets, skip exercises, and add or replace movements within the session’s rules. Saved workout state lets you resume after interruption. Use a foreground rest timer with optional sound and haptics.",
  },
  {
    number: "03",
    title: "Read your own progress.",
    description:
      "Review workout history, calendar views, set volume, training load, strength trends, and record comparisons. Eligible loaded sets produce Epley estimated one-repetition maximum values. Every calculation depends on the training records you enter.",
  },
  {
    number: "04",
    title: "Find your next movement.",
    description:
      "Search an offline strength-exercise library with favorites, recently used exercises, equipment and muscle-group filters. Written instructions and illustrative anatomy graphics help you explore movements without implying medical imaging or measured muscle activation.",
  },
  {
    number: "05",
    title: "Check in. Keep perspective.",
    description:
      "Record optional, self-reported daily wellness values and notes. Coach offers general educational suggestions from deterministic local rules based on recorded workouts. It does not use an AI model or measure your recovery.",
  },
  {
    number: "06",
    title: "Keep a copy you control.",
    description:
      "Export a versioned JSON backup or workout-history CSV through the system share sheet. Import supported JSON backups with a validated merge. Choose your theme, weight units, timer sound, and haptics in Settings.",
  },
] as const;

export const limitations = [
  {
    title: "Local records, local responsibility",
    text: "Training records use Expo SQLite on your device. There is no HyperPulse account, cloud backup, or multi-device synchronization. Operating-system backups may include app data. HyperPulse does not separately encrypt SQLite; protection depends on your device and operating system.",
  },
  {
    title: "Your entries, not sensor measurements",
    text: "There is no Health Connect, HealthKit, smartwatch, or fitness-wearable integration. HyperPulse does not read heart rate, HRV, resting heart rate, sleep sensors, or sensor-derived recovery data. Wellness check-ins are manually entered values. Strength estimates, volume, training load, and progression comparisons depend on your records; estimated one-repetition maximum values are estimates.",
  },
  {
    title: "A timer while you train",
    text: "The rest timer is a foreground app feature. It does not schedule a background notification or alarm. Saved timestamps support restoring the timer after interruption, but sound and haptic cues depend on the app and device state.",
  },
  {
    title: "Share thoughtfully",
    text: "JSON and CSV exports can contain sensitive training information. JSON includes profile, routines, check-ins, workouts, and notes; CSV contains workout-set history. You choose destinations through the operating-system share sheet. Erasing app data does not remove separately exported or shared copies.",
  },
  {
    title: "A training utility, not professional care",
    text: "HyperPulse does not provide medical advice, diagnosis, treatment, physical therapy, or individualized professional coaching. Anatomy graphics are illustrative. You remain responsible for selecting appropriate exercises, loads, equipment, and technique. No fitness outcome is guaranteed.",
  },
] as const;

export const supportWarning =
  "Please do not email exported HyperPulse backup files, full workout-history CSV files, sensitive health or injury information, passwords, authentication tokens, or other information unnecessary to diagnose an issue. HyperPulse currently has no account system. Describe the issue, app version, device model, and operating-system version, with sensitive details removed.";
export const supportTopics = [
  {
    id: "profile",
    title: "Complete or edit your training profile",
    paragraphs: [
      "Onboarding saves your answers and current step so you can return after an interruption. Choose your goal, experience, preferred unit, equipment, weekly frequency, duration, and optional exercise exclusions. Use Settings → Edit training profile to revisit your choices.",
    ],
  },
  {
    id: "routines",
    title: "Create, edit, and schedule routines",
    paragraphs: [
      "Open Routines & weekly schedule from Today or Settings. Create an empty routine or an editable template, then set exercise order, sets, reps, target load, and rest. Save your changes. Select a routine for training, duplicate it, archive it, or restore an archived routine.",
      "Enable Use weekly schedule in the plan editor and select recurring weekdays. This changes the schedule shown in the app; it does not send reminders. Template suggestions are editable examples, not professional prescriptions.",
    ],
  },
  {
    id: "workouts",
    title: "Start, resume, and finish a workout",
    paragraphs: [
      "Start the selected routine from Today or the plan editor. Log reps and load in kg or lb, optionally add RPE, and keep session notes. Use Finish to save a completed workout and review its summary. Save & leave preserves an unfinished session for Resume; abandoning a session is a different action.",
      "Saved sets and timer timestamps support workout-state restoration after interruption. Protect important history with a separate export; device or database failures can still cause loss.",
    ],
  },
  {
    id: "sets",
    title: "Correct sets or change a session",
    paragraphs: [
      "Use the logged-set controls to edit a set or undo the latest set. You can skip a movement while keeping its completed sets. Add a movement during the workout, or replace a movement before it has logged sets. Changes to the active session use its own routine snapshot.",
    ],
  },
  {
    id: "timer",
    title: "Use the rest timer and cues",
    paragraphs: [
      "Logging a set starts its planned rest interval. Use the rest controls to add time, pause, resume, or skip rest. Change default rest in Settings; edit existing exercise intervals in the routine editor.",
      "Settings provides Workout haptics and Rest timer sound. These are optional foreground cues, subject to device/app state. No scheduled background notification or alarm is provided.",
    ],
  },
  {
    id: "progress",
    title: "Understand progress and strength estimates",
    paragraphs: [
      "Progress and history summarize your recorded sessions, calendar dates, volume, and training load. Record comparisons require prior comparable exercise data; routine-volume comparisons use matching routine/exercise selections.",
      "Epley estimated 1RM = weight × (1 + reps / 30), using loaded sets of 2–10 reps. RPE is not used in that formula. This is an estimate, not a tested maximum, a medical assessment, or a reason to attempt an unsafe load.",
    ],
  },
  {
    id: "wellness",
    title: "Record a wellness check-in",
    paragraphs: [
      "Use the daily check-in action on Today to enter energy, fatigue, stress, readiness, optional sleep duration, soreness, and notes. You can update that day’s entry. These are self-reported values, not biometric measurements.",
    ],
  },
  {
    id: "coach",
    title: "Understand Coach",
    paragraphs: [
      "Coach uses deterministic local rules and recorded workout history, including recent high-effort sets, to show general educational tips. No AI service or model is involved. It cannot measure recovery or provide individualized professional coaching.",
    ],
  },
  {
    id: "export",
    title: "Export a JSON backup",
    paragraphs: [
      "Choose Settings → Export full backup · JSON. The version 2 export includes profile/preferences, saved routines, check-ins, sessions, sets, and notes, with canonical weights in kg. Choose a destination in the operating-system share sheet. Cancelling sharing does not create an external backup you can rely on.",
      "Keep backups in a location you control, protect sensitive contents, and verify that a saved copy is usable. Exporting does not erase local records or create HyperPulse cloud backup.",
    ],
  },
  {
    id: "import",
    title: "Import and merge a JSON backup",
    paragraphs: [
      "Choose Settings → Import JSON backup → Choose JSON backup. The scoped system document picker opens one selected file. Supported inputs are original version 1 HyperPulse history exports or version 2 full backups with kg weights. Selected files are limited to 5 MB. Review the preview before choosing Import missing records.",
      "Import validates and transactionally merges records; it is not unrestricted database replacement. Existing session/routine IDs and check-in dates are kept, duplicates are skipped, and existing history is not overwritten. Re-importing the same records does not add duplicates. Conflicting unfinished sessions are rejected. The current profile, preferences, and selected routine are preserved, even though preferences are included in the export.",
      "Parser, merge, rollback, and duplicate handling have automated coverage. End-to-end native file selection and import completion still need manual device verification. Do not assume every device import flow has passed QA.",
    ],
  },
  {
    id: "csv",
    title: "Export workout history as CSV",
    paragraphs: [
      "Choose Settings → Export history · CSV and select a share destination. CSV rows contain session ID, workout name, start time, exercise ID, weight in the current unit, reps, RPE where present, and rest seconds. CSV is a history export, not an importable full backup.",
    ],
  },
  {
    id: "preferences",
    title: "Change units and appearance",
    paragraphs: [
      "Choose kg or lb under Settings → Weight unit. Stored weights use canonical kg; display and CSV use your chosen unit. Appearance offers dark, light, system, Rose Pulse, and Pink Pulse Dark. Timer sound and haptics have separate toggles.",
    ],
  },
  {
    id: "erase",
    title: "Erase local data, exported files, and backups",
    paragraphs: [
      "Settings → Erase all local data asks for confirmation, then removes profile/settings, routines, check-ins, the active session, completed sessions, and workout sets from this installation and returns to onboarding. This is a local database deletion, not a forensic overwrite guarantee.",
      "Deleting the app is a separate operating-system action and can remove its local data. Neither action necessarily removes JSON/CSV files previously exported, copies shared elsewhere, operating-system backups, support emails, website logs, or app-store records. Delete exported files in each destination yourself, and manage operating-system backups through the platform’s controls.",
    ],
  },
  {
    id: "connections",
    title: "Cloud sync, recovery, and health connections",
    paragraphs: [
      "There is no HyperPulse account, cloud synchronization, or account-recovery service. There is no HyperPulse-hosted copy to recover after device loss. Keep and verify your own exports; operating-system backup and restore behavior is controlled separately by the platform.",
      "Health Connect, HealthKit, smartwatches, and fitness wearables are not integrated. Heart rate, HRV, sleep-sensor readings, and sensor-derived recovery are not accessed.",
    ],
  },
] as const;

export type AppLegalBlock = {
  readonly type: "paragraph" | "notice";
  readonly text: string;
};
export type AppLegalDocument = {
  readonly slug: "privacy" | "terms";
  readonly title: string;
  readonly description: string;
  readonly introduction: readonly string[];
  readonly sections: readonly {
    readonly id: string;
    readonly title: string;
    readonly blocks: readonly AppLegalBlock[];
  }[];
};
const section = (id: string, title: string, ...paragraphs: string[]) => ({
  id,
  title,
  blocks: paragraphs.map((text) => ({ type: "paragraph" as const, text })),
});
const eraseDisclosure =
  "Erase all local data removes locally stored profile/settings, routines, check-ins, active and completed sessions, and workout sets from that installation. It does not delete previously exported JSON/CSV files, files shared elsewhere, operating-system backup copies, support correspondence, website hosting logs, app-store records, or information independently retained by a destination you selected. Database deletion is not a guarantee of forensic erasure.";

export const legal = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    description:
      "How HyperPulse handles local training records, wellness check-ins, exports, and website visits.",
    introduction: [
      "HyperPulse is an offline-first, manual strength-training utility operated by " +
        publishing.operatorName +
        ". This policy covers the current application and its pages on the Sixth Signal Labs website.",
      "Training data stays in the app’s local database unless you initiate an export or separately send information. Website visits, support communications, operating-system services, and app-store activity involve their own processing, explained below.",
    ],
    sections: [
      section(
        "operator",
        "Scope, operator, and contact",
        `The operator is ${publishing.operatorName}. Contact ${publishing.supportEmail} for privacy questions. The Android package and iOS source bundle identifier are both ${appData.androidPackage}; this does not establish availability in either store.`,
      ),
      section(
        "profile",
        "Profile, routines, and preferences",
        "Local profile information includes a name if supplied, training goals, experience level, preferred weight unit, equipment, weekly frequency, duration, optional exercise exclusions, and onboarding progress. Saved routines contain names, exercises, target sets, repetitions, load, rest intervals, weekday schedules, archive state, and notes.",
        "Preferences include favorite exercises, selected routine, theme, rest defaults, weight increment, sound, and haptics. Recent exercise selections are derived from completed workout sets.",
      ),
      section(
        "training",
        "Workouts and wellness check-ins",
        "Local session records include identifiers, workout names, exercise snapshots, dates/timestamps, status, duration and pause/rest state, exercise changes or skips, notes, and completed sets with repetitions, weight, optional RPE, completion time, and rest. Volume, training-load summaries, trends, record comparisons, and eligible Epley strength estimates are calculated from entries.",
        "Optional daily check-ins include date, energy, fatigue, stress, self-rated readiness, sleep duration if supplied, soreness selections, and notes. These are manually entered self-reports, not sensor-derived health information. Missing check-ins are not measurements.",
      ),
      section(
        "storage",
        "Local storage and protection",
        "The native app uses Expo SQLite for local storage. There is no HyperPulse account, user-data backend, cloud backup, or multi-device synchronization. The app does not upload your training database to a HyperPulse service.",
        "Operating-system backup services may include app data, depending on platform settings. HyperPulse does not separately encrypt its SQLite database. Available protection depends on the device and operating system. Secure your device and exported files; no system provides an absolute security guarantee.",
      ),
      section(
        "connections",
        "Health connections, Coach, and timer",
        "The current app does not integrate with Health Connect, HealthKit, smartwatches, or fitness wearables. It does not access heart rate, HRV, resting heart rate, sleep sensors, or sensor-derived recovery data.",
        "Coach uses deterministic local rules based on recorded workouts; no AI model or external AI service receives your information. Suggestions are educational, not medical advice or professional coaching.",
        "The rest timer uses saved timestamps with optional foreground sound/haptics. Cues depend on device/app state. No scheduled background notifications or rest alarms are created. Anatomy graphics are illustrative, not medical imaging or measured muscle-activation data.",
      ),
      section(
        "files",
        "Backup, import, and sharing",
        "You can initiate a versioned JSON backup or a CSV export from Settings. JSON includes profile/preferences, routines, check-ins, sessions, sets, and notes, with weights in kg. CSV contains session IDs, workout names, start times, exercise IDs, weights in your display unit, repetitions, optional RPE, and rest seconds. These files can contain sensitive information.",
        "The app writes export files into its cache and opens the operating-system share sheet. You select the destination. That destination’s policies and controls govern subsequent processing, retention, and onward sharing. HyperPulse cannot recall copies already shared.",
        "Import uses a scoped system document picker to read a file you select and copies it into app cache for processing. Supported version 1 and 2 HyperPulse JSON files up to 5 MB are validated and merged locally. Existing IDs/check-in dates, current profile/preferences, and selected routine are preserved. Import is not a database replacement. Full native selection-to-completion still needs manual QA.",
      ),
      section(
        "support",
        "Support communications and external services",
        "If you email support, the operator and email provider handle your address, message, attachments you choose to send, and associated communication metadata to address the request. Do not send backup files, full CSV history, sensitive health/injury information, passwords, or tokens.",
        "The operating system processes storage, document selection, file sharing, optional audio/haptics, and backup services. Stores may process installation and store activity under their policies. Website hosting and email providers process requests and communications. Destinations you choose may process exported files. External/store links take you to services governed by their own policies.",
      ),
      section(
        "website",
        "Website analytics, advertising, and cookies",
        "The native HyperPulse app has no configured advertising SDK, product-analytics SDK, or crash-reporting service. The website is different: its existing site-wide PostHog initialization runs when a project token and host are configured, with automatic capture defaults and exception capture enabled. Website interaction, device/browser, page, and error information may therefore be sent to the configured PostHog host, and browser storage or cookies may be used by that integration.",
        "The website uses its existing site-wide analytics integration; these HyperPulse pages do not add separate trackers or advertising pixels. Browser storage and cookies may be used by that integration. Hosting providers may process IP addresses, request/browser information, timestamps, and security logs to serve and protect the site. Website analytics is separate from the training records stored locally in HyperPulse.",
      ),
      section(
        "retention",
        "Retention and deletion",
        "Local app data remains in the installation until erased, removed through device controls, or affected by uninstall, device loss, or storage failure. " +
          eraseDisclosure,
        "Exported files and cache copies are separate from the database. Manage separately saved files, shared copies, trash, and destination retention using the relevant app/service controls. Operating-system backups have separate platform settings and lifecycles; removing the app is not a request to delete those backups.",
        "Support correspondence is retained as needed to handle requests and meet applicable legal obligations. Website hosting/security logs and analytics are retained according to the relevant service settings, operational needs, and applicable obligations. App-store records are independently governed by the store. Retention for these records is separate from the local training database and from files you export.",
      ),
      section(
        "choices",
        "Your choices and applicable rights",
        "You can edit profile/preferences, control optional check-ins and cues, export data, choose sharing destinations, and erase local app records. Manage device backups and destination copies separately. Because the operator has no hosted training database, it cannot retrieve or remotely delete the local records on your device.",
        "Depending on your location and applicable law, you may have rights to access, correct, delete, or obtain a copy of personal information, restrict or object to processing, withdraw consent where relied on, or complain to a supervisory authority. Contact support about information held in correspondence or website services. Applicable rights and any necessary identity verification depend on the request; do not send unnecessary sensitive documents.",
      ),
      section(
        "international",
        "International processing",
        "Device platforms, app stores, website and analytics hosts, email providers, and sharing destinations may process information in countries different from yours, where privacy laws may differ. Their processing is subject to their applicable terms and policies. Contact us with questions about information handled by Sixth Signal Labs.",
      ),
      section(
        "children",
        "Children and legal capacity",
        `HyperPulse is not directed to children under ${publishing.minimumAge}. We do not knowingly collect personal information from children under ${publishing.minimumAge}. You must meet the age of digital consent in your jurisdiction if it is higher, and have parent or guardian permission where required. Store content ratings do not replace these requirements.`,
        "Do not submit children’s sensitive information to support. Contact support if you believe information requiring special treatment has been sent to the operator.",
      ),
      section(
        "changes",
        "Changes and contact",
        `Policy changes will be identified by the Last updated date. Material changes will be communicated as required by applicable law. Questions and privacy requests can be sent to ${publishing.supportEmail}.`,
      ),
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms of Use",
    description:
      "Terms for HyperPulse’s manual workout planning and local training records.",
    introduction: [
      "These Terms of Use govern your access to and use of HyperPulse, a manual workout-planning and record-keeping application.",
      `These terms are an agreement between you and ${publishing.operatorName}, the operator of HyperPulse. Read the Privacy Policy alongside these terms.`,
    ],
    sections: [
      section(
        "acceptance",
        "Acceptance, capacity, and consumer rights",
        `By downloading, installing, or using HyperPulse, you agree to these terms. If you do not agree, do not use the app. You must be able to form a binding contract under applicable law and be at least ${publishing.minimumAge} years old, or the age of digital consent in your jurisdiction if higher. If you are under the age of majority, you may use HyperPulse only with parent or guardian permission where required.`,
        "Nothing in these terms excludes mandatory consumer rights, statutory guarantees, or other protections that cannot lawfully be limited. Those protections prevail over conflicting terms.",
      ),
      section(
        "purpose",
        "A manual training utility",
        "HyperPulse helps you plan strength routines, log workouts, manage foreground rest periods, and review user-entered records. It is not a doctor, medical provider, physical therapist, emergency service, or certified personal trainer. It provides no medical advice, diagnosis, treatment, rehabilitation plan, individualized professional coaching, or guaranteed result.",
        "Seek appropriate professional advice about health concerns and exercise suitability. Do not rely on the app for urgent medical decisions or emergency assistance.",
      ),
      section(
        "exercise",
        "Exercise risks and your responsibilities",
        "Exercise can cause injury or other harm. You are responsible for deciding whether an activity is suitable, using appropriate loads and equipment, maintaining technique, and choosing when to stop. Written instructions and illustrative anatomy cannot assess your condition or supervise a movement. No fitness or strength outcome is guaranteed.",
      ),
      section(
        "records",
        "Entries, calculations, and suggestions",
        "You are responsible for accurate entries and for reviewing metrics and exports before relying on them. Estimated one-repetition maximum, volume, training load, trends, and records are calculations from your entries, not measured physiological capacity. Epley estimates use eligible loaded sets and are not tested maximums.",
        "Wellness check-ins are self-reported. Coach uses deterministic local rules, not AI or a professional assessment. It cannot measure recovery or readiness. No Health Connect, HealthKit, wearable, or sensor integration is provided in the current version.",
      ),
      section(
        "license",
        "Personal license and acceptable use",
        "Subject to these terms, the operator grants a limited, non-exclusive, non-transferable license to use HyperPulse for lawful personal purposes on devices you own or control. Do not unlawfully copy, redistribute, sell, reverse engineer, interfere with, or misuse the software, bypass protections, or infringe others’ rights. Exceptions required by mandatory law, including lawful interoperability rights, are preserved.",
      ),
      section(
        "ownership",
        "Ownership and your records",
        "The application, software, interface, brand, supplied content, and approved assets belong to their respective rights holders, including Sixth Signal Labs and third-party licensors. No ownership of the software or brand is transferred. You retain rights in your own records and notes. Processing local entries and exports does not require a broad cloud-hosting license.",
      ),
      section(
        "local-data",
        "Local storage and possible data loss",
        "Training records use local Expo SQLite storage. There is no HyperPulse account, cloud backup, synchronization, or account-recovery service. The database is not separately encrypted by HyperPulse. Device and operating-system protections apply; operating-system backups may include app data.",
        "Uninstalling, resetting, losing, replacing, or damaging a device may permanently remove access to records. You are responsible for making, securing, and testing exported backups before relying on them. The operator cannot recover a training database it does not host. " +
          eraseDisclosure,
      ),
      section(
        "backups",
        "Import, export, and sharing limitations",
        "JSON import accepts supported versioned HyperPulse backups within the 5 MB limit. It validates and merges new sessions, routines, and check-ins, preserving existing IDs/check-in dates, current profile/preferences, and selected routine. Duplicate imports skip existing records; conflicting unfinished sessions are rejected. It is not a full database replacement or profile restore. Complete native file selection/import still requires manual device QA.",
        "JSON can contain sensitive profile, routines, check-ins, workouts, and notes. CSV contains workout-set history and is not a full restorable backup. You choose export destinations through the operating-system share sheet and are responsible for reviewing recipients and protecting copies. Sharing can place information beyond the operator’s control.",
      ),
      section(
        "third-parties",
        "Operating systems and other services",
        "Operating-system storage, backups, the file picker/share sheet, destinations you choose, the website host/analytics provider, and email providers have their own terms and policies. If HyperPulse is distributed through Google Play, applicable Google Play terms also govern your use of that store.",
      ),
      section(
        "availability",
        "Availability, compatibility, and changes",
        "Features and device compatibility may change with updates. The operator may update, suspend, or discontinue distribution or features, subject to applicable law and any mandatory notice or remedy. Continuous availability and compatibility with every device or future operating-system version are not promised. Export important records before upgrades or device changes.",
      ),
      section(
        "liability",
        "Warranties and liability",
        "To the extent permitted by applicable law, HyperPulse is provided as available without additional promises that it will be uninterrupted, error-free, or suitable for a particular training outcome. Nothing excludes legally required warranties or remedies.",
        "To the extent permitted by law, the operator is not responsible for indirect or consequential losses arising from use of the app. No exclusion applies where prohibited, including liability that cannot lawfully be excluded for fraud, negligence causing death or personal injury, or mandatory consumer rights.",
      ),
      section(
        "law",
        "Governing law",
        "These terms are subject to applicable law. Nothing in them limits mandatory consumer protections or your right to bring a claim in a court or forum available to you under applicable law.",
      ),
      section(
        "general",
        "Severability, waiver, assignment, and agreement",
        "If a provision is unenforceable, the remaining terms continue to the extent permitted by law. Failure to enforce a right is not a waiver. Any permitted assignment must preserve your mandatory rights and not reduce protections owed to you. Subject to mandatory law, these terms and any applicable platform terms form the agreement concerning use of HyperPulse; they do not override statutory rights.",
        "Material changes should be identified by the updated date and communicated as required by law. Acceptance requirements depend on applicable law; no blanket waiver is inferred from silence.",
      ),
      section(
        "contact",
        "Contact",
        `Questions about HyperPulse or these terms can be sent to ${publishing.supportEmail}. Operator: ${publishing.operatorName}.`,
      ),
    ],
  },
} satisfies Record<"privacy" | "terms", AppLegalDocument>;

export const externalLinks = {
  googlePlayTerms: "https://play.google.com/intl/en_us/about/play-terms/",
} as const;
