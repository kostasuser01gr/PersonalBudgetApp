"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface LocaleContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "el",
  setLocale: () => {},
});

export function useLocale() {
  return useContext(LocaleContext);
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState("el");
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
