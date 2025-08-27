import { google } from "googleapis";

const spreadsheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID!;

function getAuth() {
  return new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") ?? "",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export type ExpenseRow = [string, string, string, string, string, string, string];

export async function getExpenses(): Promise<ExpenseRow[]> {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Expenses!A2:G",
  });
  // Προσθέτουμε as για να βοηθήσουμε το TypeScript.
  return (res.data.values as ExpenseRow[]) || [];
}

export async function addExpense(row: ExpenseRow) {
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
