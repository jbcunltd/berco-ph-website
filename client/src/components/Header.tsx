import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ChevronDown, Menu, X } from 'lucide-react';
import Container from './layout/Container';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const PRODUCT_ITEMS = [
  { label: 'Kitchen Cabinets', href: '/kitchens', description: 'Islands, sculleries, and galley kitchens' },
  { label: 'Kitchen Accessories', href: '/kitchen-accessories', description: 'Pull-outs, pantry systems, corner storage, and drawer organization' },
  { label: 'Wardrobes & Closets', href: '/wardrobes', description: 'Walk-ins, sliding doors, and dressing rooms' },
  { label: 'Bathroom Vanities', href: '/vanities', description: 'Floating, freestanding, and built-in vanities' },
  { label: 'Aluminum Doors & Windows', href: '/aluminum-doors-windows', description: 'Durable, secure, and aesthetically pleasing aluminum solutions' },
  { label: 'Complete Home Interiors', href: '/complete-home-interiors', description: 'Coordinated whole-home design packages' },
  { label: '2026 Collection', href: '/2026-collection', description: 'Curated selection of newest and most premium designs' },
];

const TOP_NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'For Designers', href: '/for-designers' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
];

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const [location] = useLocation();
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const isActive = (path: string) => location === path;
  const isProductsActive = PRODUCT_ITEMS.some((item) => isActive(item.href));

  const navLinkClass = (active: boolean) =>
    `text-xs tracking-wider uppercase font-semibold transition-colors leading-none ${
      active ? 'text-text border-b-2 border-text pb-1' : 'text-text-muted hover:text-text'
    }`;

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-bg/95 backdrop-blur border-b border-line">
      <Container>
        <div className="flex items-center justify-between h-16 py-0">
          <Link href="/" asChild>
            <a className="flex-shrink-0 flex items-center">
              <img
                src="/berco-logo.png"
                alt="Berco"
                className="max-h-10 sm:max-h-11 md:max-h-12 w-auto cursor-pointer object-contain"
                style={{ maxWidth: '100px', height: 'auto' }}
              />
            </a>
          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-6 flex-1">
            <Link href="/" asChild>
              <a className={`${navLinkClass(isActive('/'))} whitespace-nowrap flex items-center`}>Home</a>
            </Link>

            <div className="relative group py-6">
              <button
                className={`${navLinkClass(isProductsActive)} whitespace-nowrap flex items-center gap-1`}
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <div className="invisible opacity-0 translate-y-3 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 absolute left-1/2 top-full w-[760px] -translate-x-1/2 transition-all duration-300">
                <div className="rounded-sm border border-line bg-bg shadow-2xl overflow-hidden">
                  <div className="grid grid-cols-[0.9fr_1.4fr]">
                    <div className="bg-[#efe7da] p-8 flex flex-col justify-between min-h-[320px]">
                      <div>
                        <span className="ds-label">BERCO Products</span>
                        <h3 className="mt-4 text-3xl leading-tight">Whole-home cabinetry, composed room by room.</h3>
                      </div>
                      <Link href="/2026-collection" asChild>
                        <a className="text-xs uppercase tracking-[0.22em] font-semibold text-text hover:text-accent transition-colors">
                          View 2026 Collection →
                        </a>
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-px bg-line">
                      {PRODUCT_ITEMS.map((item) => (
                        <Link key={item.href} href={item.href} asChild>
                          <a className="bg-bg p-5 hover:bg-[#f8f2e8] transition-colors group/item">
                            <span className="block text-sm uppercase tracking-[0.18em] font-semibold text-text group-hover/item:text-accent transition-colors">
                              {item.label}
                            </span>
                            <span className="mt-2 block text-xs leading-relaxed text-text-muted normal-case tracking-normal font-normal">
                              {item.description}
                            </span>
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {TOP_NAV_ITEMS.slice(1).map((item) => (
              <Link key={item.href} href={item.href} asChild>
                <a className={`${navLinkClass(isActive(item.href))} whitespace-nowrap flex items-center`}>
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          <Link href="/contact" asChild>
            <a className="hidden lg:inline-flex items-center ds-btn-nav-cta ml-auto">
              Book Consultation
            </a>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center flex-col gap-1.5 p-2 ml-auto"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-text" /> : <Menu className="w-5 h-5 text-text" />}
          </button>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-line bg-bg">
          <Container>
            <nav className="flex flex-col py-4">
              <Link href="/" asChild>
                <a
                  className={`py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-colors ${
                    isActive('/') ? 'text-text' : 'text-text-muted hover:text-text'
                  }`}
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
              </Link>

              <div className="border-y border-line py-1 my-1">
                <button
                  className={`w-full py-3 flex items-center justify-between text-sm font-semibold uppercase tracking-[0.16em] transition-colors ${
                    isProductsActive ? 'text-text' : 'text-text-muted hover:text-text'
                  }`}
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  aria-expanded={mobileProductsOpen}
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileProductsOpen && (
                  <div className="grid grid-cols-1 gap-1 pb-3 pl-4">
                    {PRODUCT_ITEMS.map((item) => (
                      <Link key={item.href} href={item.href} asChild>
                        <a
                          className={`py-2 text-sm transition-colors ${
                            isActive(item.href) ? 'text-text font-semibold' : 'text-text-muted hover:text-text'
                          }`}
                          onClick={closeMobileMenu}
                        >
                          {item.label}
                        </a>
                      </Link>
                    ))}

                  </div>
                )}
              </div>

              {TOP_NAV_ITEMS.slice(1).map((item) => (
                <Link key={item.href} href={item.href} asChild>
                  <a
                    className={`py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-colors ${
                      isActive(item.href) ? 'text-text' : 'text-text-muted hover:text-text'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}

              <Link href="/contact" asChild>
                <a className="ds-btn ds-btn-secondary w-full mt-4" onClick={closeMobileMenu}>
                  Book Consultation
                </a>
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
