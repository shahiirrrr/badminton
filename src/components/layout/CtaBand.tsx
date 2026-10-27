import * as motion from "motion/react-client";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { TRIAL_HREF } from "./nav-links";

type CtaBandProps = {
  headline?: string;
  body?: string;
};

/** Closing conversion band used at the end of every inner page. */
export function CtaBand({
  headline = "Ready for your\ntrial session?",
  body = "Book a trial and we'll assess your level, answer your questions and place you in the right group.",
}: CtaBandProps) {
  return (
    <section className="relative flex w-full flex-col gap-10 overflow-hidden rounded-xl bg-court-deep px-6 py-12 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:py-14 lg:pr-50 lg:pl-14">
      <motion.h2
        className="relative text-display whitespace-pre-line text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {headline}
      </motion.h2>
      <div className="relative flex flex-col gap-6">
        <p className="max-w-105 text-body-lg text-white/80">{body}</p>
        <div className="flex flex-wrap items-center gap-4">
          <Button label="Book a trial" variant="onImage" href={TRIAL_HREF} />
          <TextLink label="Chat on WhatsApp" href="#" tone="inverse" />
        </div>
      </div>
      {/* Lime disc drops in with a bounce when the band scrolls into view. */}
      <motion.div
        className="absolute -top-10 -right-10 size-30 sm:-top-17.5 sm:-right-15 sm:size-50"
        initial={{ scale: 0, rotate: -90 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 160, damping: 12, delay: 0.2 }}
      >
        <Image src="/icons/ball-accent.svg" alt="" width={200} height={200} className="size-full" />
      </motion.div>
    </section>
  );
}
