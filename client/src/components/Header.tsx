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
    { label: "Vanities", href: "/vanities" },
    { label: "For Architects & Designers", href: "/architects-designers" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-line">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="font-display text-2xl font-semibold tracking-tight cursor-pointer">
            BERCO<span className="text-bronze">.</span>PH
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} asChild>
              <a
                className={`text-[12px] tracking-widest2 uppercase transition-colors ${
                  isActive(item.href)
                    ? "text-ink border-b border-ink pb-1"
                    : "text-mute hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/contact" asChild>
            <a className="hidden lg:inline-block text-[11px] tracking-widest2 uppercase border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors">
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
        <nav className="lg:hidden bg-paper border-t border-line px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} asChild>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-[12px] tracking-widest2 uppercase py-2 transition-colors ${
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
              className="block text-[12px] tracking-widest2 uppercase border border-ink px-4 py-2 mt-4 text-center hover:bg-ink hover:text-paper transition-colors"
            >
              Book Consultation
            </a>
          </Link>
        </nav>
      )}
    </header>
  );
}
