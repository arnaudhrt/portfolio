import React from "react";
import SectionTitle from "../global/SectionTitle";

export default function Contact() {
  return (
    <div>
      <SectionTitle>Contact</SectionTitle>
      <p className="text-sm">
        Let&#39;s work on something together, you can reach me at{" "}
        <a href="https://twitter.com/ahurert" target="_blank" className="underline">
          @arnaudhrt
        </a>{" "}
        or{" "}
        <a href="mailto:hi@arnaudhrt.com" className="underline">
          hi@arnaudhrt.com
        </a>
      </p>
    </div>
  );
}
