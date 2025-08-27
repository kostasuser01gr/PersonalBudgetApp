"use client";
import { ExpenseRow } from "@/types/expense";

export default function ExpensesTable({ data }: { data: ExpenseRow[] }) {
  // Εδώ βάζεις τον πίνακα εξόδων όπως πριν, απλά με τύπους.
  return (
    <table id="expenses-table" className="w-full text-white">
      <thead>
        <tr>
          <th>Ημερομηνία</th>
          <th>Κατηγορία</th>
          <th>Ποσό</th>
          <th>Περιγραφή</th>
          <th>Πληρωμή</th>
          <th>Κατάστημα</th>
        </tr>
      </thead>
      <tbody>
        {(data || []).map((row, i) => (
          <tr key={i}>
            <td>{row[0]}</td>
            <td>{row[1]}</td>
            <td>{row[2]}</td>
            <td>{row[3]}</td>
            <td>{row[4]}</td>
            <td>{row[5]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
