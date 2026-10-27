import Image from "next/image";
import Link from "next/link";
import { Reveal, RiseText, Stagger, StaggerItem } from "@/components/motion/Motion";
import { SectionLabel, Tag } from "@/components/ui/Badges";
import { TextLink } from "@/components/ui/TextLink";

const amenities = [
  "Non-glare lighting · TBC",
  "Changing rooms · TBC",
  "Parking · TBC",
  "Pro shop · TBC",
  "Seating area · TBC",
];

function CourtCard({
  image,
  title,
  caption,
  className,
}: {
  image: string;
  title: string;
  caption: string;
  className?: string;
}) {
  return (
    <Link href="/facilities" className={`group relative block overflow-hidden rounded-lg ${className ?? ""}`}>
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 1024px) 540px, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-b from-[rgb(8_31_66/0)] to-[rgb(8_31_66/0.7)]" />
      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 text-white">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-caps">{title}</h3>
          <p className="text-body-sm whitespace-pre-wrap opacity-80">{caption}</p>
        </div>
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/15 transition-colors group-hover:bg-white/30">
          <Image src="/icons/chev-r-white.svg" alt="" width={18} height={18} />
        </span>
      </div>
    </Link>
  );
}

export function Facilities() {
  return (
    <section className="px-4 py-12 sm:px-8 lg:py-0">
      <Reveal className="grid gap-12 rounded-xl bg-surface p-6 sm:p-12 lg:grid-cols-[minmax(0,420fr)_minmax(0,860fr)] lg:gap-14 lg:py-14">
        <div className="flex flex-col items-start">
          <SectionLabel label="Facilities" />
          <h2 className="mt-6 text-display">
            <RiseText lines={["Find your", "court."]} delay={0.2} />
          </h2>
          <p className="mt-10 max-w-90 text-body text-secondary lg:mt-14">
            Fully indoor courts, so training carries on right through the monsoon. Details below are placeholders until
            confirmed by the academy.
          </p>
          <TextLink label="Explore facilities" href="/facilities" className="mt-6" />
          <p className="mt-14 text-caps text-tertiary">Amenities — to confirm</p>
          <Stagger as="ul" gap={0.06} className="mt-3 flex max-w-95 flex-wrap gap-2">
            {amenities.map((a) => (
              <StaggerItem as="li" key={a}>
                <Tag label={a} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Stagger gap={0.15} className="grid gap-6 sm:grid-cols-[540fr_296fr] sm:items-end lg:pt-16">
          <StaggerItem>
            <CourtCard
              image="/images/facility-hall.jpg"
              title="Indoor courts"
              caption={"[Wooden / synthetic mat]  /  [No.] courts — TBC"}
              className="aspect-[540/600]"
            />
          </StaggerItem>
          <StaggerItem>
            <CourtCard
              image="/images/facility-fitness.jpg"
              title="Fitness & practice area"
              caption="Footwork, fitness & warm-up — confirm"
              className="aspect-[540/600] sm:aspect-[296/520]"
            />
          </StaggerItem>
        </Stagger>
      </Reveal>
    </section>
  );
}
