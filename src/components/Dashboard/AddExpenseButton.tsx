"use client";
import { Plus } from "lucide-react";
export default function AddExpenseButton() {
  return (
    <button
      className="fixed bottom-20 right-6 bg-gradient-to-br from-emerald-500 to-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl z-50 hover:scale-105 active:scale-95 transition"
      title="Προσθήκη Εξόδου"
      // onClick={}  // Άνοιγμα modal/φόρμας
    >
      <Plus size={36} />
    </button>
  );
}
