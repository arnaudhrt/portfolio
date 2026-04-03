import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiFlutter, SiDart, SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import Link from "next/link";
import { RiTailwindCssFill } from "react-icons/ri";

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
        className={`flex gap-2 items-center text-slate-500 hover:text-blue-400 hover:bg-blue-400/10 transition rounded-md  group hover:scale-105 ${style[size].containerStyle} ${className}`}
      >
        <FaReact className={`${style[size].iconStyle} text-slate-500 group-hover:text-blue-400 `} />
        <span>React</span>
      </button>
    </Link>
  );
}
function TypescriptButton({ className, size = "medium" }: ButtonProps) {
  return (
    <Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-blue-500 hover:bg-blue-500/10 transition rounded-md   group hover:scale-105 ${style[size].containerStyle} ${className}`}
      >
        <BiLogoTypescript className={`${style[size].iconStyle} text-slate-500 group-hover:text-blue-500 `} />
        <span>Typescript</span>
      </button>
    </Link>
  );
}

function NodeJsButton({ className, size = "medium" }: ButtonProps) {
  return (
    <Link href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-green-500 hover:bg-green-500/10 transition rounded-md group hover:scale-105 ${style[size].containerStyle} ${className}`}
      >
        <FaNodeJs className={`${style[size].iconStyle} text-slate-500 group-hover:text-green-500 `} />
        <span>Node.js</span>
      </button>
    </Link>
  );
}
function FlutterButton({ className, size = "medium" }: ButtonProps) {
  return (
    <Link href="https://flutter.dev/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/10 transition rounded-md   group hover:scale-105 ${style[size].containerStyle} ${className}`}
      >
        <SiFlutter className={`${style[size].iconStyle} text-slate-500 group-hover:text-cyan-400 `} />
        <span>Flutter</span>
      </button>
    </Link>
  );
}
function DartButton({ className, size = "medium" }: ButtonProps) {
  return (
    <Link href="https://dart.dev/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-blue-400 hover:bg-blue-400/10  transition rounded-md   group hover:scale-105 ${style[size].containerStyle} ${className}`}
      >
        <SiDart className={`${style[size].iconStyle} text-slate-500 group-hover:text-blue-400 `} />
        <span>Dart</span>
      </button>
    </Link>
  );
}
function TailwindButton({ className, size = "medium" }: ButtonProps) {
  return (
    <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-sky-400 hover:bg-sky-400/10 transition rounded-md  group hover:scale-105 ${style[size].containerStyle} ${className}`}
      >
        <RiTailwindCssFill className={`${style[size].iconStyle} text-slate-500 group-hover:text-sky-400 `} />
        <span>TailwindCSS</span>
      </button>
    </Link>
  );
}

function ExpressButton({ className, size = "medium" }: ButtonProps) {
  return (
    <Link href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-white hover:bg-white/10 transition rounded-md  group hover:scale-105 ${style[size].containerStyle} ${className}`}
      >
        <SiExpress className={`${style[size].iconStyle} text-slate-500 group-hover:text-white `} />
        <span>Express</span>
      </button>
    </Link>
  );
}
function SqlButton({ className, size = "medium" }: ButtonProps) {
  return (
    <Link href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-orange-400 hover:bg-orange-400/10 transition rounded-md  group hover:scale-105 ${style[size].containerStyle} ${className}`}
      >
        <TbSql className={`${style[size].iconStyle} text-slate-500 group-hover:text-orange-400 `} />
        <span>SQL</span>
      </button>
    </Link>
  );
}

export { ReactButton, TypescriptButton, NodeJsButton, FlutterButton, DartButton, TailwindButton, ExpressButton, SqlButton };
