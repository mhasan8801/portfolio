"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/data/content";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start with "en" — matches server render
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // After mount, sync with localStorage without causing mismatch
    const saved = localStorage.getItem("language") as Language;
    if (saved === "id") setLanguage("id");
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string =>
    translations[language][key as keyof (typeof translations)["en"]] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
