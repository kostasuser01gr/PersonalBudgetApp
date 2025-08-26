"use client";
import ExpenseChart from "./ExpenseChart";
export default function ChartPanel() {
  return (
    <div className="w-full mt-8">
      <ExpenseChart data={[]} /> {/* dummy */}
    </div>
  );
}
