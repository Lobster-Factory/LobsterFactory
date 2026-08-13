"use client";

import Image from "next/image";
import { withBasePath } from "@/lib/base-path";

const images = [
  "/gallery/lobster-boil.jpg",
  "/gallery/king-crab.jpg",
  "/gallery/dungeness-crab.jpg",
  "/gallery/loaded-boil.jpg",
  "/gallery/garlic-butter-shrimp.jpg",
  "/gallery/mussels.jpg",
  "/gallery/clams-mussels.jpg",
  "/gallery/lobster-mac.jpg",
  "/gallery/shrimp-basket.jpg",
];

// Duplicated once so the strip can loop seamlessly at -50% translate
const loopImages = [...images, ...images];

export function ImageMarquee() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="animate-marquee flex h-full w-max">
        {loopImages.map((src, i) => (
          <div key={i} className="relative h-full w-[300px] shrink-0 sm:w-[420px]">
            <Image
              src={withBasePath(src)}
              alt=""
              fill
              sizes="420px"
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-brand-charcoal/85" />
    </div>
  );
}
