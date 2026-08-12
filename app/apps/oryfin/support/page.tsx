import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CircleAlert, Mail } from "lucide-react";

import { Container } from "@/components/ui/container";

import { PageHero } from "../_components/page-hero";
import { PublicationNotice } from "../_components/publication-notice";
import {
  externalLinks,
  getOryfinUrl,
  getSupportMailto,
  oryfin,
  oryfinPublishing,
  supportTopics,
} from "../_data/oryfin-data";

export const metadata: Metadata = {
  title: { absolute: `Support | ${oryfin.name}` },
  description: "Help with Oryfin transactions, budgets, goals, subscriptions, local data, and account configuration.",
  alternates: { canonical: getOryfinUrl("/support") },
  openGraph: {
    url: getOryfinUrl("/support"),
    title: `Support | ${oryfin.name}`,
    description: "Help with Oryfin features, purchases, and local data.",
  },
};

export default function OryfinSupportPage() {
  const supportMailto = getSupportMailto();

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Oryfin / Support"
        title="Help, without the runaround."
        description="Practical guidance for Oryfin's shipping features, local records, purchases, and optional account functionality."
      />

      <Container className="py-12 sm:py-16 lg:py-24">
        <PublicationNotice />

        <section aria-labelledby="contact-heading" className="mt-12 grid gap-8 border-y border-[var(--oryfin-line)] py-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--oryfin-violet-dark)]">Contact</p>
            <h2 id="contact-heading" className="mt-5 text-4xl font-medium tracking-[-0.05em] text-[var(--oryfin-ink)]">Oryfin support</h2>
          </div>
          <dl className="grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--oryfin-muted)]">Operator</dt>
              <dd className="mt-2 text-base leading-7 text-[var(--oryfin-copy)]">{oryfinPublishing.operatorName ?? "Pending publication"}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--oryfin-muted)]">Support email</dt>
              <dd className="mt-2 text-base leading-7 text-[var(--oryfin-copy)]">
                {supportMailto && oryfinPublishing.supportEmail ? (
                  <a href={supportMailto} className="inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--oryfin-violet-dark)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--oryfin-violet)]">
                    <Mail aria-hidden="true" className="size-4" />
                    {oryfinPublishing.supportEmail}
                  </a>
                ) : "Pending publication"}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--oryfin-muted)]">Postal address</dt>
              <dd className="mt-2 whitespace-pre-line text-base leading-7 text-[var(--oryfin-copy)]">{oryfinPublishing.postalAddress ?? "Pending publication"}</dd>
            </div>
            {oryfinPublishing.telephone ? (
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--oryfin-muted)]">Telephone</dt>
                <dd className="mt-2 text-base text-[var(--oryfin-copy)]">{oryfinPublishing.telephone}</dd>
              </div>
            ) : null}
            {oryfinPublishing.approvedSupportResponseMessage ? (
              <div className="sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--oryfin-muted)]">Response</dt>
                <dd className="mt-2 text-base leading-7 text-[var(--oryfin-copy)]">{oryfinPublishing.approvedSupportResponseMessage}</dd>
              </div>
            ) : null}
          </dl>
        </section>

        <aside className="mt-8 flex gap-3 border-l-2 border-[var(--oryfin-coral)] bg-[#fff0ea] p-5 text-sm leading-6 text-[#74331f]">
          <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          <p>Do not email passwords, magic-link codes, authentication tokens, CSV exports, or detailed financial records. Describe the issue with the minimum information needed.</p>
        </aside>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[15rem_minmax(0,50rem)] lg:justify-between lg:gap-20">
          <aside className="hidden lg:sticky lg:top-28 lg:block">
            <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--oryfin-muted)]">Help topics</p>
            <nav aria-label="Support topics" className="mt-5">
              <ul className="border-l border-[var(--oryfin-line)]">
                {supportTopics.map((topic) => (
                  <li key={topic.id}>
                    <a href={`#${topic.id}`} className="flex min-h-11 items-center border-l border-transparent py-2 pl-4 text-xs leading-5 text-[var(--oryfin-muted)] hover:border-[var(--oryfin-violet)] hover:text-[var(--oryfin-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--oryfin-violet)]">{topic.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <div>
            {supportTopics.map((topic, index) => (
              <section key={topic.id} id={topic.id} className="scroll-mt-28 border-b border-[var(--oryfin-line)] py-10 first:pt-0 sm:py-12">
                <div className="grid gap-4 sm:grid-cols-[3rem_1fr] sm:gap-6">
                  <span className="font-mono text-[0.62rem] font-semibold text-[var(--oryfin-violet-dark)] sm:pt-2">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="text-balance text-[clamp(1.8rem,4vw,3rem)] leading-[1] font-medium tracking-[-0.05em] text-[var(--oryfin-ink)]">{topic.title}</h2>
                    <div className="mt-6 space-y-4">
                      {topic.paragraphs.map((paragraph) => <p key={paragraph} className="text-pretty text-base leading-7 text-[var(--oryfin-copy)] sm:text-[1.06rem] sm:leading-8">{paragraph}</p>)}
                    </div>
                    {topic.id === "purchases" ? (
                      <a href={externalLinks.appleSubscriptions} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--oryfin-violet-dark)] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--oryfin-violet)]">
                        Manage Apple subscriptions <ArrowUpRight aria-hidden="true" className="size-4" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </section>
            ))}

            <section id="data-and-account-actions" className="scroll-mt-28 py-12">
              <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--oryfin-violet-dark)]">Know the difference</p>
              <h2 className="mt-5 text-balance text-[clamp(2rem,4vw,3.4rem)] leading-[1] font-medium tracking-[-0.05em] text-[var(--oryfin-ink)]">Data, account, app, and subscription actions</h2>
              <div className="mt-8 divide-y divide-[var(--oryfin-line)] border-y border-[var(--oryfin-line)]">
                {[
                  ["Delete all local data", "In Oryfin Settings, this removes transactions, budgets, goals, and recurring schedules from that device. It does not delete an account, cancel a subscription, erase vendor records, or promise to remove every preference."],
                  ["Delete an Oryfin account", oryfinPublishing.supabaseEmailSignInShips === true ? "The reviewed app can create an optional Supabase account but does not provide permanent account deletion. This is a launch blocker that must be fixed in the app; a support request alone does not satisfy Apple's rule." : oryfinPublishing.supabaseEmailSignInShips === false ? "Account creation is disabled in this release, so there is no Oryfin account to delete." : "Whether optional email accounts ship is not finalized. If account creation ships, in-app account deletion must be implemented before submission."],
                  ["Sign out", "If optional sign-in is enabled, Sign out ends the Oryfin authentication session on the device. It does not remove local financial records or cancel a subscription."],
                  ["Delete the app", "Removing Oryfin may remove locally stored records from that device, and there is no Oryfin cloud backup. It does not automatically cancel an Apple subscription or necessarily erase Apple, RevenueCat, Supabase, or support records."],
                  ["Cancel an Apple subscription", "Use Apple's subscription settings. Cancellation affects future renewal according to Apple's displayed terms; it is separate from all Oryfin data, account, sign-out, and app-deletion actions."],
                ].map(([title, description]) => (
                  <div key={title} className="grid gap-2 py-6 sm:grid-cols-[13rem_1fr] sm:gap-8">
                    <h3 className="font-semibold text-[var(--oryfin-ink)]">{title}</h3>
                    <p className="text-sm leading-6 text-[var(--oryfin-copy)]">{description}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm leading-6 text-[var(--oryfin-muted)]">
                For details about information handling, read the <Link href={{ pathname: "/apps/oryfin/privacy" }} className="font-semibold text-[var(--oryfin-violet-dark)] underline underline-offset-4">Oryfin Privacy Policy</Link> and <Link href={{ pathname: "/apps/oryfin/terms" }} className="font-semibold text-[var(--oryfin-violet-dark)] underline underline-offset-4">Terms of Use</Link>.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
