import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

interface ButtonProps {
  className?: string;
  size?: "small" | "medium";
}

const style = {
  small: {
    containerStyle: "text-sm py-1 px-3",
    iconStyle: "size-5",
  },
  medium: {
    containerStyle: "text-sm py-1 px-3",
    iconStyle: "size-6",
  },
};

function ReactButton({ className, size = "medium" }: ButtonProps) {
  return (
    <button
      className={`flex gap-2 items-center text-slate-500 hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/40 transition rounded-md border border-slate-600 group ${style[size].containerStyle} ${className}`}
    >
      <FaReact className={`${style[size].iconStyle} text-slate-500 group-hover:text-blue-400 `} />
      <span>React</span>
    </button>
  );
}
function NextButton({ className, size = "medium" }: ButtonProps) {
  return (
    <button
      className={`flex gap-2 items-center text-slate-500 hover:text-white hover:bg-white/5 hover:border-white/40 transition rounded-md border border-slate-600 group ${style[size].containerStyle} ${className}`}
    >
      <SiNextdotjs className={`${style[size].iconStyle} text-slate-500 group-hover:text-white `} />
      <span>NextJs</span>
    </button>
  );
}
function TypescriptButton({ className, size = "medium" }: ButtonProps) {
  return (
    <button
      className={`flex gap-2 items-center text-slate-500 hover:text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/40 transition rounded-md border border-slate-600 group ${style[size].containerStyle} ${className}`}
    >
      <BiLogoTypescript className={`${style[size].iconStyle} text-slate-500 group-hover:text-blue-500 `} />
      <span>Typescript</span>
    </button>
  );
}
function TailwindButton({ className, size = "medium" }: ButtonProps) {
  return (
    <button
      className={`flex gap-2 items-center text-slate-500 hover:text-sky-400 hover:bg-sky-400/10 hover:border-sky-400/40 transition rounded-md border border-slate-600 group ${style[size].containerStyle} ${className}`}
    >
      <RiTailwindCssFill className={`${style[size].iconStyle} text-slate-500 group-hover:text-sky-400 `} />
      <span>TailwindCSS</span>
    </button>
  );
}

export { ReactButton, NextButton, TypescriptButton, TailwindButton };
