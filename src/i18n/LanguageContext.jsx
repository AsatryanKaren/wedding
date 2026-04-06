import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations.js";
import { applyShareMeta } from "../shareMeta.js";

const STORAGE_KEY = "wedding-invitation-lang";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === "undefined") return "en";

    // 1. Check URL parameters (standard way: ?lang=en)
    const params = new URLSearchParams(window.location.search);
    let urlLang = params.get("lang");
    
    // Normalize "am" to "hy"
    if (urlLang === "am") urlLang = "hy";

    if (urlLang === "en" || urlLang === "hy" || urlLang === "ru") {
      window.localStorage.setItem(STORAGE_KEY, urlLang);
      return urlLang;
    }

    // 2. Check local storage
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "hy" || saved === "ru") return saved;

    // 3. Fallback to default
    return "en";
  });

  const setLang = (next) => {
    if (next !== "en" && next !== "hy" && next !== "ru") return;
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const t = useMemo(() => translations[lang], [lang]);

  useEffect(() => {
    document.documentElement.lang =
      lang === "hy" ? "hy" : lang === "ru" ? "ru" : "en";
  }, [lang]);

  useEffect(() => {
    applyShareMeta(lang);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return ctx;
}
