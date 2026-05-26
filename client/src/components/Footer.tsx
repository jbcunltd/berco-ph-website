import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="font-display text-3xl font-semibold">
              BERCO<span className="text-bronze2">.</span>PH
            </div>
            <p className="mt-4 text-paper/70 max-w-sm text-[14px] leading-relaxed">
              The Heart of Your Home. Bespoke cabinetry drawn, fabricated, and installed for Philippine homes — considered, restrained, and built to last.
            </p>
            <div className="mt-8 flex items-center gap-6 text-[11px] tracking-widest2 uppercase">
              <a href="#" className="border-b border-paper/40 pb-1 hover:border-paper transition-colors">
                Instagram
              </a>
              <a href="#" className="border-b border-paper/40 pb-1 hover:border-paper transition-colors">
                Pinterest
              </a>
              <a href="#" className="border-b border-paper/40 pb-1 hover:border-paper transition-colors">
                Houzz
              </a>
            </div>
          </div>

          {/* Studio Info */}
          <div className="md:col-span-3">
            <div className="text-[11px] tracking-widest2 uppercase text-paper/60 mb-5">Studio</div>
            <p className="text-[14px] leading-relaxed text-paper/85">
              14 Jupiter Street<br />
              Bel-Air, Makati 1209<br />
              By appointment
            </p>
            <p className="mt-6 text-[14px] leading-relaxed text-paper/85">
              +63 917 555 0114<br />
              hello@bercoph.com
            </p>
          </div>

          {/* Service Areas */}
          <div className="md:col-span-2">
            <div className="text-[11px] tracking-widest2 uppercase text-paper/60 mb-5">Service Areas</div>
            <ul className="space-y-2 text-[14px] text-paper/85">
              <li>Metro Manila</li>
              <li>Tagaytay · Batangas</li>
              <li>Cebu · Bohol</li>
              <li>Davao</li>
              <li>Selected International</li>
            </ul>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <div className="text-[11px] tracking-widest2 uppercase text-paper/60 mb-5">Explore</div>
            <ul className="space-y-2 text-[14px] text-paper/85">
              <li>
                <Link href="/" asChild>
                  <a className="hover:text-paper transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/kitchens" asChild>
                  <a className="hover:text-paper transition-colors">Kitchens</a>
                </Link>
              </li>
              <li>
                <Link href="/wardrobes" asChild>
                  <a className="hover:text-paper transition-colors">Wardrobes</a>
                </Link>
              </li>
              <li>
                <Link href="/architects-designers" asChild>
                  <a className="hover:text-paper transition-colors">For Architects &amp; Designers</a>
                </Link>
              </li>
              <li>
                <Link href="/process" asChild>
                  <a className="hover:text-paper transition-colors">Process &amp; Materials</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" asChild>
                  <a className="hover:text-paper transition-colors">Start a Consultation</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-paper/20 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] tracking-widest2 uppercase text-paper/50 gap-3">
          <span>© 2026 BERCO Cabinetry, Inc.</span>
          <span>Crafted in the Philippines</span>
          <span>Privacy · Terms · Warranty</span>
        </div>
      </div>
    </footer>
  );
}
