/**
 * ProductGrid — 1/2/3 column responsive grid for product cards.
 * Gap comes from `--grid-gap-*` tokens.
 */
import { Link } from "wouter";
import { ReactNode } from "react";

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

interface Item {
  title: string;
  gallery?: string[];
  description?: string;
}

interface ProductCardProps {
  item: Item;
  hrefPrefix: string;
}

export function ProductCard({ item, hrefPrefix }: ProductCardProps) {
  const image = item.gallery?.[0] || "";
  const description = item.description?.split("\n")[0];
  return (
    <Link href={`${hrefPrefix}/${slug(item.title)}`} asChild>
      <a className="group block">
        <div className="aspect-[4/5] ds-card-image mb-4 sm:mb-5">
          <img src={image} alt={item.title} loading="lazy" />
        </div>
        <h3 className="font-display text-text text-base sm:text-lg line-clamp-2 mb-1">
          {item.title}
        </h3>
        {description && (
          <p className="caption line-clamp-2">{description}</p>
        )}
      </a>
    </Link>
  );
}

interface ProductGridProps {
  items: Item[];
  hrefPrefix: string;
}

export default function ProductGrid({ items, hrefPrefix }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ds-grid-gap">
      {items.map((item, i) => (
        <ProductCard key={`${item.title}-${i}`} item={item} hrefPrefix={hrefPrefix} />
      ))}
    </div>
  );
}

/** Generic content wrapper for arbitrary children, useful inside Section */
export function GridShell({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
