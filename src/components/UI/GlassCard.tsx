"use client";
import { cn } from "@/lib/utils";
export default function GlassCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn(
      "bg-white/10 dark:bg-black/30 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 dark:border-emerald-900/40 p-6",
      className
    )}>
      {children}
    </div>
  );
}
