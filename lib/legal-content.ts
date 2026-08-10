export type LegalTextBlock =
  | {
    readonly type: "paragraph";
    readonly text: string;
  }
  | {
    readonly type: "list";
    readonly items: readonly string[];
  };

export type LegalBlock =
  | LegalTextBlock
  | {
    readonly type: "subsection";
    readonly title: string;
    readonly blocks: readonly LegalTextBlock[];
  }
  | {
    readonly type: "contact";
    readonly intro: string;
    readonly lines: readonly string[];
  };

export type LegalSection = {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly blocks: readonly LegalBlock[];
};

export type LegalDocument = {
  readonly slug: "privacy" | "terms";
  readonly documentNumber: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly effectiveDate: string;
  readonly introduction: readonly string[];
  readonly sections: readonly LegalSection[];
};

export const privacyPolicy = {
  slug: "privacy",
  documentNumber: "01",
  title: "Privacy Policy",
  shortTitle: "Privacy",
  effectiveDate: "August 10, 2026",
  introduction: [
    "Sixth Signal Labs (“Sixth Signal Labs,” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website, contact us, use our services, or interact with our digital products.",
    "This Privacy Policy applies to our website, online forms, client communications, marketing pages, and related business operations. Our mobile apps may have a separate App Privacy Policy.",
  ],
  sections: [
    {
      id: "information-we-collect",
      number: "01",
      title: "Information We Collect",
      blocks: [
        {
          type: "paragraph",
          text: "We may collect the following types of information.",
        },
        {
          type: "subsection",
          title: "Information you provide to us",
          blocks: [
            {
              type: "paragraph",
              text: "You may provide information directly to us when you:",
            },
            {
              type: "list",
              items: [
                "Contact us by email or through a contact form",
                "Request a quote or consultation",
                "Subscribe to updates",
                "Become a client",
                "Send us project files, requirements, feedback, or business information",
              ],
            },
            {
              type: "paragraph",
              text: "This information may include:",
            },
            {
              type: "list",
              items: [
                "Name",
                "Email address",
                "Company name",
                "Phone number",
                "Project details",
                "Billing or business information",
                "Any other information you choose to send us",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Information collected automatically",
          blocks: [
            {
              type: "paragraph",
              text: "When you visit our website, some technical information may be collected automatically, such as:",
            },
            {
              type: "list",
              items: [
                "IP address",
                "Browser type",
                "Device type",
                "Operating system",
                "Pages visited",
                "Referring website",
                "Approximate location based on IP address",
                "Date and time of visit",
                "Website performance and usage data",
              ],
            },
            {
              type: "paragraph",
              text: "We may collect this information using server logs, cookies, analytics tools, or similar technologies.",
            },
          ],
        },
        {
          type: "subsection",
          title: "Cookies and similar technologies",
          blocks: [
            {
              type: "paragraph",
              text: "Our website may use cookies or similar technologies to:",
            },
            {
              type: "list",
              items: [
                "Keep the website secure",
                "Understand website usage",
                "Improve performance",
                "Remember preferences",
                "Measure marketing effectiveness",
              ],
            },
            {
              type: "paragraph",
              text: "You can usually control cookies through your browser settings. Blocking some cookies may affect website functionality.",
            },
          ],
        },
      ],
    },
    {
      id: "how-we-use-information",
      number: "02",
      title: "How We Use Information",
      blocks: [
        {
          type: "paragraph",
          text: "We may use information to:",
        },
        {
          type: "list",
          items: [
            "Respond to inquiries",
            "Provide proposals or services",
            "Communicate with clients and potential clients",
            "Manage projects and client relationships",
            "Improve our website, services, and products",
            "Send service-related messages",
            "Maintain security and prevent abuse",
            "Process billing and business records",
            "Comply with legal obligations",
            "Analyze website traffic and performance",
          ],
        },
        {
          type: "paragraph",
          text: "We do not sell your personal information.",
        },
      ],
    },
    {
      id: "how-we-share-information",
      number: "03",
      title: "How We Share Information",
      blocks: [
        {
          type: "paragraph",
          text: "We may share information with trusted third parties only when necessary, such as:",
        },
        {
          type: "list",
          items: [
            "Website hosting providers",
            "Email providers",
            "Analytics providers",
            "Payment or billing providers",
            "Project management or communication tools",
            "Legal, accounting, or professional advisors",
            "Government authorities when required by law",
          ],
        },
        {
          type: "paragraph",
          text: "These service providers may process information on our behalf and are expected to protect it appropriately.",
        },
        {
          type: "paragraph",
          text: "We may also share information if we believe it is necessary to:",
        },
        {
          type: "list",
          items: [
            "Comply with applicable law",
            "Protect our rights, property, or safety",
            "Prevent fraud, abuse, or security issues",
            "Complete a merger, acquisition, restructuring, or sale of business assets",
          ],
        },
      ],
    },
    {
      id: "client-and-project-information",
      number: "04",
      title: "Client and Project Information",
      blocks: [
        {
          type: "paragraph",
          text: "If you become a client, we may receive confidential project information, business plans, technical documentation, source code, design files, credentials, or other materials.",
        },
        {
          type: "paragraph",
          text: "We use client information only to provide agreed services, communicate about the project, manage billing, and maintain business records. Confidentiality terms may also be covered in a separate proposal, agreement, or statement of work.",
        },
      ],
    },
    {
      id: "data-retention",
      number: "05",
      title: "Data Retention",
      blocks: [
        {
          type: "paragraph",
          text: "We keep information only as long as reasonably necessary for the purposes described in this Privacy Policy, including:",
        },
        {
          type: "list",
          items: [
            "Responding to inquiries",
            "Providing services",
            "Maintaining business records",
            "Meeting legal, tax, accounting, or contractual obligations",
            "Resolving disputes",
            "Protecting our rights and security",
          ],
        },
        {
          type: "paragraph",
          text: "If you ask us to delete your information, we will take reasonable steps to do so unless we need to retain it for legal, security, accounting, or legitimate business reasons.",
        },
      ],
    },
    {
      id: "your-rights-and-choices",
      number: "06",
      title: "Your Rights and Choices",
      blocks: [
        {
          type: "paragraph",
          text: "Depending on where you live, you may have rights to:",
        },
        {
          type: "list",
          items: [
            "Access the personal information we hold about you",
            "Request correction of inaccurate information",
            "Request deletion of your information",
            "Object to or restrict certain processing",
            "Request a copy of your information",
            "Withdraw consent where processing is based on consent",
            "Opt out of certain marketing communications",
          ],
        },
        {
          type: "paragraph",
          text: "To make a privacy request, contact us at:",
        },
        {
          type: "paragraph",
          text: "privacy@sixthsignallabs.com",
        },
        {
          type: "paragraph",
          text: "We may need to verify your identity before completing a request.",
        },
      ],
    },
    {
      id: "marketing-communications",
      number: "07",
      title: "Marketing Communications",
      blocks: [
        {
          type: "paragraph",
          text: "If you receive marketing emails from us, you can unsubscribe using the link in the email or by contacting us. We may still send non-marketing messages, such as project, billing, legal, or service-related communications.",
        },
      ],
    },
    {
      id: "security",
      number: "08",
      title: "Security",
      blocks: [
        {
          type: "paragraph",
          text: "We use reasonable administrative, technical, and organizational safeguards to protect information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
        },
      ],
    },
    {
      id: "international-users",
      number: "09",
      title: "International Users",
      blocks: [
        {
          type: "paragraph",
          text: "If you access our website or services from outside our country of operation, your information may be processed in countries that may have different privacy laws than your location.",
        },
        {
          type: "paragraph",
          text: "By using our website or services, you understand that your information may be transferred, stored, or processed outside your country of residence where permitted by law.",
        },
      ],
    },
    {
      id: "childrens-privacy",
      number: "10",
      title: "Children’s Privacy",
      blocks: [
        {
          type: "paragraph",
          text: "Our website and services are not directed to children under 13, and we do not knowingly collect personal information from children under 13.",
        },
        {
          type: "paragraph",
          text: "If you believe a child has provided us with personal information, contact us and we will take reasonable steps to delete it.",
        },
      ],
    },
    {
      id: "third-party-links",
      number: "11",
      title: "Third-Party Links",
      blocks: [
        {
          type: "paragraph",
          text: "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, content, or security of those third parties. You should review their privacy policies before using them.",
        },
      ],
    },
    {
      id: "changes-to-this-privacy-policy",
      number: "12",
      title: "Changes to This Privacy Policy",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this Privacy Policy from time to time. When we do, we will update the “Effective Date” above. Continued use of our website or services after changes means you accept the updated policy.",
        },
      ],
    },
    {
      id: "contact-us",
      number: "13",
      title: "Contact Us",
      blocks: [
        {
          type: "contact",
          intro: "If you have questions about this Privacy Policy or want to make a privacy request, contact us at:",
          lines: [
            "Sixth Signal Labs",
            "Email: privacy@sixthsignallabs.com",
          ],
        },
      ],
    },
  ],
} as const satisfies LegalDocument;

export const termsOfService = {
  slug: "terms",
  documentNumber: "02",
  title: "Terms of Service",
  shortTitle: "Terms",
  effectiveDate: "August 10, 2026",
  introduction: [
    "These Terms of Service (“Terms”) govern your access to and use of the Sixth Signal Labs website, services, digital products, and related materials. By using our website or working with us, you agree to these Terms.",
    "If you do not agree to these Terms, do not use our website or services.",
  ],
  sections: [
    {
      id: "who-we-are",
      number: "01",
      title: "Who We Are",
      blocks: [
        {
          type: "paragraph",
          text: "Sixth Signal Labs (“Sixth Signal Labs,” “we,” “us,” or “our”) is a software development company that may provide services such as product development, mobile app development, web development, automation, software consulting, design, technical strategy, and related digital services.",
        },
      ],
    },
    {
      id: "use-of-our-website",
      number: "02",
      title: "Use of Our Website",
      blocks: [
        {
          type: "paragraph",
          text: "You may use our website only for lawful purposes. You agree not to:",
        },
        {
          type: "list",
          items: [
            "Interfere with the website’s operation or security",
            "Attempt to gain unauthorized access to our systems",
            "Use the website to distribute malware, spam, or harmful content",
            "Copy or misuse our branding, content, or materials",
            "Use the website in a way that violates applicable law",
          ],
        },
        {
          type: "paragraph",
          text: "We may suspend or restrict access to the website if we believe these Terms are being violated.",
        },
      ],
    },
    {
      id: "services-and-proposals",
      number: "03",
      title: "Services and Proposals",
      blocks: [
        {
          type: "paragraph",
          text: "Information on our website is for general informational purposes and does not create a binding service agreement.",
        },
        {
          type: "paragraph",
          text: "Specific services, deliverables, timelines, pricing, payment terms, ownership rights, confidentiality obligations, and responsibilities will be described in a separate proposal, invoice, statement of work, contract, or written agreement.",
        },
        {
          type: "paragraph",
          text: "If there is a conflict between these Terms and a signed written agreement, the signed written agreement will control for that specific project.",
        },
      ],
    },
    {
      id: "client-responsibilities",
      number: "04",
      title: "Client Responsibilities",
      blocks: [
        {
          type: "paragraph",
          text: "If you work with us, you agree to:",
        },
        {
          type: "list",
          items: [
            "Provide accurate project information",
            "Respond to reasonable requests in a timely manner",
            "Provide necessary access, content, credentials, feedback, and approvals",
            "Ensure you have rights to any materials you provide",
            "Review deliverables carefully",
            "Pay invoices according to the agreed payment terms",
          ],
        },
        {
          type: "paragraph",
          text: "Delays in feedback, approvals, content, access, or payment may affect project timelines.",
        },
      ],
    },
    {
      id: "fees-and-payments",
      number: "05",
      title: "Fees and Payments",
      blocks: [
        {
          type: "paragraph",
          text: "Fees, payment schedules, refund terms, and billing arrangements will be specified in the applicable proposal, invoice, or agreement.",
        },
        {
          type: "paragraph",
          text: "Unless otherwise stated in writing:",
        },
        {
          type: "list",
          items: [
            "Fees are due according to the invoice or agreement",
            "Payments are non-refundable once work has started",
            "Late payments may result in paused work or delayed delivery",
            "You are responsible for applicable taxes, bank fees, platform fees, or transaction charges",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      number: "06",
      title: "Intellectual Property",
      blocks: [
        {
          type: "subsection",
          title: "Our materials",
          blocks: [
            {
              type: "paragraph",
              text: "Our website, branding, logos, designs, text, graphics, code samples, processes, templates, and other materials are owned by Sixth Signal Labs or our licensors and are protected by intellectual property laws.",
            },
            {
              type: "paragraph",
              text: "You may not copy, reproduce, modify, distribute, sell, or exploit our materials without written permission.",
            },
          ],
        },
        {
          type: "subsection",
          title: "Client materials",
          blocks: [
            {
              type: "paragraph",
              text: "You retain ownership of materials you provide to us, such as logos, content, images, data, documentation, source materials, credentials, and business information.",
            },
            {
              type: "paragraph",
              text: "You grant us the limited right to use those materials only as needed to provide services to you.",
            },
          ],
        },
        {
          type: "subsection",
          title: "Project deliverables",
          blocks: [
            {
              type: "paragraph",
              text: "Ownership of project deliverables will be handled according to the applicable proposal, statement of work, invoice, or written agreement.",
            },
            {
              type: "paragraph",
              text: "Unless otherwise agreed in writing, ownership may transfer only after full payment has been received.",
            },
            {
              type: "paragraph",
              text: "We may retain ownership of pre-existing tools, libraries, frameworks, templates, workflows, know-how, reusable code, and general skills developed or used by us.",
            },
          ],
        },
      ],
    },
    {
      id: "portfolio-use",
      number: "07",
      title: "Portfolio Use",
      blocks: [
        {
          type: "paragraph",
          text: "Unless otherwise agreed in writing, we may reference your company name, project type, public-facing deliverables, and non-confidential results in our portfolio, case studies, website, proposals, and marketing materials.",
        },
        {
          type: "paragraph",
          text: "We will not disclose confidential information without permission.",
        },
        {
          type: "paragraph",
          text: "If you require confidential or white-label work, this should be agreed in writing before the project begins.",
        },
      ],
    },
    {
      id: "third-party-services",
      number: "08",
      title: "Third-Party Services",
      blocks: [
        {
          type: "paragraph",
          text: "Our services or website may use or integrate third-party services, such as hosting providers, analytics tools, payment processors, APIs, AI services, app stores, software libraries, and development platforms.",
        },
        {
          type: "paragraph",
          text: "We are not responsible for third-party services, outages, policy changes, pricing changes, security issues, or terms. Your use of third-party services may be subject to their own terms and privacy policies.",
        },
      ],
    },
    {
      id: "ai-and-automation-tools",
      number: "09",
      title: "AI and Automation Tools",
      blocks: [
        {
          type: "paragraph",
          text: "We may use AI, automation, developer tools, code generation tools, testing tools, or similar technologies to assist with research, development, design, documentation, or productivity.",
        },
        {
          type: "paragraph",
          text: "We remain responsible for our work as described in the applicable agreement, but you understand that AI-assisted outputs may require human review, testing, validation, and refinement before production use.",
        },
        {
          type: "paragraph",
          text: "You should not provide highly sensitive, regulated, or confidential information for AI-assisted processing unless this has been specifically agreed in writing.",
        },
      ],
    },
    {
      id: "confidentiality",
      number: "10",
      title: "Confidentiality",
      blocks: [
        {
          type: "paragraph",
          text: "Each party may receive confidential information from the other. Confidential information should be used only for the purpose of the project or business relationship and should not be disclosed to unauthorized parties.",
        },
        {
          type: "paragraph",
          text: "Confidentiality obligations may be further defined in a separate agreement or non-disclosure agreement.",
        },
      ],
    },
    {
      id: "no-guarantee-of-results",
      number: "11",
      title: "No Guarantee of Results",
      blocks: [
        {
          type: "paragraph",
          text: "We aim to provide high-quality work, but we do not guarantee specific business outcomes, revenue, app downloads, search rankings, funding, approval by app stores, user growth, or third-party platform results.",
        },
        {
          type: "paragraph",
          text: "You are responsible for reviewing, testing, approving, and operating your own business, product, content, and legal compliance.",
        },
      ],
    },
    {
      id: "disclaimer",
      number: "12",
      title: "Disclaimer",
      blocks: [
        {
          type: "paragraph",
          text: "Our website and general materials are provided “as is” and “as available.”",
        },
        {
          type: "paragraph",
          text: "To the maximum extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, non-infringement, availability, accuracy, and security.",
        },
      ],
    },
    {
      id: "limitation-of-liability",
      number: "13",
      title: "Limitation of Liability",
      blocks: [
        {
          type: "paragraph",
          text: "To the maximum extent permitted by law, Sixth Signal Labs will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, including lost profits, lost revenue, lost data, business interruption, or loss of goodwill.",
        },
      ],
    },
    {
      id: "indemnification",
      number: "14",
      title: "Indemnification",
      blocks: [
        {
          type: "paragraph",
          text: "You agree to defend, indemnify, and hold harmless Sixth Signal Labs from claims, damages, liabilities, losses, and expenses arising from:",
        },
        {
          type: "list",
          items: [
            "Your use of our website or services",
            "Your breach of these Terms",
            "Materials or information you provide to us",
            "Your violation of law or third-party rights",
            "Your products, services, customers, users, or business operations",
          ],
        },
      ],
    },
    {
      id: "termination",
      number: "15",
      title: "Termination",
      blocks: [
        {
          type: "paragraph",
          text: "We may suspend or terminate access to our website or services if you violate these Terms, fail to pay required fees, misuse our services, or create legal, security, or operational risk.",
        },
        {
          type: "paragraph",
          text: "You may stop using our website at any time. Project termination terms, if any, will be handled according to the applicable written agreement.",
        },
      ],
    },
    // {
    //   id: "governing-law",
    //   number: "16",
    //   title: "Governing Law",
    //   blocks: [
    //     {
    //       type: "paragraph",
    //       text: "These Terms are governed by the laws of [Country/State], without regard to conflict of law principles.",
    //     },
    //     {
    //       type: "paragraph",
    //       text: "Any disputes will be resolved in the courts located in [Jurisdiction], unless otherwise required by applicable law or agreed in writing.",
    //     },
    //   ],
    // },
    {
      id: "changes-to-these-terms",
      number: "16",
      title: "Changes to These Terms",
      blocks: [
        {
          type: "paragraph",
          text: "We may update these Terms from time to time. When we do, we will update the “Effective Date” above. Continued use of our website or services after changes means you accept the updated Terms.",
        },
      ],
    },
    {
      id: "contact-us",
      number: "17",
      title: "Contact Us",
      blocks: [
        {
          type: "contact",
          intro: "If you have questions about these Terms, contact us at:",
          lines: [
            "Sixth Signal Labs",
            "Email: privacy@sixthsignallabs.com",
          ],
        },
      ],
    },
  ],
} as const satisfies LegalDocument;
