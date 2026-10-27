import Image from "next/image";
import { cn } from "@/lib/cn";
import { ImagePlaceholder } from "./ImagePlaceholder";

type CoachCardProps = {
  name: string;
  role: string;
  photo?: string;
  className?: string;
};

export function CoachCard({ name, role, photo, className }: CoachCardProps) {
  return (
    <article
      className={cn(
        "relative aspect-[340/440] w-full shrink-0 overflow-hidden rounded-xl bg-court-blue",
        className ?? "max-w-85",
      )}
    >
      {photo ? (
        <Image src={photo} alt="" fill sizes="(min-width: 1024px) 360px, 60vw" className="object-cover" />
      ) : (
        <ImagePlaceholder
          brief="Coach portrait — waist-up, natural light, court behind"
          showLabel={false}
          className="size-full"
        />
      )}
      <div className="absolute bottom-5 left-5 flex flex-col gap-0.5 rounded-md border border-white/30 bg-white/18 px-4 py-3 text-white backdrop-blur-sm">
        <h3 className="text-h4">{name}</h3>
        <p className="text-body-sm opacity-80">{role}</p>
      </div>
    </article>
  );
}
