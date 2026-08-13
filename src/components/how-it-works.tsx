"use client";

import { motion } from "framer-motion";
import { ImageMarquee } from "@/components/image-marquee";

const steps = [
  {
    number: 1,
    title: "Choose Your Protein",
    text: "Shrimp, mussels, clams, chicken slices, dungeness crab, snow crab legs, lobster, or king crab legs.",
  },
  {
    number: 2,
    title: "Choose Your Sauce",
    text: "Cajun, Garlic Butter, Lemon Pepper, or House Special — pick your spice level too.",
  },
  {
    number: 3,
    title: "Choose Your Sides",
    text: "Pick your included sides and any premium add-ons. Then we boil and serve!",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-y-2 border-brand-gold/60 bg-brand-charcoal py-24"
    >
      <ImageMarquee />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.4em] text-brand-gold-light">
          How It Works
        </p>
        <h2 className="mb-14 text-center text-4xl text-brand-cream md:text-5xl">
          Build Your Perfect Boil
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="relative rounded-xl border border-brand-gold/40 bg-brand-black/40 p-9 text-center shadow-lg"
            >
              <span className="absolute -top-5 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-red font-display text-brand-cream">
                {step.number}
              </span>
              <h3 className="mb-3 mt-3 text-xl text-brand-gold-light">
                {step.title}
              </h3>
              <p className="text-sm font-light text-brand-tan">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
