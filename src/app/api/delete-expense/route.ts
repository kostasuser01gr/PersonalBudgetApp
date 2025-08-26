// src/app/api/delete-expense/route.ts
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

// Διαγράφει μια γραμμή (έξοδο) από το Sheet βάσει index
export async function POST(req: NextRequest) {
  try {
    const { rowIndex } = await req.json();
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            deleteDimension: {
              range: {
                sheetId: 0, // άλλαξε το αν χρειάζεται (δες πιο κάτω)
                dimension: "ROWS",
                startIndex: rowIndex + 1, // +1 γιατί 0=header
                endIndex: rowIndex + 2,
              },
            },
          },
        ],
      },
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
