import type { AppLegalDocument } from "../../_template/_data/app-data";

export type { AppLegalBlock, AppLegalDocument } from "../../_template/_data/app-data";

// Product scope comes from the supplied FileSuite brief, not a verified app build.
// Confirm all release behavior and the legal drafts against the Android source.
const playStoreUrl: string | null = null;
function appAvailabilityAnswer() {
  return playStoreUrl ? "FileSuite has a Google Play listing. Check the listing for current availability and device compatibility." : "FileSuite is being prepared for Android. A verified Google Play link will appear here when available. No release date or minimum Android version has been confirmed.";
}

export const appData = {
  name: "FileSuite",
  shortName: "FS",
  tagline: "PDF & Photo Tools",
  headline: "Your everyday PDF & photo tools.",
  description: "Compress photos, resize images, convert formats, create PDFs, and optimize supported documents — right on your Android device.",
  brandMessage: "Simple tools. Local processing. Your files stay yours.",
  metadata: {
    title: "FileSuite – PDF & Photo Tools for Android",
    description: "Compress photos, resize images, convert JPG, PNG and WebP, create PDFs, and optimize supported files with FileSuite for Android.",
  },
  // Publisher-supplied branding and actual Android release screenshot.
  appIconPath: "/apps/filesuite/filesuite-app-icon.png" as string | null,
  wordmarkPath: "/apps/filesuite/filesuite-wordmark.png",
  productScreenshotPath: "/apps/filesuite/01-home-branded.png" as string | null,
  productScreenshotAlt: "FileSuite Android home screen with five photo and PDF tools, recent files, and Home, History, and Settings navigation",
  socialImagePath: "/apps/filesuite/filesuite-wordmark.png" as string | null,
  availability: {
    // Set only after verifying the actual public listing. All CTAs use this value.
    playStoreUrl,
    playStoreLabel: "Get it on Google Play",
    unavailableLabel: "Coming soon to Android",
  },
  supportEmail: "hello@sixthsignallabs.com",
  developerName: "Sixth Signal Labs",
  developerUrl: "https://sixthsignallabs.com",
  canonicalBasePath: "/apps/filesuite",
  features: [
    { number: "01", title: "Compress Photos", description: "Reduce image sizes with quality settings, or aim for a target KB or MB size where achievable. Process a batch of photos together." },
    { number: "02", title: "Resize Images", description: "Set dimensions, scale by percentage, or use common dimension presets. Keep the aspect ratio for a proportional result." },
    { number: "03", title: "Convert Images", description: "Convert supported images between JPEG, PNG, and WebP on your device. Choose a format that fits your needs; JPEG does not preserve transparency." },
    { number: "04", title: "Images to PDF", description: "Combine images into a PDF, arrange and rotate pages, and choose page size and image quality before exporting or sharing." },
    { number: "05", title: "Compress PDF", description: "Choose optimization settings for supported PDFs and compare actual before and after sizes. Structure is preserved where supported; some PDFs may not become smaller." },
  ],
  steps: ["Choose a photo or document.", "Configure the required settings.", "Process the file locally.", "Preview, save or share the result."],
  faqs: [
    { question: "Can I use FileSuite offline?", answer: "The photo and PDF tools are designed to process supported files on your device. Files must be accessible locally; a cloud-backed file provider may need an internet connection to retrieve a file. Release-specific offline behavior is still being verified." },
    { question: "Which formats are supported?", answer: "The planned image tools support JPEG (JPG), PNG, and WebP, with image-to-PDF creation and optimization of supported PDFs. Support depends on the file and operation. JPEG does not support transparency." },
    { question: "Can every PDF be compressed?", answer: "No. Results depend on the PDF’s contents, existing compression, and supported structure. Already optimized or unsupported documents may not shrink. Compare the actual sizes and check the exported document before using it." },
    { question: "Can I reach an exact file-size target?", answer: "A target is a goal, not a guarantee. Image content, dimensions, format, and acceptable quality limit how small a file can become. Some requested sizes cannot be achieved." },
    { question: "What happens to my files?", answer: "File processing is designed to happen locally. When you export or share a result, the destination you choose handles it under its own policies. The privacy draft identifies storage, retention, and third-party details that still require release verification." },
    { question: "Is FileSuite available for Android?", answer: appAvailabilityAnswer() },
  ],
} as const;

export const deploymentSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sixthsignallabs.com";
export function getAppPath(suffix = "") { return `${appData.canonicalBasePath}${suffix}`; }
export function getAppUrl(suffix = "") { return new URL(getAppPath(suffix), deploymentSiteUrl).toString(); }

const section = (number: string, id: string, title: string, text: string, notice = false) => ({
  number, id, title, blocks: [{ type: notice ? "notice" as const : "paragraph" as const, text }],
});

export const legalDocuments: Record<"privacy" | "terms", AppLegalDocument> = {
  privacy: {
    slug: "privacy", documentNumber: "01", title: "Privacy Policy",
    description: "FileSuite’s privacy draft covering selected photos and PDFs, local processing, storage, sharing, and details awaiting release verification.",
    effectiveDate: "Draft — not yet effective",
    introduction: [
      "FileSuite is an Android PDF and photo toolkit by Sixth Signal Labs. Its intended tools process user-selected photos and supported PDF documents on the device.",
      "Draft prepared November 12, 2026. This policy has not been legally approved. No FileSuite app build or SDK inventory was available in this website repository; the review items below must be resolved before this policy can describe a released app definitively.",
    ],
    sections: [
      section("01", "selected-files", "Photos and documents", "The intended workflow uses photos and PDF documents you select to compress, resize, convert, or combine them. These files may contain personal or confidential information. Local processing is the supplied product design; implementation and any network paths must be checked against the release build."),
      section("02", "access", "File selection and access", "Release review required: confirm use of the Android system file picker, the scope and duration of URI permissions, and whether any storage or media permissions are requested. This draft does not establish that the app can access your entire library or that it requests no permissions.", true),
      section("03", "local-storage", "Temporary files and history", "Release review required: identify working copies, caches, temporary PDFs, saved results, preferences, and any processing history, including filenames or thumbnails. Confirm storage locations, cleanup timing, history controls, and Android backup behavior. No retention period or automatic cleanup guarantee has been verified.", true),
      section("04", "export-sharing", "Saving and sharing results", "Saving or sharing a result sends it to the destination you choose. A receiving app or cloud-backed file provider may store or transmit it under its own policy. Check the destination and the document contents before sharing sensitive files. Exported copies may remain outside the app’s private storage."),
      section("05", "third-parties", "Third parties and telemetry", "Release review required: audit dependencies and network behavior for advertising, consent, analytics, diagnostics, crash reporting, and other services. Their presence or absence, data categories, recipients, purposes, and opt-out controls are unverified. Local file processing alone does not establish that the app collects no other data.", true),
      section("06", "retention-rights", "Retention, deletion and choices", "You can manage files you save through their storage location and permissions through Android settings. Clearing app storage may remove private app data; it should not be assumed to remove exported files, backups, or copies held by other apps. Release review must confirm actual deletion controls and retention periods. For applicable privacy rights or questions, contact Sixth Signal Labs at hello@sixthsignallabs.com. Avoid attaching sensitive documents unless needed and agreed."),
      section("07", "children", "Children’s privacy", "Release review required: confirm the intended audience, minimum age requirements, store audience declarations, and any safeguards required by applicable children’s privacy laws. If you believe a child’s personal information has been provided to the publisher, contact hello@sixthsignallabs.com.", true),
      section("08", "updates-contact", "Updates and contact", "The publication status and update date will change when this draft is reviewed. Material policy changes should be communicated as required by applicable law. Publisher: Sixth Signal Labs. Privacy contact: hello@sixthsignallabs.com. Review the legal identity, contact details, lawful bases, regional disclosures, and international transfers before publication."),
    ],
  },
  terms: {
    slug: "terms", documentNumber: "02", title: "Terms & Conditions",
    description: "Draft FileSuite terms covering permitted use, file-processing limits, source-file responsibility, document verification, and publisher contact.",
    effectiveDate: "Draft — not yet effective",
    introduction: [
      "FileSuite provides photo compression, resizing, image conversion, image-to-PDF creation, and optimization of supported PDFs for Android.",
      "Draft prepared November 12, 2026. These terms are not legally approved or effective. Product behavior and jurisdiction-dependent clauses require review before release.",
    ],
    sections: [
      section("01", "scope", "Purpose and scope", "These proposed terms cover your use of FileSuite. Supported operations depend on file type, document structure, available device resources, and the released app version. Eligibility, agreement mechanisms, and any applicable platform terms must be confirmed before these terms take effect."),
      section("02", "permitted-use", "Permitted use", "Use FileSuite lawfully and only process files you own or are authorized to use. Respect intellectual property, confidentiality, privacy, and other people’s rights. Do not use the app to circumvent access controls or interfere with its operation."),
      section("03", "source-files", "Your source files", "You are responsible for selecting appropriate files and keeping independent backups. Do not rely on a processing tool as your only copy of important information. Preservation of originals has not been verified for the release build; check the chosen save location and retain a separate source copy."),
      section("04", "limitations", "Processing limitations", "Compression does not guarantee a smaller file or an exact requested size. Some PDFs may be unsupported or already optimized. FileSuite is not presented as a general PDF editor and makes no promise of OCR, AI processing, or cloud sync. Compression, resizing, and conversion can affect quality, transparency, metadata, and document structure."),
      section("05", "verification", "Check every result", "Before sharing, submitting, printing, or deleting a source file, check output quality, page order, rotation, legibility, dimensions, actual size, and completeness. Do not assume that signatures, forms, links, accessibility information, or other PDF elements will survive every operation. Use the original document where integrity is essential."),
      section("06", "ownership", "Intellectual property", "Your rights in your source files remain yours. Processing a file does not transfer ownership to Sixth Signal Labs. Rights in the app, its branding, and publisher-created materials remain with their respective owners. Review the final app license and any open-source notices before release."),
      section("07", "third-party-services", "Third-party services", "Android file providers and apps you choose for export or sharing operate under their own terms. Their availability and handling of files are outside this draft’s scope. Any bundled third-party services and their terms must be identified from the actual release dependencies; no advertising, payment, or subscription model is established here."),
      section("08", "warranty-liability", "Warranties and liability", "Proposed clause for legal review: to the extent permitted by applicable law, FileSuite is provided as available without a guarantee of error-free operation, suitability for a particular purpose, or successful processing of every file. Any limitation of liability must preserve mandatory consumer rights and liabilities that cannot lawfully be excluded. Jurisdiction-specific limits and remedies have not been approved.", true),
      section("09", "changes", "App and terms updates", "Functionality, compatibility, and supported formats may change between versions. Review important outputs after updating. A reviewed version of these terms should identify its effective date and explain any notice required for material changes. Governing law and dispute provisions require human review; no jurisdiction is selected by this draft."),
      section("10", "contact", "Contact the publisher", "Publisher: Sixth Signal Labs. For FileSuite questions or terms enquiries, email hello@sixthsignallabs.com. The publisher’s legal identity, contact address, and jurisdiction-dependent disclosures must be verified before the terms take effect."),
    ],
  },
};
