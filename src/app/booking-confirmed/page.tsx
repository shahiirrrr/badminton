import type { Metadata } from "next";
import * as motion from "motion/react-client";
import Image from "next/image";
import { Reveal, RiseText } from "@/components/motion/Motion";
import { NumberedCards, PageSection, SectionHeader } from "@/components/layout/PageBlocks";
import { Tag } from "@/components/ui/Badges";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Trial request received",
  robots: { index: false },
};

// ponytail: summary shows the design's placeholder values — fill from the real booking once the form has a backend.
const summary = [
  ["Reference", "#[CC-0000]"],
  ["Name", "[Alex Morgan]"],
  ["Trial is for", "[My child]"],
  ["Program", "[Junior Development]"],
  ["Preferred date", "[Sat, 14 Nov]"],
  ["Session", "[Morning]"],
  ["Contact", "[+91 00000 00000]"],
];

const steps = [
  { title: "We review your request", body: "A coach looks at the program and level you selected." },
  { title: "We confirm your slot", body: "We call or email to agree a date and time that works." },
  { title: "Arrive 10 minutes early", body: "Meet your coach, warm up and enjoy your first session." },
];

const checklist = [
  "Comfortable sports clothing",
  "Non-marking indoor court shoes",
  "A water bottle",
  "Your racket, if you have one — trial rackets available (to confirm)",
  "A small towel — Kerala humidity is real!",
];

export default function BookingConfirmedPage() {
  return (
    <>
      <section className="grid gap-12 px-4 pt-10 pb-24 sm:px-8 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-20 lg:px-16 lg:pt-16 lg:pb-30">
        <div className="flex flex-col items-start gap-7">
          {/* Success mark pops in, then the tick draws its way in. */}
          <motion.span
            className="flex size-24 items-center justify-center rounded-full bg-lime"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 14 }}
          >
            <motion.span
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <Image src="/icons/check-lg.svg" alt="" width={40} height={40} />
            </motion.span>
          </motion.span>
          <p className="text-caps text-success">Trial request received</p>
          <h1 className="text-section">
            <RiseText lines={["See you", "on court."]} delay={0.2} />
          </h1>
          <p className="max-w-140 text-body-lg text-secondary">
            Thanks, [Name]. We&apos;ll call or email you within [X working days — confirm] to lock in your trial session
            time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button label="Chat on WhatsApp" href="#" />
            <Button label="Back to home" variant="secondary" href="/" />
          </div>
        </div>

        <Reveal delay={0.4} className="flex flex-col rounded-xl bg-surface px-6 py-8 sm:px-10 sm:py-9">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5">
            <h2 className="text-h3">Your request</h2>
            <Tag label="Pending confirmation" />
          </div>
          <dl>
            {summary.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-t border-line py-3.5">
                <dt className="text-caps text-tertiary">{k}</dt>
                <dd className="text-right text-body">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-body-sm text-tertiary">
            Something wrong? Reply to the confirmation email or message us on WhatsApp.
          </p>
        </Reveal>
      </section>

      <PageSection>
        <h2 className="text-display-md">What happens next</h2>
        <NumberedCards items={steps} highlight={2} className="mt-10" />
      </PageSection>

      <PageSection className="grid gap-10 lg:grid-cols-[480px_minmax(0,1fr)] lg:gap-16">
        <SectionHeader
          label="Checklist"
          title={
            <>
              What to
              <br />
              bring.
            </>
          }
        />
        <ul>
          {checklist.map((item) => (
            <li key={item} className="flex items-center gap-4 border-b border-line py-4.5 text-body-lg text-ink">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-line bg-surface">
                <Image src="/icons/check.svg" alt="" width={14} height={14} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  );
}
