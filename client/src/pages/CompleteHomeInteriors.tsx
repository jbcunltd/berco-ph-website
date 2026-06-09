import { Link } from "wouter";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import CTAButton from "../components/layout/CTAButton";

const HERO_IMAGES = [
  "/berco/bathrooms/alice-collection-bath-suite-01.webp",
  "/berco/bathrooms/alice-collection-bath-suite-02.webp",
  "/berco/bathrooms/alice-collection-bath-suite-03.webp",
];

const PACKAGES = [
  {
    title: "Alice Whole Home Package",
    copy: "A coordinated design language for your home, featuring the Alice series across multiple spaces.",
    image: "/berco/bathrooms/alice-collection-bath-suite-01.webp"
  },
  {
    title: "Como Whole Home Package",
    copy: "A coordinated design language for your home, featuring the Como series across multiple spaces.",
    image: "/berco/bathrooms/como-modern-beige-and-walnut-whole-home-collection-01.webp"
  },
  {
    title: "Contemporary Whole Home Package",
    copy: "A coordinated design language for your home, featuring the Contemporary series across multiple spaces.",
    image: "/berco/bathrooms/contemporary-home-bath-suite-01.webp"
  },
];

const INCLUSIONS = [
  "Kitchen systems and islands",
  "Wardrobes and walk-in closets",
  "Bathroom vanities and storage",
  "TV walls, display cabinets, and living room storage",
  "Bedroom cabinetry and headboard walls",
];

export default function CompleteHomeInteriors() {
  return (
    <div className="w-full">
      <Section variant="default" size="lg">
        <Container>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-end">
            <div>
              <span className="ds-label">Complete Home Interiors</span>
              <h1 className="mt-5 mb-6 max-w-3xl">
                One home, <em className="italic">one composed design language.</em>
              </h1>
              <p className="text-text-body leading-relaxed text-lg max-w-xl">
                BERCO creates coordinated full-home interiors where the kitchen, wardrobes, vanities, TV units, bedrooms, and supporting storage spaces are designed together — not as separate rooms, but as one refined architectural story.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" asChild>
                  <CTAButton variant="primary">Plan a Whole-Home Consultation →</CTAButton>
                </Link>
                <Link href="/2026-collection" asChild>
                  <CTAButton variant="secondary">View 2026 Collection</CTAButton>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-3 h-[560px]">
              <div className="col-span-3 ds-card-image h-full">
                <img src={HERO_IMAGES[0]} alt="Complete home interior living composition" />
              </div>
              <div className="col-span-2 grid gap-3">
                <div className="ds-card-image h-full">
                  <img src={HERO_IMAGES[1]} alt="Coordinated kitchen interior" />
                </div>
                <div className="ds-card-image h-full">
                  <img src={HERO_IMAGES[2]} alt="Coordinated bedroom interior" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="alt" size="md">
        <Container width="narrow" className="text-center">
          <span className="ds-label">Whole-House Solution</span>
          <h2 className="mt-4 mb-6">Designed together, installed with intention.</h2>
          <p className="text-text-body leading-relaxed text-lg">
            A complete BERCO home starts with a unified palette of warm neutrals, woods, stone, lacquer, and refined hardware. Every cabinet line, panel proportion, and finish transition is considered so the house feels calm from the first room to the last.
          </p>
        </Container>
      </Section>

      <Section variant="default" size="lg">
        <Container>
          <div className="space-y-20">
            {PACKAGES.map((item, index) => (
              <div key={item.title} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="ds-card-image aspect-[16/10]">
                  <img src={item.image} alt={item.title} />
                </div>
                <div>
                  <span className="ds-label">0{index + 1}</span>
                  <h2 className="mt-4 mb-5">{item.title}</h2>
                  <p className="text-text-body leading-relaxed text-lg">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="dark" size="md">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
            <div>
              <span className="ds-label text-white/60">Included Spaces</span>
              <h2 className="mt-4 mb-5 text-white">A complete interior package, refined down to the details.</h2>
              <p className="text-white/70 leading-relaxed">
                BERCO coordinates the visible rooms and the hardworking spaces, creating cabinetry that supports daily life while preserving a consistent luxury atmosphere.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {INCLUSIONS.map((item) => (
                <div key={item} className="border border-white/15 p-5 bg-white/5">
                  <p className="text-white font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
