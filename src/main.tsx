import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/global.css";
import "./assets/animations.css";
import Home from "./page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
