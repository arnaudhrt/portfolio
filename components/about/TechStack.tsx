import React from "react";
import { ReactButton, NextButton, TypescriptButton, TailwindButton, NodejsButton } from "@/lib/constants/techButtons";
import SectionTitle from "../global/SectionTitle";

export default function TechStack() {
  return (
    <div>
      <SectionTitle>Tech Stack</SectionTitle>
      <div className="flex gap-2 items-center flex-wrap">
        <ReactButton />
        <NextButton />
        <TypescriptButton />
        <TailwindButton />
        <NodejsButton />
      </div>
    </div>
  );
}
