"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, i18n } from "@/i18n/settings";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dictionary: any;
};

const DEFAULT_LOCALE = i18n.defaultLocale as Locale;

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [dictionary, setDictionary] = useState<any>({});

  const loadDictionary = async (locale: Locale) => {
    try {
      const dict = await import(`@/i18n/dictionaries/${locale}.json`);
      setDictionary(dict);
    } catch (error) {
      console.error(`Error loading dictionary for locale ${locale}:`, error);
    }
  };

  useEffect(() => {
    loadDictionary(locale);
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    if (i18n.locales.includes(newLocale)) {
      setLocaleState(newLocale);
      localStorage.setItem("language", newLocale);
    }
  };

  // Initialize language from localStorage if available
  useEffect(() => {
    const savedLanguage =
      typeof window !== "undefined"
        ? (localStorage.getItem("language") as Locale)
        : null;

    if (savedLanguage && i18n.locales.includes(savedLanguage)) {
      setLocaleState(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
