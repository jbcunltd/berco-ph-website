import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import Container from './layout/Container';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const COLLECTIONS = [
  { label: 'Kitchens', href: '/kitchens' },
  { label: 'Wardrobes', href: '/wardrobes' },
  { label: 'Vanities', href: '/vanities' },
];

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '#', isDropdown: true, children: COLLECTIONS },
  { label: 'For Designers', href: '/for-designers' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
];

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const [location] = useLocation();
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const isActive = (path: string) => location === path;

  const navLinkClass = (active: boolean) =>
    `text-xs tracking-wider uppercase font-semibold transition-colors leading-none ${
      active ? 'text-text border-b-2 border-text pb-1' : 'text-text-muted hover:text-text'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-bg border-b border-line">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo left */}
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

          {/* Nav links center/right (desktop) */}
          <nav className="hidden lg:flex items-center gap-8 h-full flex-1 justify-center">
            {NAV_ITEMS.map((item) => {
              if (item.isDropdown) {
                return (
                  <div key={item.label} className="relative group">
                    <button
                      className={`${navLinkClass(false)} flex items-center gap-1 whitespace-nowrap`}
                      onMouseEnter={() => setCollectionsOpen(true)}
                      onMouseLeave={() => setCollectionsOpen(false)}
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    
                    {/* Dropdown menu */}
                    <div
                      className={`absolute top-full left-0 mt-0 bg-bg border border-line rounded-sm shadow-md py-2 min-w-max transition-opacity duration-200 ${
                        collectionsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                      onMouseEnter={() => setCollectionsOpen(true)}
                      onMouseLeave={() => setCollectionsOpen(false)}
                    >
                      {item.children?.map((child) => (
                        <Link key={child.href} href={child.href} asChild>
                          <a
                            className="block px-4 py-2 text-xs uppercase font-semibold text-text-muted hover:text-text hover:bg-bg-alt transition-colors whitespace-nowrap"
                            onClick={() => setCollectionsOpen(false)}
                          >
                            {child.label}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <Link key={item.href} href={item.href} asChild>
                  <a className={`${navLinkClass(isActive(item.href))} whitespace-nowrap`}>
                    {item.label}
                  </a>
                </Link>
              );
            })}
          </nav>

          {/* CTA button right */}
          <Link href="/contact" asChild>
            <a className="hidden lg:inline-flex ds-btn-nav-cta ml-auto">
              Book Consultation
            </a>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 ml-auto"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-text" />
            ) : (
              <Menu className="w-5 h-5 text-text" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-line bg-bg">
          <Container>
            <nav className="flex flex-col gap-3 py-4">
              {NAV_ITEMS.map((item) => {
                if (item.isDropdown) {
                  return (
                    <div key={item.label}>
                      <div className="text-xs uppercase font-semibold text-text-muted mb-2">
                        {item.label}
                      </div>
                      <div className="flex flex-col gap-2 ml-4">
                        {item.children?.map((child) => (
                          <Link key={child.href} href={child.href} asChild>
                            <a
                              className="text-sm font-semibold text-text-muted hover:text-text transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.label}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                
                return (
                  <Link key={item.href} href={item.href} asChild>
                    <a
                      className={`text-sm font-semibold transition-colors ${
                        isActive(item.href) ? 'text-text' : 'text-text-muted hover:text-text'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                );
              })}
              
              <Link href="/contact" asChild>
                <a
                  className="ds-btn ds-btn-secondary w-full mt-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
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
