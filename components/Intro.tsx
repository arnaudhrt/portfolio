import React from "react";
import Image from "next/image";
import profilePic from "../assets/images/profile-pic.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiMapPinLineLight } from "react-icons/pi";
import Link from "next/link";
import { ModeToggle } from "./global/ModeToggle";
import { Separator } from "./ui/separator";
import { PiBriefcase } from "react-icons/pi";

export default function Intro() {
  return (
    <div className="pt-12">
      <div className="flex gap-4 justify-between">
        <Image
          className="rounded-full size-20 grayscale mb-2"
          src={profilePic}
          alt="Arnaud Huret React developer profile picture"
          width={100}
          height={100}
          priority
        />
        <ModeToggle />
      </div>
      <h1 className="text-2xl font-bold ">Arnaud Huret</h1>
      <h2 className="mb-1 text-lg">Frontend Developer</h2>
      <p className="mb-1 flex gap-2 items-center text-sm text-muted-foreground">
        <PiMapPinLineLight className="size-5" />
        Phuket, Thailand
      </p>
      <p className="flex gap-2 items-center mb-3 text-sm text-muted-foreground">
        <PiBriefcase className="size-5" />
        Crazy Web Studio Co. Ltd.
      </p>
      <div className="flex gap-3 items-center mb-5 ">
        <Link href="https://github.com/ahurert" target="_blank" rel="noopener noreferrer">
          <FaGithub className="size-5 hover:text-purple-500 transition" />
        </Link>
        <Link href="https://www.linkedin.com/in/ahurert/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="size-5 hover:text-blue-400 transition" />
        </Link>
        <Link href="https://twitter.com/ahurert" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="size-5 hover:text-slate-500 transition" />
        </Link>
      </div>
      <Separator />
    </div>
  );
}
