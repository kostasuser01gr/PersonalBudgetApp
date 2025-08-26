"use client";
import ExpensesTable from "./ExpensesTable";
export default function ExpensesList() {
  return (
    <div className="w-full mt-8">
      <ExpensesTable data={[]} /> {/* dummy */}
    </div>
  );
}
