import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect } from "react";
import { LiaHandPeace } from "react-icons/lia";
import { TerminalSpinner } from "@/components/ui/terminal-loader";
import { LOADING_VERBS } from "@/lib/loadingVerbs";

function useRandomVerb() {
  const [verb, setVerb] = useState(LOADING_VERBS[0]);

  useEffect(() => {
    setVerb(LOADING_VERBS[Math.floor(Math.random() * LOADING_VERBS.length)]);
    const id = setInterval(() => {
      setVerb(LOADING_VERBS[Math.floor(Math.random() * LOADING_VERBS.length)]);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return verb;
}

export default function Footer() {
  const verb = useRandomVerb();

  return (
    <div className="group pb-3 w-full max-w-screen-md">
      <Separator className="mb-3" />
      <div className="flex justify-between items-center text-xs text-muted-foreground">
        <LiaHandPeace className="size-5 text-slate-500 group-hover:text-yellow-400 transition" />
        <div className="flex justify-center items-center text-xs text-muted-foreground">
          <TerminalSpinner type="moon" label={verb + "..."} className="text-muted-foreground" />
        </div>
        <LiaHandPeace className="size-5 text-slate-500 group-hover:text-yellow-400 transition" />
      </div>
    </div>
  );
}
