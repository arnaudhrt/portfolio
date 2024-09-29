"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function LayerBlur() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${theme === "light" ? "bg-blur-light" : "bg-blur-dark"} fixed top-0 left-0 w-full h-24 z-0 transition-opacity duration-300`}
      style={{ display: isVisible ? "block" : "none" }}
    ></div>
  );
}
