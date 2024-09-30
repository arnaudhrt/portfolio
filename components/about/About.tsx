import React from "react";
import TechStack from "./TechStack";
import Experience from "./Experience";
import Contact from "./Contact";

export default function About() {
  return (
    <div className="space-y-12 pb-28">
      <div className="space-y-3">
        <p>Hello, I am Arnaud,</p>
        <p>
          Developing skill through doing, guiltlessly exploring passion and interests, imbuing quality. Mindful that everything around me is someone’s
          life work.
        </p>
        <p>
          All I want to do is build websites. Typography, motion design, copywriting, performance—the web is an endless medium of opportunity and
          creativity of which I’ve only scratched the surface.
        </p>
        <p>
          Enjoying deep, dark, boring dance music: songs that set the pace in the first ten seconds and maintain it for the next ten minutes. Deep is
          a curation of my favorites. Soothed by the inherent energy of drum and bass—Drum has my favorites.
        </p>
      </div>
      <TechStack />
      <Experience />
      <Contact />
    </div>
  );
}
