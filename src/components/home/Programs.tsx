import Image from "next/image";
import { Reveal, RiseText, Stagger, StaggerItem } from "@/components/motion/Motion";
import { SectionLabel } from "@/components/ui/Badges";
import { Button } from "@/components/ui/Button";
import { ProgramPanel } from "@/components/ui/ProgramPanel";
import { TextLink } from "@/components/ui/TextLink";
import { programs } from "@/data/programs";
import { cn } from "@/lib/cn";

// Staggered editorial layout from the design: widths 520/340/388, middle panel drops 140px.
const layout = [
  { col: "lg:col-span-5", photo: "aspect-[520/450]" },
  { col: "lg:col-span-3 lg:mt-35", photo: "aspect-[340/330]" },
  { col: "lg:col-span-4", photo: "aspect-[388/400]" },
];

export function Programs() {
  const [beginners, junior, advanced, privateCoaching] = programs;

  return (
    <section id="programs" className="scroll-mt-6 px-4 py-18 sm:px-8 lg:px-16">
      <Reveal>
        <SectionLabel label="Programs" />
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:justify-between">
          <h2 className="text-display">
            <RiseText lines={["Every level.", "One pathway."]} />
          </h2>
          <div className="flex max-w-105 flex-col items-start gap-6 lg:mt-2.5">
            <p className="text-body-lg text-secondary">
              Four ways to learn, from your first rally to competitive singles and doubles. Not sure where you fit? Book
              a trial and we&apos;ll place you in the right group.
            </p>
            <TextLink label="Find your level" href="/#students" />
          </div>
        </div>
      </Reveal>

      <Stagger gap={0.15} className="mt-16 grid gap-12 sm:grid-cols-2 lg:mt-30 lg:grid-cols-12 lg:gap-8">
        {[beginners, junior, advanced].map((p, i) => (
          <StaggerItem key={p.slug} className={cn(layout[i].col, i === 0 && "sm:col-span-2 lg:col-span-5")}>
            <ProgramPanel
              index={p.index}
              audience={p.audience}
              title={p.title}
              description={p.summary}
              image={p.image}
              href={p.slug === "junior-development" ? `/programs/${p.slug}` : "/#book-trial"}
              photoClassName={layout[i].photo}
            />
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-16 lg:mt-10">
        <article className="grid overflow-hidden rounded-xl bg-court-deep text-white lg:grid-cols-[720fr_592fr]">
          <div className="relative aspect-[720/420] lg:aspect-auto">
            <Image
              src={privateCoaching.image}
              alt="Coach guiding a player's swing in a private lesson"
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-5 p-6 sm:p-10 lg:py-12 lg:pr-12 lg:pl-16">
            <p className="flex gap-4 text-caps">
              <span>{privateCoaching.index}</span>
              <span className="opacity-70">{privateCoaching.audience}</span>
            </p>
            <h3 className="text-display-md">
              Private
              <br />
              coaching
            </h3>
            <p className="max-w-105 text-body opacity-80">{privateCoaching.summary}</p>
            <Button
              label="Enquire about private sessions"
              variant="onImage"
              href="/#book-trial"
              className="max-w-full"
            />
          </div>
        </article>
      </Reveal>
    </section>
  );
}
