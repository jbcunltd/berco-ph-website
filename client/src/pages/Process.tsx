export default function Process() {
  const processSteps = [
    {
      num: "01",
      title: "Initial Consultation",
      desc: "Studio visit or house call. We listen.",
      image: "/manus-storage/consultation_b26d44a2.jpg",
      alt: "Interior designer consultation with material samples",
      details: ["Studio or house visit", "Detailed space assessment", "Material samples and mood board", "Initial design direction"],
    },
    {
      num: "02",
      title: "Site Visit & Measurements",
      desc: "Measure, assess, understand the space.",
      image: "/manus-storage/measurement_c90c0e11.jpg",
      alt: "Measuring tape and floor plan for cabinetry design",
      details: ["Precise measurements taken", "Floor plan documentation", "Site conditions assessed", "Technical specifications recorded"],
    },
    {
      num: "03",
      title: "Design Development",
      desc: "Hand sketches + digital renderings.",
      image: "/manus-storage/design_13c03912.jpg",
      alt: "CAD drawings and interior design planning",
      details: ["Hand-drawn sketches", "3D digital renderings", "Multiple design iterations", "Client approval rounds"],
    },
    {
      num: "04",
      title: "Materials & Finishes",
      desc: "Select finishes, hardware, samples.",
      image: "/manus-storage/materials_b4787294.jpg",
      alt: "Premium wood samples and finish swatches for cabinetry",
      details: ["Wood species selection", "Hardware finishes chosen", "Finish samples provided", "Final material approval"],
    },
    {
      num: "05",
      title: "Quotation & Approval",
      desc: "Proposal and timeline confirmed.",
      image: "/manus-storage/quotation_17e9c95f.jpg",
      alt: "Design proposal and project documentation",
      details: ["Detailed quotation prepared", "Project timeline outlined", "Specifications documented", "Contract and approval"],
    },
    {
      num: "06",
      title: "Fabrication",
      desc: "Fabricated by our production team.",
      image: "/manus-storage/fabrication_70eb2a91.jpg",
      alt: "CNC woodworking and cabinet fabrication in workshop",
      details: ["CNC precision cutting", "Cabinet assembly", "Quality control checks", "Hardware installation"],
    },
    {
      num: "07",
      title: "Delivery & Installation",
      desc: "Dust-controlled, precise fit.",
      image: "/manus-storage/installation_77c543e4.jpg",
      alt: "Professional cabinet installation and fitting",
      details: ["Dust-controlled delivery", "Professional installation", "Final adjustments", "After-sales support"],
    },
  ];

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

      {/* Quick Timeline */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-7 gap-4 md:gap-2">
            {processSteps.map((step, i) => (
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

      {/* Visual Process Timeline */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="space-y-24 md:space-y-32">
            {processSteps.map((step, i) => (
              <div key={i} className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                {/* Image */}
                <div className={`${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className="rounded overflow-hidden aspect-video md:aspect-auto md:h-[400px]">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "md:col-start-1" : ""}`}>
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="font-display text-5xl md:text-6xl text-champagne/30">{step.num}</span>
                    <div>
                      <h3 className="font-display text-3xl md:text-4xl">{step.title}</h3>
                      <p className="text-base md:text-lg text-body mt-2">{step.desc}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-8">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-champagne text-xl leading-none mt-1">✓</span>
                        <span className="text-[15px] text-ink leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
