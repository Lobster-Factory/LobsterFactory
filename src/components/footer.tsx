import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t-2 border-brand-gold/60 bg-brand-charcoal py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <div className="flex flex-col items-center leading-tight sm:items-start">
          <strong className="font-display text-lg text-brand-cream">
            {siteConfig.name}
          </strong>
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-brand-gold-light">
            {siteConfig.tagline}
          </span>
        </div>
        <p className="text-sm text-brand-tan">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
