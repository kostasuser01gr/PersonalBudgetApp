// src/components/ExpensesTable.tsx
"use client";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function ExpensesTable({ data }: { data: any[][] }) {
  const queryClient = useQueryClient();
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editRow, setEditRow] = useState<any[]>([]);

  // Διαγραφή εγγραφής
  async function handleDelete(i: number) {
    if (!window.confirm("Σίγουρα θες να διαγράψεις αυτό το έξοδο;")) return;
    const res = await fetch("/api/delete-expense", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rowIndex: i }),
    });
    if (res.ok) toast.success("Διαγράφηκε με επιτυχία!");
    else toast.error("Σφάλμα κατά τη διαγραφή!");
    queryClient.invalidateQueries({ queryKey: ["expenses"] });
  }

  // Έναρξη επεξεργασίας
  function startEdit(i: number) {
    setEditingIndex(i);
    setEditRow([...data[i]]);
  }

  // Άκυρο επεξεργασίας
  function cancelEdit() {
    setEditingIndex(null);
    setEditRow([]);
  }

  // Αλλαγή input στα πεδία edit
  function handleChange(index: number, value: string) {
    const updated = [...editRow];
    updated[index] = value;
    setEditRow(updated);
  }

  // Αποθήκευση επεξεργασίας
  async function saveEdit(i: number) {
    const res = await fetch("/api/update-expense", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rowIndex: i, row: editRow }),
    });
    if (res.ok) toast.success("Η επεξεργασία αποθηκεύτηκε!");
    else toast.error("Αποτυχία αποθήκευσης!");
    setEditingIndex(null);
    setEditRow([]);
    queryClient.invalidateQueries({ queryKey: ["expenses"] });
  }

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 shadow-xl mt-8 overflow-auto">
      <table className="w-full text-left" id="expenses-table">
        <thead>
          <tr>
            <th>Ημ/νία</th>
            <th>Κατηγορία</th>
            <th>Ποσό</th>
            <th>Περιγραφή</th>
            <th>Πληρωμή</th>
            <th>Κατάστημα</th>
            <th>Ενέργειες</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {editingIndex === i ? (
                <>
                  {editRow.slice(0, 6).map((val, idx) => (
                    <td key={idx}>
                      <input
                        value={val}
                        onChange={e => handleChange(idx, e.target.value)}
                        className="border rounded px-1 py-0.5"
                      />
                    </td>
                  ))}
                  <td>
                    <button
                      onClick={() => saveEdit(i)}
                      className="text-green-600 font-bold px-2"
                      title="Αποθήκευση"
                    >
                      ✔
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="text-gray-600 font-bold px-2"
                      title="Άκυρο"
                    >
                      ✖
                    </button>
                  </td>
                </>
              ) : (
                <>
                  {row.slice(0, 6).map((cell, idx) => <td key={idx}>{cell}</td>)}
                  <td>
                    <button
                      onClick={() => startEdit(i)}
                      className="text-blue-600 font-bold px-2"
                      title="Επεξεργασία"
                    >
                      ✎
                    </button>
                    <button
                      onClick={() => handleDelete(i)}
                      className="text-red-600 font-bold px-2"
                      title="Διαγραφή"
                    >
                      X
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
