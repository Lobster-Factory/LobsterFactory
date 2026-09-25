"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { InstagramIcon, TiktokIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";
import { withBasePath } from "@/lib/base-path";

const posts = [
  { src: "/gallery/new/boil-01.jpg", caption: "Whole lobster boil" },
  { src: "/gallery/new/boil-04.jpg", caption: "Garlic butter mussels" },
  { src: "/gallery/new/boil-05.jpg", caption: "Snow crab boil" },
  { src: "/gallery/new/boil-06.jpg", caption: "Cajun shrimp boil" },
  { src: "/gallery/new/boil-08.jpg", caption: "Loaded seafood boil" },
  { src: "/gallery/new/boil-10.jpg", caption: "King crab legs" },
  { src: "/gallery/new/boil-11.jpg", caption: "Lobster Factory feast" },
  { src: "/gallery/new/boil-13.jpg", caption: "Dungeness crab boil" },
  { src: "/gallery/new/boil-17.jpg", caption: "Chicken boil" },
  { src: "/gallery/new/boil-18.jpg", caption: "Shrimp fried rice" },
  { src: "/gallery/new/boil-19.jpg", caption: "Mixed seafood boil" },
  { src: "/gallery/new/boil-21.jpg", caption: "Dungeness crab platter" },
  { src: "/gallery/new/boil-02.jpg", caption: "Clams in house sauce" },
  { src: "/gallery/new/boil-07.jpg", caption: "Mussels and vegetables" },
  { src: "/gallery/new/boil-09.jpg", caption: "Lobster boil platter" },
  { src: "/gallery/new/boil-12.jpg", caption: "Shrimp and corn boil" },
  { src: "/gallery/new/boil-14.jpg", caption: "Clam boil platter" },
  { src: "/gallery/new/boil-15.jpg", caption: "Seafood feast" },
  { src: "/gallery/new/boil-16.jpg", caption: "Snow crab platter" },
  { src: "/gallery/new/boil-20.jpg", caption: "Chicken and vegetable boil" },
  { src: "/gallery/new/boil-22.jpg", caption: "King crab platter" },
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
      className="relative aspect-[5/4] overflow-hidden rounded-lg border border-brand-gold/40 bg-gradient-to-br from-brand-black to-brand-red/20"
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

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 rounded-full border-2 border-brand-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-gold-light transition hover:bg-brand-gold hover:text-brand-black"
          >
            <InstagramIcon className="h-4 w-4" /> Follow us on Instagram
          </a>
          <a
            href={siteConfig.social.tiktok}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 rounded-full border-2 border-brand-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-gold-light transition hover:bg-brand-gold hover:text-brand-black"
          >
            <TiktokIcon className="h-4 w-4" /> Follow us on TikTok
          </a>
        </div>
      </div>
    </section>
  );
}

