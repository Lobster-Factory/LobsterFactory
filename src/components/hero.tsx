"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { withBasePath } from "@/lib/base-path";

export function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-brand-black text-center"
    >
      {/* Ember/steam gradient — shows on its own until public/hero-boil.jpg is added, then sits behind it */}
      <div className="animate-ember absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(181,53,42,0.35)_0%,_rgba(20,16,12,0.97)_65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1c1611_0%,#0f0c09_100%)] opacity-80" />

      {!imageFailed && (
        <Image
          src={withBasePath("/hero-boil.jpg")}
          alt="Seafood boil tray with lobster, shrimp, corn and potatoes"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70 [filter:brightness(0.55)_contrast(1.15)_saturate(1.15)]"
          onError={() => setImageFailed(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/75" />

      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="animate-steam absolute bottom-0 h-24 w-24 rounded-full bg-brand-tan/10 blur-2xl"
          style={{
            left: `${15 + i * 18}%`,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-3xl px-6"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-brand-gold-light">
          Boil &bull; Grill &bull; Seafood
        </p>
        <h1 className="text-6xl leading-none text-brand-cream drop-shadow-[0_4px_0_rgba(0,0,0,0.5)] sm:text-7xl md:text-8xl">
          Lobster Factory
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg font-light tracking-wide text-brand-tan">
          Fresh ingredients. Bold flavors. Your boil, your way.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="#menu"
            className="rounded-md bg-gradient-to-b from-brand-red to-brand-red-dark px-8 py-4 text-sm font-semibold uppercase tracking-wider text-brand-cream shadow-[0_6px_0_rgba(0,0,0,0.3)] transition hover:-translate-y-0.5"
          >
            Build Your Boil
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="rounded-md border-2 border-brand-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-brand-gold-light transition hover:bg-brand-gold hover:text-brand-black"
          >
            Call to Order
          </a>
        </div>
      </motion.div>
    </section>
  );
}
