import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  tone?: "light" | "dark";
};

export function SectionLabel({
  children,
  tone = "light",
}: SectionLabelProps) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] ${
        tone === "dark" ? "text-white/65" : "text-[var(--muted)]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`size-1.5 rounded-full ${
          tone === "dark"
            ? "bg-[var(--blue-bright)] shadow-[0_0_0_4px_rgba(9,155,219,0.12)]"
            : "bg-[var(--blue)] shadow-[0_0_0_4px_rgba(5,106,177,0.1)]"
        }`}
      />
      {children}
    </p>
  );
}
