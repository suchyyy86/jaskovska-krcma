import { useInView } from "@/hooks/useInView"
import { news } from "@/data/content"
import { cn } from "@/lib/utils"
import { Calendar } from "lucide-react"

export function News() {
  const [titleRef, titleVisible] = useInView<HTMLHeadingElement>()
  const [gridRef, gridVisible] = useInView<HTMLDivElement>()

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white" id="aktuality">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          ref={titleRef}
          className={cn(
            "font-display text-[clamp(2rem,5vw,4rem)] font-normal mb-12 text-ink relative text-center transition-all duration-700",
            "after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-gold after:mt-4 after:mx-auto",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="font-decorative italic text-[0.5em] block mb-2">
            Co je nového
          </span>
          Aktuality
        </h2>

        <div
          ref={gridRef}
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700",
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {news.map((item, i) => (
            <article
              key={i}
              className="group relative bg-cream rounded-lg p-8 hover:bg-ink transition-colors duration-300"
            >
              <div className="flex items-center gap-2 text-xs text-text-muted group-hover:text-white/50 transition-colors mb-4">
                <Calendar className="w-3.5 h-3.5" />
                {item.date}
              </div>
              <h3 className="font-display text-xl mb-3 text-ink group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-text-light group-hover:text-white/70 transition-colors leading-relaxed">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
