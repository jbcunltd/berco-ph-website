import { Link } from "wouter";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import CTAButton from "../components/layout/CTAButton";

const LOOKBOOK = [
  {
    name: "Minimalist",
    mood: "Discover the latest trends in Minimalist design.",
    image: "/berco/complete-home-interiors/minimalist-red-beige-collection-01.webp"
  },
  {
    name: "Monet",
    mood: "Discover the latest trends in Monet design.",
    image: "/berco/bathrooms/monet-serene-modern-elegance-green-whole-home-collection-01.webp"
  },
  {
    name: "Monica",
    mood: "Discover the latest trends in Monica design.",
    image: "/berco/bathrooms/monica-scandinavian-modern-green-whole-home-collection-01.webp"
  },
  {
    name: "Renaut",
    mood: "Discover the latest trends in Renaut design.",
    image: "/berco/bathrooms/renaut-natural-wood-whole-home-collection-01.webp"
  },
  {
    name: "Puffy",
    mood: "Discover the latest trends in Puffy design.",
    image: "/berco/kitchens/puffy-closed-concept-kitchen-suite-01.webp"
  }
];

const FEATURED = [
  "/berco/complete-home-interiors/minimalist-red-beige-collection-01.webp",
  "/berco/complete-home-interiors/minimalist-red-beige-collection-02.webp",
  "/berco/complete-home-interiors/minimalist-red-beige-collection-03.webp",
  "/berco/complete-home-interiors/minimalist-red-beige-collection-04.webp"
];

export default function Collection2026() {
  return (
    <div className="w-full">
      <Section variant="default" size="lg">
        <Container>
          <div className="max-w-5xl mx-auto text-center">
            <span className="ds-label">2026 Collection</span>
            <h1 className="mt-5 mb-6">
              A curated lookbook of <em className="italic">BERCO’s most elevated interiors.</em>
            </h1>
            <p className="text-text-body leading-relaxed text-lg max-w-3xl mx-auto">
              The 2026 Collection brings together the newest premium design directions: soft minimalism, walnut warmth, sculptural storage walls, and whole-home compositions that feel calm, architectural, and deeply refined.
            </p>
          </div>
        </Container>
      </Section>

      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[1500px] mx-auto ds-card-image aspect-[16/8]">
          <img src={FEATURED[1]} alt="2026 Collection premium interior hero" />
        </div>
      </div>

      <Section variant="alt" size="md">
        <Container>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="ds-label">The Lookbook</span>
              <h2 className="mt-4 mb-5">Six refined series for homes that feel considered from every angle.</h2>
              <p className="text-text-body leading-relaxed">
                These images set the visual direction for BERCO’s most premium proposals: warm off-whites, architectural lines, quiet storage, and coordinated room-to-room finishes.
              </p>
              <div className="mt-8">
                <Link href="/contact" asChild>
                  <CTAButton variant="primary">Request a 2026 Design Consultation →</CTAButton>
                </Link>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {LOOKBOOK.map((item) => (
                <article key={item.name} className="bg-bg border border-line overflow-hidden group">
                  <div className="ds-card-image aspect-[4/5] rounded-none">
                    <img src={item.image} alt={`${item.name} series interior`} className="group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <span className="ds-label">Series</span>
                    <h3 className="mt-3 mb-3">{item.name}</h3>
                    <p className="text-text-body leading-relaxed">{item.mood}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="default" size="lg">
        <Container>
          <div className="grid md:grid-cols-4 gap-4">
            {FEATURED.map((image, index) => (
              <div key={image} className={`${index === 0 ? "md:col-span-2 md:row-span-2" : ""} ds-card-image aspect-[4/5] md:aspect-auto min-h-[320px]`}>
                <img src={image} alt={`2026 Collection detail ${index + 1}`} />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
