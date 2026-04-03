import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiFlutter, SiDart, SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

interface ButtonProps {
  className?: string;
}

function ReactButton({ className }: ButtonProps) {
  return (
    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-blue-400 hover:bg-blue-400/10 transition rounded-md  group hover:scale-105 text-sm py-1 px-3 cursor-pointer ${className}`}
      >
        <FaReact className={`size-5 text-slate-500 group-hover:text-blue-400 `} />
        <span>React</span>
      </button>
    </a>
  );
}
function TypescriptButton({ className }: ButtonProps) {
  return (
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-blue-500 hover:bg-blue-500/10 transition rounded-md   group hover:scale-105 text-sm py-1 px-3 cursor-pointer ${className}`}
      >
        <BiLogoTypescript className={`size-5 text-slate-500 group-hover:text-blue-500 `} />
        <span>Typescript</span>
      </button>
    </a>
  );
}

function NodeJsButton({ className }: ButtonProps) {
  return (
    <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-green-500 hover:bg-green-500/10 transition rounded-md group hover:scale-105 text-sm py-1 px-3 cursor-pointer ${className}`}
      >
        <FaNodeJs className={`size-5 text-slate-500 group-hover:text-green-500 `} />
        <span>Node.js</span>
      </button>
    </a>
  );
}
function FlutterButton({ className }: ButtonProps) {
  return (
    <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/10 transition rounded-md   group hover:scale-105 text-sm py-1 px-3 cursor-pointer ${className}`}
      >
        <SiFlutter className={`size-5 text-slate-500 group-hover:text-cyan-400 `} />
        <span>Flutter</span>
      </button>
    </a>
  );
}
function DartButton({ className }: ButtonProps) {
  return (
    <a href="https://dart.dev/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-blue-400 hover:bg-blue-400/10  transition rounded-md   group hover:scale-105 text-sm py-1 px-3 cursor-pointer ${className}`}
      >
        <SiDart className={`size-5 text-slate-500 group-hover:text-blue-400 `} />
        <span>Dart</span>
      </button>
    </a>
  );
}
function TailwindButton({ className }: ButtonProps) {
  return (
    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-sky-400 hover:bg-sky-400/10 transition rounded-md  group hover:scale-105 text-sm py-1 px-3 cursor-pointer ${className}`}
      >
        <RiTailwindCssFill className={`size-5 text-slate-500 group-hover:text-sky-400 `} />
        <span>TailwindCSS</span>
      </button>
    </a>
  );
}

function ExpressButton({ className }: ButtonProps) {
  return (
    <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-white hover:bg-white/10 transition rounded-md  group hover:scale-105 text-sm py-1 px-3 cursor-pointer ${className}`}
      >
        <SiExpress className={`size-5 text-slate-500 group-hover:text-white `} />
        <span>Express</span>
      </button>
    </a>
  );
}
function SqlButton({ className }: ButtonProps) {
  return (
    <a href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener noreferrer">
      <button
        className={`flex gap-2 items-center text-slate-500 hover:text-orange-400 hover:bg-orange-400/10 transition rounded-md  group hover:scale-105 text-sm py-1 px-3 cursor-pointer ${className}`}
      >
        <TbSql className={`size-5 text-slate-500 group-hover:text-orange-400 `} />
        <span>SQL</span>
      </button>
    </a>
  );
}

export { ReactButton, TypescriptButton, NodeJsButton, FlutterButton, DartButton, TailwindButton, ExpressButton, SqlButton };
