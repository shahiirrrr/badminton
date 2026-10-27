import Image from "next/image";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type IconButtonProps = {
  direction: "prev" | "next";
  variant?: "outline" | "solid" | "onImage";
} & Omit<ComponentProps<"button">, "children">;

const variants = {
  outline: "border border-line hover:border-ink",
  solid: "bg-ink hover:bg-court-blue",
  onImage: "border border-white/60 bg-white/15 hover:bg-white/30",
};

export function IconButton({ direction, variant = "outline", className, ...rest }: IconButtonProps) {
  const light = variant !== "outline";
  const icon = `/icons/chev-${direction === "prev" ? "l" : "r"}${light ? "-white" : ""}.svg`;
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous" : "Next"}
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-full transition-colors duration-250 outline-none focus-visible:ring-3 focus-visible:ring-court-blue",
        variants[variant],
        className,
      )}
      {...rest}
    >
      <Image src={icon} alt="" width={18} height={18} />
    </button>
  );
}
