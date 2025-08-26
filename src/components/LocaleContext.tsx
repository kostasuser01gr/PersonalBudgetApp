"use client";
import { createContext, useContext, useState } from "react";

const LocaleContext = createContext({
  locale: "el",
  setLocale: (l: string) => {},
});

export function useLocale() {
  return useContext(LocaleContext);
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState("el");
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
