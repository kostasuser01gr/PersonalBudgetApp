"use client";
import { Calendar, ListFilter } from "lucide-react";
export default function QuickFilterBar() {
  return (
    <div className="flex gap-4 items-center">
      <button className="flex items-center gap-2 bg-black/40 rounded-full px-4 py-2 text-white border border-emerald-800/50">
        <ListFilter size={18} /> Φίλτρα
      </button>
      <button className="flex items-center gap-2 bg-black/40 rounded-full px-4 py-2 text-white border border-emerald-800/50">
        <Calendar size={18} /> Μήνας
      </button>
    </div>
  );
}
