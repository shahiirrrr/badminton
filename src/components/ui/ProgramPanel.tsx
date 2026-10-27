import Image from "next/image";
import { cn } from "@/lib/cn";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { TextLink } from "./TextLink";

type ProgramPanelProps = {
  index: string;
  audience: string;
  title: string;
  description: string;
  href: string;
  /** Omit to show the image placeholder. */
  image?: string;
  /** Sizes the photo (e.g. an aspect ratio) — the text stack below stays fixed. */
  photoClassName?: string;
  className?: string;
};

export function ProgramPanel({
  index,
  audience,
  title,
  description,
  href,
  image,
  photoClassName,
  className,
}: ProgramPanelProps) {
  return (
    <article className={cn("group flex w-full flex-col gap-6", className)}>
      <div className={cn("relative overflow-hidden rounded-lg", photoClassName ?? "aspect-[400/416]")}>
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-104"
          />
        ) : (
          <ImagePlaceholder
            brief="Program photo"
            className="size-full transition-transform duration-500 ease-out group-hover:scale-104"
          />
        )}
      </div>
      <div className="flex items-center justify-between text-caps">
        <span className="text-tertiary">{index}</span>
        <span className="text-secondary">{audience}</span>
      </div>
      <h3 className="text-h3 text-ink">{title}</h3>
      <p className="text-body text-secondary">{description}</p>
      <TextLink label="Enquire" href={href} />
    </article>
  );
}
