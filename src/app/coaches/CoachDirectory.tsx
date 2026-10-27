"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ease } from "@/components/motion/ease";
import { Tag } from "@/components/ui/Badges";
import Image from "next/image";
import { TextLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/cn";

export type CoachProfile = {
  role: string;
  focus: string;
  qualifications: string;
  languages: string;
  teaches: string[];
  photo: string;
};

const filters = ["All", "Beginners", "Juniors", "Advanced", "Private"];

export function CoachDirectory({ profiles }: { profiles: CoachProfile[] }) {
  const [filter, setFilter] = useState("All");
  // "All programs" coaches match every filter.
  const visible = profiles.filter(
    (p) => filter === "All" || p.teaches.includes(filter) || p.teaches.includes("All programs"),
  );

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 border-b border-ink pb-12">
        <span className="mr-2 text-caps text-tertiary">Teaches</span>
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "relative rounded-full border px-4.5 py-3 text-button transition-colors",
              filter === f ? "border-transparent text-white" : "border-line text-ink hover:border-ink",
            )}
          >
            {/* Active pill slides between chips. */}
            {filter === f && (
              <motion.span
                layoutId="coach-filter"
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ duration: 0.35, ease }}
              />
            )}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      <ul>
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((p) => {
            const i = profiles.indexOf(p);
            const flip = i % 2 === 1; // alternate portrait left/right, tilt follows
            return (
              <motion.li
                key={p.role}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease }}
                className="grid items-center gap-10 border-b border-line py-14 lg:grid-cols-[500px_minmax(0,1fr)] lg:gap-20 lg:py-20"
              >
                <div className={cn("mx-auto w-full max-w-115", flip && "lg:order-2")}>
                  <div
                    className={cn("relative aspect-[460/580] overflow-hidden rounded-xl", flip ? "-rotate-3" : "rotate-3")}
                  >
                    <Image src={p.photo} alt="" fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover" />
                  </div>
                </div>
                <article className="flex flex-col items-start gap-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-caps text-tertiary">
                      {String(i + 1).padStart(2, "0")} / {String(profiles.length).padStart(2, "0")}
                    </span>
                    <Tag label={p.role} />
                  </div>
                  <h2 className="text-display-md">[Coach name]</h2>
                  <p className="text-body-lg text-secondary">“[Coaching philosophy in one line — placeholder.]”</p>
                  <dl className="grid w-full max-w-176 sm:grid-cols-2">
                    {[
                      ["Focus", p.focus],
                      ["Experience", "[X] years — placeholder"],
                      ["Qualifications", p.qualifications],
                      ["Languages", p.languages],
                    ].map(([k, v]) => (
                      <div key={k} className="flex flex-col gap-1.5 border-t border-line py-4 pr-6">
                        <dt className="text-caps text-tertiary">{k}</dt>
                        <dd className="text-body">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="text-body text-secondary">
                    [Short bio — 2–3 sentences on background, playing history and what students enjoy about their
                    sessions. Placeholder.]
                  </p>
                  <div className="flex flex-wrap items-center gap-6">
                    <ul className="flex gap-2">
                      {p.teaches.map((t) => (
                        <li key={t}>
                          <Tag label={t} showDot={false} />
                        </li>
                      ))}
                    </ul>
                    <TextLink label="Book a trial with this coach" href="/#book-trial" />
                  </div>
                </article>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </>
  );
}
