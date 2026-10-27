import Image from "next/image";
import { cn } from "@/lib/cn";

type ImagePlaceholderProps = {
  /** Art direction for the photo that will replace this. */
  brief?: string;
  showLabel?: boolean;
  className?: string;
};

// ponytail: stand-in for licensed photography — swap for <Image fill className="object-cover" /> once photos land.
export function ImagePlaceholder({
  brief = "Brief: subject, crop & mood",
  showLabel = true,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-[linear-gradient(143deg,#0e3f7a_14%,#1f5fa8_54%,#4d94d9_86%)]",
        className,
      )}
    >
      <Image src="/images/court-lines.svg" alt="" fill className="pointer-events-none" />
      {showLabel && (
        <div className="absolute bottom-5 left-5 flex flex-col items-start gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-white/16 py-1.5 pr-2.5 pl-2 text-[9px] leading-[1.4] font-medium tracking-[0.08em] text-white uppercase">
            <Image src="/icons/image.svg" alt="" width={14} height={14} />
            Image placeholder
          </span>
          <p className="max-w-65 text-body-sm text-white/85">{brief}</p>
        </div>
      )}
    </div>
  );
}
