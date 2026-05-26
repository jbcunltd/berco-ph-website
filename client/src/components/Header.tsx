import { Link, useLocation } from "wouter";
import { useState } from "react";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Kitchens", href: "/kitchens" },
    { label: "Wardrobes", href: "/wardrobes" },
    { label: "Vanities", href: "/vanities", tracking: "tracking-[0.08em]" },
    { label: "Trade", href: "/architects-designers" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-line">
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <img
            src="/berco-logo.png"
            alt="Berco"
            className="h-7 sm:h-8 md:h-8 w-auto cursor-pointer object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {navItems.map((item: any) => (
            <Link key={item.href} href={item.href} asChild>
              <a
                className={`text-xs ${item.tracking || "tracking-[0.10em]"} uppercase transition-colors ${
                  isActive(item.href)
                    ? "text-ink font-semibold border-b-2 border-ink pb-1"
                    : "text-mute hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 h-full">
          <Link href="/contact" asChild>
            <a className="hidden lg:inline-flex items-center text-xs tracking-[0.10em] uppercase bg-ink text-light px-4 py-2.5 font-semibold hover:bg-ink/90 transition-colors rounded h-10">
              Book Consultation
            </a>
          </Link>

          {/* Mobile / Tablet Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
          >
            <div className={`w-5 h-0.5 bg-ink transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-5 h-0.5 bg-ink transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-ink transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-paper border-t border-line px-4 sm:px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} asChild>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-xs tracking-[0.10em] uppercase py-2.5 transition-colors ${
                  isActive(item.href)
                    ? "text-ink font-semibold"
                    : "text-mute hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            </Link>
          ))}
          <Link href="/contact" asChild>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs tracking-[0.10em] uppercase bg-ink text-light px-4 py-3 mt-4 text-center font-semibold hover:bg-ink/90 transition-colors rounded"
            >
              Book Consultation
            </a>
          </Link>
        </nav>
      )}
    </header>
  );
}
