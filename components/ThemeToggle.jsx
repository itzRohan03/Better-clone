"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="theme-toggle">
      <button
        onClick={() => setTheme("light")}
        className={currentTheme === "light" ? "active" : ""}
      >
        ☀️ 
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={currentTheme === "dark" ? "active" : ""}
      >
        🌙 
      </button>
      <button
        onClick={() => setTheme("system")}
        className={theme === "system" ? "active" : ""}
      >
        💻 
      </button>
    </div>
  );
}
