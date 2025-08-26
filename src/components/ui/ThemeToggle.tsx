"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-black/20 p-2 rounded-full hover:bg-emerald-900/30 transition"
      title="Εναλλαγή Θέματος"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
