import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import PageHero from "../components/layout/PageHero";
import SectionHeading from "../components/layout/SectionHeading";

const PROCESS_BLOCKS = [
  {
    title: "Consultation & Measurement",
    image: "/process-consultation-measurement.jpg",
    alt: "Interior design consultation with cabinetry plans and material samples",
    body: "We begin with a studio visit or house call. You tell us how you live, and we listen. We measure the space precisely, assess conditions, and understand your daily rhythms before we sketch anything.",
    bullets: [
      "Initial studio or house visit",
      "Detailed space assessment",
      "Precise measurements recorded",
      "Material samples reviewed",
    ],
  },
  {
    title: "Design & Material Selection",
    image: "/process-design-development.jpg",
    alt: "Interior design development with 3D rendering and material samples",
    body: "Hand-drawn sketches become 3D renderings. We refine the design over multiple rounds, laying out material samples on the table so you can see and feel every choice.",
    bullets: [
      "Hand-drawn sketches",
      "3D digital renderings",
      "Material samples provided",
      "Multiple design iterations",
    ],
  },
  {
    title: "Production Coordination",
    image: "/process-production-coordination.jpg",
    alt: "Precision cutting of cabinetry panel in workshop",
    body: "Once approved, your cabinetry is fabricated according to the final specifications, with precision cutting, hardware coordination, and quality checks before delivery.",
    bullets: [
      "CNC precision cutting",
      "European hardware installation",
      "Quality control checks",
      "Dust-controlled packaging",
    ],
  },
  {
    title: "Delivery & Installation",
    image: "/process-installation.jpg",
    alt: "Professional cabinet installation in luxury home",
    body: "A small, dedicated team arrives for installation. The site is kept dust-controlled. Every cabinet is fitted with precision, adjusted for perfect alignment, and tested.",
    bullets: [
      "Dust-controlled delivery",
      "Professional installation team",
      "Final adjustments and testing",
      "After-sales support provided",
    ],
  },
];

const MATERIAL_GROUPS = [
  {
    title: "Cabinetry Carcass",
    items: ["Marine-grade plywood", "CARB P2-certified", "PUR edge-banding", "Tropic-stable for Philippine humidity"],
  },
  {
    title: "Door & Surface Finishes",
    items: ["Solid oak & walnut", "Fenix laminate", "Ten-coat matte lacquer", "Honed quartzite & travertine"],
  },
  {
    title: "Hardware",
    items: ["Blum soft-close hinges", "Hettich drawer systems", "Salice push-to-open", "Brushed bronze & stainless steel"],
  },
];

export default function Process() {
  return (
    <div className="w-full">
      <PageHero
        eyebrow="Process & Materials"
        title="From Sketch to Installation."
        titleItalic="The BERCO Way."
        intro="A clear, guided process from first conversation to final fitting — designed to make custom cabinetry feel considered, organized, and easy to follow."
      />

      <Section variant="default" size="md">
        <Container>
          <div className="space-y-20 md:space-y-28">
            {PROCESS_BLOCKS.map((block, i) => {
              const flipped = i % 2 === 1;
              return (
                <div key={block.title} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center md:grid-flow-dense">
                  <div className={flipped ? "md:col-start-2" : ""}>
                    <div className="ds-card-image aspect-video md:aspect-auto md:h-[320px]">
                      <img src={block.image} alt={block.alt} />
                    </div>
                  </div>
                  <div className={flipped ? "md:col-start-1" : ""}>
                    <h3>{block.title}</h3>
                    <p className="text-text-body leading-relaxed mb-8">{block.body}</p>
                    <ul className="space-y-3">
                      {block.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-accent text-xl leading-none mt-1">✓</span>
                          <span className="text-[15px] text-text leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section variant="alt" size="md">
        <Container>
          <SectionHeading
            label="Materials & Finishes"
            title="Honest Materials."
            titleItalic="Crafted to Last."
            className="mb-12 md:mb-16"
          />
          <div className="grid md:grid-cols-3 gap-12">
            {MATERIAL_GROUPS.map((mat) => (
              <div key={mat.title}>
                <h3 className="mb-6">{mat.title}</h3>
                <ul className="space-y-3">
                  {mat.items.map((item) => (
                    <li key={item} className="text-[14px] text-text-body leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="default" size="md">
        <Container>
          <SectionHeading
            label="Craftsmanship & Technology"
            title="Where Precision Meets Craft."
            className="mb-12 md:mb-16"
          />
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h3 className="mb-8">Hardware & Mechanisms</h3>
              <ul className="space-y-5">
                {[
                  { t: "Soft-Close Systems", b: "Blum and Hettich mechanisms ensure smooth, silent operation for decades." },
                  { t: "Precision Drawer Systems", b: "Full-extension slides with load capacity up to 50kg per drawer." },
                  { t: "Push-to-Open Technology", b: "Integrated dampers and catch-free designs for minimalist aesthetics." },
                ].map(({ t, b }) => (
                  <li key={t} className="flex items-start gap-4">
                    <span className="text-accent text-2xl leading-none">✓</span>
                    <div>
                      <p className="font-semibold text-text">{t}</p>
                      <p className="text-[13px] text-text-body mt-2 leading-relaxed">{b}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-8">Board & Finish Technology</h3>
              <ul className="space-y-5">
                {[
                  { t: "Moisture-Resistant Boards", b: "Marine-grade plywood with anti-termite treatment, engineered for Philippine humidity." },
                  { t: "Precision Edge-Banding", b: "PUR hot-melt adhesive and CNC-cut edges for seamless, durable finishes." },
                  { t: "Durable Finishes", b: "Ten-coat lacquer, Fenix laminate, and premium veneers selected for long-term daily use." },
                ].map(({ t, b }) => (
                  <li key={t} className="flex items-start gap-4">
                    <span className="text-accent text-2xl leading-none">✓</span>
                    <div>
                      <p className="font-semibold text-text">{t}</p>
                      <p className="text-[13px] text-text-body mt-2 leading-relaxed">{b}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
