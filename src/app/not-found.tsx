import * as motion from "motion/react-client";
import Image from "next/image";
import { Reveal } from "@/components/motion/Motion";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center px-4 pt-10 pb-24 text-center sm:px-8 lg:pt-15 lg:pb-30">
      {/* Numerals and shuttlecock share one font-size so the "0" scales with the 4s (300/420 = 0.714em). */}
      <p
        aria-hidden
        className="flex items-center gap-[0.057em] text-[clamp(140px,29vw,420px)] leading-[0.8] font-light tracking-[-0.05em]"
      >
        4{/* The "0" shuttlecock drops in, then keeps bouncing. */}
        <motion.span
          className="block size-[0.714em]"
          initial={{ y: "-120%", rotate: -180 }}
          animate={{ y: ["-120%", "0%", "-14%", "0%"], rotate: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", times: [0, 0.55, 0.8, 1] }}
        >
          <motion.span
            className="block size-full"
            animate={{ y: [0, "-10%", 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          >
            <Image
              src="/images/shuttlecock.svg"
              alt=""
              width={300}
              height={300}
              priority
              className="size-full drop-shadow-[20px_40px_30px_rgb(13_38_77/0.18)]"
            />
          </motion.span>
        </motion.span>
        4
      </p>
      <Reveal delay={0.6} className="flex flex-col items-center">
        <p className="mt-10 text-caps text-tertiary lg:mt-16">Error 404</p>
        <h1 className="mt-5 text-display">Out of bounds.</h1>
        <p className="mt-5 text-body-lg text-secondary">
          This page landed out of the court. Let&apos;s get you back in the rally.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-5">
          <Button label="Back to home" href="/" />
          <TextLink label="Book a trial" href="/#book-trial" />
        </div>
      </Reveal>
    </section>
  );
}
