import React from "react";
import { FaCircle } from "react-icons/fa";
import SectionTitle from "./global/SectionTitle";

export default function Experience() {
  const experiences = [
    {
      position: "Software Engineer",
      company: "Crazy Web Studio Co., Ltd",
      location: "Phuket, Thailand",
      dateRange: "2022 - Present",
    },
    {
      position: "Frontend Developer",
      company: "Horizon Studio",
      location: "Bangkok, Thailand",
      dateRange: "2021 - 2022",
    },
    {
      position: "Software Engineer",
      company: "Seven Peaks Studio",
      location: "Bangkok, Thailand",
      dateRange: "2020 - 2021",
    },
  ];
  return (
    <div>
      <SectionTitle id="experience">Experience</SectionTitle>
      <div className="flex">
        <div className="w-[2px] bg-slate-800 rounded-full ml-2"></div>
        <div className="space-y-6 ml-[-7px]">
          {experiences.map((experience, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 mt-2">
                <FaCircle className={`${index == 0 ? "text-slate-400" : "text-slate-800"} size-3`} />
              </div>
              <div>
                <h3 className="text-lg font-medium">{experience.position}</h3>
                <p className="text-sm text-muted-foreground">
                  {experience.company} - {experience.dateRange}
                </p>
                <p className="text-xs text-muted-foreground">{experience.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
