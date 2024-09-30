import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ProjectDialog from "@/components/projects/ProjectDialog";
import SectionTitle from "../global/SectionTitle";
import { projectCards } from "@/lib/constants/projects";

export default function Projects() {
  return (
    <div className="pb-28">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projectCards.map((project, index) => (
          <div key={index}>
            <Dialog>
              <DialogTrigger>
                <div className="text-left p-2 max-w-[300px] hover:-translate-y-3 transition-all cursor-pointer">
                  {project.icon}
                  <h3 className="text-base font-medium">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </DialogTrigger>
              <ProjectDialog name={project.name} />
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
}
