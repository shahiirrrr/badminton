import * as motion from "motion/react-client";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/motion/Motion";
import { ease } from "@/components/motion/ease";
import { navLinks } from "./nav-links";

// [Bracketed] values are placeholders from the design, pending real academy details.
const columns = [
  { title: "Contact", items: [{ label: "+91 [00000 00000]" }, { label: "[hello@youracademy.in]" }] },
  { title: "Location", items: [{ label: "[Academy address]" }, { label: "[City, Kerala]" }] },
  {
    title: "Social",
    items: [
      { label: "Instagram", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Facebook", href: "#" },
    ],
  },
  { title: "Navigate", items: navLinks },
];

export function Footer() {
  return (
    <footer className="@container flex w-full flex-col gap-12 bg-canvas px-4 pt-12 pb-10 sm:px-8 lg:px-16">
      <Stagger className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
        {columns.map((col) => (
          <StaggerItem key={col.title} className="flex flex-col gap-2.5">
            <h2 className="text-caps text-tertiary">{col.title}</h2>
            <ul className="flex flex-col gap-2.5 text-body text-ink">
              {col.items.map((item) => (
                <li key={item.label}>
                  {"href" in item && item.href ? (
                    <Link href={item.href} className="hover:text-court-blue">
                      {item.label}
                    </Link>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Oversized wordmark, centred; pr offsets the trailing negative letter-spacing so the ink sits dead centre. */}
      <p
        aria-hidden
        className="overflow-hidden pr-[0.05em] pb-[0.04em] text-center text-[min(15.5cqi,209px)] leading-[0.88] font-light tracking-[-0.05em] whitespace-nowrap uppercase"
      >
        <motion.span
          className="block"
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease }}
        >
          LOGO
        </motion.span>
      </p>

      <div className="flex flex-col gap-4 border-t border-line pt-6 text-body-sm sm:flex-row sm:justify-between">
        <p className="text-secondary">© 2026 [Academy name]. All rights reserved.</p>
        <ul className="flex flex-wrap gap-6 text-ink">
          <li>
            <Link href="/privacy">Privacy policy</Link>
          </li>
          <li>
            <Link href="#">Terms</Link>
          </li>
          <li>
            <Link href="#top">Back to top ↑</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
