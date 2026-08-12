import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t-2 border-brand-gold/60 bg-brand-tan/30 py-8 dark:bg-brand-charcoal">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <div className="flex flex-col items-center leading-tight sm:items-start">
          <strong className="font-display text-lg text-brand-black dark:text-brand-cream">
            {siteConfig.name}
          </strong>
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-brand-red-dark dark:text-brand-gold-light">
            {siteConfig.tagline}
          </span>
        </div>
        <p className="text-sm text-brand-black/70 dark:text-brand-tan">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
