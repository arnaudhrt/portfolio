import React from "react";
import { ReactButton, TypescriptButton, NodeJsButton, FlutterButton, DartButton, TailwindButton, ExpressButton, SqlButton } from "./TechButtons";

export default function TechStack() {
  return (
    <div className="space-y-3">
      <p className=" text-muted-foreground text-sm">I&apos;ve played with a lot of tech over the years. This is what stuck.</p>

      {/* ── Grid / terminal style ── */}
      <div className="grid grid-cols-3 border border-slate-700 rounded-md  text-sm">
        {/* Header row */}
        <p className="font-semibold text-center border-b border-r border-slate-700 p-2">Web</p>
        <p className="font-semibold text-center border-b border-r border-slate-700 p-2">Server/API</p>
        <p className="font-semibold text-center border-b border-slate-700 p-2">iOS/Android</p>

        {/* Buttons row – each cell is a vertical stack */}
        <div className="flex flex-col gap-2 items-center p-2 border-r border-slate-700">
          <ReactButton size="small" />
          <TypescriptButton size="small" />
          <TailwindButton size="small" />
        </div>
        <div className="flex flex-col gap-2 items-center p-2 border-r border-slate-700">
          <NodeJsButton size="small" />
          <ExpressButton size="small" />
          <SqlButton size="small" />
        </div>
        <div className="flex flex-col gap-2 items-center p-2 border-r border-slate-700">
          <FlutterButton size="small" />
          <DartButton size="small" />
        </div>
      </div>
    </div>
  );
}
