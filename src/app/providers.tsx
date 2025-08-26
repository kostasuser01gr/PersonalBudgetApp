"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";           // Πρόσθεσε ThemeProvider!
import { SessionProvider } from "next-auth/react";               // Μόνο αν έχεις NextAuth!
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  // *Αν δεν χρησιμοποιείς NextAuth, βγάλε το SessionProvider!*
  return (
    <ThemeProvider>
      {/* Αφαίρεσε το SessionProvider αν δεν κάνεις authentication */}
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
