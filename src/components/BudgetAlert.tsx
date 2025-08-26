"use client";
export default function BudgetAlert({ data }: { data: any[][] }) {
  // Προσωρινά manual limits, βάλε τα από sheet αν θες:
  const limits = { Food: 600, Fuel: 159, Rent: 340, Insurance: 18.06, Internet: 35 };
  const totals = data.reduce((acc, cur) => {
    const cat = cur[1];
    const amt = parseFloat(cur[2]);
    acc[cat] = (acc[cat] || 0) + (isNaN(amt) ? 0 : amt);
    return acc;
  }, {} as Record<string, number>);

  const exceeded = Object.entries(limits).filter(
    ([cat, limit]) => (totals[cat] || 0) > limit * 0.9
  );

  if (exceeded.length === 0) return null;

  return (
    <div className="bg-red-500/90 text-white font-bold p-4 rounded-xl my-4 shadow-lg">
      <span>⚠️ ΠΡΟΣΟΧΗ: Ξεπέρασες το 90% του ορίου σε:</span>
      <ul>
        {exceeded.map(([cat, limit]) => (
          <li key={cat}>
            {cat}: {totals[cat]} / {limit}€
          </li>
        ))}
      </ul>
    </div>
  );
}
