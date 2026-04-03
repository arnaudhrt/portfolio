import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <div className="pb-28">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <Dialog>
            <DialogTrigger>
              <div className="text-left p-2 max-w-[300px] hover:-translate-y-3 transition-all cursor-pointer">
                <h3 className="text-base font-medium">Name</h3>
                <p className="text-sm text-muted-foreground">Description</p>
              </div>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
