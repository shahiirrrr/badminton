import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "onImage";

type ButtonProps = {
  label: string;
  variant?: Variant;
  href?: string;
} & Omit<ComponentProps<"button">, "children">;

// --circle: icon circle fill. --dark: 1 shows the ink arrow, 0 the white one.
// Hover inverts each variant (Figma Button 3:69).
const variants: Record<Variant, string> = {
  primary: "bg-ink text-white [--circle:var(--color-lime)] [--dark:1] hov:bg-court-blue",
  secondary:
    "border border-ink text-ink [--circle:var(--color-ink)] [--dark:0] hov:bg-ink hov:text-white hov:[--circle:var(--color-lime)] hov:[--dark:1]",
  onImage:
    "border border-white/60 bg-white/12 text-white [--circle:var(--color-surface)] [--dark:1] hov:bg-white hov:text-ink hov:[--circle:var(--color-ink)] hov:[--dark:0]",
};

export function Button({ label, variant = "primary", href, disabled, className, ...rest }: ButtonProps) {
  const classes = cn(
    "group inline-flex shrink-0 items-center gap-4 rounded-full py-1.5 pr-1.5 pl-6 text-button whitespace-nowrap",
    "transition-colors duration-250 ease-out outline-none",
    "focus-visible:ring-3 focus-visible:ring-court-blue focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    variants[variant],
    className,
  );

  const content = (
    <>
      {label}
      <span className="flex size-9 items-center justify-center rounded-full bg-(--circle) transition-colors duration-250 ease-out">
        <span className="relative size-4 transition-transform duration-250 ease-out group-hov:rotate-45">
          <Image
            src="/icons/arrow-ur.svg"
            alt=""
            width={16}
            height={16}
            className="absolute inset-0 opacity-(--dark)"
          />
          <Image
            src="/icons/arrow-ur-white.svg"
            alt=""
            width={16}
            height={16}
            className="absolute inset-0 opacity-[calc(1-var(--dark))]"
          />
        </span>
      </span>
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button type="button" disabled={disabled} className={classes} {...rest}>
      {content}
    </button>
  );
}
