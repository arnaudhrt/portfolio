import React from "react";
import TechStack from "./TechStack";
import Experience from "./Experience";

export default function About() {
  return (
    <div className="space-y-12 pb-28">
      <div className="space-y-3">
        <p>Hello, I am Arnaud,</p>
        <p>Born and raised into React ecosystem, I love crafting interfaces and building polished web experiences, pixels by pixels.</p>
        <p>I develop my skills through doing and experimenting, always searching for those small magical details that make a big impact.</p>
        <p>Mindful that everything around me is someone’s life work.</p>
        <p>If you’re looking to build something beautiful together or just want to chat about tech and web, feel free to reach out!</p>
      </div>
      <TechStack />
      <Experience />
    </div>
  );
}
