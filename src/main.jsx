import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import { applyShareMeta } from "./shareMeta.js";
import "./styles/global.css";

applyShareMeta();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

