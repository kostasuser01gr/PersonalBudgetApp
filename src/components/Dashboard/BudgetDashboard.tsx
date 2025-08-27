"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { toast } from "sonner";
import { useFontColor } from "@/context/FontColorContext";
import { FontColorSwitcher } from "@/components/FontColorSwitcher";
import ExpenseForm from "@/components/ExpenseForm";
import ExpensesTable from "@/components/ExpensesTable";
import ExpenseChart from "@/components/ExpenseChart";
import BudgetAlert from "@/components/BudgetAlert";

type ExpenseRow = [string, string, string | number, string?, string?, string?, string?];

export default function BudgetDashboard() {
  const { colorClass } = useFontColor();
  const queryClient = useQueryClient();
  const [dark, setDark] = useState(false);

  const { data, isLoading } = useQuery<ExpenseRow[]>({
    queryKey: ["expenses"],
    queryFn: async () => {
      const res = await fetch("/api/expenses");
      const json = await res.json();
      return (json.data ?? []) as ExpenseRow[];
    },
  });

  const mutation = useMutation({
    mutationFn: async (row: ExpenseRow) => {
      await fetch("/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ row }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      toast.success("Το έξοδο προστέθηκε!");
    },
    onError: () => {
      toast.error("Σφάλμα κατά την καταχώρηση!");
    },
  });

  function exportToExcel(data: ExpenseRow[]) {
    const ws = XLSX.utils.aoa_to_sheet([
      ["Ημερομηνία", "Κατηγορία", "Ποσό", "Περιγραφή", "Πληρωμή", "Κατάστημα"],
      ...(data || []),
    ]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Expenses");
    XLSX.writeFile(wb, "expenses.xlsx");
    toast.success("Εξαγωγή σε Excel ολοκληρώθηκε!");
  }

  async function exportToPDF() {
    const input = document.getElementById("expenses-table");
    if (!input) return;
    const canvas = await html2canvas(input as HTMLElement);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "pt",
      format: [canvas.width, canvas.height],
    });
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("expenses.pdf");
    toast.success("Εξαγωγή σε PDF ολοκληρώθηκε!");
  }

  return (
    <main className={`${colorClass} ${dark ? "dark" : ""} min-h-screen bg-gradient-to-br from-luxury-green to-black py-10`}>
      <div className="flex flex-col items-center gap-10 max-w-5xl mx-auto">
        <FontColorSwitcher />
        <div className="flex flex-row justify-between w-full mb-4">
          <h1 className={`text-4xl font-extrabold text-center drop-shadow-xl tracking-tight ${colorClass}`}>
            💸 Personal Budget Dashboard
          </h1>
          <button
            onClick={() => setDark((v) => !v)}
            className="ml-4 bg-gray-800 text-white rounded-full px-3 py-2 text-xs"
          >
            {dark ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
        <BudgetAlert data={data || []} />
        <ExpenseForm onAdd={mutation.mutateAsync} loading={mutation.isPending} />
        <ExpenseChart data={data || []} />
        <div className="flex gap-4">
          <button
            onClick={() => exportToExcel(data || [])}
            className="bg-green-700 text-white px-4 py-2 rounded-xl font-bold mt-4"
          >
            Εξαγωγή σε Excel
          </button>
          <button
            onClick={exportToPDF}
            className="bg-blue-700 text-white px-4 py-2 rounded-xl font-bold mt-4"
          >
            Εξαγωγή σε PDF
          </button>
        </div>
        <ExpensesTable data={data || []} />
      </div>
    </main>
  );
}
