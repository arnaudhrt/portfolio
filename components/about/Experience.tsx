import React from "react";
import { FaCircle } from "react-icons/fa";
import SectionTitle from "../global/SectionTitle";
import { experiences } from "@/lib/constants/experience";

export default function Experience() {
  return (
    <div>
      <SectionTitle>Experience</SectionTitle>
      <div className="flex">
        <div className="w-[2px] bg-border rounded-full ml-2"></div>
        <div className="space-y-6 ml-[-7px]">
          {experiences.map((experience, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="flex-shrink-0 mt-2">
                <FaCircle
                  className={`${index == 0 ? "text-slate-400" : "text-border"} size-3 group-hover:text-slate-400 transition-all duration-300`}
                />
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
