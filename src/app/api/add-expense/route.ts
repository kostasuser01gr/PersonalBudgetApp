import { NextRequest, NextResponse } from "next/server";
import { addExpense, getExpenses } from "@/lib/googleSheets";

// GET: Φέρνει όλα τα έξοδα
export async function GET() {
  try {
    const data = await getExpenses();
    return NextResponse.json({ ok: true, data });
  } catch (error) {
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}

// POST: Προσθέτει νέο έξοδο
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
