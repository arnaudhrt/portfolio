import React from "react";
import SectionTitle from "../global/SectionTitle";
import { infos } from "@/lib/constants/infos";

export default function Contact() {
  return (
    <div>
      <SectionTitle>Contact</SectionTitle>
      <p className="text-sm">
        Let&#39;s work on something together, you can reach me at{" "}
        <a href={infos.linkedin} target="_blank" className="underline">
          @arnaudhrt
        </a>{" "}
        or{" "}
        <a href={`mailto:${infos.email}`} className="underline">
          {infos.email}
        </a>
      </p>
    </div>
  );
}
