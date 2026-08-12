import {
  externalLinks,
  getSupportMailto,
  oryfin,
  oryfinPublishing,
} from "./oryfin-data";

export type LegalInline =
  | string
  | {
      readonly text: string;
      readonly href?: string;
    };

export type LegalBlock =
  | {
      readonly type: "paragraph" | "notice";
      readonly content: readonly LegalInline[];
    }
  | {
      readonly type: "list";
      readonly items: readonly (readonly LegalInline[])[];
    };

export type LegalDocument = {
  readonly slug: "privacy" | "terms";
  readonly documentNumber: string;
  readonly title: string;
  readonly description: string;
  readonly sections: readonly {
    readonly id: string;
    readonly number: string;
    readonly title: string;
    readonly blocks: readonly LegalBlock[];
  }[];
};

const operatorName =
  oryfinPublishing.operatorName ??
  "the Oryfin operator, whose legal name must be supplied before publication";
const postalAddress =
  oryfinPublishing.postalAddress ?? "a postal address that must be supplied before publication";
const governingJurisdiction =
  oryfinPublishing.governingJurisdiction ??
  "the jurisdiction that must be selected after legal review";
const supportMailto = getSupportMailto("Oryfin privacy request");
const supportContact: LegalInline = oryfinPublishing.supportEmail
  ? { text: oryfinPublishing.supportEmail, href: supportMailto ?? undefined }
  : "the support email address that must be supplied before publication";

const accountPrivacyBlocks: readonly LegalBlock[] =
  oryfinPublishing.supabaseEmailSignInShips === true
    ? [
        {
          type: "paragraph",
          content: [
            "If you choose passwordless email sign-in, Oryfin sends your email address to Supabase to request a magic link. Supabase creates or identifies a user record and processes the authentication email, user identifier, session information, authentication tokens, and operational information needed to provide and protect authentication. On native devices, Oryfin stores the session using platform secure storage. Financial records are not uploaded to Supabase in this release.",
          ],
        },
        {
          type: "notice",
          content: [
            "Account deletion limitation: the reviewed app includes sign-out but no permanent in-app account-deletion action. This must be resolved before account creation ships. Contacting support through a website is not a substitute for Apple's in-app account-deletion requirement.",
          ],
        },
      ]
    : oryfinPublishing.supabaseEmailSignInShips === false
      ? [
          {
            type: "paragraph",
            content: [
              "Passwordless email sign-in is disabled in this release. Oryfin therefore does not create a Supabase account or send authentication data to Supabase. Financial records remain local regardless.",
            ],
          },
        ]
      : [
          {
            type: "notice",
            content: [
              "Publication blocker: the shipping decision for optional Supabase passwordless email sign-in has not been supplied. This section must be replaced with the applicable enabled or disabled language before publication.",
            ],
          },
        ];

const accountTermsBlocks: readonly LegalBlock[] =
  oryfinPublishing.supabaseEmailSignInShips === true
    ? [
        {
          type: "paragraph",
          content: [
            "Oryfin may offer optional passwordless email sign-in to maintain a stable subscription identity. You are responsible for access to the email account used for sign-in. Signing out does not remove local financial records or cancel a subscription. The reviewed release does not provide permanent account deletion inside the app; this is a release blocker that must be corrected if account creation ships.",
          ],
        },
      ]
    : oryfinPublishing.supabaseEmailSignInShips === false
      ? [
          {
            type: "paragraph",
            content: [
              "This release does not enable optional Oryfin account creation. Subscription restoration remains subject to Apple's and RevenueCat's purchase systems.",
            ],
          },
        ]
      : [
          {
            type: "notice",
            content: [
              "Publication blocker: decide whether optional Supabase email accounts ship, then replace this notice with the matching account terms.",
            ],
          },
        ];

export const privacyDocument: LegalDocument = {
  slug: "privacy",
  documentNumber: "01",
  title: "Privacy Policy",
  description: "How Oryfin handles local financial records and service-related information.",
  sections: [
    {
      id: "scope-and-operator",
      number: "01",
      title: "Scope, operator, and contact",
      blocks: [
        {
          type: "paragraph",
          content: [
            `This policy covers the Oryfin application (${oryfin.bundleId}) and these Oryfin website pages. Oryfin is operated by ${operatorName}. The operator's postal address is ${postalAddress}.`,
          ],
        },
        {
          type: "paragraph",
          content: [
            "For privacy questions or requests, contact ",
            supportContact,
            ". The effective date and complete operator details must be finalized before this policy is published.",
          ],
        },
      ],
    },
    {
      id: "local-financial-records",
      number: "02",
      title: "Financial records stay local",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Oryfin stores financial records on your device. These can include transactions, amounts, currencies, categories, account labels, merchants, notes, tags, transaction dates, budgets, budget thresholds, savings goals, recurring schedules, income estimates, selected currency, notification and biometric-lock settings, and other app preferences.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "On native platforms, Oryfin uses Expo SQLite and the database filename oryfin.db. Oryfin does not provide cloud backup or multi-device financial-record synchronization in this release. Financial records are not uploaded to Supabase or RevenueCat.",
          ],
        },
        {
          type: "notice",
          content: [
            "Oryfin does not separately encrypt its local SQLite database. Available protections are the device and operating system's storage protections and, if you enable it, Oryfin's biometric app lock. Loss, damage, reset, or deletion of the device or app may permanently remove records because Oryfin has no cloud backup.",
          ],
        },
      ],
    },
    {
      id: "optional-account",
      number: "03",
      title: "Optional email account",
      blocks: accountPrivacyBlocks,
    },
    {
      id: "purchases",
      number: "04",
      title: "Purchases and subscriptions",
      blocks: [
        {
          type: "paragraph",
          content: [
            "If purchases are configured, Apple processes the purchase and payment through your Apple Account. RevenueCat processes app-user identifiers, product and offering information, entitlement status, purchase and restoration events, and related technical information needed to determine whether Pro is active. If optional Oryfin sign-in is enabled, the Supabase user identifier may be associated with the RevenueCat customer identity.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Oryfin does not receive your full payment-card details from Apple. Apple and RevenueCat retain and use purchase-related information under their own terms, policies, and legal obligations. Read ",
            { text: "Apple's privacy policy", href: externalLinks.applePrivacy },
            " and ",
            { text: "RevenueCat's privacy policy", href: externalLinks.revenueCatPrivacy },
            ".",
          ],
        },
      ],
    },
    {
      id: "notifications-and-biometrics",
      number: "05",
      title: "Notifications and biometrics",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Oryfin asks for notification permission only when you choose to enable notifications. It can generate local budget updates when recorded activity crosses a configured threshold or exceeds a budget, and local goal updates when progress changes. Oryfin does not schedule automatic daily reminders in this release.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Notification content may appear on your device's lock screen depending on system settings. You can disable notifications in Oryfin and manage permissions or previews in device settings.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "If you enable the biometric app lock, the operating system performs Face ID, Touch ID, or device-biometric authentication. Oryfin receives only the authentication result; it does not receive or store biometric templates.",
          ],
        },
      ],
    },
    {
      id: "csv-sharing",
      number: "06",
      title: "CSV sharing",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Pro users can initiate transaction CSV sharing. The export can contain transaction dates, types, amounts in minor units, currencies, merchants, categories, account labels, notes, tags, and recurring status. Oryfin sends that CSV text to the operating-system share sheet only after you choose Export.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "You choose the destination. That destination and the operating system then process the shared content under their own terms and privacy practices. Review the destination carefully, especially when the export contains sensitive financial details.",
          ],
        },
      ],
    },
    {
      id: "support-and-links",
      number: "07",
      title: "Support, website, and external links",
      blocks: [
        {
          type: "paragraph",
          content: [
            "If you email support, the operator receives your email address, message, attachments, and any other details you choose to provide. Do not send passwords, authentication tokens, or detailed financial records. External links open destinations outside Oryfin, whose operators control their own processing.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The reviewed Oryfin website contains no analytics SDK, advertising pixel, fingerprinting, or nonessential cookie code. The website host may still process IP address, request, device, and security-log information needed to deliver and protect the site. This statement must be reviewed again if the site's deployment or integrations change.",
          ],
        },
      ],
    },
    {
      id: "disclosures",
      number: "08",
      title: "When information leaves your device",
      blocks: [
        {
          type: "list",
          items: [
            ["Apple and RevenueCat receive purchase and entitlement information when subscriptions are configured or restored."],
            [
              oryfinPublishing.supabaseEmailSignInShips === true
                ? "Supabase receives authentication information when you choose email sign-in. Read "
                : "Supabase processing depends on the unresolved account-shipping decision. Read ",
              { text: "Supabase's privacy policy", href: externalLinks.supabasePrivacy },
              ".",
            ],
            ["The website host receives technical requests needed to serve and protect these pages."],
            ["A destination you select through the share sheet receives the content you choose to share."],
            ["Information may be disclosed where reasonably necessary to comply with law, enforce rights, or protect users, the service, or others, subject to applicable law."],
          ],
        },
      ],
    },
    {
      id: "retention-and-deletion",
      number: "09",
      title: "Retention and deletion",
      blocks: [
        {
          type: "list",
          items: [
            ["Local financial records remain on the device until you edit them, delete individual records, use Delete all local data, or remove app storage. Delete all local data removes transactions, budgets, goals, and recurring schedules from that device. It does not claim to remove every preference."],
            ["Deleting local financial records does not delete an optional Supabase account, end an Oryfin session, cancel a subscription, erase Apple or RevenueCat purchase records, or remove support correspondence."],
            ["If accounts ship, account and authentication records remain subject to the configured Supabase project and applicable retention obligations. The reviewed app currently has no permanent account-deletion action."],
            ["Apple and RevenueCat retain purchase records under their policies and applicable obligations. The operator cannot erase records Apple must retain."],
            ["Support correspondence is kept only as long as reasonably needed to respond, maintain records, resolve disputes, and meet legal obligations. A fixed period has not been approved."],
            ["Hosting and security logs are retained according to the selected host's configuration and obligations; no website-host retention period has been supplied."],
          ],
        },
      ],
    },
    {
      id: "choices-and-rights",
      number: "10",
      title: "Your choices and privacy rights",
      blocks: [
        {
          type: "paragraph",
          content: [
            "You can choose what financial information to enter, edit or delete local records, turn notifications and biometric lock on or off, choose whether to share a CSV, and decline optional email sign-in if it is offered. Device settings provide additional controls for notifications, biometrics, app storage, and permissions.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Depending on where you live, you may have rights to request access, correction, deletion, restriction, objection, portability, withdrawal of consent, or review by a privacy regulator. These rights can be limited by applicable law. Contact ",
            supportContact,
            " to make a request once the support address is published; identity verification may be required.",
          ],
        },
      ],
    },
    {
      id: "international-processing",
      number: "11",
      title: "International processing",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Apple, RevenueCat, Supabase if enabled, the website host, support providers, and share destinations may process information in countries other than yours. Their locations and transfer mechanisms depend on the final service configuration and their policies. No specific international-transfer safeguard is promised by this draft.",
          ],
        },
      ],
    },
    {
      id: "children",
      number: "12",
      title: "Children and legal capacity",
      blocks: [
        {
          type: "notice",
          content: [
            `The final App Store age rating has not been supplied. Eligibility and parental-consent language must be reviewed against that rating, the governing jurisdiction, and Oryfin's financial-planning subject matter before publication. The policy does not currently authorize account creation by a child.`,
          ],
        },
      ],
    },
    {
      id: "changes-and-contact",
      number: "13",
      title: "Policy changes and contact",
      blocks: [
        {
          type: "paragraph",
          content: [
            "This policy may change when Oryfin's features, vendors, or legal obligations change. The updated policy will show a revised effective date and, where required, additional notice. Questions can be sent to ",
            supportContact,
            ` or mailed to ${postalAddress}.`,
          ],
        },
      ],
    },
  ],
};

export const termsDocument: LegalDocument = {
  slug: "terms",
  documentNumber: "02",
  title: "Terms of Use",
  description: "Supplemental terms governing use of the Oryfin application and website.",
  sections: [
    {
      id: "review-notice",
      number: "01",
      title: "Draft for legal review",
      blocks: [
        {
          type: "notice",
          content: [
            `These supplemental Terms are a conservative draft for review by qualified counsel in ${governingJurisdiction}. They must not be treated as final or published until the operator identity, effective date, governing law, age eligibility, account configuration, and consumer-law provisions are approved.`,
          ],
        },
      ],
    },
    {
      id: "acceptance",
      number: "02",
      title: "Acceptance and legal capacity",
      blocks: [
        {
          type: "paragraph",
          content: [
            `These Terms form an agreement between you and ${operatorName} concerning Oryfin. By downloading, accessing, purchasing, or using Oryfin, you agree to these Terms and Apple's applicable license terms. If you lack legal capacity to agree, do not use Oryfin unless a parent or legal guardian can validly agree where permitted by law.`,
          ],
        },
        {
          type: "paragraph",
          content: [
            "Nothing in these Terms excludes, restricts, or modifies a consumer right, warranty, remedy, or liability that cannot lawfully be excluded or limited.",
          ],
        },
      ],
    },
    {
      id: "role-and-estimates",
      number: "03",
      title: "A manual planning utility",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Oryfin is a manual record-keeping and personal planning utility. It is not a bank, payment processor, lender, broker, accountant, tax adviser, fiduciary, or financial adviser. It does not connect to bank accounts, import transactions automatically, move money, execute trades, prepare tax returns, or verify your balances or obligations.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Safe to Spend, budget status, trends, goal progress, recurring projections, and exports depend on the entries and settings you provide. They are estimates and may be incomplete, delayed, or wrong. You are responsible for accurate entries, reviewing results and exports, and obtaining professional advice when needed. Do not rely on Oryfin for urgent, legal, tax, accounting, investment, credit, or payment decisions.",
          ],
        },
      ],
    },
    {
      id: "license-and-use",
      number: "04",
      title: "License and acceptable use",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Subject to these Terms and applicable store rules, the operator grants you a limited, personal, non-exclusive, non-transferable, revocable license to use Oryfin for your own lawful purposes on supported devices associated with your store account.",
          ],
        },
        {
          type: "list",
          items: [
            ["Do not copy, rent, sell, sublicense, distribute, or commercially exploit Oryfin except where law expressly permits."],
            ["Do not reverse engineer, circumvent access or entitlement controls, interfere with operation, introduce malicious code, or attempt unauthorized access, except where a restriction is prohibited by law."],
            ["Do not use Oryfin unlawfully, to violate another person's rights, or to misrepresent financial information to another person."],
          ],
        },
      ],
    },
    {
      id: "ownership",
      number: "05",
      title: "Ownership",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Oryfin, its software, interface, Forward Arc identity, name, logos, documentation, and related intellectual property are owned by or licensed to the operator. These Terms do not transfer ownership. You retain rights you have in the information you enter and are responsible for having the right to use and share it.",
          ],
        },
      ],
    },
    {
      id: "local-data",
      number: "06",
      title: "Local storage and data-loss risk",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Financial records are stored locally on the device. Oryfin does not provide cloud backup or multi-device financial-record synchronization in this release. The local database is not separately encrypted by Oryfin. Device or platform storage protections and the optional biometric app lock are the available protections.",
          ],
        },
        {
          type: "notice",
          content: [
            "Records may be permanently lost if the app or its storage is deleted, the device is lost, damaged, reset, replaced, or becomes inaccessible, or local storage fails. Keep any independent records you need. CSV sharing is user-initiated and is not an Oryfin backup or restore service.",
          ],
        },
      ],
    },
    {
      id: "accounts",
      number: "07",
      title: "Optional account functionality",
      blocks: accountTermsBlocks,
    },
    {
      id: "free-and-pro",
      number: "08",
      title: "Free and Pro functionality",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Free includes everyday transaction tracking, recurring schedules, security functionality, up to three monthly budgets, one savings goal, and six-month insights. Pro unlocks unlimited budgets and goals, twelve-month insights, and user-initiated transaction CSV sharing. Pro does not include Oryfin cloud backup or synchronization.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Features may change through updates, subject to applicable law and store obligations. A purchase grants access to the functionality associated with the active entitlement; it does not transfer ownership of Oryfin.",
          ],
        },
      ],
    },
    {
      id: "apple-subscriptions",
      number: "09",
      title: "Apple subscriptions",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Oryfin may offer monthly and annual auto-renewable subscriptions. The actual localized price, billing period, and introductory offer or trial, if any, are displayed by Apple before purchase. No trial, discount, or refund is promised by these Terms.",
          ],
        },
        {
          type: "list",
          items: [
            ["Payment is charged to your Apple Account after you confirm the purchase."],
            ["The subscription renews automatically unless cancelled according to the terms Apple displays for the purchase."],
            [
              "Manage or cancel the subscription through ",
              { text: "Apple's subscription settings", href: externalLinks.appleSubscriptions },
              ".",
            ],
            ["Restoring purchases is available in Oryfin and depends on the applicable store account and entitlement records."],
            ["Refund requests and billing disputes follow Apple's applicable processes and mandatory law."],
            ["Deleting Oryfin, deleting local data, signing out, or deleting an Oryfin account does not automatically cancel an Apple subscription."],
          ],
        },
      ],
    },
    {
      id: "apple-license",
      number: "10",
      title: "Apple license terms",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Unless a custom end-user license is intentionally submitted in App Store Connect, ",
            { text: "Apple's Standard EULA", href: externalLinks.appleStandardEula },
            " applies to the iOS application and these Terms supplement it. If these Terms conflict with mandatory Apple platform terms, the applicable Apple terms control to the extent required.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Apple is not responsible for providing maintenance or support for Oryfin except as required by law. To the extent required by Apple's platform terms, Apple and its subsidiaries are third-party beneficiaries of the applicable license provisions and may enforce them. Counsel must review the final platform, warranty, claims, intellectual-property, and third-party-beneficiary language before submission.",
          ],
        },
      ],
    },
    {
      id: "third-party-services",
      number: "11",
      title: "Third-party services",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Oryfin depends on or can interact with Apple, RevenueCat, Supabase if configured, the device operating system, website hosting, email providers, and destinations you choose through the share sheet. Their availability, terms, privacy practices, and decisions are outside the operator's control. Oryfin is not responsible for a third-party service beyond responsibility that cannot lawfully be excluded.",
          ],
        },
      ],
    },
    {
      id: "availability",
      number: "12",
      title: "Availability, updates, and termination",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Oryfin may be updated to fix defects, maintain compatibility, change features, or meet legal and store requirements. Operation can be interrupted by device, operating-system, store, vendor, network, or maintenance conditions. Compatibility with every device or future operating-system version is not promised.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The operator may suspend or terminate access for material breach, unlawful use, security risk, or where continued provision is no longer reasonably possible, subject to applicable law and store obligations. Pro entitlement and billing consequences remain governed by Apple and mandatory law.",
          ],
        },
      ],
    },
    {
      id: "warranties-and-liability",
      number: "13",
      title: "Warranties and liability",
      blocks: [
        {
          type: "paragraph",
          content: [
            "To the maximum extent permitted by law, Oryfin is provided on an as-available basis without promises that it will be uninterrupted, error-free, suitable for a particular financial decision, or that local records cannot be lost. You remain responsible for reviewing entries, estimates, exports, device security, and independent records.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Any exclusion or limitation of damages, remedies, or liability must be reviewed for the governing jurisdiction and will apply only to the extent permitted by law. Nothing excludes liability that cannot legally be excluded, including any mandatory consumer remedy.",
          ],
        },
      ],
    },
    {
      id: "governing-law",
      number: "14",
      title: "Governing law",
      blocks: [
        {
          type: "notice",
          content: [
            `The intended governing jurisdiction is ${governingJurisdiction}. Final governing-law, venue, dispute-resolution, and consumer-protection language requires jurisdiction-specific legal review and must preserve any mandatory law that applies where you live.`,
          ],
        },
      ],
    },
    {
      id: "general",
      number: "15",
      title: "General terms and contact",
      blocks: [
        {
          type: "paragraph",
          content: [
            "If a provision is unenforceable, it should be limited or removed only to the minimum extent necessary and the remaining provisions continue where permitted. A failure to enforce a provision is not a waiver. You may not assign these Terms without consent; the operator may assign them as part of a reorganization or transfer of Oryfin where law permits. These Terms and incorporated store license terms form the agreement concerning Oryfin, without limiting mandatory rights.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Questions about these Terms can be sent to ",
            supportContact,
            ` or mailed to ${postalAddress}.`,
          ],
        },
      ],
    },
  ],
};
