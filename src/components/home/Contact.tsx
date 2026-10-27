import { Reveal, RiseText, Stagger, StaggerItem } from "@/components/motion/Motion";
import { Button } from "@/components/ui/Button";
import { BookingForm } from "./BookingForm";

const details = [
  { label: "Phone", value: "+91 [00000 00000]" },
  { label: "Email", value: "[hello@youracademy.in]" },
  { label: "Location", value: "[Academy address, City, Kerala]" },
  { label: "Hours", value: "[Opening hours — to confirm]" },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-6 px-4 pt-6 pb-18 sm:px-8 lg:pt-25">
      <div
        id="book-trial"
        className="grid scroll-mt-6 gap-12 rounded-xl bg-court-deep p-4 text-white sm:p-8 lg:grid-cols-[minmax(0,1fr)_608px] lg:gap-8 lg:py-12 lg:pr-12 lg:pl-14"
      >
        <Reveal className="flex flex-col items-start px-2 pt-6 sm:px-0 lg:pt-4">
          <p className="flex gap-2 text-caps">
            <span>/</span>
            <span>Contact</span>
          </p>
          <h2 className="mt-6 text-display">
            <RiseText lines={["Book your", "trial session."]} delay={0.2} />
          </h2>
          <p className="mt-10 max-w-110 text-body-lg opacity-80">
            Tell us a little about you and we&apos;ll find the right program, coach and time to get you started.
          </p>
          <Stagger as="dl" className="mt-14 w-full max-w-130">
            {details.map((d) => (
              <StaggerItem key={d.label} className="flex items-center gap-4 border-t border-white/20 py-4">
                <dt className="w-24 shrink-0 text-caps opacity-60 sm:w-30">{d.label}</dt>
                <dd className="text-body">{d.value}</dd>
              </StaggerItem>
            ))}
          </Stagger>
          {/* ponytail: WhatsApp number is a placeholder in the design — point at https://wa.me/<number> once confirmed. */}
          <Button label="Chat on WhatsApp" variant="onImage" href="#" className="mt-14" />
        </Reveal>
        <Reveal delay={0.2}>
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}
