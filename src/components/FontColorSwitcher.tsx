"use client";
import { useFontColor } from "@/context/FontColorContext";
export function FontColorSwitcher() {
  const { color, setColor } = useFontColor();
  const options = [
    { label: "Default", value: "default" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
    { label: "Red", value: "red" },
    { label: "Gold", value: "gold" },
  ];
  return (
    <div className="flex items-center gap-2">
      <span className="font-bold">Font color:</span>
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => setColor(o.value)}
          className={`px-2 py-1 rounded text-xs font-bold ${
            color === o.value
              ? "bg-gray-800 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
