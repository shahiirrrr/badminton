import Image from "next/image";
import { NumberedPoints } from "@/components/layout/PageBlocks";
import { Parallax, Reveal, RiseText } from "@/components/motion/Motion";
import { SectionLabel, StatBadge } from "@/components/ui/Badges";
import { TextLink } from "@/components/ui/TextLink";

const pillars = [
  { title: "Technique", body: "You'll build clean, repeatable strokes through structured, progressive drills." },
  { title: "Mindset", body: "You'll learn focus and composure under pressure — trained as deliberately as strokes." },
  { title: "Progression", body: "You'll always know your level and your next step, with regular progress reviews." },
];

export function Intro() {
  return (
    <section id="coaching" className="scroll-mt-6 px-4 pt-18 pb-16 sm:px-8 lg:px-16 lg:pb-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-8">
        <Reveal className="flex flex-col">
          <SectionLabel label="Why learn with us" />
          <div className="mt-6 flex gap-4 lg:mt-6">
            <StatBadge value="100+" caption={"Students taught\nannually"} />
            <div className="lg:hidden">
              <StatBadge value="5+" caption={"Years of\nexperience"} />
            </div>
          </div>
          <h2 className="mt-10 text-section lg:mt-13">
            <RiseText lines={["Skill meets", "mentality."]} />
          </h2>
          <p className="mt-10 max-w-95 text-body-lg text-secondary lg:mt-12">
            We teach complete badminton players — clean technique, quick footwork and smart match play — whether
            you&apos;re picking up a racket for the first time or chasing your first district tournament.
          </p>
          <TextLink label="How we teach" href="/#programs" className="mt-6 self-start" />
        </Reveal>

        {/* Rotated photo pair; the secondary card overlaps the primary's bottom-right corner. */}
        <Reveal delay={0.15} className="relative mx-auto w-full max-w-160 lg:mx-0">
          <div className="absolute -top-6 right-0 z-10 hidden lg:block">
            <StatBadge value="5+" caption={"Years of\nexperience"} />
          </div>
          <Parallax range={30} className="relative mt-6 ml-[3%] w-[min(440px,78%)]">
            <div className="relative aspect-[440/580] rotate-7 overflow-hidden rounded-xl">
              <Image
                src="/images/net-shot.jpg"
                alt="Player playing a net shot on an indoor court"
                fill
                sizes="(min-width: 1024px) 440px, 78vw"
                className="object-cover"
              />
              <p className="absolute top-7 left-7 text-caps text-white">
                Professional coaching
                <br />
                Real progress
              </p>
            </div>
          </Parallax>
          <Parallax range={70} className="absolute right-0 bottom-[-6%] w-[min(260px,44%)]">
            <div className="relative aspect-[260/320] -rotate-5 overflow-hidden rounded-lg shadow-[0_24px_24px_rgb(13_26_51/0.12)]">
              <Image
                src="/images/grip.jpg"
                alt="Coach adjusting a young player's grip"
                fill
                sizes="(min-width: 1024px) 260px, 44vw"
                className="object-cover"
              />
            </div>
          </Parallax>
        </Reveal>
      </div>

      <NumberedPoints items={pillars} className="mt-24 lg:mt-30" />
    </section>
  );
}
