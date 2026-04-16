import { Outlet } from "react-router-dom"
import { Header } from "./sections/Header"
import { Footer } from "./sections/Footer"
import { ScrollToTop } from "./ScrollToTop"

export function Layout() {
  return (
    <div className="relative min-h-screen selection:bg-gold selection:text-white">
      <ScrollToTop />
      <a
        href="#main"
        className="absolute top-[-100%] left-0 bg-ink text-white px-4 py-2 z-[1000] text-sm focus:top-0"
      >
        Přeskočit na obsah
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
