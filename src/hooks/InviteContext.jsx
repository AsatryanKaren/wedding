import { createContext, useCallback, useContext, useState } from "react";

const STORAGE_KEY = "wedding-invitation-mode";
const STORAGE_VALUE_FULL = "full";
// Change this to whatever parameter you want to check for in the URL (e.g. ?mode=full or ?invite=vip)
const QUERY_PARAM = "mode";

function readInitialAccess() {
  if (typeof window === "undefined") return false;

  const params = new URLSearchParams(window.location.search);

  if (!params.has(QUERY_PARAM)) {
    return localStorage.getItem(STORAGE_KEY) === STORAGE_VALUE_FULL;
  }

  const mode = params.get(QUERY_PARAM);
  if (mode === "full") {
    localStorage.setItem(STORAGE_KEY, STORAGE_VALUE_FULL);
    return true;
  }

  localStorage.removeItem(STORAGE_KEY);
  return false;
}

const InviteContext = createContext(null);

export function InviteProvider({ children }) {
  const [hasSpecialAccess, setHasSpecialAccessState] = useState(readInitialAccess);

  const setHasSpecialAccess = useCallback((next) => {
    setHasSpecialAccessState((prev) => {
      const v = typeof next === "function" ? next(prev) : next;
      if (typeof window !== "undefined") {
        if (v) {
          localStorage.setItem(STORAGE_KEY, STORAGE_VALUE_FULL);
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      }
      return v;
    });
  }, []);

  const value = {
    hasSpecialAccess,
    setHasSpecialAccess,
  };

  return <InviteContext.Provider value={value}>{children}</InviteContext.Provider>;
}

export function useInviteMode() {
  const ctx = useContext(InviteContext);
  if (!ctx) {
    throw new Error("useInviteMode must be used within an InviteProvider");
  }
  return ctx;
}
