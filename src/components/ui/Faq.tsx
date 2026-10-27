"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useId, useState } from "react";
import { ease } from "@/components/motion/ease";
import { cn } from "@/lib/cn";

type FaqProps = {
  items: { question: string; answer: string }[];
  defaultOpen?: number;
  className?: string;
};

/** Accordion — only one item open at a time. Answer expands with height + opacity (300ms). */
export function Faq({ items, defaultOpen = -1, className }: FaqProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className={cn("w-full max-w-190", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-line py-6">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 text-left text-h4 text-ink outline-none focus-visible:underline"
              >
                {item.question}
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0, backgroundColor: isOpen ? "#d7f23a" : "rgba(215,242,58,0)" }}
                  transition={{ duration: 0.3, ease }}
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-full",
                    !isOpen && "border border-line",
                  )}
                >
                  <Image src={isOpen ? "/icons/minus.svg" : "/icons/plus.svg"} alt="" width={16} height={16} />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="overflow-hidden"
                >
                  <p className="max-w-160 pt-3 text-body text-secondary">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
