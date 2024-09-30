import { RiCarFill } from "react-icons/ri";
import { ReactButton, NextButton, TypescriptButton, TailwindButton } from "@/lib/constants/techButtons";

export const projectCards = [
  {
    icon: <RiCarFill className="text-slate-500 mb-2 size-8 p-2 border border-slate-500/40 rounded-md" />,
    name: "GoYaly Co. Ltd",
    description: "Booking system for car rental in Seattle.",
  },
  {
    icon: <RiCarFill className="text-slate-500 mb-2 size-8 p-2 border border-slate-500/40 rounded-md" />,
    name: "GoYaly Co. Ltd",
    description: "Booking system for car rental in Seattle.",
  },
  {
    icon: <RiCarFill className="text-slate-500 mb-2 size-8 p-2 border border-slate-500/40 rounded-md" />,
    name: "GoYaly Co. Ltd",
    description: "Booking system for car rental in Seattle.",
  },
  {
    icon: <RiCarFill className="text-slate-500 mb-2 size-8 p-2 border border-slate-500/40 rounded-md" />,
    name: "GoYaly Co. Ltd",
    description: "Booking system for car rental in Seattle.",
  },
];

export const projectContent = [
  {
    name: "GoYaly Co. Ltd",
    logo: "https://www.goyaly.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ea6ecd27.png&w=96&q=75",
    location: "Seattle, United States",
    description:
      "Developed a car rental platform for GoYaly, a Seattle-based company. The application allows users to browse available cars, make bookings, and process payments securely via Stripe. It also includes an admin dashboard for managing rentals, tracking orders, and updating inventory.",
    techStack: [
      <ReactButton key="react" className="w-full" size="small" />,
      <NextButton key="next" className="w-full" size="small" />,
      <TypescriptButton key="typescript" className="w-full" size="small" />,
      <TailwindButton key="tailwind" className="w-full" size="small" />,
    ],
    linkRepo: "Private",
    LinkApp: "https://www.goyaly.com/",
  },
];
