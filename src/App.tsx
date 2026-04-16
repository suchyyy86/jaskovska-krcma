import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { HomePage } from "./pages/HomePage"
import { UbytovaniPage } from "./pages/UbytovaniPage"
import { PronajemPage } from "./pages/PronajemPage"
import { DarkovePoukazy } from "./pages/DarkovePoukazy"
import { SvatbaPage } from "./pages/SvatbaPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/ubytovani" element={<UbytovaniPage />} />
          <Route path="/pronajem" element={<PronajemPage />} />
          <Route path="/darkove-poukazy" element={<DarkovePoukazy />} />
          <Route path="/svatba" element={<SvatbaPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
