import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb, CtaWrap, NumberedCards, PageSection, SectionHeader } from "@/components/layout/PageBlocks";
import * as motion from "motion/react-client";
import { Reveal, RiseText } from "@/components/motion/Motion";
import { ease } from "@/components/motion/ease";
import { StatBadge, Tag } from "@/components/ui/Badges";
import { Button } from "@/components/ui/Button";
import { CoachCard } from "@/components/ui/CoachCard";
import { Faq } from "@/components/ui/Faq";
import { ProgramPanel } from "@/components/ui/ProgramPanel";
import { TextLink } from "@/components/ui/TextLink";
import { programs } from "@/data/programs";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Junior Development",
  description: "A structured badminton pathway for young players — technique, movement and first match play.",
};

// [Bracketed] values are placeholders from the design — confirm with the academy before launch.
const facts = [
  { label: "Age group", value: "[6–17] yrs" },
  { label: "Group size", value: "Max [6]" },
  { label: "Sessions", value: "[3] / week" },
  { label: "Session length", value: "[90] min" },
];

const outcomes = [
  { title: "Stroke technique", body: "Clears, drops, smashes and net shots with clean, repeatable form." },
  { title: "Footwork & movement", body: "Split step, lunges and recovery to reach every corner of the court." },
  { title: "Serve & return", body: "Accurate low and high serves, and confident returns in singles and doubles." },
  { title: "Match tactics", body: "Building points, using the court and choosing the right shot." },
  { title: "Mental game", body: "Routines for focus, resets after mistakes and enjoying pressure." },
  { title: "Badminton fitness", body: "Agility, coordination and injury-aware conditioning for juniors." },
];

const sessionBlocks = [
  {
    time: "[0–15 min]",
    title: "Warm-up & movement",
    body: "Dynamic warm-up, footwork ladders and coordination games.",
  },
  {
    time: "[15–40 min]",
    title: "Technique block",
    body: "Focused drills on this term's stroke goal with coach feedback.",
  },
  { time: "[40–65 min]", title: "Multi-shuttle & pattern drills", body: "Rally patterns that turn technique into decisions." },
  { time: "[65–85 min]", title: "Match play", body: "Singles and doubles games with simple tactical goals." },
  { time: "[85–90 min]", title: "Cool-down & feedback", body: "Stretching, a quick review and one thing to practise." },
];

const batches = [
  { name: "Mini Juniors (ages [6–9])", days: "[Tue · Thu · Sat]", time: "[4:30 – 5:30 pm]", fee: "₹[0,000]" },
  { name: "Juniors (ages [10–13])", days: "[Mon · Wed · Fri]", time: "[5:00 – 6:30 pm]", fee: "₹[0,000]" },
  { name: "Teens (ages [14–17])", days: "[Mon · Wed · Fri]", time: "[6:30 – 8:00 pm]", fee: "₹[0,000]" },
];

const programCoaches = [
  { role: "Junior Development Coach", tilt: "-rotate-4", photo: "/images/coach-junior.jpg" },
  { role: "Head Coach", tilt: "-rotate-2", photo: "/images/coach-head.jpg" },
  { role: "Fitness & Movement Coach", tilt: "rotate-2", photo: "/images/coach-fitness.jpg" },
];

const faqs = [
  {
    question: "What should my child bring to the first session?",
    answer:
      "Comfortable sports clothing, non-marking indoor court shoes and a water bottle. Rackets and shuttles can be provided for trial sessions — to confirm.",
  },
  {
    question: "My child has never played. Is Junior Development right?",
    answer:
      "Complete beginners usually start in Beginners or Mini Juniors. Book a trial and the coach will recommend the right group.",
  },
  {
    question: "How do you track progress?",
    answer:
      "Coaches review each student against the term goals and share a short progress report — frequency to confirm.",
  },
  { question: "Can parents watch sessions?", answer: "[Viewing policy — to confirm with the academy.]" },
  { question: "What happens if we miss a session?", answer: "[Make-up / cancellation policy — to confirm.]" },
];

const otherPrograms = programs.filter((p) => p.slug !== "junior-development");

export default function JuniorDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="grid gap-12 px-4 pt-6 pb-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:pr-8 lg:pl-16 lg:pb-24">
        <Reveal className="flex flex-col items-start">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Programs", href: "/#programs" },
              { label: "Junior Development" },
            ]}
          />
          <p className="mt-10 text-caps text-secondary">Program 02 / 04</p>
          <h1 className="mt-4 text-section">
            <RiseText lines={["Junior", "Development."]} delay={0.15} />
          </h1>
          <ul className="mt-8 flex flex-wrap gap-2">
            {["Under-18s", "Ages [6–17] · confirm", "Term-based · TBC"].map((t) => (
              <li key={t}>
                <Tag label={t} />
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-130 text-body-lg text-secondary">
            A structured pathway for young players. Juniors build sound technique, athletic movement and the confidence
            to play real matches — in small groups, with clear goals every term.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 lg:mt-16">
            <Button label="Book a trial" href="/#book-trial" />
            {/* ponytail: no schedule PDF exists yet — jumps to the batches table instead. */}
            <Button label="Download schedule" variant="secondary" href="#schedule" />
          </div>
        </Reveal>
        <div className="relative mx-auto w-full max-w-125 lg:mt-4">
          {/* Photo card swings into its 4° tilt. */}
          <motion.div
            className="relative aspect-[500/660] overflow-hidden rounded-xl"
            initial={{ opacity: 0, rotate: -6, y: 60 }}
            animate={{ opacity: 1, rotate: 4, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.2 }}
          >
            <Image
              src="/images/program-junior.jpg"
              alt="Junior player jumping for an overhead shot"
              fill
              priority
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute right-0 -bottom-6 sm:-right-6">
            <StatBadge value="1:6" caption={"Coach to\nstudent ratio"} />
          </div>
        </div>
      </section>

      {/* Key facts */}
      <PageSection>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col gap-2.5 border-t border-ink pt-5">
              <dt className="text-caps text-tertiary">{f.label}</dt>
              <dd className="text-display-sm whitespace-nowrap">{f.value}</dd>
              <dd className="text-caps text-error">To confirm</dd>
            </div>
          ))}
        </dl>
      </PageSection>

      {/* What you'll learn */}
      <PageSection>
        <SectionHeader
          label="Curriculum"
          title={
            <>
              What you&apos;ll
              <br />
              learn.
            </>
          }
          aside={
            <p className="max-w-105 text-body-lg text-secondary">
              Each term focuses on a few clear goals. Coaches track progress and share a short report so students and
              parents can see the next step.
            </p>
          }
        />
        <NumberedCards items={outcomes} highlight={0} className="mt-14" />
      </PageSection>

      {/* A typical session */}
      <section className="px-4 pb-24 sm:px-8 lg:pb-30">
        <div className="grid gap-12 rounded-xl bg-surface px-6 py-10 sm:px-12 lg:grid-cols-[480px_minmax(0,1fr)] lg:gap-16 lg:py-16">
          <div className="flex flex-col gap-5">
            <SectionHeader
              label="Inside a session"
              title={
                <>
                  A typical
                  <br />
                  session.
                </>
              }
            />
            <p className="max-w-100 text-body text-secondary">
              Every session follows the same rhythm, so juniors know what to expect and get plenty of shuttle time. Timings
              are indicative.
            </p>
          </div>
          <ol>
            {sessionBlocks.map((b, i) => (
              <li key={b.title} className="flex gap-4 border-t border-line py-5 sm:gap-6">
                <span className="w-22 shrink-0 text-caps text-secondary sm:w-27.5">{b.time}</span>
                <Image
                  src={i === 0 ? "/icons/dot-lime-10.svg" : "/icons/dot-blue-10.svg"}
                  alt=""
                  width={10}
                  height={10}
                  className="mt-1 shrink-0 self-start"
                />
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-h4">{b.title}</h3>
                  <p className="text-body text-secondary">{b.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Schedule & fees */}
      <PageSection id="schedule">
        <SectionHeader
          label="Schedule & fees"
          title={
            <>
              Batches
              <br />
              &amp; fees.
            </>
          }
          aside={
            <p className="flex items-center gap-2 text-caps text-error">
              <Image src="/icons/ellipse.svg" alt="" width={6} height={6} />
              All timings and fees are placeholders — confirm before launch
            </p>
          }
        />
        {/* relative: keeps the absolutely-positioned sr-only header inside the scroll box on mobile. */}
        <div className="relative mt-10 overflow-x-auto rounded-lg bg-surface px-6 py-2 sm:px-8">
          <table className="w-full min-w-180 text-left">
            <thead>
              <tr className="border-b border-line text-caps text-tertiary">
                <th className="w-[26%] py-5.5 font-medium">Batch</th>
                <th className="w-[26%] py-5.5 font-medium">Days</th>
                <th className="w-[22%] py-5.5 font-medium">Time</th>
                <th className="py-5.5 font-medium">Fee per term</th>
                <th className="w-30 py-5.5">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {batches.map((b) => (
                <tr key={b.name} className="border-b border-line text-body text-secondary last:border-0">
                  <td className="py-5.5 text-h4 text-ink">{b.name}</td>
                  <td className="py-5.5">{b.days}</td>
                  <td className="py-5.5">{b.time}</td>
                  <td className="py-5.5">{b.fee}</td>
                  <td className="py-5.5 text-right">
                    <TextLink label="Enquire" href="/#book-trial" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageSection>

      {/* Coaches for this program */}
      <PageSection className="overflow-hidden">
        <SectionHeader
          label="Your coaches"
          title="Who'll teach you."
          size="display-md"
          aside={<TextLink label="Meet all coaches" href="/coaches" />}
        />
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {programCoaches.map((c) => (
            <li key={c.role}>
              <CoachCard
                name="[Coach name]"
                role={c.role}
                photo={c.photo}
                className={cn("mx-auto aspect-[436/440] max-w-109", c.tilt)}
              />
            </li>
          ))}
        </ul>
      </PageSection>

      {/* FAQ */}
      <PageSection className="grid gap-12 lg:grid-cols-[440px_minmax(0,1fr)] lg:gap-16">
        <div className="flex flex-col gap-4">
          <SectionHeader
            label="FAQ"
            title={
              <>
                Questions,
                <br />
                answered.
              </>
            }
          />
          <p className="max-w-90 text-body text-secondary">
            Can&apos;t find what you need? Message us on WhatsApp and we&apos;ll help.
          </p>
        </div>
        <Faq items={faqs} defaultOpen={0} className="max-w-none [&>div:first-child]:pt-0" />
      </PageSection>

      {/* Other programs */}
      <PageSection>
        <SectionHeader
          title="Other programs"
          size="display-md"
          aside={<TextLink label="All programs" href="/#programs" />}
        />
        <div className="mt-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {otherPrograms.map((p, i) => (
            <ProgramPanel
              key={p.slug}
              index={p.index}
              audience={p.audience}
              title={p.title}
              description={p.summary}
              image={p.image}
              href="/#book-trial"
              photoClassName={i === 1 ? "aspect-[416/312]" : "aspect-[416/336]"}
            />
          ))}
        </div>
      </PageSection>

      <CtaWrap headline={"Start Junior\nDevelopment."} />
    </>
  );
}
