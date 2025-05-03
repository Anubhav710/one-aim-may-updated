"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export const useTranslation = () => {
  const { locale, dictionary } = useLanguage();

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = dictionary;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return value || key;
  };

  return { t, locale };
};
