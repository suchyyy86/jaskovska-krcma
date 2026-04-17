import { Link, useLocation, useNavigate } from "react-router-dom"
import { navItems } from "@/data/content"

export function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === "/"

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      if (!isHome) {
        navigate("/")
        setTimeout(() => {
          const target = document.querySelector(href)
          if (target) {
            const headerH = 80
            const top = target.getBoundingClientRect().top + window.scrollY - headerH
            window.scrollTo({ top, behavior: "smooth" })
          }
        }, 100)
      } else {
        const target = document.querySelector(href)
        if (target) {
          const headerH = 80
          const top = target.getBoundingClientRect().top + window.scrollY - headerH
          window.scrollTo({ top, behavior: "smooth" })
        }
      }
    }
  }

  return (
    <footer className="bg-gold text-white py-12 md:py-24 pb-6 md:pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16">
          {/* Brand */}
          <div>
            <Link to="/" className="block">
              <div className="font-decorative italic text-[2rem] text-white mb-4 leading-tight">
                Jaškovská Krčma
              </div>
            </Link>
            <p className="text-sm text-white/80 leading-relaxed max-w-[300px]">
              Sedm století dlouhá cesta ke spokojenosti těla i ducha. Hotel a
              restaurace u Těrlické přehrady.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/jaskovskakrcma.cz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/15 hover:border-white/50 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="http://instagram.com/jaskovska_krcma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/15 hover:border-white/50 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://www.tripadvisor.cz/Restaurant_Review-g1453700-d8564416-Reviews-Jaskovska_Krcma_Restaurace-Terlicko_Moravian_Silesian_Region_Moravia.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TripAdvisor"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/15 hover:border-white/50 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                  <circle cx="6.5" cy="13.5" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.5" cy="13.5" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 3C7 3 3 6 2 10h4a4.5 4.5 0 1 1 4 7h4a4.5 4.5 0 1 1 4-7h4c-1-4-5-7-10-7z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.1em] mb-6 text-white/90">
              Navigace
            </h4>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Link to="/svatba" className="text-sm text-white/80 hover:text-white transition-colors">
                Svatby
              </Link>
              <Link to="/ubytovani" className="text-sm text-white/80 hover:text-white transition-colors">
                Pobytové balíčky
              </Link>
              <Link to="/pronajem" className="text-sm text-white/80 hover:text-white transition-colors">
                Pronájem prostor
              </Link>
              <Link to="/darkove-poukazy" className="text-sm text-white/80 hover:text-white transition-colors">
                Dárkové poukazy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.1em] mb-6 text-white/90">
              Kontakt
            </h4>
            <div className="flex flex-col gap-2">
              <a href="tel:+420724782275" className="text-sm text-white/80 hover:text-white transition-colors">
                +420 724 782 275
              </a>
              <a href="mailto:info@jaskovskakrcma.cz" className="text-sm text-white/80 hover:text-white transition-colors">
                info@jaskovskakrcma.cz
              </a>
              <span className="text-sm text-white/70">
                Horní Těrlicko 242<br />735 42 Těrlicko
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-6 text-center text-xs text-white/60">
          © 2026 Jaškovská Krčma. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  )
}
