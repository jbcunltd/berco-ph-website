import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-ink text-light mt-24">
      <div className="max-w-content mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          {/* TODO: Replace placeholder contact details with confirmed studio info, phone, email, and social handles before launch. */}
          <div className="md:col-span-5">
            <div className="font-display text-3xl font-semibold">
              BERCO
            </div>
            <p className="mt-4 text-light/85 max-w-sm text-[14px] leading-relaxed">
              The Heart of Your Home. Bespoke cabinetry drawn, fabricated, and installed for Philippine homes — considered, restrained, and built to last.
            </p>
            {/* Social links removed pending confirmation of active accounts. */}
          </div>

          {/* Studio Info — placeholders marked TODO above */}
          <div className="md:col-span-3">
            <div className="text-[11px] tracking-widest2 uppercase text-light/60 mb-5">Studio</div>
            <p className="text-[14px] leading-relaxed text-light/95">
              By appointment, Metro Manila<br />
              Address available on request
            </p>
            <p className="mt-6 text-[14px] leading-relaxed text-light/95">
              <a href="mailto:hello@bercoph.com" className="text-light/95 hover:text-light transition-colors">hello@bercoph.com</a>
            </p>
          </div>

          {/* Service Areas */}
          <div className="md:col-span-2">
            <div className="text-[11px] tracking-widest2 uppercase text-light/60 mb-5">Service Areas</div>
            <ul className="space-y-2 text-[14px] text-light/95">
              <li>Metro Manila</li>
              <li>Tagaytay · Batangas</li>
              <li>Cebu · Bohol</li>
              <li>Davao</li>
            </ul>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <div className="text-[11px] tracking-widest2 uppercase text-light/60 mb-5">Explore</div>
            <ul className="space-y-2 text-[14px] text-light/90">
              <li>
                <Link href="/" asChild>
                  <a className="hover:text-light transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/kitchens" asChild>
                  <a className="hover:text-light transition-colors">Kitchens</a>
                </Link>
              </li>
              <li>
                <Link href="/wardrobes" asChild>
                  <a className="hover:text-light transition-colors">Wardrobes</a>
                </Link>
              </li>
              <li>
                <Link href="/architects-designers" asChild>
                  <a className="hover:text-light transition-colors">For Architects &amp; Designers</a>
                </Link>
              </li>
              <li>
                <Link href="/process" asChild>
                  <a className="hover:text-light transition-colors">Process &amp; Materials</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" asChild>
                  <a className="hover:text-light transition-colors">Start a Consultation</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-paper/20 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] tracking-widest2 uppercase text-light/50 gap-3">
          <span>© 2026 BERCO Cabinetry, Inc.</span>
          <span>Crafted in the Philippines</span>
          <span>Privacy · Terms · Warranty</span>
        </div>
      </div>
    </footer>
  );
}
