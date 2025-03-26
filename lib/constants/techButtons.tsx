import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import Link from "next/link";

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
    <Link href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/40 transition rounded-md border border-slate-600 group hover:scale-105 ${style[size].containerStyle} ${className}`}
      >
        <FaReact className={`${style[size].iconStyle} text-slate-500 group-hover:text-blue-400 `} />
        <span>React</span>
      </button>
    </Link>
  );
}
function NextButton({ className, size = "medium" }: ButtonProps) {
  return (
    <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-foreground  hover:bg-foreground/5 hover:border-foreground/40 transition rounded-md border border-slate-600 group hover:scale-105 ${style[size].containerStyle} ${className}`}
      >
        <SiNextdotjs className={`${style[size].iconStyle} text-slate-500 group-hover:text-foreground `} />
        <span>NextJs</span>
      </button>
    </Link>
  );
}
function TypescriptButton({ className, size = "medium" }: ButtonProps) {
  return (
    <Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/40 transition rounded-md border border-slate-600 group hover:scale-105 ${style[size].containerStyle} ${className}`}
      >
        <BiLogoTypescript className={`${style[size].iconStyle} text-slate-500 group-hover:text-blue-500 `} />
        <span>Typescript</span>
      </button>
    </Link>
  );
}
function TailwindButton({ className, size = "medium" }: ButtonProps) {
  return (
    <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-sky-400 hover:bg-sky-400/10 hover:border-sky-400/40 transition rounded-md border border-slate-600 group hover:scale-105 ${style[size].containerStyle} ${className}`}
      >
        <RiTailwindCssFill className={`${style[size].iconStyle} text-slate-500 group-hover:text-sky-400 `} />
        <span>TailwindCSS</span>
      </button>
    </Link>
  );
}

function NodejsButton({ className, size = "medium" }: ButtonProps) {
  return (
    <Link href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-lime-400 hover:bg-sky-400/10 hover:border-lime-400/40 transition rounded-md border border-slate-600 group hover:scale-105 ${style[size].containerStyle} ${className}`}
      >
        <FaNodeJs className={`${style[size].iconStyle} text-slate-500 group-hover:text-lime-400 `} />
        <span>Nodejs</span>
      </button>
    </Link>
  );
}

export { ReactButton, NextButton, TypescriptButton, TailwindButton, NodejsButton };
