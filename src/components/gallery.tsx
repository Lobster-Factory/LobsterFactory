"use client";

import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

const placeholderPosts = [
  { emoji: "🦞", caption: "Fresh lobster boil" },
  { emoji: "🦀", caption: "King crab legs" },
  { emoji: "🌽", caption: "Loaded corn & potatoes" },
  { emoji: "🧀", caption: "Lobster mac & cheese" },
  { emoji: "🍤", caption: "Shrimp basket" },
  { emoji: "🌶️", caption: "Cajun house special" },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="border-y-2 border-brand-gold/60 bg-brand-tan/30 py-24 dark:bg-brand-charcoal"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.4em] text-brand-red-dark dark:text-brand-gold-light">
          Fresh Catch
        </p>
        <h2 className="mb-3 text-center text-4xl text-brand-black dark:text-brand-cream md:text-5xl">
          Straight From The Boil
        </h2>
        <p className="mb-12 text-center text-sm text-brand-black/70 dark:text-brand-tan">
          Placeholder feed — connect the Instagram Graph API with a real access token to pull
          live posts here.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {placeholderPosts.map((post, i) => (
            <motion.div
              key={post.caption}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ scale: 1.04 }}
              className="flex aspect-square flex-col items-center justify-center gap-2 rounded-lg border border-brand-gold/40 bg-gradient-to-br from-brand-black/5 to-brand-red/10 text-center dark:from-brand-black dark:to-brand-red/20"
            >
              <span className="text-4xl">{post.emoji}</span>
              <span className="px-3 text-xs text-brand-black/70 dark:text-brand-tan">
                {post.caption}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 rounded-full border-2 border-brand-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-gold-light transition hover:bg-brand-gold hover:text-brand-black"
          >
            <InstagramIcon className="h-4 w-4" /> Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
