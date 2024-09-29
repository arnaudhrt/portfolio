"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="outline" size="icon" onClick={handleClick} className="bg-transparent">
      <Sun className="size-5 rotate-0 scale-100  transition-all dark:-rotate-180 dark:scale-0 text-muted-foreground duration-500" />
      <Moon className="absolute size-5 rotate-180 scale-0 transition-all dark:rotate-0 dark:scale-100 text-muted-foreground duration-500" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
