import React from "react";
import SectionTitle from "../global/SectionTitle";
import { infos } from "@/lib/constants/infos";

export default function Contact() {
  return (
    <div>
      <SectionTitle>Contact</SectionTitle>
      <p className="text-sm text-muted-foreground">
        Let&#39;s work on something together, you can reach me at{" "}
        <a href={`mailto:${infos.email}`} className="underline">
          {infos.email}
        </a>
      </p>
    </div>
  );
}
