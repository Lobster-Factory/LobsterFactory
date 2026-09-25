import Image from "next/image";
import { AnimatedCard } from "./animated-card";
import { BoilBuilder } from "./boil-builder";
import { OrderProvider } from "./order-context";
import { OrderSummary } from "./order-summary";
import { withBasePath } from "@/lib/base-path";

export function MenuSection() {
  return (
    <section id="menu" className="bg-brand-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.4em] text-brand-gold-light">
          Three Simple Steps
        </p>
        <h2 className="mb-14 text-center text-4xl text-brand-cream md:text-5xl">
          Build Your Bucket
        </h2>

        <OrderProvider>
          <AnimatedCard>
            <div className="mb-6 flex flex-wrap items-center gap-3 border-b-2 border-dashed border-brand-gold/40 pb-5">
              <span className="text-3xl">🦞</span>
              <h3 className="flex-1 text-2xl text-brand-cream">
                Start Your Order
              </h3>
              <span className="rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold-light">
                Corn + Potatoes Included
              </span>
            </div>
            <BoilBuilder />
          </AnimatedCard>
          <OrderSummary />
        </OrderProvider>

        <div className="mx-auto mt-20 max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-brand-gold-light">
            Full Menu
          </p>
          <h2 className="mb-8 text-3xl text-brand-cream md:text-4xl">
            Prices At A Glance
          </h2>
          <a
            href={withBasePath("/menu.png")}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open the full Lobster Factory menu"
            className="block overflow-hidden rounded-md border border-brand-gold/50 bg-brand-charcoal shadow-2xl transition hover:border-brand-gold"
          >
            <Image
              src={withBasePath("/menu.png")}
              alt="Lobster Factory menu with seafood buckets, sauces, heat levels, and sides"
              width={768}
              height={842}
              sizes="(min-width: 1024px) 896px, 100vw"
              className="h-auto w-full"
            />
          </a>
        </div>

        <p className="mt-12 text-center text-lg tracking-wide text-brand-gold-light">
          ⚓ Thank you for supporting local! We appreciate you. 🦀
        </p>
      </div>
    </section>
  );
}

