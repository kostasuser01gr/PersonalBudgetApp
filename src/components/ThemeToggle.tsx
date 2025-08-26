"use client";
import { useTheme } from "@/context/ThemeContext";
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
