"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { siteData } from "@/lib/site-data";

import { ButtonLink } from "./ui/button-link";
import { Container } from "./ui/container";

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 24);
  });

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    desktop.addEventListener("change", closeAtDesktop);
    return () => desktop.removeEventListener("change", closeAtDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => {
      menuRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();
    });

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusableElements = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const closeMenuAndRestoreFocus = () => {
    setMenuOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <Container className="relative z-20">
        <div
          className={`pointer-events-auto flex h-[72px] items-center justify-between gap-4 rounded-[1.35rem] border px-3 transition-[background-color,border-color,box-shadow] duration-500 sm:px-4 ${
            isScrolled || menuOpen
              ? "border-[var(--line)] bg-white/95 shadow-[0_18px_48px_rgba(7,16,24,0.12)] backdrop-blur-xl"
              : "border-white/40 bg-white/75 shadow-[0_8px_30px_rgba(7,16,24,0.05)] backdrop-blur-md"
          }`}
        >
          <Link
            href="/"
            aria-label={`${siteData.metadata.name}, home`}
            className="relative flex h-12 shrink-0 items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)] focus-visible:ring-offset-2"
          >
            <span className="relative block w-[140px] sm:w-[152px]">
              <Image
                src="/brand/sixth-signal-labs-lockup.png"
                alt={siteData.metadata.logoAlt}
                width={1280}
                height={420}
                priority
                sizes="(max-width: 640px) 140px, 152px"
                className="h-auto w-full"
              />
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
            {siteData.navigation.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative rounded-full px-3 py-2 text-[0.79rem] font-medium text-[var(--slate)] transition-colors duration-300 hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)] lg:px-4 lg:text-[0.84rem]"
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-4 bottom-1.5 h-px origin-right scale-x-0 bg-[var(--blue)] transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100 motion-reduce:transition-none"
                />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href={siteData.navigation.cta.href}>
              {siteData.navigation.cta.label}
            </ButtonLink>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] transition-colors hover:bg-[var(--paper-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)] focus-visible:ring-offset-2 lg:hidden"
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <motion.span
                className="absolute left-0 top-1 block h-px w-5 bg-current"
                animate={menuOpen ? { y: 4, rotate: 45 } : { y: 0, rotate: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
              <motion.span
                className="absolute bottom-1 left-0 block h-px w-5 bg-current"
                animate={menuOpen ? { y: -3, rotate: -45 } : { y: 0, rotate: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <>
            <motion.button
              type="button"
              tabIndex={-1}
              aria-label="Close navigation menu"
              className="pointer-events-auto fixed inset-0 z-0 cursor-default bg-[var(--ink)]/20 backdrop-blur-sm lg:hidden"
              onClick={closeMenuAndRestoreFocus}
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
            />
            <motion.div
              ref={menuRef}
              id={menuId}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="pointer-events-auto fixed inset-x-5 top-[6.5rem] z-10 mx-auto max-h-[calc(100dvh-7.75rem)] max-w-2xl overflow-y-auto rounded-[1.5rem] border border-[var(--line)] bg-[var(--paper)] p-3 shadow-[0_30px_80px_rgba(7,16,24,0.2)] sm:inset-x-8 lg:hidden"
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: -12, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.34,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center justify-between px-3 pb-3 pt-2 font-mono text-[0.63rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                <span>Navigate</span>
                <button
                  type="button"
                  onClick={closeMenuAndRestoreFocus}
                  className="rounded-md px-2 py-1 transition-colors hover:bg-[var(--paper-2)] hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)]"
                >
                  Close <span aria-hidden="true">×</span>
                </button>
              </div>

              <nav aria-label="Mobile navigation">
                <ul className="overflow-hidden rounded-[1rem] border border-[var(--line)] bg-[var(--surface)]">
                  {siteData.navigation.items.map((item, index) => (
                    <motion.li
                      key={item.href}
                      className="border-b border-[var(--line)] last:border-b-0"
                      initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.35,
                        delay: shouldReduceMotion ? 0 : 0.06 + index * 0.035,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="group flex min-h-14 items-center justify-between gap-4 px-4 py-3 text-lg font-medium tracking-[-0.02em] text-[var(--ink)] transition-colors hover:bg-[var(--paper-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--blue-bright)]"
                      >
                        <span>{item.label}</span>
                        <span className="flex items-center gap-3 font-mono text-[0.62rem] tracking-[0.12em] text-[var(--muted)]">
                          {String(index + 1).padStart(2, "0")}
                          <span
                            aria-hidden="true"
                            className="h-px w-5 bg-[var(--line)] transition-all duration-300 group-hover:w-8 group-hover:bg-[var(--blue)] motion-reduce:transition-none"
                          />
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col items-start gap-4 px-2 pb-1 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[13rem] text-xs leading-relaxed text-[var(--muted)]">
                  Design and engineering, working as one system.
                </p>
                <ButtonLink
                  href={siteData.navigation.cta.href}
                  className="shrink-0"
                  onClick={closeMenu}
                >
                  {siteData.navigation.cta.label}
                </ButtonLink>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
