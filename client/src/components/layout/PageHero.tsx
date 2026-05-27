/**
 * PageHero — top-of-page hero used by all category/content pages.
 * Eyebrow label + serif headline (with optional italic second line) + intro paragraph.
 */
import { ReactNode } from "react";
import Section from "./Section";
import Container from "./Container";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;             // first line
  titleItalic?: ReactNode;      // second italic line (e.g. "and Galley Kitchens.")
  intro?: ReactNode;
}

export default function PageHero({ eyebrow, title, titleItalic, intro }: PageHeroProps) {
  return (
    <Section variant="default" size="md">
      <Container>
        <span className="ds-label">{eyebrow}</span>
        <h1 className="mt-3 sm:mt-4">
          {title}
          {titleItalic && (
            <>
              <br />
              <em className="italic">{titleItalic}</em>
            </>
          )}
        </h1>
        {intro && (
          <p className="mt-6 sm:mt-8 text-text-body max-w-2xl leading-relaxed">
            {intro}
          </p>
        )}
      </Container>
    </Section>
  );
}
