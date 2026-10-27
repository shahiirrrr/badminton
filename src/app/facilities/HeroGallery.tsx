"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ease } from "@/components/motion/ease";
import { IconButton } from "@/components/ui/IconButton";
import Image from "next/image";

export type Slide = { image: string; title: string; caption: string };

export function HeroGallery({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const n = slides.length;
  const slide = slides[i];
  const pad = (v: number) => String(v).padStart(2, "0");

  return (
    <section aria-roledescription="carousel" aria-label="Facilities gallery" className="px-4 pb-24 sm:px-8 lg:pb-30">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl sm:aspect-[1376/680]">
        {/* Photo crossfades with a slight zoom per slide. */}
        <AnimatePresence initial={false}>
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <Image src={slide.image} alt="" fill priority={i === 0} sizes="100vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-b from-[rgb(8_31_66/0)] to-[rgb(8_31_66/0.7)]" />
        <div className="absolute inset-x-5 bottom-6 flex flex-col gap-6 text-white sm:inset-x-12 sm:bottom-10 sm:flex-row sm:items-end sm:justify-between">
          <div aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={i}
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease }}
              >
                <h2 className="text-display-md">{slide.title}</h2>
                <p className="text-caps whitespace-pre-wrap opacity-80">{slide.caption}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-3">
            <span className="mr-1 text-caps">
              {pad(i + 1)} / {pad(n)}
            </span>
            <IconButton direction="prev" variant="onImage" onClick={() => setI((i - 1 + n) % n)} />
            <IconButton direction="next" variant="onImage" onClick={() => setI((i + 1) % n)} />
          </div>
        </div>
      </div>
    </section>
  );
}
