"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";
import { withBasePath } from "@/lib/base-path";

const posts = [
  { src: "/gallery/lobster-boil.jpg", caption: "Fresh lobster boil" },
  { src: "/gallery/king-crab.jpg", caption: "King crab legs" },
  { src: "/gallery/dungeness-crab.jpg", caption: "Dungeness crab" },
  { src: "/gallery/loaded-boil.jpg", caption: "Loaded corn, potato & sausage" },
  { src: "/gallery/garlic-butter-shrimp.jpg", caption: "Garlic butter shrimp" },
  { src: "/gallery/mussels.jpg", caption: "Mussels in sauce" },
  { src: "/gallery/clams-mussels.jpg", caption: "Clam & mussel boil" },
  { src: "/gallery/lobster-mac.jpg", caption: "Lobster mac & cheese" },
  { src: "/gallery/shrimp-basket.jpg", caption: "Shrimp basket" },
];

function GalleryTile({
  src,
  caption,
  delay,
}: {
  src: string;
  caption: string;
  delay: number;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.04 }}
      className="relative aspect-square overflow-hidden rounded-lg border border-brand-gold/40 bg-gradient-to-br from-brand-black to-brand-red/20"
    >
      {!failed ? (
        <Image
          src={withBasePath(src)}
          alt={caption}
          fill
          sizes="(min-width: 640px) 33vw, 50vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 px-3 text-center">
          <span className="text-3xl">🦞</span>
          <span className="text-xs text-brand-tan">{caption}</span>
        </div>
      )}
    </motion.div>
  );
}

export function Gallery() {
  return (
    <section
      id="gallery"
      className="border-y-2 border-brand-gold/60 bg-brand-charcoal py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.4em] text-brand-gold-light">
          Fresh Catch
        </p>
        <h2 className="mb-3 text-center text-4xl text-brand-cream md:text-5xl">
          Straight From The Boil
        </h2>
        <p className="mb-12 text-center text-sm text-brand-tan">
          Placeholder feed — connect the Instagram Graph API with a real access token to pull
          live posts here.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {posts.map((post, i) => (
            <GalleryTile
              key={post.caption}
              src={post.src}
              caption={post.caption}
              delay={i * 0.07}
            />
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

