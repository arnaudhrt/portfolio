import React from "react";
import Image from "next/image";
import profilePic from "../../assets/images/profile-pic.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiMapPinLineLight } from "react-icons/pi";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { PiBriefcase } from "react-icons/pi";
import NavBar from "../layout/NavBar";
import { infos } from "@/lib/constants/infos";

export default function Header() {
  return (
    <div className="pt-12 pb-5 bg-background">
      <div className="flex gap-4 justify-between items-center mb-5">
        <div>
          <h1 className="text-2xl font-bold ">Arnaud Huret</h1>
          <h2 className="mb-1 text-base">Frontend Developer</h2>
          <p className="mb-1 flex gap-2 items-center text-sm text-muted-foreground">
            <PiMapPinLineLight className="size-5" />
            {infos.location}
          </p>
          <p className="flex gap-2 items-center text-sm text-muted-foreground">
            <PiBriefcase className="size-5" />
            {infos.company}
          </p>
        </div>
        <Image
          className="rounded-full size-24 grayscale mb-2"
          src={profilePic}
          alt="Arnaud Huret React developer profile picture"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className="flex gap-3 items-center mb-5">
        <Link href={infos.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="size-5 hover:scale-110 transition" />
        </Link>
        <Link href={infos.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="size-5 hover:scale-110 transition" />
        </Link>
        <Link href={infos.twitter} target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="size-5 hover:scale-110 transition" />
        </Link>
      </div>
      <Separator />
      <NavBar />
    </div>
  );
}
