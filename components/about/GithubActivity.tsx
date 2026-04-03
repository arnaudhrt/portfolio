"use client";

import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import SectionTitle from "../global/SectionTitle";

export default function GithubActivity() {
  return (
    <div>
      <SectionTitle>GitHub Activity</SectionTitle>
      <div className="overflow-x-auto">
        <GitHubCalendar username="arnaudhrt" colorScheme="dark" fontSize={12} blockSize={11} blockMargin={3} />
      </div>
    </div>
  );
}
