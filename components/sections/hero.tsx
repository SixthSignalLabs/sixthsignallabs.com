"use client";

import type { PointerEvent as ReactPointerEvent } from "react";
import { Braces, Radio } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteData } from "@/lib/site-data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 110, damping: 24, mass: 0.6 });
  const y = useSpring(pointerY, { stiffness: 110, damping: 24, mass: 0.6 });

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 16);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 12);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden pb-10 pt-32 md:pb-16 md:pt-40"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="signal-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="absolute -left-[18rem] top-20 h-[36rem] w-[36rem] rounded-full bg-blue-bright/8 blur-[100px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-8 grid gap-5 border-t border-line pt-4 md:grid-cols-12"
        >
          <div className="mono-label flex items-center gap-2 text-slate md:col-span-5">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="status-pulse absolute inset-0 rounded-full bg-blue-bright" />
              <span className="relative m-auto size-1 rounded-full bg-blue" />
            </span>
            {siteData.hero.eyebrow}
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted md:col-span-5 md:col-start-8 md:text-base">
            Product strategy, interface design, and senior engineering—connected from the first
            decision to the first release.
          </p>
        </motion.div>

        <div className="relative">
          <h1 id="hero-heading" className="display-title relative z-10">
            <span className="block overflow-hidden pb-[0.1em]">
              <motion.span
                className="block"
                initial={reduceMotion ? false : { y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.05, ease }}
              >
                We build
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.1em]">
              <motion.span
                className="block"
                initial={reduceMotion ? false : { y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.14, ease }}
              >
                software <span className="text-blue">people</span>
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.1em]">
              <motion.span
                className="block"
                initial={reduceMotion ? false : { y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.23, ease }}
              >
                want to use.
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
            className="ml-auto mt-7 max-w-xl md:mt-10 md:pr-[7vw]"
          >
            <p className="body-large text-pretty text-slate">{siteData.hero.body}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={siteData.hero.primaryAction.href} variant="primary">
                {siteData.hero.primaryAction.label}
              </ButtonLink>
              <ButtonLink href={siteData.hero.secondaryAction.href} variant="secondary">
                {siteData.hero.secondaryAction.label}
              </ButtonLink>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={reduceMotion ? undefined : { x, y }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.68, ease }}
          className="relative mt-14 overflow-hidden rounded-[1.75rem] border border-ink/12 bg-white shadow-float md:mt-20 md:rounded-[2.5rem]"
        >
          <div className="flex h-12 items-center justify-between border-b border-line px-4 md:px-6">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-ink/20" />
              <span className="size-2 rounded-full bg-ink/12" />
              <span className="size-2 rounded-full bg-blue-bright" />
            </div>
            <div className="mono-label flex items-center gap-2 text-muted">
              <Radio className="size-3.5 text-blue" aria-hidden="true" />
              Signal / 006
            </div>
            <span className="mono-label hidden text-muted sm:inline">Live product system</span>
          </div>

          <div className="signal-grid relative h-[25rem] overflow-hidden md:h-[34rem]">
            <svg
              className="absolute inset-x-0 top-[38%] h-[45%] w-full overflow-visible"
              viewBox="0 0 1200 280"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M-20 212C112 212 108 78 252 78C398 78 376 216 532 216C688 216 678 60 842 60C1006 60 1010 164 1220 164"
                stroke="rgba(8,17,22,.16)"
                strokeWidth="1.5"
              />
              <path
                className="signal-dash"
                d="M-20 212C112 212 108 78 252 78C398 78 376 216 532 216C688 216 678 60 842 60C1006 60 1010 164 1220 164"
                stroke="url(#signalGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="signalGradient" x1="0" y1="0" x2="1200" y2="0">
                  <stop stopColor="#163f88" />
                  <stop offset="0.6" stopColor="#087ec5" />
                  <stop offset="1" stopColor="#08a7ed" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute left-4 top-5 w-[53%] max-w-[25rem] rounded-2xl border border-line bg-paper/95 p-3 shadow-tight md:left-[7%] md:top-[12%] md:p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="mono-label text-muted">Product canvas</div>
                <Braces className="size-4 text-blue" aria-hidden="true" />
              </div>
              <div className="grid grid-cols-[1fr_1.4fr] gap-2">
                <div className="space-y-2">
                  <div className="h-16 rounded-lg bg-ink p-2">
                    <div className="h-1.5 w-8 rounded-full bg-white/35" />
                    <div className="mt-6 h-1 w-12 rounded-full bg-blue-bright" />
                  </div>
                  <div className="h-9 rounded-lg border border-line bg-white" />
                </div>
                <div className="rounded-lg border border-line bg-white p-2">
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="col-span-2 h-8 rounded bg-paper-2" />
                    <div className="h-8 rounded bg-blue/15" />
                    <div className="h-14 rounded bg-blue-deep/90" />
                    <div className="col-span-2 h-14 rounded bg-paper-2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-[5%] top-[7%] w-[38%] min-w-[10rem] max-w-[20rem] rounded-[1.4rem] border border-white/10 bg-surface-dark p-3 text-white shadow-float md:right-[10%] md:top-[9%] md:rounded-[2rem] md:p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="mono-label text-white/50">Build status</span>
                <span className="flex items-center gap-1.5 text-[0.62rem] text-white/60">
                  <span className="size-1.5 rounded-full bg-blue-bright" /> active
                </span>
              </div>
              <div className="mt-5 space-y-3">
                {[84, 58, 72].map((width, index) => (
                  <div key={width} className="flex items-center gap-3">
                    <span className="font-mono text-[0.55rem] text-white/35">0{index + 1}</span>
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-deep to-blue-bright"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <div className="h-1.5 w-14 rounded-full bg-white/20" />
                <div className="mt-4 grid grid-cols-4 items-end gap-1.5">
                  {[30, 64, 45, 86].map((height) => (
                    <div
                      key={height}
                      className="rounded-t bg-blue-bright/70"
                      style={{ height: `${height / 2}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute inset-x-3 bottom-4 grid grid-cols-4 gap-1.5 md:inset-x-[6%] md:bottom-7 md:gap-4">
              {siteData.hero.signalStages.map((stage, index) => (
                <div
                  key={stage}
                  className="relative rounded-xl border border-line bg-white/90 px-2 py-3 backdrop-blur md:rounded-2xl md:px-4 md:py-4"
                >
                  <span className="absolute -top-1.5 left-3 size-3 rounded-full border-[3px] border-white bg-blue md:left-4" />
                  <span className="font-mono text-[0.55rem] text-muted md:text-[0.65rem]">
                    0{index + 1}
                  </span>
                  <span className="mt-1 block text-[0.68rem] font-medium tracking-tight sm:text-sm md:text-base">
                    {stage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-4 flex items-center justify-between px-1 text-[0.62rem] text-muted">
          <span className="font-mono uppercase tracking-[0.15em]">Scroll to explore</span>
          <span className="font-mono uppercase tracking-[0.15em]">06° 56′ N / 79° 51′ E</span>
        </div>
      </Container>
    </section>
  );
}
