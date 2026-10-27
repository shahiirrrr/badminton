// [Bracketed] values are placeholders from the design, pending real coach details.
export type Coach = {
  name: string;
  role: string;
  experience: string;
  teaches: string;
  photo?: string;
};

export const coaches: Coach[] = [
  {
    name: "[Coach name]",
    role: "Head Coach",
    experience: "[X] years teaching — placeholder",
    teaches: "Beginners & juniors — [confirm]",
    photo: "/images/coach-head.jpg",
  },
  {
    name: "[Coach name]",
    role: "Performance Coach",
    experience: "[X] years teaching — placeholder",
    teaches: "[confirm]",
    photo: "/images/coach-fitness.jpg",
  },
  {
    name: "[Coach name]",
    role: "[Coach role]",
    experience: "[X] years teaching — placeholder",
    teaches: "[confirm]",
    photo: "/images/coach-beginners.jpg",
  },
  {
    name: "[Coach name]",
    role: "Junior Development Coach",
    experience: "[X] years teaching — placeholder",
    teaches: "[confirm]",
    photo: "/images/coach-junior.jpg",
  },
];
