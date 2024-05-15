"use client";

import { useTheme } from "next-app-theme/use-theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  // const icon = theme === "dark" ? <Sun /> : <Moon />;

  return <button className="text-black" onClick={toggleTheme}>icon</button>;
}
