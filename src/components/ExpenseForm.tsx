"use client";
import { useState } from "react";

type Props = {
  onAdd: (row: any[]) => Promise<void>;
  loading?: boolean;
};

export default function ExpenseForm({ onAdd, loading = false }: Props) {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [method, setMethod] = useState("");
  const [vendor, setVendor] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    // Μπορείς να ελέγξεις αν loading, αν χρειάζεται: if (loading) return;
    await onAdd([date, category, amount, desc, method, vendor, ""]);
    setDate(""); setCategory(""); setAmount(""); setDesc(""); setMethod(""); setVendor("");
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl flex flex-col gap-4 max-w-xl mx-auto"
      style={{ border: "1.5px solid #17643A" }}
    >
      <div className="text-2xl font-extrabold text-luxury-green mb-2">Νέα Καταχώρηση</div>
      <input
        className="rounded-xl px-4 py-2 border outline-none focus:ring-2 focus:ring-luxury-green bg-white/80"
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        required
      />
      <input
        className="rounded-xl px-4 py-2 border outline-none focus:ring-2 focus:ring-luxury-green bg-white/80"
        placeholder="Κατηγορία"
        value={category}
        onChange={e => setCategory(e.target.value)}
        required
      />
      <input
        className="rounded-xl px-4 py-2 border outline-none focus:ring-2 focus:ring-luxury-green bg-white/80"
        type="number"
        step="0.01"
        placeholder="Ποσό"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        required
      />
      <input
        className="rounded-xl px-4 py-2 border outline-none focus:ring-2 focus:ring-luxury-green bg-white/80"
        placeholder="Περιγραφή"
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <input
        className="rounded-xl px-4 py-2 border outline-none focus:ring-2 focus:ring-luxury-green bg-white/80"
        placeholder="Πληρωμή (κάρτα/μετρητά)"
        value={method}
        onChange={e => setMethod(e.target.value)}
      />
      <input
        className="rounded-xl px-4 py-2 border outline-none focus:ring-2 focus:ring-luxury-green bg-white/80"
        placeholder="Κατάστημα"
        value={vendor}
        onChange={e => setVendor(e.target.value)}
      />
      <button
        type="submit"
        className="bg-luxury-green hover:bg-green-700 transition text-white font-bold rounded-xl px-4 py-2 mt-2 shadow-md"
        disabled={loading}
      >
        {loading ? "Αποθήκευση..." : "Καταχώρησε"}
      </button>
    </form>
  );
}
