import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContainer from "./features/app/App.container.tsx";
import RankingContainer from "./features/ranking/Ranking.container.tsx";
import BootcampProfileView from "./features/perfil-bootcamp/P-Bootcamp.view.tsx";
import "./index.css";
import 'bootswatch/dist/yeti/bootstrap.min.css';

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<AppContainer />} />
          <Route path="/ranking" element={<RankingContainer />} />
          <Route path="/bootcamp/view/1" element={<BootcampProfileView />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
} else {
  console.error("No se encontró el elemento con ID 'root'");
}
