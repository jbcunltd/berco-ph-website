/**
 * SectionHeading — consistent section header used across non-hero sections.
 */
import { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: ReactNode;
  titleItalic?: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  titleItalic,
  intro,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`${alignClass} ${className}`}>
      {label && <span className="ds-label">{label}</span>}
      <h2 className={label ? "mt-3" : ""}>
        {title}
        {titleItalic && (
          <>
            <br />
            <em className="italic">{titleItalic}</em>
          </>
        )}
      </h2>
      {intro && (
        <p className={`text-text-body leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
