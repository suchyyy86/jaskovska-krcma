import { useState, useEffect, useCallback } from "react"
import { useLocation, useNavigate, Link } from "react-router-dom"
import { Phone, Menu, X } from "lucide-react"
import { navItems } from "@/data/content"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
    document.body.style.overflow = ""
  }, [])

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => {
      document.body.style.overflow = prev ? "" : "hidden"
      return !prev
    })
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) closeMobile()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [mobileOpen, closeMobile])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      if (!isHome) {
        // navigate home first, then scroll
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
      closeMobile()
    }
  }

  // On subpages, header always has solid background
  const headerSolid = scrolled || !isHome

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
          headerSolid
            ? "bg-cream/97 backdrop-blur-md py-2 shadow-sm"
            : "py-5"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <Link 
            to="/" 
            className="block" 
            aria-label="Jaškovská Krčma — domů"
            onClick={() => {
              if (isHome) {
                window.scrollTo({ top: 0, behavior: "smooth" })
              } else {
                window.scrollTo(0, 0)
              }
            }}
          >
            <img
              src="/images/logo.png"
              alt="Jaškovská Krčma logo"
              className={cn(
                "transition-all duration-300",
                headerSolid 
                  ? "h-[45px]" 
                  : "h-[60px] brightness-0 invert object-contain"
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Hlavní navigace">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "relative text-sm font-medium uppercase tracking-[0.1em] transition-colors pb-1",
                  "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300",
                  "hover:text-gold hover:after:w-full",
                  headerSolid ? "text-ink" : "text-white"
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+420724782275"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.08em] border border-gold text-gold px-5 py-2.5 transition-all hover:bg-gold hover:text-white"
            >
              <Phone className="w-4 h-4" />
              Rezervace
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={toggleMobile}
            className="lg:hidden p-2 z-[91]"
            aria-label={mobileOpen ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className={cn("w-7 h-7", headerSolid || mobileOpen ? "text-ink" : "text-white")} />
            ) : (
              <Menu className={cn("w-7 h-7", headerSolid ? "text-ink" : "text-white")} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-cream/[.98] backdrop-blur-xl z-[90] flex items-center justify-center transition-opacity duration-400",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <nav>
          <ul className="text-center flex flex-col gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-display text-3xl text-ink hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+420724782275"
                className="inline-flex items-center justify-center gap-2 text-base font-medium text-white bg-gold px-8 py-3.5 uppercase tracking-[0.08em] hover:bg-gold-hover transition-colors"
              >
                <Phone className="w-4 h-4" />
                Rezervace
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
