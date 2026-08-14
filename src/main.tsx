import { StrictMode } from "react";  // buenas prácticas dev
import { createRoot } from "react-dom/client";
import App from "./App";
import "@/styles/global.css";

// busca id="root" con non-null assertion (asume que getElementById no devuelve null)
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);