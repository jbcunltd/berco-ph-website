/**
 * Container — horizontal padding + max-width primitive.
 * Widths and gutters come from `--content-max`, `--narrow-max`, `--wide-max`
 * and `--container-x-*` in index.css.
 */
import { ReactNode } from "react";

type Width = "default" | "narrow" | "wide";

interface ContainerProps {
  children: ReactNode;
  width?: Width;
  className?: string;
}

const widthClass: Record<Width, string> = {
  default: "ds-container",
  narrow:  "ds-container ds-container-narrow",
  wide:    "ds-container ds-container-wide",
};

export default function Container({ children, width = "default", className = "" }: ContainerProps) {
  return <div className={`${widthClass[width]} ${className}`}>{children}</div>;
}
