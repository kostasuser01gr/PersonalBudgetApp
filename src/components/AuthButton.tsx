"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return <span>Φόρτωση...</span>;
  if (session)
    return (
      <div className="flex gap-2 items-center">
        <span className="text-sm text-gray-600">{session.user?.email}</span>
        <button
          onClick={() => signOut()}
          className="bg-red-700 text-white px-3 py-1 rounded"
        >
          Αποσύνδεση
        </button>
      </div>
    );

  return (
    <button
      onClick={() => signIn("google")}
      className="bg-green-700 text-white px-3 py-1 rounded"
    >
      Σύνδεση με Google
    </button>
  );
}
