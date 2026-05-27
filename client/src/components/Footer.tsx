import { Link } from "wouter";
import Container from "./layout/Container";

const labelClass = "text-xs tracking-widest2 uppercase text-text-on-dark/50 mb-5 font-semibold";
const linkClass = "hover:text-text-on-dark transition-colors";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-text-on-dark">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <img
                src="/berco-logo.png"
                alt="Berco"
                className="max-h-20 w-auto mb-6 object-contain brightness-0 invert"
                style={{ maxWidth: "140px" }}
              />
              <p className="mt-4 text-text-on-dark/80 max-w-sm text-sm leading-relaxed">
                The Heart of Your Home. Bespoke cabinetry drawn, fabricated, and installed for Philippine homes — considered, restrained, and built to last.
              </p>
              <div className="mt-8 flex items-center gap-6 text-xs tracking-widest2 uppercase font-semibold">
                <a
                  href="https://wa.me/639178000730"
                  className="border-b border-text-on-dark/40 pb-1 hover:border-text-on-dark transition-colors"
                  aria-label="WhatsApp"
                >
                  WhatsApp
                </a>
                <a
                  href="https://m.me/bercophilippines"
                  className="border-b border-text-on-dark/40 pb-1 hover:border-text-on-dark transition-colors"
                  aria-label="Messenger"
                >
                  Messenger
                </a>
              </div>
            </div>

            {/* Studio Info */}
            <div className="md:col-span-3">
              <div className={labelClass}>Studio</div>
              <p className="text-sm leading-relaxed text-text-on-dark/95">
                322 Sto Rosario<br />
                Mandaluyong City, 1550<br />
                Kalakhang Maynila
              </p>
              <p className="mt-6 text-sm leading-relaxed text-text-on-dark/95">
                <a href="mailto:sales@bercohome.com" className={linkClass}>sales@bercohome.com</a><br />
                <a href="tel:+639178000730" className={linkClass}>0917 800 0730</a>
              </p>
            </div>

            {/* Service Areas */}
            <div className="md:col-span-2">
              <div className={labelClass}>Service Areas</div>
              <ul className="space-y-2 text-sm text-text-on-dark/95">
                <li>Nationwide</li>
              </ul>
            </div>

            {/* Links */}
            <div className="md:col-span-2">
              <div className={labelClass}>Explore</div>
              <ul className="space-y-2 text-sm text-text-on-dark/90">
                {[
                  { href: "/", label: "Home" },
                  { href: "/kitchens", label: "Kitchens" },
                  { href: "/wardrobes", label: "Wardrobes" },
                  { href: "/about", label: "About" },
                  { href: "/for-designers", label: "For Architects & Designers" },
                  { href: "/process", label: "Process & Materials" },
                  { href: "/contact", label: "Start a Consultation" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} asChild>
                      <a className={linkClass}>{l.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-text-on-dark/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest2 uppercase text-text-on-dark/40 gap-3 font-semibold">
            <span>© 2026 BERCO Cabinetry, Inc.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
