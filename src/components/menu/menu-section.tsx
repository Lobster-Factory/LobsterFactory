import { AnimatedCard } from "./animated-card";
import { BoilBuilder } from "./boil-builder";
import { ProteinChoiceCard } from "./protein-choice-card";
import { CatchCrunchCard } from "./catch-crunch-card";
import { OrderProvider } from "./order-context";
import { OrderSummary } from "./order-summary";
import {
  macAndCheeseProteins,
  friedRiceProteins,
  catchAndCrunch,
  regularSides,
  premiumAddOns,
} from "@/data/menu";

export function MenuSection() {
  return (
    <section id="menu" className="bg-brand-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.4em] text-brand-gold-light">
          The Menu
        </p>
        <h2 className="mb-14 text-center text-4xl text-brand-cream md:text-5xl">
          Fresh From The Pot
        </h2>

        <OrderProvider>
          <div className="grid gap-7 md:grid-cols-2">
          <AnimatedCard className="md:col-span-2">
            <div className="mb-6 flex flex-wrap items-center gap-3 border-b-2 border-dashed border-brand-gold/40 pb-5">
              <span className="text-3xl">🦞</span>
              <h3 className="flex-1 text-2xl text-brand-cream">
                Single Boil
              </h3>
              <span className="rounded-full border border-brand-red/40 bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-red">
                Build Your Perfect Boil
              </span>
            </div>
            <BoilBuilder />
          </AnimatedCard>

          <ProteinChoiceCard
            icon="🧀"
            title="Mac & Cheese"
            options={macAndCheeseProteins}
            sectionKey="macCheese"
            delay={0.1}
          />

          <ProteinChoiceCard
            icon="🍚"
            title="Fried Rice"
            options={friedRiceProteins}
            sectionKey="friedRice"
            delay={0.12}
          />

          <CatchCrunchCard items={catchAndCrunch} delay={0.15} />

          <AnimatedCard delay={0.2} className="bg-gradient-to-br from-brand-red/10 to-transparent">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="mb-4 text-lg uppercase tracking-wider text-brand-gold-light">
                  Included Sides
                </h4>
                <p className="mb-3 text-xs italic text-brand-tan/70">
                  Choose any 2 with every boil
                </p>
                <ul className="space-y-2">
                  {regularSides.map((s) => (
                    <li
                      key={s.label}
                      className="flex items-center gap-3 text-brand-tan"
                    >
                      <span className="text-xl">{s.icon}</span> {s.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-lg uppercase tracking-wider text-brand-gold-light">
                  Premium Add-Ons
                </h4>
                <p className="mb-3 text-xs italic text-brand-tan/70">
                  Extra cost, on top of your included sides
                </p>
                <ul className="space-y-2">
                  {premiumAddOns.map((s) => (
                    <li
                      key={s.label}
                      className="flex items-center gap-3 text-brand-tan"
                    >
                      <span className="text-xl">{s.icon}</span> {s.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedCard>
          </div>

          <OrderSummary />
        </OrderProvider>

        <p className="mt-12 text-center text-lg tracking-wide text-brand-gold-light">
          ⚓ Thank you for supporting local! We appreciate you. 🦀
        </p>
      </div>
    </section>
  );
}

