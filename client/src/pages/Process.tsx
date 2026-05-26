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
          <p className="text-base md:text-lg text-body mt-8 max-w-2xl leading-relaxed">
            A clear, guided process from first conversation to final fitting — designed to make custom cabinetry feel considered, organized, and easy to follow.
          </p>
        </div>
      </section>

      {/* Editorial Process Blocks */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="space-y-20 md:space-y-28">
            {/* Block 1: Consultation & Measurement */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <div className="rounded overflow-hidden aspect-video md:aspect-auto md:h-[320px]">
                  <img
                    src="/process-consultation-measurement.jpg"
                    alt="Interior design consultation with cabinetry plans and material samples"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-display text-3xl md:text-4xl mb-6">Consultation & Measurement</h3>
                <p className="text-base md:text-lg text-body mb-8 leading-relaxed">
                  We begin with a studio visit or house call. You tell us how you live, and we listen. We measure the space precisely, assess conditions, and understand your daily rhythms before we sketch anything.
                </p>
                <ul className="space-y-3">
                  {["Initial studio or house visit", "Detailed space assessment", "Precise measurements recorded", "Material samples reviewed"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-champagne text-xl leading-none mt-1">✓</span>
                      <span className="text-[15px] text-ink leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Block 2: Design & Material Selection */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center md:grid-flow-dense">
              <div className="md:col-start-2">
                <div className="rounded overflow-hidden aspect-video md:aspect-auto md:h-[320px]">
                  <img
                    src="/process-design-development.jpg"
                    alt="Interior design development with 3D rendering and material samples"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-start-1">
                <h3 className="font-display text-3xl md:text-4xl mb-6">Design & Material Selection</h3>
                <p className="text-base md:text-lg text-body mb-8 leading-relaxed">
                  Hand-drawn sketches become 3D renderings. We refine the design over multiple rounds, laying out material samples on the table so you can see and feel every choice. Finishes, hardware, and wood species are selected for both beauty and durability.
                </p>
                <ul className="space-y-3">
                  {["Hand-drawn sketches", "3D digital renderings", "Material samples provided", "Multiple design iterations"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-champagne text-xl leading-none mt-1">✓</span>
                      <span className="text-[15px] text-ink leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Block 3: Production Coordination */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <div className="rounded overflow-hidden aspect-video md:aspect-auto md:h-[320px]">
                  <img
                    src="/process-production-coordination.jpg"
                    alt="Precision cutting of cabinetry panel in workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-display text-3xl md:text-4xl mb-6">Production Coordination</h3>
                <p className="text-base md:text-lg text-body mb-8 leading-relaxed">
                  Once approved, your cabinetry is fabricated according to the final specifications, with precision cutting, hardware coordination, and quality checks before delivery.
                </p>
                <ul className="space-y-3">
                  {["CNC precision cutting", "European hardware installation", "Quality control checks", "Dust-controlled packaging"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-champagne text-xl leading-none mt-1">✓</span>
                      <span className="text-[15px] text-ink leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Block 4: Delivery & Installation */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center md:grid-flow-dense">
              <div className="md:col-start-2">
                <div className="rounded overflow-hidden aspect-video md:aspect-auto md:h-[320px]">
                  <img
                    src="/process-installation.jpg"
                    alt="Professional cabinet installation in luxury home"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-start-1">
                <h3 className="font-display text-3xl md:text-4xl mb-6">Delivery & Installation</h3>
                <p className="text-base md:text-lg text-body mb-8 leading-relaxed">
                  A small, dedicated team arrives for installation. The site is kept dust-controlled. Every cabinet is fitted with precision, adjusted for perfect alignment, and tested. We leave your space clean and your cabinetry ready to live in.
                </p>
                <ul className="space-y-3">
                  {["Dust-controlled delivery", "Professional installation team", "Final adjustments and testing", "After-sales support provided"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-champagne text-xl leading-none mt-1">✓</span>
                      <span className="text-[15px] text-ink leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-stone1 grain relative py-20 md:py-28">
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
      <section className="bg-paper py-20 md:py-28">
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

          <div className="mt-16 p-8 bg-stone1 rounded">
            <p className="text-[15px] text-ink leading-relaxed">
              <span className="font-semibold">Modular Assembly Systems:</span> Every piece is engineered for precision assembly and future reconfiguration. Adjustable shelving, removable components, and standardized joinery mean your BERCO cabinetry grows and adapts with your life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
