import type { AppLegalDocument } from "../../_template/_data/app-data";

export type { AppLegalBlock, AppLegalDocument } from "../../_template/_data/app-data";

// File handling follows FileSuite release documentation. AdMob/UMP behavior follows
// the publisher’s confirmation and WordLilt’s advertising disclosures.
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
  supportEmail: "filesuite@sixthsignallabs.com",
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
    { question: "Can I use FileSuite offline?", answer: "The photo and PDF tools are designed to process supported files on your device. Files must be accessible locally; a cloud-backed file provider may need an internet connection to retrieve a file." },
    { question: "Which formats are supported?", answer: "The image tools support JPEG (JPG), PNG, and WebP, with image-to-PDF creation and optimization of supported PDFs. Support depends on the file and operation. JPEG does not support transparency." },
    { question: "Can every PDF be compressed?", answer: "No. Results depend on the PDF’s contents, existing compression, and supported structure. Already optimized or unsupported documents may not shrink. Compare the actual sizes and check the exported document before using it." },
    { question: "Can I reach an exact file-size target?", answer: "A target is a goal, not a guarantee. Image content, dimensions, format, and acceptable quality limit how small a file can become. Some requested sizes cannot be achieved." },
    { question: "What happens to my files?", answer: "File processing is designed to happen locally. When you export or share a result, the destination you choose handles it under its own policies. Local results and processing history can be managed in the app; exported copies must be managed at their saved destination." },
    { question: "Is FileSuite available for Android?", answer: appAvailabilityAnswer() },
  ],
} as const;

export const deploymentSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sixthsignallabs.com";
export function getAppPath(suffix = "") { return `${appData.canonicalBasePath}${suffix}`; }
export function getAppUrl(suffix = "") { return new URL(getAppPath(suffix), deploymentSiteUrl).toString(); }

const LEGAL_LAST_UPDATED = "November 12, 2026";
const section = (number: string, id: string, title: string, text: string) => ({
  number, id, title, blocks: [{ type: "paragraph" as const, text }],
});

export const legalDocuments: Record<"privacy" | "terms", AppLegalDocument> = {
  privacy: {
    slug: "privacy", documentNumber: "01", title: "Privacy Policy",
    description: "How FileSuite handles selected photos and PDFs, local processing, storage, sharing, and your privacy choices.",
    effectiveDate: LEGAL_LAST_UPDATED,
    introduction: [
      "FileSuite: PDF & Photo Tools (com.sixthsignallabs.filesuite) is an Android toolkit by Sixth Signal Labs for compressing photos, resizing and converting images, creating PDFs, and optimizing supported PDF documents.",
      `Last updated: ${LEGAL_LAST_UPDATED}.`,
      "FileSuite processes your selected files on your device. It has no user accounts or FileSuite document backend and does not upload your documents to Sixth Signal Labs. The app is supported by Google AdMob ads, with Google UMP consent where required. It does not include a product analytics or crash-reporting SDK.",
    ],
    sections: [
      section("01", "selected-files", "Information we use", "FileSuite reads the photos and PDF documents you select, along with relevant names, MIME types, sizes, dimensions, orientation, and PDF characteristics. This information supports validation, previews, and the processing operation you request. File contents may include personal information; the processing takes place on your device."),
      section("02", "access", "File selection and permissions", "Android’s Photo Picker and Storage Access Framework provide access to selected content. FileSuite does not request broad device-media or all-files access. Selected file references and read permissions may be retained for session recovery where Android permits. If access expires or is revoked, you may need to select the file again."),
      section("03", "local-storage", "Local files, history and temporary data", "Preferences and generated results are stored locally. FileSuite keeps up to 1,000 local operation records containing source and result metadata, outcomes, timestamps, and the latest saved export link. Original document contents are not stored in this activity log. Temporary previews, staging files, and shared copies may be cached. Cleanup removes application-owned temporary data, not original files or exports you have saved elsewhere."),
      section("04", "originals-metadata", "Original files and metadata", "Original files are not modified. Re-encoded images remove source EXIF metadata, including location tags, while applying supported orientation to the image pixels. Existing-PDF optimization retains document metadata. Review documents and their metadata before sharing sensitive information. Unsupported encrypted, signed, or active-content PDFs are rejected or explained rather than silently altered."),
      section("05", "export-sharing", "Saving, sharing and third parties", "Saving creates a separate document at a destination you choose. Sharing or opening a result uses content URIs and temporary read permissions for the receiving app. A document provider may be cloud-backed, and receiving apps may transmit or retain files under their own policies. FileSuite cannot delete copies held by those providers or apps. Choose local providers and destinations for offline file selection and export."),
      section("06", "third-parties", "Third-party software", "FileSuite uses Google AdMob interstitial ads and optional rewarded ads, together with Google UMP consent signals. When ads are requested or consent choices are managed, Google may receive ad-related device and usage signals, including the advertising ID where available and permitted. These services use network access independently of local document processing. Ad and consent data are subject to Google’s policies and retention practices. FileSuite does not include a separate product analytics or crash-reporting SDK. AndroidX, Kotlin, and local PDF and JPEG components support file processing; open-source notices are available in Settings/About. Android, Google Play, device services, and receiving apps have their own practices."),
      section("07", "retention-rights", "Retention, deletion and your choices", "Generated results remain in app-private storage until deleted, subject to storage and resource limits. Delete individual results in History, clear Activity, or clear temporary files in Settings. Clearing Activity removes its log and links while preserving local results and saved exports. Deleting a local result does not delete its source or separately exported copies. Android’s Clear storage and uninstall controls remove app-private data; manage exports and third-party copies separately. FileSuite disables app backup and excludes private data from its configured backup and device-transfer domains. Where Google UMP consent is presented, you can manage ad personalization and related choices, including through the app’s ad privacy option. Rewarded ads are optional. You can reset or delete your advertising ID through Android settings. Depending on where you live, you may have rights to access, correct, delete, or object to processing of personal information. Contact filesuite@sixthsignallabs.com with privacy questions or requests."),
      section("08", "children", "Children’s privacy", "FileSuite is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided personal information to Sixth Signal Labs, contact filesuite@sixthsignallabs.com so we can address the matter."),
      section("09", "updates-contact", "Policy updates and contact", "We may update this Privacy Policy as FileSuite changes. We will revise the Last updated date and communicate material changes as required by applicable law. Publisher: Sixth Signal Labs. For FileSuite privacy questions, contact filesuite@sixthsignallabs.com."),
    ],
  },
  terms: {
    slug: "terms", documentNumber: "02", title: "Terms & Conditions",
    description: "The terms governing FileSuite, including permitted use, file-processing limitations, document verification, ownership, and liability.",
    effectiveDate: LEGAL_LAST_UPDATED,
    introduction: [
      "FileSuite: PDF & Photo Tools is an Android application operated by Sixth Signal Labs. It provides photo compression, image resizing and conversion, image-to-PDF creation, and optimization of supported PDFs.",
      `Last updated: ${LEGAL_LAST_UPDATED}.`,
    ],
    sections: [
      section("01", "acceptance", "Acceptance of these terms", "By downloading, installing, or using FileSuite, you agree to these Terms & Conditions. These terms are an agreement between you and Sixth Signal Labs. You must be able to form a binding contract under applicable law and be at least 13 years old, or the age of digital consent in your jurisdiction if higher. If you are under the age of majority, obtain a parent or guardian’s permission where required. Read these terms together with our Privacy Policy. If you do not agree, do not use FileSuite."),
      section("02", "permitted-use", "Using FileSuite", "FileSuite is a free, ad-supported app with no in-app purchases, subscriptions, or paid plans. It may show Google AdMob interstitial ads and optional rewarded ads, with consent where required. Do not fraudulently interact with or manipulate ad delivery. Use FileSuite lawfully and only process files you own or are authorized to use. Respect intellectual property, confidentiality, privacy, and other people’s rights. Do not interfere with the app, circumvent access controls, or attempt unauthorized access to related systems. Restrictions on reverse engineering apply only to the extent permitted by law. Your use is also subject to applicable Google Play terms where you obtained the app."),
      section("03", "source-files", "Your source files and results", "You are responsible for selecting appropriate files, retaining independent backups, and choosing save or share destinations carefully. FileSuite processes files locally and does not modify originals. Clearing app storage, uninstalling the app, or changing devices may remove private results, history, and settings. Separately exported copies must be managed at their saved locations."),
      section("04", "limitations", "Processing limitations", "Supported operations depend on the file’s type and structure, available device resources, and app version. Compression does not guarantee a smaller file or an exact requested size. Some PDFs may be unsupported or already optimized. Compression, resizing, and conversion can affect image quality, transparency, metadata, and document structure. FileSuite does not provide general PDF editing, OCR, AI processing, or cloud sync."),
      section("05", "verification", "Check your documents", "Before sharing, submitting, printing, or deleting a source file, check output quality, page order, rotation, legibility, dimensions, actual size, and completeness. Do not assume signatures, forms, links, accessibility information, or other PDF elements will survive every operation. Keep and use original documents where integrity is essential."),
      section("06", "ownership", "Ownership and licenses", "Sixth Signal Labs owns FileSuite’s software, branding, user interface, and publisher-created materials, except for third-party components. Subject to these terms, you receive a limited, revocable, non-exclusive, non-transferable license to use the app for lawful purposes on devices you own or control. Your rights in your files remain yours; processing does not transfer ownership to Sixth Signal Labs. Third-party libraries remain subject to their respective licenses. If you send feedback or suggestions, Sixth Signal Labs may use them without obligation to you."),
      section("07", "third-party-services", "Third-party services", "Google AdMob and Google UMP provide advertising and consent services under Google’s applicable terms and policies. Android file providers and receiving apps operate under their own terms and policies. You choose whether to save, open, or share a result with those services. Sixth Signal Labs does not control their availability, transmission, retention, or use of your files. Open-source notices for bundled components are available in Settings/About."),
      section("08", "warranty-liability", "Availability and liability", "FileSuite is provided as is and as available. Sixth Signal Labs does not warrant uninterrupted or error-free operation, successful processing of every file, or suitability for a particular purpose. We may change, suspend, or discontinue the app or any feature. To the maximum extent permitted by law, Sixth Signal Labs is not liable for indirect, incidental, special, consequential, or punitive damages, or loss of data, profits, or goodwill arising from your use of FileSuite. Where a liability cap applies, total liability for claims relating to the app will not exceed the amounts you paid to Sixth Signal Labs for it in the twelve months before the claim. Some jurisdictions do not allow certain exclusions or limitations; these provisions apply only to the extent permitted by law and do not exclude rights or liabilities that cannot lawfully be excluded."),
      section("09", "changes", "Changes to the app and terms", "Functionality, compatibility, and supported formats may change between versions. We may update these terms and will revise the Last updated date. For material changes, we will provide an in-app notice or store listing update where practical. Where permitted by law, continued use after changes take effect constitutes acceptance of the updated terms."),
      section("10", "contact", "Contact us", "For questions about FileSuite or these terms, contact Sixth Signal Labs at filesuite@sixthsignallabs.com."),
    ],
  },
};
