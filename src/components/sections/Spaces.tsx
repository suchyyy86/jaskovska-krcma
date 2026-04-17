import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { spaces, SpaceItem } from "@/data/content"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

export function Spaces() {
  const [titleRef, titleVisible] = useInView<HTMLHeadingElement>()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeSpace, setActiveSpace] = useState<SpaceItem | null>(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" })
    }
  }

  // Prevent scroll when modal is open
  useEffect(() => {
    if (activeSpace) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [activeSpace])

  return (
    <>
      <section className="py-16 md:py-24 bg-cream/30" id="prostory">
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <h2
            ref={titleRef}
            className={cn(
              "font-display text-[clamp(2rem,5vw,4rem)] font-normal mb-12 text-ink relative text-center transition-all duration-700",
              "after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-gold after:mt-4 after:mx-auto",
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="font-decorative italic text-[0.5em] block mb-2">
              Virtual View
            </span>
            Prostory krčmy
          </h2>

          <div className="relative group/carousel">
            {/* Left Button */}
            <button
              onClick={scrollLeft}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
              aria-label="Posunout doleva"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Scroll Container */}
            <div
              ref={scrollRef}
              className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory py-4 px-2 no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {spaces.map((space, i) => (
                <div
                  key={i}
                  className="snap-start min-w-[280px] md:min-w-[320px] max-w-[340px] flex-none bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col group p-6 relative"
                  onClick={() => setActiveSpace(space)}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-cream/30 rotate-45 rounded-sm"></div>
                  
                  <div className="mb-4">
                    <span className="text-[11px] md:text-xs text-gray-400 uppercase tracking-widest block mb-1">
                      {space.subtitle}
                    </span>
                    <h3 className="font-display font-medium text-lg md:text-xl text-gray-700 mb-3">
                      {space.title}
                    </h3>
                    <div className="h-[2px] w-full" style={{ background: "repeating-linear-gradient(45deg, #e5e5e5, #e5e5e5 2px, transparent 2px, transparent 6px)" }}></div>
                  </div>
                  
                  <div className="h-[220px] md:h-[260px] w-full overflow-hidden shrink-0 mt-auto">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={scrollRight}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
              aria-label="Posunout doprava"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* Street View Modal */}
      {activeSpace && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col pointer-events-auto">
          <div className="flex items-center justify-between p-4 bg-black/50 text-white absolute top-0 w-full z-[201] pointer-events-none">
            <h3 className="font-display text-xl">{activeSpace.title}</h3>
          </div>
          <button
            onClick={() => setActiveSpace(null)}
            className="absolute top-4 right-4 z-[202] w-12 h-12 bg-black/40 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-all"
            aria-label="Zavřít"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="w-full flex-1">
            <iframe
              src={`https://maps.google.com/maps?layer=c&panoid=${activeSpace.panoId}&cbp=1,${activeSpace.heading},,0,0&output=svembed`}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              title={`Virtuální prohlídka - ${activeSpace.title}`}
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}
