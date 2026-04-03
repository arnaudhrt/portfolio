import React from "react";
import TechStack from "./TechStack";
import GithubActivity from "./GithubActivity";

export default function About() {
  return (
    <div className="space-y-12 pb-28">
      <div className="space-y-2 text-muted-foreground text-sm">
        <p>Hello, I'm Arnaud.</p>
        <p>I'm into programming and spend most of my time exploring it from every angle.</p>
        <p>From CLI tools to game dev to random Raspberry Pi experiments, I just build, learn, and have fun.</p>
        <p>Always chasing those small details that makes the difference.</p>
        <p>If you want to create something cool together or just talk tech, feel free to reach out.</p>
      </div>
      <TechStack />
      <GithubActivity />
    </div>
  );
}
