import React from "react";
import Image from "next/image";
import profilePic from "../assets/images/profile-pic.jpeg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Separator } from "./ui/separator";

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
      <h2 className="mb-3 text-lg">Software Engineer</h2>
      <div className="flex gap-2 items-center mb-5">
        <Link href="https://github.com/ahurert" target="_blank" rel="noopener noreferrer">
          <FaGithub className="size-5" />
        </Link>
        <Link href="https://www.linkedin.com/in/ahurert/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="size-5" />
        </Link>
        <Link href="https://twitter.com/ahurert" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="size-5" />
        </Link>
      </div>
      <Separator />
    </div>
  );
}
