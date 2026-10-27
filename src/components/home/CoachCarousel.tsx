"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ease } from "@/components/motion/ease";
import { CoachCard } from "@/components/ui/CoachCard";
import { IconButton } from "@/components/ui/IconButton";
import type { Coach } from "@/data/coaches";
import { cn } from "@/lib/cn";

// Card pose by position relative to the active card: active in front, neighbours tilted ±6° at 85% behind.
const poses: Record<number, { x: string; rotate: number; scale: number; opacity: number; zIndex: number }> = {
  [-1]: { x: "-52%", rotate: -6, scale: 0.85, opacity: 0.5, zIndex: 0 },
  0: { x: "0%", rotate: 5, scale: 1, opacity: 1, zIndex: 10 },
  1: { x: "52%", rotate: 6, scale: 0.85, opacity: 0.5, zIndex: 0 },
};
const offstage = { x: "0%", rotate: 0, scale: 0.7, opacity: 0, zIndex: 0 };

export function CoachCarousel({ coaches }: { coaches: Coach[] }) {
  const [active, setActive] = useState(0);
  const n = coaches.length;
  const go = (step: number) => setActive((a) => (a + step + n) % n);
  const coach = coaches[active];

  return (
    <>
      <motion.div
        role="region"
        aria-roledescription="carousel"
        aria-label="Coaches"
        className="relative mx-auto mt-10 aspect-[760/620] w-full max-w-190 cursor-grab touch-pan-y select-none active:cursor-grabbing lg:mt-0"
        // Stage rubber-bands while dragging; a 40px swipe changes card.
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragEnd={(_, info) => Math.abs(info.offset.x) > 40 && go(info.offset.x < 0 ? 1 : -1)}
      >
        {coaches.map((c, i) => {
          // Signed distance from the active card, wrapped so neighbours exist at both ends.
          let offset = (i - active + n) % n;
          if (offset > n / 2) offset -= n;
          return (
            <motion.div
              key={i}
              aria-hidden={offset !== 0}
              initial={false}
              animate={poses[offset] ?? offstage}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className={cn(
                "absolute top-[10%] left-1/2 -ml-[29%] w-[58%] sm:-ml-[23.5%] sm:w-[47%]",
                offset === 0 ? "shadow-[0_30px_60px_rgb(13_38_77/0.18)]" : "pointer-events-none",
                "rounded-xl",
              )}
            >
              <CoachCard name={c.name} role={c.role} photo={c.photo} className="max-w-none" />
            </motion.div>
          );
        })}
        <motion.span
          className="absolute right-[2%] bottom-[8%] z-20 flex size-[clamp(64px,8vw,88px)] items-center justify-center rounded-full bg-lime text-caps text-ink"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          Drag
        </motion.span>
      </motion.div>

      <div className="mt-10 flex flex-col gap-8 border-t border-line pt-8 lg:col-span-2 lg:mt-16 lg:flex-row lg:items-end lg:gap-12">
        <div aria-live="polite" className="flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease }}
            >
              <p className="text-display-sm text-ink">{coach.name}</p>
              <p className="text-body text-secondary">{coach.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <dl className="grid grid-cols-2 gap-6 lg:flex lg:gap-12">
          <div className="flex flex-col gap-2 lg:w-57.5">
            <dt className="text-caps text-tertiary">Experience</dt>
            <dd className="text-body text-ink">{coach.experience}</dd>
          </div>
          <div className="flex flex-col gap-2 lg:w-57.5">
            <dt className="text-caps text-tertiary">Teaches</dt>
            <dd className="text-body text-ink">{coach.teaches}</dd>
          </div>
        </dl>
        <div className="flex items-center gap-3">
          <p className="mr-3 text-caps text-ink">
            {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </p>
          <IconButton direction="prev" onClick={() => go(-1)} />
          <IconButton direction="next" variant="solid" onClick={() => go(1)} />
        </div>
      </div>

      <div className="mt-12 flex gap-1.5 lg:col-span-2 lg:mt-16">
        {coaches.map((_, i) => (
          <span key={i} className="relative h-0.5 flex-1 bg-line">
            {i === active && (
              <motion.span
                layoutId="coach-progress"
                className="absolute inset-0 bg-ink"
                transition={{ duration: 0.4, ease }}
              />
            )}
          </span>
        ))}
      </div>
    </>
  );
}
