import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import { InviteProvider } from "./hooks/InviteContext.jsx";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InviteProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </InviteProvider>
  </React.StrictMode>,
);
