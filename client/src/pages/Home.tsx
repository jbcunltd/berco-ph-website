import { Link } from "wouter";
import products from "../data/products.json";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SectionHeading from "../components/layout/SectionHeading";
import CTAButton from "../components/layout/CTAButton";

const findProduct = (cat: string, keyword?: string) => {
  if (keyword) {
    const k = keyword.toLowerCase();
    const match = (products as any[]).find(
      (p) => p.category === cat && p.title.toLowerCase().includes(k) && p.gallery?.[0]
    );
    if (match) return match;
  }
  return (products as any[]).find((p) => p.category === cat && p.gallery?.[0]);
};
const getImageForCategory = (cat: string) => findProduct(cat)?.gallery?.[0] || "";

const CATEGORIES = [
  { title: "Kitchens",   description: "Islands, sculleries, and galley kitchens — from compact condos to expansive family homes.", category: "kitchens", href: "/kitchens" },
  { title: "Bedrooms",   description: "Walk-in closets and bedroom wardrobes — storage that feels like part of the architecture.", category: "bedrooms", href: "/bedrooms" },
  { title: "Wardrobes",  description: "Built-in closets and dressing rooms — tailored to the way you live and dress.", category: "wardrobes", href: "/wardrobes" },
  { title: "Bathrooms",  description: "Spa-inspired vanities and storage — moisture-resistant boards, beautifully finished.", category: "bathrooms", href: "/bathrooms" },
  { title: "Vanities",   description: "Floating and freestanding — stone, lacquer, and natural wood finishes.", category: "vanities", href: "/vanities" },
  { title: "TV & Living",description: "Media walls, bar cabinets, and accent storage — entertainment spaces composed with restraint.", category: "tv-units", href: "/tv-units" },
];

const WHY_BERCO = [
  { num: "i.",  title: "Custom-fit for Philippine homes", desc: "Every cabinet is drawn to the millimetre of your space — condo bulkheads, low ceilings, irregular walls, and the slope of an older house all accounted for before fabrication begins." },
  { num: "ii.", title: "A guided design process",         desc: "One designer follows your project from first sketch to final hinge. You'll always know who to call, and the drawings will always reflect the conversation you just had." },
  { num: "iii.",title: "Moisture-resistant boards",       desc: "Marine-grade and CARB P2-certified substrates with PUR edge-banding — chosen for the tropical climate and held to specification for the decade ahead." },
  { num: "iv.", title: "Premium European hardware",       desc: "Blum soft-close hinges, Hettich drawer systems, and Salice mechanisms — the same components specified by the European studios we admire." },
  { num: "v.",  title: "CNC precision, hand-finished",    desc: "Computer-controlled cutting and PUR edge-banding deliver joinery accurate to the half-millimetre. The hand-finishing, sanding, and final fit are still done by people who care." },
  { num: "vi.", title: "Built for the tropics",           desc: "Specified for Philippine humidity, daily heat cycles, and coastal air — so doors stay flush, drawers stay aligned, and finishes hold their depth season after season." },
];

const PROCESS_STEPS = [
  { num: "i.",  title: "Consult", desc: "A studio visit, or a house call. We discuss how you live before we discuss what you'll build." },
  { num: "ii.", title: "Design",  desc: "Hand drawings, then 3D — refined over two to three rounds, with materials laid out on the table." },
  { num: "iii.",title: "Build",   desc: "Fabricated by our production team with European hardware and Philippine hardwoods, where appropriate." },
  { num: "iv.", title: "Install", desc: "A small, dedicated team. Dust-controlled installation. Project-specific warranty terms provided at handover." },
];

export default function Home() {
  const kitchenImage = getImageForCategory("kitchens");

  const categoriesWithImages = CATEGORIES.map((c) => ({
    ...c,
    image: getImageForCategory(c.category),
  }));

  const designStudies = [
    { title: "Modern Walnut Kitchen Concept",     description: "A study in warmth and quiet contrast — walnut grain, honed stone, and an island built for slow mornings.", image: findProduct("kitchens", "Curved")?.gallery?.[0] || getImageForCategory("kitchens"), href: "/kitchens" },
    { title: "Minimalist Walk-in Wardrobe Study", description: "An exploration of full-height cabinetry, recessed handles, and the discipline of open shelving.",          image: findProduct("wardrobes","Walk in Closet")?.gallery?.[0] || getImageForCategory("wardrobes"), href: "/wardrobes" },
    { title: "Quiet Bedroom Suite Concept",       description: "Storage drawn at the scale of the room — proportion, texture, and a restful palette of muted tones.",    image: findProduct("bedrooms","Walk in Closet")?.gallery?.[0] || getImageForCategory("bedrooms"), href: "/bedrooms" },
    { title: "Floating Vanity Direction",         description: "Light catches the underplane — a directional study in stone, lacquer, and the geometry of shadow.",       image: findProduct("vanities","Floating")?.gallery?.[0] || getImageForCategory("vanities"), href: "/vanities" },
    { title: "Spa-Inspired Bathroom Concept",     description: "Moisture-resistant cabinetry composed around natural light — a brief for calm, considered everyday rituals.", image: findProduct("bathrooms","Beige")?.gallery?.[0] || getImageForCategory("bathrooms"), href: "/bathrooms" },
    { title: "Bar & Media Wall Study",            description: "A living-room composition that holds glassware, books, and the television — without raising its voice.", image: findProduct("tv-units","bar")?.gallery?.[0] || getImageForCategory("tv-units"), href: "/tv-units" },
  ];

  return (
    <div className="w-full">
      {/* HERO */}
      <Section variant="default" size="sm" className="!pt-0 !pb-0">
        {/* Mobile */}
        <div className="md:hidden pt-10 pb-8 text-center">
          <Container>
          <span className="ds-label">Bespoke Cabinetry · Philippines</span>
          <h1 className="mt-4 mb-4">
            Custom Cabinetry for <em className="italic">Philippine</em> Homes.
          </h1>
          <p className="text-text-body leading-relaxed mb-7 max-w-md mx-auto">
            Quiet, considered storage — kitchens, wardrobes, vanities, and refined spaces.
          </p>
          <div className="flex flex-col gap-3 mb-6">
            <Link href="/contact" asChild>
              <CTAButton variant="primary" className="w-full">Book a Design Consultation →</CTAButton>
            </Link>
            <Link href="/kitchens" asChild>
              <CTAButton variant="secondary" className="w-full">Explore Collections</CTAButton>
            </Link>
          </div>
            <div className="ds-card-image h-72">
              <img src={kitchenImage} alt="BERCO cabinetry" />
            </div>
          </Container>
        </div>
        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-[0.9fr_1.1fr] md:h-[680px] md:items-stretch">
          <div className="ds-card-image rounded-none">
            <img src={kitchenImage} alt="BERCO cabinetry" />
          </div>
          <div className="py-20 flex flex-col justify-center bg-bg">
            <Container className="h-full flex flex-col justify-center">
            <span className="ds-label mb-6">Bespoke Cabinetry · Philippines</span>
            <h1 className="mb-6 max-w-[600px]">
              Custom Cabinetry for <em className="italic">Philippine</em> Homes.
            </h1>
            <p className="text-text-body leading-relaxed mb-8 max-w-[560px]">
              Quiet, considered storage — kitchens, wardrobes, vanities, and refined spaces shaped around the way you live.
            </p>
              <div className="flex gap-4">
                <Link href="/contact" asChild>
                  <CTAButton variant="primary">Book a Design Consultation →</CTAButton>
                </Link>
                <Link href="/kitchens" asChild>
                  <CTAButton variant="secondary">Explore Collections</CTAButton>
                </Link>
              </div>
            </Container>
          </div>
        </div>
      </Section>

      {/* BRAND INTRO */}
      <Section variant="default" size="md">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-4">
              <SectionHeading
                label="Studio"
                title="We design cabinetry the way architects draw."
              />
            </div>
            <div className="md:col-span-8 space-y-4">
              <p className="text-text-body leading-relaxed">
                With proportion, restraint, and practical storage planning — every cabinet is shaped around how the space is actually used. Each interior begins with listening, before any line is drawn.
              </p>
              <Link href="/process" asChild>
                <a className="ds-link">Our Approach →</a>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* COLLECTIONS */}
      <Section variant="alt" size="md">
        <Container>
          <SectionHeading
            label="Collections"
            title="Explore cabinetry by space"
            intro="From kitchens and wardrobes to vanities, pantries, and wine storage — Berco creates cabinetry systems shaped around the way each room is used."
            className="mb-12 md:mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ds-grid-gap">
            {categoriesWithImages.map((cat) => (
              <Link key={cat.href} href={cat.href} asChild>
                <a className="group block">
                  <div className="ds-card-image aspect-[4/5] mb-5">
                    <img src={cat.image} alt={cat.title} className="group-hover:scale-[1.03] transition-transform duration-700" />
                  </div>
                  <h3 className="mb-2">{cat.title}</h3>
                  <p className="text-text-body leading-relaxed mb-3">{cat.description}</p>
                  <span className="ds-link">Explore →</span>
                </a>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHY BERCO */}
      <Section variant="default" size="md">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 mb-12 md:mb-16">
            <div className="md:col-span-5">
              <SectionHeading label="Why BERCO" title="Why choose Berco" />
            </div>
            <div className="md:col-span-7">
              <p className="text-text-body leading-relaxed">
                Philippine homes ask more of cabinetry than most. Humidity, salt air, narrow condo loadings, and the specific way a Filipino household actually cooks, hosts, and stores. BERCO is built around those realities — not adapted to them after the fact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ds-grid-gap">
            {WHY_BERCO.map((point) => (
              <div key={point.num}>
                <p className="text-xs uppercase tracking-widest2 text-accent mb-3 font-semibold">{point.num}</p>
                <h4 className="mb-3">{point.title}</h4>
                <p className="text-text-body leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/process" asChild>
              <a className="ds-link">The materials and how we build →</a>
            </Link>
          </div>
        </Container>
      </Section>

      {/* DESIGN STUDIES */}
      <Section variant="alt" size="md">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 mb-10 md:mb-14">
            <div className="md:col-span-5">
              <SectionHeading
                label="Design Studies by BERCO"
                title="Cabinetry"
                titleItalic="concepts & directions."
              />
            </div>
            <div className="md:col-span-7 flex md:items-end">
              <p className="text-text-body leading-relaxed">
                A small collection of in-house studies — material directions, sample layouts, and concept rooms drawn by the BERCO studio. These are starting points for conversation, not finished homes. Use them to find the language you want for yours.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ds-grid-gap">
            {designStudies.map((study, i) => (
              <Link key={study.title} href={study.href} asChild>
                <a className="group cursor-pointer block">
                  <div className="ds-card-image aspect-[4/5] mb-5">
                    <img src={study.image} alt={study.title} className="group-hover:scale-[1.03] transition-transform duration-700" />
                  </div>
                  <p className="text-xs uppercase tracking-widest2 text-accent mb-2 font-semibold">
                    Study No. {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-2">{study.title}</h3>
                  <p className="text-text-body leading-relaxed">{study.description}</p>
                </a>
              </Link>
            ))}
          </div>

          <p className="mt-12 text-xs uppercase tracking-widest2 text-text-muted max-w-2xl">
            Studies prepared by the BERCO design studio. Final projects are drawn from the ground up around each client's home, plan, and brief.
          </p>
        </Container>
      </Section>

      {/* PROCESS PREVIEW */}
      <Section variant="default" size="md">
        <Container>
          <SectionHeading
            label="How BERCO Works"
            title="Four conversations between you and the work."
            className="mb-8"
          />
          <p className="text-text-body leading-relaxed max-w-2xl mb-12">
            Every BERCO interior begins with listening. From the first sketch to the final hinge, the process is unhurried — and the same designer follows your home through.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ds-grid-gap mb-10">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num}>
                <p className="text-xs uppercase tracking-widest2 text-text-muted mb-2 font-semibold">{step.num}</p>
                <h4 className="mb-3">{step.title}</h4>
                <p className="text-text-body leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <Link href="/process" asChild>
            <a className="ds-link">Full Process Timeline →</a>
          </Link>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="alt" size="md">
        <Container width="narrow" className="text-center">
          <h2 className="mb-6">The Heart of Your Home.</h2>
          <p className="text-text-body leading-relaxed mb-8 max-w-xl mx-auto">
            Begin your BERCO design journey with a quiet conversation about your space, the way you live, and the cabinetry that would make it feel resolved.
          </p>
          <Link href="/contact" asChild>
            <CTAButton variant="primary">Book a Design Consultation →</CTAButton>
          </Link>
        </Container>
      </Section>
    </div>
  );
}
