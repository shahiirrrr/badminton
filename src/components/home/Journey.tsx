import * as motion from "motion/react-client";
import Image from "next/image";
import { Reveal, RiseText, Stagger, StaggerItem } from "@/components/motion/Motion";
import { ease } from "@/components/motion/ease";
import { SectionLabel, Tag } from "@/components/ui/Badges";
import { TextLink } from "@/components/ui/TextLink";

const levels = [
  {
    title: "Foundation",
    subtitle: "First-time players",
    items: ["Grips, ready position and footwork", "Rallying with control", "Basic scoring and court etiquette"],
  },
  {
    title: "Development",
    subtitle: "Building consistency",
    items: ["Clean clears, drops and serves", "Moving and recovering well", "First practice matches"],
  },
  {
    title: "Performance",
    subtitle: "Ready to compete",
    items: ["Shot selection and patterns of play", "Speed, agility and court coverage", "Handling pressure points"],
  },
  {
    title: "Competition",
    subtitle: "Tournament players",
    items: ["Match plans and opponent reading", "Mental routines between points", "District & state tournament preparation"],
  },
];

// Example data shown in the design — not a real student.
const skills = [
  { name: "Smash", value: 72 },
  { name: "Backhand", value: 58 },
  { name: "Serve", value: 46 },
  { name: "Footwork", value: 66 },
  { name: "Match play", value: 38 },
];

export function Journey() {
  return (
    <section id="students" className="scroll-mt-6 px-4 py-18 sm:px-8 lg:px-16">
      <Reveal>
        <SectionLabel label="Your journey" />
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:justify-between">
          <h2 className="text-section">
            <RiseText lines={["From first rally", "to match day."]} />
          </h2>
          <div className="flex max-w-105 flex-col items-start gap-6 lg:mt-2.5">
            <p className="text-body-lg text-secondary">
              Every student follows a clear pathway. We assess your level on day one, set goals together and review
              progress regularly — so you always know what comes next.
            </p>
            <TextLink label="How assessment works" href="/#book-trial" />
          </div>
        </div>
      </Reveal>

      <Stagger
        as="ol"
        gap={0.12}
        className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:mt-25 lg:grid-cols-4 lg:gap-8 lg:pt-12"
      >
        {/* Desktop track: full line with the first quarter highlighted. */}
        {/* Track draws left→right, then the progress segment fills. */}
        <motion.span
          aria-hidden
          className="absolute inset-x-0 top-2 hidden h-px origin-left bg-ink lg:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease }}
        />
        <motion.span
          aria-hidden
          className="absolute top-[7px] left-0 hidden h-0.75 w-1/4 origin-left bg-court-blue lg:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.9 }}
        />
        {levels.map((level, i) => (
          <StaggerItem as="li" key={level.title} className="relative flex flex-col gap-3">
            <Image
              src={i === 0 ? "/icons/step-dot-active.svg" : "/icons/step-dot.svg"}
              alt=""
              width={16}
              height={16}
              className="lg:absolute lg:-top-12"
            />
            <div className="flex items-center gap-3">
              <span className="text-caps text-tertiary">Level {String(i + 1).padStart(2, "0")}</span>
              {i === 0 && <Tag label="Start here" />}
            </div>
            <h3 className="text-h3">{level.title}</h3>
            <p className="text-caps text-secondary">{level.subtitle}</p>
            <ul className="pt-2">
              {level.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 border-t border-line py-2.5 text-body">
                  <Image src="/icons/bullet-blue.svg" alt="" width={5} height={5} />
                  {item}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>

      <Stagger gap={0.15} className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-2">
        <StaggerItem className="grid">
          <article className="flex flex-col gap-5 rounded-xl bg-surface px-6 py-8 sm:px-10 sm:py-9">
            <header className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-h4">Progress report</h3>
                <p className="text-body-sm whitespace-pre-wrap text-secondary">
                  {"[Student name]  ·  Level 02 Development"}
                </p>
              </div>
              <Tag label="Example data" showDot={false} />
            </header>
            {skills.map((s) => (
              <div key={s.name} className="flex items-center gap-4">
                <span className="w-24 shrink-0 text-caps text-ink sm:w-27.5">{s.name}</span>
                <span
                  role="meter"
                  aria-label={s.name}
                  aria-valuenow={s.value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="h-1.5 flex-1 overflow-hidden rounded-[3px] bg-muted"
                >
                  <motion.span
                    className="block h-full rounded-[3px] bg-court-blue"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease, delay: 0.3 }}
                  />
                </span>
                <span className="w-8 text-right text-caps text-secondary">{s.value}%</span>
              </div>
            ))}
            <p className="text-body-sm text-tertiary">Reviewed with your coach each term — frequency to confirm.</p>
          </article>
        </StaggerItem>

        <StaggerItem className="grid">
          <figure className="flex min-h-83 flex-col justify-between gap-8 rounded-xl bg-court-blue p-6 text-white sm:p-10">
            <span aria-hidden className="text-[96px] leading-[0.6] font-light tracking-[-0.05em] text-lime">
              “
            </span>
            <blockquote className="text-[clamp(24px,2.5vw,32px)] leading-none font-light tracking-[-0.025em]">
              [Student or parent testimonial — placeholder. Replace with a real quote, used with permission.]
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <Image src="/icons/avatar-placeholder.svg" alt="" width={40} height={40} />
              <span className="flex flex-col gap-0.5">
                <span className="text-h4">[Name]</span>
                <span className="text-body-sm opacity-75">Parent of a junior student</span>
              </span>
            </figcaption>
          </figure>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
