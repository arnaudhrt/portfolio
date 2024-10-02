import { Separator } from "@/components/ui/separator";
import React from "react";
import { LiaHandPeace } from "react-icons/lia";

export default function Footer() {
  return (
    <div className="group pb-3 w-full max-w-screen-md">
      <Separator className="mb-3" />
      <div className="flex justify-between items-center text-xs text-muted-foreground">
        <LiaHandPeace className="size-5 text-slate-500 group-hover:text-yellow-400 transition" />
        <p>© 2024 Arnaud Huret</p>
        <LiaHandPeace className="size-5 text-slate-500 group-hover:text-yellow-400 transition" />
      </div>
    </div>
  );
}
