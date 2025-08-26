"use client";
import { createContext, useContext, useState } from "react";

const COLORS = {
  default: "text-black dark:text-white",
  green: "text-green-600",
  blue: "text-blue-600",
  red: "text-red-600",
  gold: "text-yellow-600",
};

type FontColor = keyof typeof COLORS;

const FontColorContext = createContext<{
  color: FontColor;
  setColor: (c: FontColor) => void;
  colorClass: string;
}>({
  color: "default",
  setColor: () => {},
  colorClass: COLORS.default,
});

export function useFontColor() {
  return useContext(FontColorContext);
}

export function FontColorProvider({ children }: { children: React.ReactNode }) {
  const [color, setColor] = useState<FontColor>("default");
  const colorClass = COLORS[color] || COLORS.default;
  return (
    <FontColorContext.Provider value={{ color, setColor, colorClass }}>
      {children}
    </FontColorContext.Provider>
  );
}
