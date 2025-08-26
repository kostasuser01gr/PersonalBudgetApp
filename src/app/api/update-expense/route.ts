import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const spreadsheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID!;
function getAuth() {
  return new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") ?? "",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function POST(req: NextRequest) {
  try {
    const { rowIndex, row } = await req.json(); // row = τα νέα δεδομένα
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Expenses!A${rowIndex + 2}:F${rowIndex + 2}`, // προσαρμόζεις το range αν χρειάζεται
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
