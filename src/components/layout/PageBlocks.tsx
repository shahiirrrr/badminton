import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Motion";
import { SectionLabel } from "@/components/ui/Badges";
import { cn } from "@/lib/cn";
import { CtaBand } from "./CtaBand";

/** "Home / Programs / Current" — last crumb is the current page. */
export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-caps text-tertiary">
      <ol className="flex flex-wrap gap-x-3">
        {items.map((item, i) => (
          <li key={item.label} className="flex gap-3">
            {i > 0 && <span aria-hidden>/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Section label + display title on the left, optional aside (copy, link, note) bottom-aligned on the right. */
export function SectionHeader({
  label,
  title,
  aside,
  size = "display",
  className,
}: {
  label?: string;
  title: ReactNode;
  aside?: ReactNode;
  size?: "display" | "display-md";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between", className)}>
      <div className="flex flex-col gap-4">
        {label && <SectionLabel label={label} />}
        <h2 className={size === "display" ? "text-display" : "text-display-md"}>{title}</h2>
      </div>
      {aside}
    </div>
  );
}

/** 01/02/03 columns with a heavy top rule (home pillars, coaching principles). */
export function NumberedPoints({ items, className }: { items: { title: string; body: string }[]; className?: string }) {
  return (
    <Stagger as="ul" className={cn("grid gap-8 md:grid-cols-3", className)}>
      {items.map((p, i) => (
        <StaggerItem as="li" key={p.title} className="flex flex-col gap-3 border-t border-ink pt-6">
          <p className="flex items-start gap-4">
            <span className="text-caps text-tertiary">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-h4 text-ink">{p.title}</span>
          </p>
          <p className="text-body text-secondary">{p.body}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

/** Numbered white cards; the `highlight` card is court-blue (program outcomes, booking steps). */
export function NumberedCards({
  items,
  highlight,
  className,
}: {
  items: { title: string; body: string }[];
  highlight: number;
  className?: string;
}) {
  return (
    <Stagger as="ol" className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((o, i) => {
        const hl = i === highlight;
        return (
          <StaggerItem
            as="li"
            key={o.title}
            className={cn(
              "flex flex-col gap-3 rounded-lg px-7 pt-7 pb-8",
              hl ? "bg-court-blue text-white" : "bg-surface",
            )}
          >
            <span className={cn("text-caps", hl ? "text-lime" : "text-tertiary")}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-10 text-h3">{o.title}</h3>
            <p className={cn("text-body", hl ? "opacity-80" : "text-secondary")}>{o.body}</p>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

/** Inner pages: page gutter wrapper. */
export function PageSection({ id, className, children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-6 px-4 pb-24 sm:px-8 lg:px-16 lg:pb-30">
      <Reveal className={className}>{children}</Reveal>
    </section>
  );
}

/** Closing CTA band used at the end of every inner page. */
export function CtaWrap({ headline }: { headline?: string }) {
  return (
    <Reveal className="px-4 pb-12 sm:px-8">
      <CtaBand headline={headline} />
    </Reveal>
  );
}
