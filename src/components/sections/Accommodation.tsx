import { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import { Phone, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "@/hooks/useInView"
import { accommodations } from "@/data/content"
import { cn } from "@/lib/utils"

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="relative h-[280px] overflow-hidden group">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${title} ${i + 1}`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
            i === current ? "opacity-100" : "opacity-0"
          )}
          loading="lazy"
        />
      ))}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Předchozí"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Další"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  i === current ? "bg-white w-4" : "bg-white/50"
                )}
                aria-label={`Obrázek ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

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
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block group"
            >
              <ImageCarousel images={item.images} title={item.title} />
              <div className="p-8">
                <h3 className="font-display text-[clamp(1.25rem,3vw,1.75rem)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed mb-5">
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
