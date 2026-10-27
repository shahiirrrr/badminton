import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/PageBlocks";
import { Reveal, RiseText } from "@/components/motion/Motion";

export const metadata: Metadata = {
  title: "Privacy policy",
};

// Placeholder legal copy from the design — must be reviewed by a legal professional before launch.
const sections = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: '[Academy name] ("we", "us") runs badminton coaching programs at [academy address], Kerala. This policy explains how we handle personal information collected through this website and our booking forms.',
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: "When you request a trial or contact us, we collect the details you provide: name, email, phone number, the program you are interested in, preferred dates and any message you include. If the trial is for a child, we may collect the child's age group.",
  },
  {
    id: "how-we-use-it",
    title: "How we use it",
    body: "We use this information to respond to your enquiry, arrange trial sessions, place students in suitable groups and share updates about sessions you have booked. We do not use it for unrelated marketing without your consent.",
  },
  {
    id: "childrens-information",
    title: "Children's information",
    body: "Bookings for students under 18 should be made by a parent or guardian. We collect only the information needed to coach a child safely and keep it accessible to relevant staff only.",
  },
  {
    id: "sharing",
    title: "Sharing your information",
    body: "We do not sell personal information. We may share it with service providers who help us run the academy, such as [email or booking tools], only for the purposes described here.",
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: "We keep enquiry details for [period — confirm] and student records for as long as they train with us, plus [period — confirm] afterwards, unless the law requires otherwise.",
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: "You can ask to see, correct or delete the personal information we hold about you or your child. Contact us using the details below and we will respond within [timeframe — confirm].",
  },
  {
    id: "contact",
    title: "Contact us",
    body: "Questions about this policy? Email [privacy@youracademy.in] or write to [academy address], Kerala.",
  },
];

const num = (i: number) => String(i + 1).padStart(2, "0");

export default function PrivacyPage() {
  return (
    <>
      <section className="flex flex-col items-start gap-6 px-4 pt-6 pb-16 sm:px-8 lg:px-16">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy policy" }]} />
        <h1 className="text-section">
          <RiseText lines={["Privacy", "policy."]} />
        </h1>
        <div className="flex flex-wrap items-center gap-6">
          <p className="text-caps text-secondary">Last updated: [DD Month 2026]</p>
          <p className="flex items-center gap-2 rounded-full border border-error px-3 py-2 text-caps text-error">
            <Image src="/icons/ellipse.svg" alt="" width={6} height={6} />
            Placeholder text — have this reviewed by a legal professional before launch
          </p>
        </div>
        <hr className="mt-4 w-full border-ink" />
      </section>

      <section className="grid gap-12 px-4 pb-24 sm:px-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-30 lg:px-16 lg:pb-30">
        <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-4 text-caps text-tertiary">On this page</p>
          <ol>
            {sections.map((s, i) => (
              <li key={s.id}>
                {/* ponytail: no scroll-spy active state — add an IntersectionObserver if the highlight is wanted. */}
                <Link
                  href={`#${s.id}`}
                  className="flex items-center gap-3 border-l border-line py-3 pl-4 text-body text-secondary transition-colors hover:border-ink hover:text-ink"
                >
                  <span className="text-caps text-tertiary">{num(i)}</span>
                  {s.title}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <article className="flex flex-col gap-14">
          {sections.map((s, i) => (
            <Reveal key={s.id}>
              <section id={s.id} className="flex scroll-mt-8 flex-col gap-4">
                <h2 className="flex items-baseline gap-4">
                  <span className="text-caps text-tertiary">{num(i)}</span>
                  <span className="text-h3">{s.title}</span>
                </h2>
                <p className="text-body-lg text-secondary">{s.body}</p>
                {s.id === "contact" && (
                  <div className="flex flex-col gap-2 rounded-lg bg-surface p-6">
                    <p className="text-caps text-tertiary">Privacy contact</p>
                    <p className="text-h4 whitespace-pre-wrap">{"[privacy@youracademy.in]  ·  +91 [00000 00000]"}</p>
                  </div>
                )}
              </section>
            </Reveal>
          ))}
        </article>
      </section>
    </>
  );
}
