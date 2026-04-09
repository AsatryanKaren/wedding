import { createContext, useContext, useState } from "react";

const STORAGE_KEY = "wedding-invitation-mode";
// Change this to whatever parameter you want to check for in the URL (e.g. ?mode=full or ?invite=vip)
const QUERY_PARAM = "mode";

const InviteContext = createContext(null);

export function InviteProvider({ children }) {
  const [hasSpecialAccess, setHasSpecialAccess] = useState(() => {
    if (typeof window === "undefined") return false;

    // Check if the URL has the specific query parameter mode=full
    const params = new URLSearchParams(window.location.search);
    return params.get(QUERY_PARAM) === "full";
  });

  // You can expose whatever you need here to use later
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
