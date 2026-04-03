import { SquareArrowOutUpRight } from "lucide-react";

const projects = [
  {
    name: "Devtime",
    description: "Lightweight CLI tool to track time spent on projects.",
    url: "https://github.com/arnaudhrt/devtime",
  },
  {
    name: "GoLedger",
    description: "Simple TUI app to track daily expenses, incomes and investments.",
    url: "https://github.com/arnaudhrt/goledger",
  },
  {
    name: "Wannee",
    description: "Cross platform mobile app to learn thai language.",
    url: "#",
  },
];

export default function Projects() {
  return (
    <div className="pb-28">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <a href={project.url} target="_blank" rel="noopener noreferrer" key={index}>
            <div className="text-left p-2 w-full hover:-translate-y-1 transition-all cursor-pointer group">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">{project.name}</h3>
                <SquareArrowOutUpRight className="size-4 text-muted-foreground group-hover:text-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
