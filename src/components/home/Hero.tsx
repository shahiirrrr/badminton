"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ease } from "@/components/motion/ease";
import { Button } from "@/components/ui/Button";

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

export function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="px-4 sm:px-8">
      {/* Panel only fades — scaling it would re-rasterise all the text every frame. */}
      <motion.div
        className="@container relative flex h-[min(760px,88svh)] min-h-140 flex-col overflow-hidden rounded-xl bg-court-blue p-5 text-white sm:p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease }}
      >
        {/* Background video fills the panel (photo as poster); reduced-motion visitors get the still photo. */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease }}
        >
          {reduceMotion ? (
            <Image
              src="/images/hero.jpg"
              alt="Player leaping for a smash on an indoor badminton court"
              fill
              priority
              sizes="(min-width: 1440px) 1376px, 100vw"
              className="object-cover"
            />
          ) : (
            <video
              className="size-full object-cover"
              src="/videos/hero.mp4"
              poster="/images/hero.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            />
          )}
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-linear-to-b from-[rgb(8_38_84/0)] to-[rgb(8_38_84/0.55)]" />
        <div className="absolute inset-x-0 top-0 h-[40%] bg-linear-to-b from-[rgb(8_36_77/0.55)] to-[rgb(8_36_77/0)]" />

        <motion.div className="relative flex justify-between gap-6 text-caps" {...fadeIn(0.5)}>
          <p>
            Badminton academy
            <br />
            Kerala · Kids · Juniors · Adults
          </p>
          <p className="text-right">
            Better players
            <br />
            Stronger minds
            <br />A healthier you
          </p>
        </motion.div>

        {/* Letters rise from behind a mask, left to right. */}
        <h1
          aria-label="MOVE BETTER"
          className="relative mt-[clamp(48px,6vw,76px)] -ml-1 flex overflow-hidden text-hero whitespace-pre sm:-ml-3"
        >
          {"MOVE BETTER".split("").map((ch, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="inline-block"
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease, delay: 0.35 + i * 0.04 }}
            >
              {ch}
            </motion.span>
          ))}
        </h1>

        <div className="relative mt-auto flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.p className="text-display-md" {...fadeIn(0.8)}>
            GAME ON,
            <br />
            PLAY HARD.
          </motion.p>
          <motion.div className="hidden lg:block" {...fadeIn(1)}>
            <p className="text-caps whitespace-pre opacity-70">{"(01)  Scroll to explore"}</p>
          </motion.div>
          <motion.div className="self-start lg:self-auto" {...fadeIn(1.1)}>
            <Button label="Start your journey" variant="onImage" href="/#book-trial" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
