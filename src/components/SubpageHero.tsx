import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

interface SubpageHeroProps {
  title: string
  subtitle?: string
  image: string
  breadcrumb: string
}

export function SubpageHero({ title, subtitle, image, breadcrumb }: SubpageHeroProps) {
  return (
    <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>
      <div className="relative z-10 text-center text-white px-6 max-w-[900px]">
        {subtitle && (
          <p className="font-decorative italic text-[clamp(1rem,2vw,1.25rem)] font-light mb-3 opacity-90">
            {subtitle}
          </p>
        )}
        <h1 className="font-display text-[clamp(2rem,5vw,4rem)] font-normal leading-tight mb-4">
          {title}
        </h1>
        <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
          <Link to="/" className="hover:text-white transition-colors">
            Domů
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gold">{breadcrumb}</span>
        </nav>
      </div>
    </section>
  )
}
