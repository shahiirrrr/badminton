import { Coaches } from "@/components/home/Coaches";
import { Contact } from "@/components/home/Contact";
import { Facilities } from "@/components/home/Facilities";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Journey } from "@/components/home/Journey";
import { Programs } from "@/components/home/Programs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Coaches />
      <Programs />
      <Journey />
      <Facilities />
      <Contact />
    </>
  );
}
