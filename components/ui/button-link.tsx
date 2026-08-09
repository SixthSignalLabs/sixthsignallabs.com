import { ArrowRight } from "lucide-react";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const variantStyles = {
  primary:
    "min-h-12 rounded-full border border-[var(--blue-bright)] bg-[var(--blue-bright)] px-5 py-3 text-[var(--ink)] shadow-[0_10px_30px_rgba(5,106,177,0.16)] hover:border-[var(--blue)] hover:bg-[var(--blue)] hover:shadow-[0_14px_36px_rgba(5,106,177,0.24)]",
  secondary:
    "min-h-12 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-[var(--ink)] hover:border-[var(--muted)] hover:bg-[var(--paper-2)]",
  text:
    "min-h-8 rounded-sm border border-transparent px-0 py-1 text-[var(--ink)] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative inline-flex w-fit items-center justify-center gap-3 text-sm font-semibold tracking-[-0.01em] transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)] active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none ${variantStyles[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
        strokeWidth={1.8}
      />
    </a>
  );
}
