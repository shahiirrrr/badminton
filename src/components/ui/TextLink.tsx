import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type TextLinkProps = {
  label: string;
  href: string;
  tone?: "ink" | "inverse";
  className?: string;
};

export function TextLink({ label, href, tone = "ink", className }: TextLinkProps) {
  const inverse = tone === "inverse";
  return (
    <Link href={href} className={cn("group inline-flex shrink-0 items-center gap-3", className)}>
      <span className={cn("relative pb-1 text-button whitespace-nowrap", inverse ? "text-white" : "text-ink")}>
        {label}
        {/* Static underline, plus one that grows from the left on hover. */}
        <span className={cn("absolute inset-x-0 bottom-0 h-px", inverse ? "bg-white" : "bg-ink")} />
        <span
          className={cn(
            "absolute inset-x-0 -bottom-px h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
            inverse ? "bg-white" : "bg-ink",
          )}
        />
      </span>
      <Image
        src={inverse ? "/icons/arrow-r-white.svg" : "/icons/arrow-r.svg"}
        alt=""
        width={14}
        height={14}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}
