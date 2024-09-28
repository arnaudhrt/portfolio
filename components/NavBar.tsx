import React from "react";

export default function NavBar() {
  const navLinks = ["About", "Blog", "Projects", "Contact"];
  return (
    <div className="flex gap-2 items-center">
      {navLinks.map((link, index) => (
        <a key={index} href={`#${link}`}>
          <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm transition-colors px-2 py-1 rounded-md relative">
            <span className=" relative z-10 tracking-tighter">{link}</span>
            {index == 1 && <span className="absolute inset-0 z-0 bg-gray-800 rounded-md"></span>}
          </button>
        </a>
      ))}
    </div>
  );
}
