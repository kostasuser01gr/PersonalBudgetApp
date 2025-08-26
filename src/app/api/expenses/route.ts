// src/app/api/expenses/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getExpenses, addExpense } from "@/lib/googleSheets";

// GET: Επιστροφή εξόδων
export async function GET() {
  try {
    const data = await getExpenses();
    return NextResponse.json({ ok: true, data });
  } catch (error) {
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}

// POST: Προσθήκη εξόδου
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.row) return NextResponse.json({ ok: false, error: "No data" }, { status: 400 });
    await addExpense(body.row);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}

