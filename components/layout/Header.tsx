import React from "react";
import Image from "next/image";
import profilePic from "../../assets/images/profile-pic.png";
import { Separator } from "../ui/separator";
import NavBar from "../layout/NavBar";

export default function Header() {
  return (
    <div className="pt-12 pb-5">
      <div className="flex gap-4 justify-between items-center mb-10">
        <div>
          <div className="relative">
            <pre className="font-mono text-xs leading-none">
              {`/**
 *     █████╗ ██████╗ ███╗   ██╗ █████╗ ██╗   ██╗██████╗
 *    ██╔══██╗██╔══██╗████╗  ██║██╔══██╗██║   ██║██╔══██╗
 *    ███████║██████╔╝██╔██╗ ██║███████║██║   ██║██║  ██║
 *    ██╔══██║██╔══██╗██║╚██╗██║██╔══██║██║   ██║██║  ██║
 *    ██║  ██║██║  ██║██║ ╚████║██║  ██║╚██████╔╝██████╔╝
 *    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝
 *
 */`}
            </pre>
            <span className="absolute bottom-0 left-12 text-base text-muted-foreground">Software Developer</span>
          </div>
        </div>
        <Image
          className="rounded-full size-28 grayscale border-2 border-muted-foreground z-[-1]"
          src={profilePic}
          alt="Arnaud Huret React developer profile picture"
          width={180}
          height={190}
        />
      </div>
      <NavBar />
      <Separator />
    </div>
  );
}
