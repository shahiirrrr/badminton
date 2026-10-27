import Link from "next/link";
import { cn } from "@/lib/cn";

/** "LOGO" placeholder, per Figma — swap for the academy's logo once confirmed. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="[Academy name] home"
      className={cn("leading-none tracking-[0.02em] whitespace-nowrap uppercase", className)}
    >
      LOGO
    </Link>
  );
}
