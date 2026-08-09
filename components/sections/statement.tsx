"use client";

import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { siteData } from "@/lib/site-data";

export function Statement() {
  const reduceMotion = useReducedMotion();
  const words = siteData.statementSection.heading.split(" ");

  return (
    <section aria-labelledby="statement-heading" className="relative flex min-h-[88svh] items-center overflow-hidden bg-surface-dark py-24 text-white">
      <div className="signal-grid-dark absolute inset-0 opacity-55" aria-hidden="true" />
      <div className="absolute -right-[22rem] top-1/2 size-[48rem] -translate-y-1/2 rounded-full border border-white/5" aria-hidden="true" />
      <div className="absolute -right-[14rem] top-1/2 size-[34rem] -translate-y-1/2 rounded-full border border-blue-bright/12" aria-hidden="true" />

      <Container className="relative">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-10">
            <SectionLabel tone="dark">{siteData.statementSection.eyebrow}</SectionLabel>
            <h2
              id="statement-heading"
              className="mt-10 max-w-[13ch] text-[clamp(4rem,9.2vw,10rem)] font-[520] leading-[0.86] tracking-[-0.075em]"
            >
              {words.map((word, index) => (
                <span key={`${word}-${index}`} className="mr-[0.2em] inline-block overflow-hidden pb-[0.08em]">
                  <motion.span
                    className={`inline-block ${word.toLowerCase().startsWith("outsourced") ? "text-blue-bright" : ""}`}
                    initial={reduceMotion ? false : { y: "110%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.7, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/12 pt-6 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <svg className="h-16 w-full" viewBox="0 0 720 64" fill="none" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 32H280" stroke="rgba(255,255,255,.18)" strokeDasharray="3 10" />
              <motion.path
                d="M280 32H720"
                stroke="url(#statementLine)"
                strokeWidth="2"
                initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 1.2, delay: 0.2 }}
              />
              <circle cx="280" cy="32" r="4" fill="#12a5e8" />
              <defs>
                <linearGradient id="statementLine" x1="280" y1="0" x2="720" y2="0">
                  <stop stopColor="#285791" />
                  <stop offset="1" stopColor="#12a5e8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="body-large max-w-xl text-white/58 md:col-span-5">{siteData.statementSection.body}</p>
        </div>
      </Container>
    </section>
  );
}
