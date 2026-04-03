import { useState, useRef, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import { FaGithub } from "react-icons/fa";

export default function NavBar({ setActiveTab }: { setActiveTab: Dispatch<SetStateAction<string>> }) {
  const [buttonClicked, setButtonClicked] = useState(0);
  const navLinks = ["About", "Projects", "Contact"];
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

  const handleClick = (index: number, link: string) => {
    setButtonClicked(index);
    setActiveTab(link);
  };

  return (
    <div className="flex justify-between items-center relative mb-2 z-50">
      <div className="flex gap-2 items-center relative">
        <div ref={backgroundRef} className="absolute inset-y-0 bg-accent rounded-md transition-all duration-300" style={{ zIndex: 0 }}></div>
        {navLinks.map((link, index) => {
          const activeLink = buttonClicked === index ? true : false;
          return (
            <a key={index} href={`#${link}`}>
              <NavItem key={index} index={index} link={link} activeLink={activeLink} setButtonClicked={() => handleClick(index, link)} />
            </a>
          );
        })}
      </div>
      <a href="https://github.com/arnaudhrt" target="_blank" rel="noopener noreferrer">
        <FaGithub className="size-5 hover:scale-110 transition text-muted-foreground hover:text-foreground" />
      </a>
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
      className={`nav-button-${index} text-muted-foreground hover:text-foreground text-sm transition-colors px-2 py-1 rounded-md relative cursor-pointer`}
      onClick={() => setButtonClicked(index)}
      style={{ zIndex: 1 }}
    >
      <span className={`relative z-10 tracking-tighter ${activeLink && "text-foreground font-semibold"}`}>{link}</span>
    </button>
  );
}
