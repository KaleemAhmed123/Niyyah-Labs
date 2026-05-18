"use client";

import { useState } from "react";

type Theme = "dark" | "light";

const storageKey = "niyyah-theme";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  const nextTheme = theme === "light" ? "dark" : "light";

  const handleToggle = () => {
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === "light"}
      className="theme-toggle"
      onClick={handleToggle}
      suppressHydrationWarning
      type="button"
    >
      <span aria-hidden="true" className="theme-toggle-track">
        <span className="theme-toggle-icon theme-toggle-sun" />
        <span className="theme-toggle-icon theme-toggle-moon" />
        <span className="theme-toggle-thumb" />
      </span>
      <span className="theme-toggle-label">
        {theme === "light" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
