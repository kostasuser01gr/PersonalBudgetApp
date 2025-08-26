// src/lib/googleSheets.ts
import { google } from "googleapis";

const spreadsheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID!;

function getAuth() {
  return new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") ?? "",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

// Λήψη όλων των εξόδων
export async function getExpenses() {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Expenses!A2:G", // Υποθέτουμε ότι τα δεδομένα είναι εδώ
  });
  return res.data.values || [];
}

// Προσθήκη εξόδου
export async function addExpense(row: any[]) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Expenses!A2:G",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [row],
    },
  });
}
