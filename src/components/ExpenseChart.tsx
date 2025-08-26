"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function ExpenseChart({ data }: { data: any[][] }) {
  const grouped = data.reduce((acc, cur) => {
    const cat = cur[1];
    const amt = parseFloat(cur[2]);
    acc[cat] = (acc[cat] || 0) + (isNaN(amt) ? 0 : amt);
    return acc;
  }, {} as Record<string, number>);

  const chartData = Object.entries(grouped).map(([cat, value]) => ({
    name: cat,
    value,
  }));
  const COLORS = ["#009a63", "#3ed374", "#16b574", "#10542d", "#ffe47a", "#ff99a6"];

  return (
    <div className="bg-white/5 p-4 rounded-xl mt-8 w-full max-w-2xl mx-auto shadow-xl">
      <h2 className="text-lg font-bold text-center mb-4 text-luxury-green">
        Ανάλυση εξόδων ανά κατηγορία
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#009a63"
            label
          >
            {chartData.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
