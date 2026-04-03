import React from "react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <div>
      <SectionTitle>Contact</SectionTitle>
      <p className="text-sm text-muted-foreground">
        Let&#39;s work on something together, you can reach me at{" "}
        <a href="mailto:arnaud3488@gmail.com" className="underline hover:text-foreground transition">
          arnaud3488@gmail.com.
        </a>
      </p>
    </div>
  );
}
