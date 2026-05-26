import { Link } from "wouter";

export default function Process() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-stone1 py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <span className="eyebrow">Process & Materials</span>
          <h1 className="font-display text-5xl md:text-6xl mt-4 leading-tight">
            From Sketch to Installation.<br />
            <em className="italic">The BERCO Way.</em>
          </h1>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-7 gap-4 md:gap-2">
            {[
              { num: "01", title: "Consultation", desc: "Studio visit or house call. We listen." },
              { num: "02", title: "Site Visit", desc: "Measure, assess, understand the space." },
              { num: "03", title: "3D Design", desc: "Hand sketches + digital renderings." },
              { num: "04", title: "Materials", desc: "Select finishes, hardware, samples." },
              { num: "05", title: "Fabrication", desc: "Fabricated by our production team." },
              { num: "06", title: "Installation", desc: "Dust-controlled, precise fit." },
              { num: "07", title: "After-Sales Support", desc: "Warranty terms and service guidance provided per project scope." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="bg-stone1 aspect-square rounded flex items-center justify-center mb-4">
                  <span className="font-display text-3xl text-champagne">{step.num}</span>
                </div>
                <h3 className="font-display text-lg leading-tight">{step.title}</h3>
                <p className="text-[13px] text-body mt-3 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Details */}
      <section className="bg-stone1 grain relative py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                title: "Consultation & Design",
                items: [
                  "Initial studio or house visit",
                  "Detailed space assessment",
                  "Hand-drawn sketches",
                  "3D renderings and revisions",
                  "Material samples and selection",
                  "Final approval and timeline",
                ],
              },
              {
                title: "Fabrication & Installation",
                items: [
                  "Precision cutting and assembly",
                  "European hardware installation",
                  "Quality control checks",
                  "Dust-controlled delivery",
                  "Professional on-site installation",
                  "After-sales support and warranty guidance",
                ],
              },
            ].map((section, i) => (
              <div key={i}>
                <h3 className="font-display text-3xl mb-8">{section.title}</h3>
                <ul className="space-y-5">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <span className="text-champagne text-2xl leading-none">✓</span>
                      <span className="text-[15px] text-ink leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="mb-16">
            <span className="eyebrow">Materials & Finishes</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4">
              Honest Materials.<br />
              <em className="italic">Crafted to Last.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
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
            ].map((mat, i) => (
              <div key={i}>
                <h3 className="font-display text-2xl mb-6">{mat.title}</h3>
                <ul className="space-y-3">
                  {mat.items.map((item, j) => (
                    <li key={j} className="text-[14px] text-body leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship & Technology */}
      <section className="bg-stone1 grain relative py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="mb-16">
            <span className="eyebrow">Craftsmanship & Technology</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4">
              Where Precision Meets Craft.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-display text-2xl mb-8">Hardware & Mechanisms</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-champagne text-2xl leading-none">✓</span>
                  <div>
                    <p className="font-semibold text-ink">Soft-Close Systems</p>
                    <p className="text-[13px] text-body mt-2 leading-relaxed">Blum and Hettich mechanisms ensure smooth, silent operation for decades.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-champagne text-2xl leading-none">✓</span>
                  <div>
                    <p className="font-semibold text-ink">Precision Drawer Systems</p>
                    <p className="text-[13px] text-body mt-2 leading-relaxed">Full-extension slides with load capacity up to 50kg per drawer.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-champagne text-2xl leading-none">✓</span>
                  <div>
                    <p className="font-semibold text-ink">Push-to-Open Technology</p>
                    <p className="text-[13px] text-body mt-2 leading-relaxed">Integrated dampers and catch-free designs for minimalist aesthetics.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-8">Board & Finish Technology</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-champagne text-2xl leading-none">✓</span>
                  <div>
                    <p className="font-semibold text-ink">Moisture-Resistant Boards</p>
                    <p className="text-[13px] text-body mt-2 leading-relaxed">Marine-grade plywood with anti-termite treatment, engineered for Philippine humidity.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-champagne text-2xl leading-none">✓</span>
                  <div>
                    <p className="font-semibold text-ink">Precision Edge-Banding</p>
                    <p className="text-[13px] text-body mt-2 leading-relaxed">PUR hot-melt adhesive and CNC-cut edges for seamless, durable finishes.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-champagne text-2xl leading-none">✓</span>
                  <div>
                    <p className="font-semibold text-ink">Durable Finishes</p>
                    <p className="text-[13px] text-body mt-2 leading-relaxed">Ten-coat lacquer, Fenix laminate, and premium veneers selected for long-term daily use.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 p-8 bg-paper rounded">
            <p className="text-[15px] text-ink leading-relaxed">
              <span className="font-semibold">Modular Assembly Systems:</span> Every piece is engineered for precision assembly and future reconfiguration. Adjustable shelving, removable components, and standardized joinery mean your BERCO cabinetry grows and adapts with your life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-light py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Begin your Berco<br />
            <em className="italic">design journey.</em>
          </h2>
          <p className="mt-6 text-light/80 text-[15px] leading-relaxed">
            A quiet conversation about your space, the way you live, and the cabinetry that would make it feel resolved.
          </p>
          <Link href="/contact" asChild>
            <a className="inline-block mt-8 bg-paper text-ink px-8 py-3 text-[12px] tracking-widest2 uppercase font-semibold hover:bg-paper/90 transition-colors">
              Start Your Design Consultation →
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
