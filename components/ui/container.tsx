import type { ReactNode } from "react";

type ContainerElement =
  | "div"
  | "section"
  | "main"
  | "header"
  | "footer"
  | "nav"
  | "article"
  | "aside";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ContainerElement;
};

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-[1520px] px-[var(--page-gutter)] ${className}`}
    >
      {children}
    </Component>
  );
}
