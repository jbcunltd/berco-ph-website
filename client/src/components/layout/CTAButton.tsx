/**
 * CTAButton — primary / secondary / accent / link variants.
 * Renders an anchor (so it works with wouter <Link href asChild>) by default.
 */
import { ReactNode, ComponentPropsWithoutRef, forwardRef } from "react";

type Variant = "primary" | "secondary" | "accent" | "link";

interface CTAButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: Variant;
  children: ReactNode;
}

const variantClass: Record<Variant, string> = {
  primary:   "ds-btn ds-btn-primary",
  secondary: "ds-btn ds-btn-secondary",
  accent:    "ds-btn ds-btn-accent",
  link:      "ds-btn-link",
};

const CTAButton = forwardRef<HTMLAnchorElement, CTAButtonProps>(
  ({ variant = "primary", className = "", children, ...rest }, ref) => (
    <a ref={ref} className={`${variantClass[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
);
CTAButton.displayName = "CTAButton";

export default CTAButton;
