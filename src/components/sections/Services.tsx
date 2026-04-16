import { Zap, Beer, Wine, Music, Flame, Users } from "lucide-react"
import { useInView } from "@/hooks/useInView"
import { services } from "@/data/content"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ReactNode> = {
  zap: <Zap className="w-6 h-6" />,
  beer: <Beer className="w-6 h-6" />,
  wine: <Wine className="w-6 h-6" />,
  music: <Music className="w-6 h-6" />,
  flame: <Flame className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
}

export function Services() {
  const [titleRef, titleVisible] = useInView<HTMLHeadingElement>()
  const [gridRef, gridVisible] = useInView<HTMLDivElement>()

  return (
    <section className="py-16 md:py-24 lg:py-32" id="sluzby">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          ref={titleRef}
          className={cn(
            "font-display text-[clamp(2rem,5vw,4rem)] font-normal mb-4 text-ink relative text-center transition-all duration-700",
            "after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-gold after:mt-4 after:mx-auto",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="font-decorative italic text-[0.5em] block mb-2">
            Pro Váš zážitek
          </span>
          Doplňkové služby
        </h2>
        <p className="text-center text-text-light max-w-[55ch] mx-auto mb-12">
          Od nabíjení elektromobilů po teambuilding — připravíme cokoliv na míru.
        </p>

        <div
          ref={gridRef}
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700",
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-display text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-text-light leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
