"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { FormField, FormSelect, FormTextarea } from "@/components/ui/FormField";
import { programs } from "@/data/programs";

export function BookingForm() {
  const router = useRouter();

  return (
    <form
      className="flex flex-col gap-6 rounded-lg bg-surface p-6 text-ink sm:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        // ponytail: no backend yet (per design note) — submissions go nowhere; wire to an API route / server action before launch.
        router.push("/booking-confirmed");
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-h3">Request a trial</h3>
        <p className="text-caps text-tertiary">Step 1 of 1</p>
      </div>
      <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
        <FormField label="Full name" name="name" placeholder="Your full name" autoComplete="name" required />
        <FormField label="Email" name="email" type="email" placeholder="name@email.com" autoComplete="email" required />
        <FormField label="Phone" name="phone" type="tel" placeholder="+91 00000 00000" autoComplete="tel" required />
        <FormSelect
          label="Program of interest"
          name="program"
          placeholder="Select a program"
          options={programs.map((p) => p.title)}
          required
        />
        <FormField label="Preferred date" name="date" type="date" required />
        <FormSelect
          label="Trial is for"
          name="for"
          placeholder="Myself / My child"
          options={["Myself", "My child"]}
          required
        />
      </div>
      <FormTextarea
        label="Message (optional)"
        name="message"
        placeholder="Tell us about your playing level and goals"
      />
      <Button type="submit" label="Book my trial session" className="self-start" />
      <p className="text-body-sm text-tertiary">
        We&apos;ll confirm your session by phone or email. Design only — form is not yet connected to a backend.
      </p>
    </form>
  );
}
