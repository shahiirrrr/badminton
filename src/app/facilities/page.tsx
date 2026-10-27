import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb, CtaWrap, PageSection, SectionHeader } from "@/components/layout/PageBlocks";
import { Reveal, RiseText, Stagger, StaggerItem } from "@/components/motion/Motion";
import { SectionLabel, Tag } from "@/components/ui/Badges";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/cn";
import { HeroGallery, type Slide } from "./HeroGallery";

export const metadata: Metadata = {
  title: "Facilities",
  description: "Fully indoor badminton courts, so training carries on right through the Kerala monsoon.",
};

// Everything on this page is a placeholder until confirmed by the academy (per design).
const slides: Slide[] = [
  {
    image: "/images/facility-hall.jpg",
    title: "Indoor courts",
    caption: "[Wooden / synthetic mat]  ·  [No.] courts  ·  Non-glare lighting — TBC",
  },
  {
    image: "/images/facility-fitness.jpg",
    title: "Fitness & practice area",
    caption: "Footwork, fitness & warm-up — confirm",
  },
];

const courts = [
  {
    title: "Indoor courts",
    body: "[Court mats on a wooden floor — confirm], used for all group sessions and match play.",
    image: "/images/facility-rally.jpg",
    specs: [
      ["Surface", "[Wooden floor / synthetic mats] — TBC"],
      ["Number of courts", "[X] — TBC"],
      ["Lighting", "[Non-glare LED lighting] — TBC"],
      ["Used for", "All programs"],
    ],
  },
  {
    title: "Fitness & practice area",
    tag: "Only if available",
    body: "Space for footwork, agility and warm-ups — include only if the academy has one.",
    image: "/images/facility-fitness.jpg",
    specs: [
      ["Surface", "[Surface] — TBC"],
      ["Size", "[X] — TBC"],
      ["Climate", "[Ventilation / AC] — TBC"],
      ["Used for", "[Programs] — TBC"],
    ],
  },
];

const amenities = [
  { icon: "shower", title: "Changing rooms", body: "Separate changing areas with lockers." },
  { icon: "car", title: "Parking", body: "On-site parking for parents and players." },
  { icon: "bag", title: "Racket stringing & shop", body: "Shuttles, grips and racket restringing." },
  { icon: "seat", title: "Viewing area", body: "Shaded seating for parents to watch." },
  { icon: "drop", title: "Drinking water", body: "Filtered water stations courtside." },
  { icon: "aid", title: "First aid", body: "First-aid kit and trained staff on site." },
];

const hours = [
  ["Mon – Fri", "[6:00 – 9:00 am · 4:00 – 9:00 pm]"],
  ["Saturday", "[6:00 am – 12:00 pm]"],
  ["Sunday", "[Closed / by appointment]"],
];

function Photo({ src, className }: { src: string; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <Image src={src} alt="" fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
    </div>
  );
}

function PlaceholderNote({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-2 text-caps text-error">
      <Image src="/icons/ellipse.svg" alt="" width={6} height={6} />
      {children}
    </p>
  );
}

export default function FacilitiesPage() {
  return (
    <>
      <section className="px-4 pt-6 pb-16 sm:px-8 lg:px-16 lg:pb-24">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Facilities" }]} />
        <div className="mt-10 flex flex-col gap-8 lg:mt-14 lg:flex-row lg:justify-between">
          <h1 className="text-section">
            <RiseText lines={["Find your", "court."]} />
          </h1>
          <Reveal delay={0.3} className="flex flex-col items-start gap-8 lg:mt-2 lg:max-w-105">
            <p className="text-body-lg text-secondary">
              Fully indoor courts, so training carries on right through the Kerala monsoon. Everything on this page is
              a placeholder until confirmed by the academy.
            </p>
            <Button label="Get directions" variant="secondary" href="#visit" />
          </Reveal>
        </div>
      </section>

      <HeroGallery slides={slides} />

      <PageSection>
        <SectionHeader
          label="Courts"
          title={
            <>
              Where you&apos;ll
              <br />
              play.
            </>
          }
          className="pb-12"
        />
        {courts.map((c, i) => (
          <article
            key={c.title}
            className="grid items-center gap-10 border-t border-line py-12 lg:grid-cols-[640fr_608fr] lg:gap-16"
          >
            <Photo src={c.image} className={cn("aspect-[640/460] w-full", i % 2 === 1 && "lg:order-2")} />
            <div className="flex flex-col items-start gap-5">
              <div className="flex items-center gap-3">
                <span className="text-caps text-tertiary">{String(i + 1).padStart(2, "0")}</span>
                {c.tag && <Tag label={c.tag} />}
              </div>
              <h3 className="text-display-md">{c.title}</h3>
              <p className="text-body-lg text-secondary">{c.body}</p>
              <dl className="w-full">
                {c.specs.map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-b border-line py-3.5">
                    <dt className="w-32 shrink-0 text-caps text-tertiary sm:w-45">{k}</dt>
                    <dd className="text-body">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </PageSection>

      <PageSection>
        <SectionHeader
          label="Amenities"
          title={
            <>
              Everything
              <br />
              else you need.
            </>
          }
          aside={<PlaceholderNote>Confirm each amenity before launch</PlaceholderNote>}
        />
        <Stagger as="ul" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a) => (
            <StaggerItem as="li" key={a.title} className="flex flex-col gap-3 rounded-lg bg-surface p-7">
              <div className="mb-4 flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-full bg-canvas">
                  <Image src={`/icons/${a.icon}.svg`} alt="" width={22} height={22} />
                </span>
                <span className="text-caps text-error">TBC</span>
              </div>
              <h3 className="text-h4">{a.title}</h3>
              <p className="text-body text-secondary">{a.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </PageSection>

      <PageSection>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-display-md">Around the academy</h2>
          <p className="text-caps text-tertiary">Gallery — 4 photos</p>
        </div>
        {/* Mosaic: tall left tile, two squares + one wide tile on the right. */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-[640fr_316fr_308fr] lg:grid-rows-[348px_348px]">
          <Photo
            src="/images/gallery-huddle.jpg"
            className="aspect-[640/720] sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:aspect-auto"
          />
          <Photo src="/images/gallery-basket.jpg" className="aspect-square lg:aspect-auto" />
          <Photo src="/images/gallery-net.jpg" className="aspect-square lg:aspect-auto" />
          <Photo src="/images/gallery-evening.jpg" className="aspect-[648/348] sm:col-span-2 lg:aspect-auto" />
        </div>
      </PageSection>

      <PageSection id="visit" className="grid gap-12 lg:grid-cols-[760fr_504fr]">
        {/* ponytail: static stand-in for the Google Maps embed — swap in an <iframe> once the address is confirmed. */}
        <div className="relative aspect-[760/520] overflow-hidden rounded-xl bg-muted">
          <Image src="/images/map-texture.svg" alt="" fill className="pointer-events-none" />
          <span className="absolute top-1/2 left-1/2 flex size-14 -translate-1/2 items-center justify-center rounded-full bg-ink">
            <Image src="/icons/pin.svg" alt="" width={24} height={24} />
          </span>
          <span className="absolute top-6 left-6 rounded-full border border-line bg-surface px-3 py-2 text-caps">
            Map embed placeholder
          </span>
        </div>
        <div className="flex flex-col items-start gap-6">
          <SectionLabel label="Visit us" />
          <h2 className="text-display">Find us.</h2>
          <address className="text-body-lg text-ink not-italic">
            [Academy address line 1]
            <br />
            [Area, City, Kerala, PIN]
          </address>
          <dl className="w-full">
            {hours.map(([day, time]) => (
              <div key={day} className="flex justify-between gap-4 border-b border-line py-3.5">
                <dt className="text-caps text-tertiary">{day}</dt>
                <dd className="text-right text-body">{time}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap items-center gap-4">
            {/* ponytail: real directions/phone links need the confirmed address and number. */}
            <Button label="Get directions" href="#" />
            <TextLink label="Call +91 [00000 00000]" href="#" />
          </div>
        </div>
      </PageSection>

      <CtaWrap headline={"Come see\nthe courts."} />
    </>
  );
}
