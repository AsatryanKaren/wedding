import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations.js";
import { applyShareMeta } from "../shareMeta.js";

const STORAGE_KEY = "wedding-invitation-lang";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "hy") return saved;
    return "en";
  });

  const setLang = (next) => {
    if (next !== "en" && next !== "hy") return;
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const t = useMemo(() => translations[lang], [lang]);

  useEffect(() => {
    document.documentElement.lang = lang === "hy" ? "hy" : "en";
  }, [lang]);

  useEffect(() => {
    applyShareMeta(lang);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return ctx;
}
