import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProfileBootcampContainer from "./features/bootcamps/profile/profile.bootcamp.container.tsx"
import HomeContainer from "./features/home/Home.container.tsx"
import RankingContainer from "./features/ranking/Ranking.container.tsx"
import "./index.css"

const rootElement = document.getElementById("root")

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/ranking" element={<RankingContainer />} />
          <Route
            path="/bootcamp/:id"
            element={<ProfileBootcampContainer />}
          />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  )
} else {
  console.error("No se encontró el elemento con ID 'root'")
}
