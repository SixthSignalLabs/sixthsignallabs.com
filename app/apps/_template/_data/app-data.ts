// Customize this file after copying `_template`; it is the single source of
// app-specific content, links, metadata, features, and draft legal text.

const APP_NAME = "APP_NAME";
const APP_TAGLINE = "APP_TAGLINE";
const APP_SUPPORT_EMAIL = "support@example.com";

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
  shortName: "APP",
  tagline: APP_TAGLINE,
  description:
    "Replace this description with a clear explanation of what the app does and who it helps.",
  appIconPath: null as string | null,
  productScreenshotPath: null as string | null,
  productScreenshotAlt: `${APP_NAME} product interface`,
  primaryAction: {
    label: "Get the app",
    href: "#APP_STORE_OR_PRODUCT_URL",
  },
  supportEmail: APP_SUPPORT_EMAIL,
  developerName: "Sixth Signal Labs",
  developerUrl: "https://sixthsignallabs.com",
  canonicalBasePath: "/apps/APP_SLUG",
  features: [
    {
      number: "01",
      title: "APP_FEATURE_ONE",
      description:
        "Describe a concrete capability and the useful outcome it creates for the user.",
    },
    {
      number: "02",
      title: "APP_FEATURE_TWO",
      description:
        "Explain another important workflow in direct, benefit-focused language.",
    },
    {
      number: "03",
      title: "APP_FEATURE_THREE",
      description:
        "Use this space for a final differentiator, trust signal, or time-saving feature.",
    },
  ],
  legal: {
    privacy: {
      slug: "privacy",
      documentNumber: "01",
      title: "Privacy Policy",
      description: `How ${APP_NAME} handles information and protects user privacy.`,
      effectiveDate: "[EFFECTIVE DATE — LEGAL REVIEW REQUIRED]",
      introduction: [
        `This template is draft content only. Replace it with a policy that accurately reflects ${APP_NAME}'s data practices and obtain appropriate legal review before publishing.`,
      ],
      sections: [
        {
          id: "information-we-collect",
          number: "01",
          title: "Information we collect",
          blocks: [
            {
              type: "notice",
              text: "DRAFT PLACEHOLDER — document every category of personal, device, analytics, and account information the app actually collects.",
            },
            {
              type: "paragraph",
              text: `Describe information users provide directly and information generated when they use ${APP_NAME}.`,
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
              text: "Explain each purpose for processing information, including providing the service, support, security, and product improvement.",
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
                "Identify service providers or other parties that may receive information.",
                "State how long each category of information is retained.",
                "Describe safeguards used when information is transferred or stored.",
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
              text: "Explain applicable access, correction, deletion, consent, and opt-out choices, including how users can make a request.",
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
              text: `For privacy questions or requests, contact ${APP_SUPPORT_EMAIL}. Replace this address if the app uses a dedicated privacy contact.`,
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
        `These terms are placeholder content and are not legal advice. Replace them with terms that reflect ${APP_NAME}'s product, business model, and jurisdiction, then obtain appropriate legal review before publishing.`,
      ],
      sections: [
        {
          id: "acceptance",
          number: "01",
          title: "Acceptance of these terms",
          blocks: [
            {
              type: "paragraph",
              text: `Describe when and how a user agrees to these terms and who is eligible to use ${APP_NAME}.`,
            },
          ],
        },
        {
          id: "using-the-service",
          number: "02",
          title: "Using the service",
          blocks: [
            {
              type: "notice",
              text: "DRAFT PLACEHOLDER — replace this section with accurate rules for accounts, acceptable use, subscriptions, and app-specific restrictions.",
            },
            {
              type: "list",
              items: [
                "Use the service lawfully and respect the rights of others.",
                "Keep account credentials secure where accounts are provided.",
                "Do not interfere with the service or attempt unauthorized access.",
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
              text: "Explain ownership of the app, its content, user-provided content, and any licenses needed to operate the service.",
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
              text: "Add legally reviewed warranty disclaimers, service availability terms, and limitations of liability appropriate to the app and governing law.",
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
              text: `Explain how changes will be communicated and direct terms questions to ${APP_SUPPORT_EMAIL}.`,
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
