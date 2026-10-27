"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { ease } from "@/components/motion/ease";
import { NavCompact, NavDesktop } from "./Nav";

/** Sticky header: slides away on scroll down, returns on scroll up (Figma Nav / Desktop note). */
export function SiteHeader() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    // Stay visible near the top; ignore tiny jitters.
    if (y < 120) setHidden(false);
    else if (Math.abs(y - prev) > 4) setHidden(y > prev);
  });

  return (
    <motion.header
      className="sticky top-0 z-30 px-4 sm:px-8"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? "-100%" : 0, opacity: 1 }}
      transition={{ duration: 0.45, ease }}
    >
      {/* Near-solid background, no backdrop-blur: the blur bled the hero's edge into a grey band and re-ran every scroll frame. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-canvas/95" />
      <NavDesktop className="hidden h-24 lg:flex" />
      <NavCompact className="flex lg:hidden" />
    </motion.header>
  );
}
