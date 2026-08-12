"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b-2 border-brand-gold/60 backdrop-blur transition-colors ${
        scrolled
          ? "bg-brand-cream/95 dark:bg-brand-black/95"
          : "bg-brand-cream/70 dark:bg-brand-black/70"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Lobster Factory logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full border-2 border-brand-gold object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="flex flex-col leading-tight">
            <strong className="font-display text-xl text-brand-black dark:text-brand-cream">
              {siteConfig.name}
            </strong>
            <small className="text-[0.65rem] tracking-[0.3em] text-brand-red-dark dark:text-brand-gold-light uppercase">
              {siteConfig.tagline}
            </small>
          </span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-brand-black/80 transition hover:text-brand-red dark:text-brand-tan dark:hover:text-brand-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 rounded-md bg-gradient-to-b from-brand-red to-brand-red-dark px-5 py-2 text-sm font-semibold uppercase tracking-wide text-brand-cream shadow-[0_5px_0_rgba(0,0,0,0.3)] transition hover:-translate-y-0.5"
          >
            <Phone size={15} /> Order Now
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-brand-gold/50 text-brand-black dark:text-brand-cream"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col items-center gap-4 border-t border-brand-gold/40 bg-brand-cream py-5 dark:bg-brand-charcoal md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium uppercase tracking-wider text-brand-black dark:text-brand-tan"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${siteConfig.phone}`}
            className="mt-2 flex items-center gap-2 rounded-md bg-brand-red px-5 py-2 text-sm font-semibold uppercase tracking-wide text-brand-cream"
          >
            <Phone size={15} /> Order Now
          </a>
        </nav>
      )}
    </header>
  );
}
