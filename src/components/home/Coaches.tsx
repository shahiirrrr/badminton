import { RiseText } from "@/components/motion/Motion";
import { SectionLabel } from "@/components/ui/Badges";
import { TextLink } from "@/components/ui/TextLink";
import { coaches } from "@/data/coaches";
import { CoachCarousel } from "./CoachCarousel";

export function Coaches() {
  return (
    <section className="overflow-hidden px-4 py-18 sm:px-8 lg:px-16">
      <div className="flex items-start justify-between gap-6">
        <SectionLabel label="Your coaches" />
        <TextLink label="Meet all coaches" href="/coaches" />
      </div>
      {/* CoachCarousel renders stage, details and progress as direct grid children (they share state). */}
      <div className="mt-12 grid items-center lg:mt-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <h2 className="text-display-xl lg:relative lg:z-20 lg:-mr-40">
          <RiseText lines={["Learn from"]} className="text-tertiary" />
          <RiseText lines={["the best."]} delay={0.12} />
        </h2>
        <CoachCarousel coaches={coaches} />
      </div>
    </section>
  );
}
