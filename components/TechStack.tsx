import React from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import SectionTitle from "./global/SectionTitle";

export default function TechStack() {
  return (
    <div>
      <SectionTitle>Tech Stack</SectionTitle>
      <div className="flex gap-2 items-center">
        <button className="flex gap-2 items-center text-sm text-slate-500 hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/40 transition py-2 px-4 rounded-md border border-slate-600 group">
          <FaReact className="size-6 text-slate-500 group-hover:text-blue-400 " />
          <span>React</span>
        </button>
        <button className="flex gap-2 items-center text-sm text-slate-500 hover:text-white hover:bg-white/5 hover:border-white/40 transition py-2 px-4 rounded-md border border-slate-600 group">
          <SiNextdotjs className="size-6 text-slate-500 group-hover:text-white " />
          <span>NextJs</span>
        </button>
        <button className="flex gap-2 items-center text-sm text-slate-500 hover:text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/40 transition py-2 px-4 rounded-md border border-slate-600 group">
          <BiLogoTypescript className="size-6 text-slate-500 group-hover:text-blue-500 " />
          <span>Typescript</span>
        </button>
        <button className="flex gap-2 items-center text-sm text-slate-500 hover:text-sky-400 hover:bg-sky-400/10 hover:border-sky-400/40 transition py-2 px-4 rounded-md border border-slate-600 group">
          <RiTailwindCssFill className="size-6 text-slate-500 group-hover:text-sky-400 " />
          <span>TailwindCSS</span>
        </button>
      </div>
    </div>
  );
}
