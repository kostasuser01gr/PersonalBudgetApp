"use client";
import { TrendingUp, PieChart } from "lucide-react";
export default function StatsPanel() {
  // Dummy data for UI
  const monthTotal = 620.40, food = 320, bills = 60, rent = 240;
  return (
    <div className="flex gap-8">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-emerald-400">{monthTotal.toFixed(2)}€</span>
        <span className="text-xs text-gray-300">Σύνολο μήνα</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold text-green-200">{food}€</span>
        <span className="text-xs text-gray-400">Φαγητό</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold text-yellow-200">{bills}€</span>
        <span className="text-xs text-gray-400">Λογαριασμοί</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold text-blue-200">{rent}€</span>
        <span className="text-xs text-gray-400">Ενοίκιο</span>
      </div>
    </div>
  );
}
