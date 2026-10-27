import type { Metadata } from "next";
import { Breadcrumb, CtaWrap, NumberedPoints, PageSection, SectionHeader } from "@/components/layout/PageBlocks";
import { Reveal, RiseText } from "@/components/motion/Motion";
import { StatBadge } from "@/components/ui/Badges";
import { CoachDirectory, type CoachProfile } from "./CoachDirectory";

export const metadata: Metadata = {
  title: "Coaches",
  description: "Meet the coaches who teach every level, from a child's first lesson to tournament preparation.",
};

// [Bracketed] / "confirm" values are placeholders from the design.
const profiles: CoachProfile[] = [
  {
    role: "Head Coach",
    focus: "Performance & Competition",
    qualifications: "[BAI / NIS certification] — confirm",
    languages: "Malayalam, English — confirm",
    teaches: ["Advanced", "Private"],
    photo: "/images/coach-head.jpg",
  },
  {
    role: "Junior Development Coach",
    focus: "Juniors (ages [6–17])",
    qualifications: "[BAI / NIS certification] — confirm",
    languages: "Malayalam, English — confirm",
    teaches: ["Juniors", "Beginners"],
    photo: "/images/coach-junior.jpg",
  },
  {
    role: "Fitness & Movement Coach",
    focus: "Footwork, agility, conditioning",
    qualifications: "[Sports fitness certification] — confirm",
    languages: "Malayalam, English, Hindi — confirm",
    teaches: ["All programs"],
    photo: "/images/coach-fitness.jpg",
  },
  {
    role: "Beginners Coach",
    focus: "First-time players, adults & kids",
    qualifications: "[BAI / NIS certification] — confirm",
    languages: "Malayalam, English — confirm",
    teaches: ["Beginners"],
    photo: "/images/coach-beginners.jpg",
  },
];

const principles = [
  {
    title: "Clear goals",
    body: "Every student has a few simple goals each term, so progress is visible and motivating.",
  },
  {
    title: "Positive, honest feedback",
    body: "Encouragement first, with specific fixes students can practise straight away.",
  },
  {
    title: "Safe, age-appropriate training",
    body: "Sessions adapted to age and ability, with warm-ups and injury-aware conditioning.",
  },
];

export default function CoachesPage() {
  return (
    <>
      <section className="px-4 pt-6 pb-12 sm:px-8 lg:px-16">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Coaches" }]} />
        <div className="mt-10 flex flex-col gap-8 lg:mt-14 lg:flex-row lg:justify-between">
          <h1 className="text-section">
            <RiseText lines={["The people", "who teach you."]} />
          </h1>
          <Reveal delay={0.3} className="flex flex-col gap-10 lg:max-w-105 lg:items-end">
            <p className="text-body-lg text-secondary">
              Our coaches teach every level, from a child&apos;s first lesson to tournament preparation. Each one is
              matched to the program they know best.
            </p>
            <StatBadge value="[X]" caption={"Coaches on\nthe team"} />
          </Reveal>
        </div>
      </section>

      <PageSection>
        <CoachDirectory profiles={profiles} />
      </PageSection>

      <PageSection>
        <SectionHeader
          label="Our approach"
          title={
            <>
              How our coaches
              <br />
              teach.
            </>
          }
        />
        <NumberedPoints items={principles} className="mt-12" />
      </PageSection>

      <CtaWrap headline={"Train with\nour coaches."} />
    </>
  );
}
