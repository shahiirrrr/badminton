"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ease } from "@/components/motion/ease";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { navLinks, TRIAL_HREF } from "./nav-links";
import { Wordmark } from "./Wordmark";

/** Desktop header (≥1024px). */
export function NavDesktop({ className }: { className?: string }) {
  return (
    <nav aria-label="Main" className={cn("w-full items-center justify-between", className ?? "flex h-18")}>
      <ul className="flex flex-1 items-center gap-8 text-nav">
        {navLinks.slice(0, 3).map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-court-blue">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Wordmark className="text-[22px]" />
      <ul className="flex flex-1 items-center justify-end gap-8 text-nav">
        {navLinks.slice(3, 5).map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-court-blue">
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Button label="Book a trial" href={TRIAL_HREF} />
        </li>
      </ul>
    </nav>
  );
}

/** Tablet & mobile header (<1024px). Menu opens a full-screen overlay; "Book trial" stays one tap away. */
export function NavCompact({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={cn("h-16 w-full items-center justify-between", className ?? "flex")}>
      <Wordmark className="text-[18px]" />
      <div className="relative z-50 flex items-center gap-2">
        <Link href={TRIAL_HREF} className="rounded-full border border-ink px-4 py-3 text-button whitespace-nowrap">
          Book trial
        </Link>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="flex size-11 items-center justify-center rounded-full bg-ink outline-none focus-visible:ring-3 focus-visible:ring-court-blue"
        >
          <Image
            src="/icons/menu.svg"
            alt=""
            width={18}
            height={18}
            className={cn("transition-transform duration-300", open && "rotate-90")}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Main"
            // Lenis would otherwise scroll the page behind the open menu despite the body overflow lock.
            data-lenis-prevent
            className="fixed inset-0 z-40 flex flex-col justify-center bg-canvas px-6"
            initial={{ clipPath: "circle(0% at calc(100% - 38px) 32px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 38px) 32px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 38px) 32px)" }}
            transition={{ duration: 0.6, ease }}
          >
            {/* Overlay grows out of the menu button; links rise in one by one. */}
            <motion.ul
              className="flex flex-col gap-4"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
            >
              {navLinks.map((l) => (
                <motion.li
                  key={l.href}
                  className="overflow-hidden"
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease } },
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-[clamp(36px,9vw,56px)] leading-none font-light tracking-[-0.03em]"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
