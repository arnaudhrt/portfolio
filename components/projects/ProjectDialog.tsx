import React from "react";
import { DialogContent, DialogHeader } from "@/components/ui/dialog";
import Image from "next/image";
import { IoLink } from "react-icons/io5";
import { projectContent } from "@/lib/constants/projects";

export default function ProjectDialog({ name }: { name: string }) {
  const project = projectContent.find((project) => project.name === name);
  if (!project) return null;
  return (
    <div>
      <DialogContent>
        <DialogHeader>
          <div className="flex gap-4 items-center mb-3">
            <div className="rounded-full p-2 size-14 bg-accent flex justify-center items-center">
              <Image src={project.logo} alt={project.name} width={100} height={100} className="" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{project.name}</h2>
              <p className="text-sm text-muted-foreground">{project.location}</p>
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
              <p className="text-sm text-muted-foreground">
                This project has been developped in colaboration with{" "}
                <a href="https://www.pierrehrt.com" className="text-foreground underline">
                  @pierrehrt
                </a>
                .
              </p>
            </div>
            <div className="flex gap-2 items-center">
              {project.techStack.map((tech, index) => {
                return <div key={index}>{tech}</div>;
              })}
            </div>
            <div className="flex gap-6 items-center">
              <div className="flex gap-1 items-center hover:underline">
                <IoLink className="size-5 text-foreground" />
                <a href={project.linkRepo} className="text-sm text-foreground">
                  GitHub Repo
                </a>
              </div>
              <div className="flex gap-1 items-center hover:underline">
                <IoLink className="size-5 text-foreground" />
                <a href={project.LinkApp} className="text-sm text-foreground">
                  Live App
                </a>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </div>
  );
}
