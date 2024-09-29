"use client";
import { ModeToggle } from "./ModeToggle";
import { useState, useRef, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";

export default function NavBar() {
  const [buttonClicked, setButtonClicked] = useState(0);
  const navLinks = ["About", "Blog", "Projects", "Contact"];
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateBackgroundPosition = () => {
      const activeButton = document.querySelector(`.nav-button-${buttonClicked}`);
      if (activeButton && backgroundRef.current) {
        const { offsetLeft, offsetWidth } = activeButton as HTMLElement;
        backgroundRef.current.style.transform = `translateX(${offsetLeft}px)`;
        backgroundRef.current.style.width = `${offsetWidth}px`;
      }
    };
    updateBackgroundPosition();
    window.addEventListener("resize", updateBackgroundPosition);
    return () => window.removeEventListener("resize", updateBackgroundPosition);
  }, [buttonClicked]);

  return (
    <div className="flex justify-between items-center relative">
      <div className="flex gap-2 items-center relative">
        <div ref={backgroundRef} className="absolute inset-y-0 bg-accent rounded-md transition-all duration-300" style={{ zIndex: 0 }}></div>
        {navLinks.map((link, index) => {
          const activeLink = buttonClicked === index ? true : false;
          return (
            <a key={index} href={`#${link}`}>
              <NavItem key={index} index={index} link={link} activeLink={activeLink} setButtonClicked={setButtonClicked} />
            </a>
          );
        })}
      </div>
      <ModeToggle />
    </div>
  );
}

interface NavItemProps {
  index: number;
  link: string;
  activeLink: boolean;
  setButtonClicked: Dispatch<SetStateAction<number>>;
}

function NavItem({ index, link, activeLink, setButtonClicked }: NavItemProps) {
  return (
    <button
      className={`nav-button-${index} text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm transition-colors px-2 py-1 rounded-md relative`}
      onClick={() => setButtonClicked(index)}
      style={{ zIndex: 1 }}
    >
      <span className={`relative z-10 tracking-tighter ${activeLink && "text-foreground font-semibold"}`}>{link}</span>
    </button>
  );
}
