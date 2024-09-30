import React from "react";
import { RiCarFill } from "react-icons/ri";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ProjectDialog from "@/components/projects/ProjectDialog";
import SectionTitle from "../global/SectionTitle";

export default function Projects() {
  const projects = [
    {
      icon: <RiCarFill className="text-slate-500 mb-2 size-8 p-2 border border-slate-500/40 rounded-md" />,
      name: "GoYaly Co. Ltd",
      description: "Booking system for car rental in Seattle.",
    },
    {
      icon: <RiCarFill className="text-slate-500 mb-2 size-8 p-2 border border-slate-500/40 rounded-md" />,
      name: "GoYaly Co. Ltd",
      description: "Booking system for car rental in Seattle.",
    },
    {
      icon: <RiCarFill className="text-slate-500 mb-2 size-8 p-2 border border-slate-500/40 rounded-md" />,
      name: "GoYaly Co. Ltd",
      description: "Booking system for car rental in Seattle.",
    },
    {
      icon: <RiCarFill className="text-slate-500 mb-2 size-8 p-2 border border-slate-500/40 rounded-md" />,
      name: "GoYaly Co. Ltd",
      description: "Booking system for car rental in Seattle.",
    },
  ];
  return (
    <div className="pb-28">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index}>
            <Dialog>
              <DialogTrigger>
                <div className="text-left p-2 max-w-[300px] hover:-translate-y-3 transition-all cursor-pointer">
                  {project.icon}
                  <h3 className="text-base font-medium">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </DialogTrigger>
              <ProjectDialog />
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
}
