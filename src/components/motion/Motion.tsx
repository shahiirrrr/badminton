"use client";

import { MotionConfig, motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";
import { ease } from "./ease";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  // `custom` carries Reveal's delay; the variant's own transition would otherwise override it.
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease, delay } }),
};

const viewport = { once: true, amount: 0.15 } as const;

/** Respect the OS "reduce motion" setting for every animation below. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Fades + rises into view once, when scrolled to. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

const containers = { div: motion.div, ul: motion.ul, ol: motion.ol, dl: motion.dl };
const items = { div: motion.div, li: motion.li };

/** Children (StaggerItem) reveal one after another. */
export function Stagger({
  children,
  className,
  as = "div",
  gap = 0.09,
}: {
  children: ReactNode;
  className?: string;
  as?: keyof typeof containers;
  gap?: number;
}) {
  const Tag = containers[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof typeof items;
}) {
  const Tag = items[as];
  return (
    <Tag className={className} variants={fadeUp}>
      {children}
    </Tag>
  );
}

/** Drifts vertically as the element passes through the viewport (Figma: stat badges float ±6px). */
export function Parallax({
  children,
  className,
  range = 6,
}: {
  children: ReactNode;
  className?: string;
  range?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/** Text whose lines slide up from behind a mask, one after another (display headlines). */
export function RiseText({ lines, className, delay = 0 }: { lines: string[]; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        // Padding + negative margin give descenders room inside the mask without changing line height.
        <span key={i} className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease, delay: delay + i * 0.12 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
