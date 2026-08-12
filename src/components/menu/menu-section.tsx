import { AnimatedCard } from "./animated-card";
import { BoilBuilder } from "./boil-builder";
import { macAndCheese, shareables, includedSides, premiumSides } from "@/data/menu";

export function MenuSection() {
  return (
    <section id="menu" className="bg-brand-cream py-24 dark:bg-brand-black">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.4em] text-brand-red-dark dark:text-brand-gold-light">
          The Menu
        </p>
        <h2 className="mb-14 text-center text-4xl text-brand-black dark:text-brand-cream md:text-5xl">
          Fresh From The Pot
        </h2>

        <div className="grid gap-7 md:grid-cols-2">
          <AnimatedCard className="md:col-span-2">
            <div className="mb-6 flex flex-wrap items-center gap-3 border-b-2 border-dashed border-brand-gold/40 pb-5">
              <span className="text-3xl">🦞</span>
              <h3 className="flex-1 text-2xl text-brand-black dark:text-brand-cream">
                Single Boil
              </h3>
              <span className="rounded-full border border-brand-red/40 bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-red-dark dark:text-brand-red">
                Build Your Perfect Boil
              </span>
            </div>
            <BoilBuilder />
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="mb-5 flex items-center gap-3 border-b-2 border-dashed border-brand-gold/40 pb-4">
              <span className="text-3xl">🧀</span>
              <h3 className="flex-1 text-2xl text-brand-black dark:text-brand-cream">
                Mac &amp; Cheese
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-red-dark dark:text-brand-red">
                3 Protein Options
              </span>
            </div>
            <ul className="divide-y divide-dotted divide-brand-gold/30">
              {macAndCheese.map((item) => (
                <li key={item} className="py-2.5 text-brand-black/85 dark:text-brand-tan">
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedCard>

          <AnimatedCard delay={0.15}>
            <div className="mb-5 flex items-center gap-3 border-b-2 border-dashed border-brand-gold/40 pb-4">
              <span className="text-3xl">🍤</span>
              <h3 className="text-2xl text-brand-black dark:text-brand-cream">Shareable</h3>
            </div>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
              {shareables.map((item) => (
                <li
                  key={item}
                  className="py-2 text-sm text-brand-black/85 dark:text-brand-tan"
                >
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedCard>

          <AnimatedCard delay={0.2} className="md:col-span-2 bg-gradient-to-br from-brand-red/10 to-transparent">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="mb-4 text-lg uppercase tracking-wider text-brand-gold-light">
                  Included Sides
                </h4>
                <ul className="space-y-2">
                  {includedSides.map((s) => (
                    <li
                      key={s.label}
                      className="flex items-center gap-3 text-brand-black/85 dark:text-brand-tan"
                    >
                      <span className="text-xl">{s.icon}</span> {s.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-lg uppercase tracking-wider text-brand-gold-light">
                  Premium Add-On Sides
                </h4>
                <ul className="space-y-2">
                  {premiumSides.map((s) => (
                    <li
                      key={s.label}
                      className="flex items-center gap-3 text-brand-black/85 dark:text-brand-tan"
                    >
                      <span className="text-xl">{s.icon}</span> {s.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedCard>
        </div>

        <p className="mt-12 text-center text-lg tracking-wide text-brand-gold-light">
          ⚓ Thank you for supporting local! We appreciate you. 🦀
        </p>
      </div>
    </section>
  );
}
