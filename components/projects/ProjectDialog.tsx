"use client";
import { DialogContent, DialogHeader } from "@/components/ui/dialog";
import Image from "next/image";
import { IoLink } from "react-icons/io5";
import { projectContent } from "@/lib/constants/projects";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProjectDialog({ name }: { name: string }) {
  const router = useRouter();
  const project = projectContent.find((project) => project.name === name);
  const [isRepoPrivate, setIsRepoPrivate] = useState(false);
  const [isAppPrivate, setIsAppPrivate] = useState(false);
  if (!project) return null;

  const handleCickRepo = () => {
    setIsRepoPrivate(false);
    if (project.linkRepo === "private") {
      setIsRepoPrivate(true);
    } else {
      router.push(project.linkRepo);
    }
  };
  const handleCickApp = () => {
    setIsAppPrivate(false);
    if (project.LinkApp === "private") {
      setIsAppPrivate(true);
    } else {
      router.push(project.LinkApp);
    }
  };
  return (
    <div>
      <DialogContent>
        <DialogHeader>
          <div className="flex gap-4 items-center mb-3">
            <div className="rounded-full p-2 size-14 bg-accent flex justify-center items-center">
              <Image src={project.logo} alt={project.name} width={100} height={100} className="rounded-full" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{project.name}</h2>
              <p className="text-sm text-muted-foreground">{project.location}</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
            <div>
              <p className="text-sm text-muted-foreground text-left mb-1">Team:</p>
              <div className="flex gap-5 items-center ">
                {project.team &&
                  project.team.map((el, index) => (
                    <div key={index} className="flex gap-1 items-center group">
                      <IoLink className="size-5 text-muted-foreground group-hover:text-foreground" />
                      <a href={el.link} className="text-sm text-muted-foreground group-hover:text-foreground">
                        {el.name}
                      </a>
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex gap-2 items-center flex-wrap">
              {project.techStack.map((tech, index) => {
                return <div key={index}>{tech}</div>;
              })}
            </div>

            <div className="flex gap-6 items-center">
              <div className="flex gap-1 items-center hover:underline group transition-all duration-300">
                <IoLink className="size-5 text-muted-foreground group-hover:text-foreground" />
                <div className="text-sm overflow-hidden relative w-24 p-3 cursor-pointer" onClick={handleCickRepo}>
                  <span className={`text-red-500 absolute left-1 transition-all duration-300 ${isRepoPrivate ? "top-[1px]" : "top-10"}`}>
                    Private Repo
                  </span>
                  <span
                    className={`absolute left-1 transition-all duration-300 ${
                      isRepoPrivate ? "-top-10" : "top-[1px]"
                    } whitespace-nowrap text-muted-foreground group-hover:text-foreground`}
                  >
                    Github Repo
                  </span>
                </div>
              </div>
              <div className="flex gap-1 items-center hover:underline group transition-all duration-300">
                <IoLink className="size-5 text-muted-foreground group-hover:text-foreground" />
                <div className="text-sm overflow-hidden relative w-24 p-3 cursor-pointer" onClick={handleCickApp}>
                  <span className={`text-red-500 absolute left-1 transition-all duration-300 ${isAppPrivate ? "top-[1px]" : "top-10"}`}>
                    Private Repo
                  </span>
                  <span
                    className={`absolute left-1 transition-all duration-300 ${
                      isAppPrivate ? "-top-10" : "top-[1px]"
                    } whitespace-nowrap text-muted-foreground group-hover:text-foreground`}
                  >
                    Live App
                  </span>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </div>
  );
}
