export type Program = {
  slug: string;
  index: string;
  title: string;
  audience: string;
  summary: string;
  image: string;
};

export const programs: Program[] = [
  {
    slug: "beginners",
    index: "01",
    title: "Beginners",
    audience: "All ages",
    summary: "Grips, footwork and rally confidence in small, friendly groups.",
    image: "/images/program-beginners.jpg",
  },
  {
    slug: "junior-development",
    index: "02",
    title: "Junior Development",
    audience: "Under-18s",
    summary: "Structured pathway for young players — technique, movement and first match play.",
    image: "/images/program-junior.jpg",
  },
  {
    slug: "advanced-training",
    index: "03",
    title: "Advanced Training",
    audience: "Competitive",
    summary: "High-intensity sessions on attack, defence, net play and singles & doubles tactics.",
    image: "/images/program-advanced.jpg",
  },
  {
    slug: "private-coaching",
    index: "04",
    title: "Private coaching",
    audience: "1:1 or 2:1",
    summary:
      "One-to-one lessons built around your goals, schedule and game — ideal for fast technical progress or match preparation.",
    image: "/images/program-private.jpg",
  },
];
