import { RiCarFill } from "react-icons/ri";
import { ReactButton, NextButton, TypescriptButton, TailwindButton, NodejsButton } from "@/lib/constants/techButtons";
import { LuTicket } from "react-icons/lu";

export const projectCards = [
  {
    icon: <RiCarFill className="text-slate-500 mb-2 size-10 p-2 border border-slate-500/40 rounded-md" />,
    name: "GoYaly Co. Ltd",
    description: "Booking system for car rental in Seattle.",
  },
  {
    icon: <LuTicket className="text-slate-500 mb-2 size-10 p-2 border border-slate-500/40 rounded-md" />,
    name: "Illuzion ticket scaner",
    description: "Event ticket scanner for Illuzion night club.",
  },
];

export const projectContent = [
  {
    name: "GoYaly Co. Ltd",
    logo: "https://www.goyaly.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ea6ecd27.png&w=96&q=75",
    location: "Seattle, United States",
    description:
      "Developed a car rental platform for GoYaly, a Seattle-based company. The application allows users to browse available cars, make bookings, and process payments securely via Stripe. It also includes an admin dashboard for managing rentals, tracking orders, and updating inventory.",
    team: [
      {
        name: "Pierre Huret",
        link: "https://www.pierrehrt.com",
      },
    ],
    techStack: [
      <ReactButton key="react" className="w-full" size="small" />,
      <NextButton key="next" className="w-full" size="small" />,
      <TypescriptButton key="typescript" className="w-full" size="small" />,
      <TailwindButton key="tailwind" className="w-full" size="small" />,
      <NodejsButton key="nodejs" className="w-full" size="small" />,
    ],
    linkRepo: "private",
    LinkApp: "https://www.goyaly.com/",
  },
  {
    name: "Illuzion ticket scaner",
    logo: "https://www.illuzionphuket.com/wp-content/uploads/2024/11/cropped-illuzion-favicon.png",
    location: "Phuket, Thailand",
    description:
      "Developed an event ticket scanner for Illuzion, a night club in Phuket. The application allows staff to scan attendee tickets for specific events. It also includes an admin dashboard for managing events, updating prices, and tracking revenue in real time.",
    team: [
      {
        name: "Crazy Web Studio",
        link: "https://www.crazywebstudio.co.th/",
      },
    ],
    techStack: [
      <ReactButton key="react" className="w-full" size="small" />,
      <NextButton key="next" className="w-full" size="small" />,
      <TypescriptButton key="typescript" className="w-full" size="small" />,
      <TailwindButton key="tailwind" className="w-full" size="small" />,
      <NodejsButton key="nodejs" className="w-full" size="small" />,
    ],
    linkRepo: "private",
    LinkApp: "private",
  },
];
