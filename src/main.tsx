import React from "react";
import ReactDOM from "react-dom/client";
import { MyRoutes } from "./router/index.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <MyRoutes />
    </React.StrictMode>,
  );
} else {
  console.error("No se encontró el elemento con ID 'root'");
}
