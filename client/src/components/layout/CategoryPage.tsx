/**
 * CategoryPage — single template that powers every product category route.
 *
 * To change the look of ALL category pages, edit this file.
 * To change the content for one category, edit `CATEGORY_CONFIG` in
 * `client/src/data/categoryConfig.ts`.
 */
import { ReactNode } from "react";
import products from "../../data/products.json";
import Section from "./Section";
import Container from "./Container";
import PageHero from "./PageHero";
import ProductGrid from "./ProductGrid";
import CTAButton from "./CTAButton";

export interface CategoryConfig {
  /** matches `category` field in products.json */
  slug: string;
  /** route prefix, e.g. "/kitchens" */
  href: string;
  /** small uppercase label */
  eyebrow: string;
  /** first line of hero heading */
  title: ReactNode;
  /** second italic line of hero heading */
  titleItalic?: ReactNode;
  /** intro paragraph under the heading */
  intro: ReactNode;
  /** CTA heading at bottom — defaults to global */
  ctaTitle?: ReactNode;
  ctaTitleItalic?: ReactNode;
  ctaCopy?: ReactNode;
}

interface Props {
  config: CategoryConfig;
}

export default function CategoryPage({ config }: Props) {
  const items = products.filter((p: any) => p.category === config.slug);

  return (
    <div className="w-full">
      <PageHero
        eyebrow={config.eyebrow}
        title={config.title}
        titleItalic={config.titleItalic}
        intro={config.intro}
      />

      <Section variant="default" size="md">
        <Container>
          <ProductGrid items={items} hrefPrefix={config.href} />
        </Container>
      </Section>

      <Section variant="alt" size="md">
        <Container width="narrow" className="text-center">
          <h2>
            {config.ctaTitle ?? "Start with a design"}
            <br />
            <em className="italic">{config.ctaTitleItalic ?? "conversation."}</em>
          </h2>
          <p className="text-text-body leading-relaxed max-w-xl mx-auto">
            {config.ctaCopy ??
              "Tell us about your space, materials, and how it will be used every day."}
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton href="/contact" variant="primary">
              Start Your Design Consultation →
            </CTAButton>
          </div>
        </Container>
      </Section>
    </div>
  );
}
