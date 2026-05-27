/**
 * Section — vertical rhythm primitive driven by design tokens.
 *
 * Backgrounds and padding both come from index.css custom properties.
 * To change site-wide section spacing, edit `--section-y-*` in index.css.
 * To change palette, edit `--bg`, `--bg-alt`, `--footer-bg` in index.css.
 */
import { ReactNode } from "react";

type Variant = "default" | "alt" | "dark";
type Size = "sm" | "md" | "lg";

interface SectionProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  id?: string;
}

const bgClass: Record<Variant, string> = {
  default: "bg-bg text-text-body",
  alt:     "bg-bg-alt text-text-body",
  dark:    "bg-footer-bg text-text-on-dark",
};

const sizeClass: Record<Size, string> = {
  sm: "ds-section-sm",
  md: "ds-section",
  lg: "ds-section-lg",
};

export default function Section({
  children,
  variant = "default",
  size = "md",
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`${bgClass[variant]} ${sizeClass[size]} ${className}`}>
      {children}
    </section>
  );
}
