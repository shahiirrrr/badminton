import Image from "next/image";
import { Parallax } from "@/components/motion/Motion";
import { cn } from "@/lib/cn";

export function SectionLabel({ label, className }: { label: string; className?: string }) {
  return (
    <p className={cn("flex gap-2 text-caps whitespace-nowrap", className)}>
      <span className="text-tertiary">/</span>
      <span className="text-ink">{label}</span>
    </p>
  );
}

export function Tag({ label, showDot = true }: { label: string; showDot?: boolean }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line px-3 py-2 text-caps text-ink">
      {showDot && <Image src="/icons/dot.svg" alt="" width={6} height={6} />}
      {label}
    </span>
  );
}

type StatBadgeProps = {
  value: string;
  caption: string;
  /** Keep on until the academy verifies the figure. */
  placeholder?: boolean;
};

export function StatBadge({ value, caption, placeholder = true }: StatBadgeProps) {
  return (
    <Parallax className="flex size-36 shrink-0 flex-col justify-center gap-2 rounded-full bg-muted py-6 pr-6 pl-7">
      <p className="text-stat text-ink">{value}</p>
      <p className="text-[9px] leading-[1.4] font-medium tracking-[0.08em] whitespace-pre-line text-secondary uppercase">
        {caption}
      </p>
      {placeholder && (
        <p className="flex items-center gap-1 text-[8px] leading-[1.4] font-medium tracking-[0.08em] text-error uppercase">
          <Image src="/icons/ellipse.svg" alt="" width={5} height={5} />
          Placeholder
        </p>
      )}
    </Parallax>
  );
}
