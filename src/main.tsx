import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppContainer from "./features/app/App.container.tsx"
import ProfileBootcampContainer from "./features/bootcamps/profile/profile.bootcamp.container.tsx"
import RankingContainer from "./features/ranking/Ranking.container.tsx"
import "./index.css"

const rootElement = document.getElementById("root")

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<AppContainer />} />
          <Route path="/ranking" element={<RankingContainer />} />
          <Route
            path="/bootcamp/view/1"
            element={<ProfileBootcampContainer />}
          />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  )
} else {
  console.error("No se encontró el elemento con ID 'root'")
}
