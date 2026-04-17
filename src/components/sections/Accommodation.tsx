import { Link } from "react-router-dom"
import { Phone, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/useInView"
import { accommodations } from "@/data/content"
import { cn } from "@/lib/utils"

import { ImageCarousel } from "@/components/ui/image-carousel"
export function Accommodation() {
  const [titleRef, titleVisible] = useInView<HTMLHeadingElement>()
  const [gridRef, gridVisible] = useInView<HTMLDivElement>()
  const [ctaRef, ctaVisible] = useInView<HTMLDivElement>()

  return (
    <section className="py-16 md:py-24 lg:py-32" id="ubytovani">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          ref={titleRef}
          className={cn(
            "font-display text-[clamp(2rem,5vw,4rem)] font-normal mb-10 text-ink relative text-center transition-all duration-700",
            "after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-gold after:mt-4 after:mx-auto",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="font-decorative italic text-[0.5em] block mb-2">
            Ubytování
          </span>
          Kde budete spát
        </h2>

        <div
          ref={gridRef}
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-10 transition-all duration-700",
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {accommodations.map((item, i) => (
            <Link
              key={i}
              to="/ubytovani"
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="h-[280px] shrink-0">
                <ImageCarousel images={item.images.slice(0, 3)} title={item.title} />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-display text-[clamp(1.25rem,3vw,1.75rem)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed mb-5 flex-1">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.features.map((feat, fi) => (
                    <span
                      key={fi}
                      className="text-xs text-text-light bg-cream px-3 py-1 rounded-full"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-medium uppercase tracking-[0.06em] group-hover:gap-2 transition-all">
                  Ceník a informace <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div
          ref={ctaRef}
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 transition-all duration-700",
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <a
            href="tel:+420724782275"
            className="inline-flex items-center gap-2 bg-gold text-white text-sm font-medium uppercase tracking-[0.08em] px-6 py-3 hover:bg-gold-hover transition-colors"
          >
            <Phone className="w-4 h-4" />
            Rezervovat ubytování
          </a>
          <Link
            to="/ubytovani"
            className="inline-flex items-center gap-2 border border-gold text-gold text-sm font-medium uppercase tracking-[0.08em] px-6 py-3 hover:bg-gold hover:text-white transition-colors"
          >
            Pobytové balíčky a více
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
