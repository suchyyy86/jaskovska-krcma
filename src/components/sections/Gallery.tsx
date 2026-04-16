import { useRef, useCallback } from "react"
import { useInView } from "@/hooks/useInView"
import { galleryImages } from "@/data/content"
import { cn } from "@/lib/utils"

export function Gallery() {
  const [titleRef, titleVisible] = useInView<HTMLHeadingElement>()
  const trackRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftRef = useRef(0)

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0)
    scrollLeftRef.current = trackRef.current?.scrollLeft ?? 0
    if (trackRef.current) trackRef.current.style.cursor = "grabbing"
  }, [])

  const onMouseUp = useCallback(() => {
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.cursor = "grab"
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    trackRef.current.scrollLeft = scrollLeftRef.current - walk
  }, [])

  return (
    <section className="py-12 md:py-24 overflow-hidden" aria-label="Fotogalerie jídel">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          ref={titleRef}
          className={cn(
            "font-display text-[clamp(2rem,5vw,4rem)] font-normal mb-16 text-ink relative text-center transition-all duration-700",
            "after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-gold after:mt-4 after:mx-auto",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="font-decorative italic text-[0.5em] block mb-2">
            Galerie
          </span>
          Naše kuchyně
        </h2>
      </div>
      <div
        ref={trackRef}
        className="flex gap-6 cursor-grab select-none px-6 overflow-x-auto scroll-snap-x scroll-snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {galleryImages.map((src, i) => (
          <div
            key={i}
            className="flex-none w-[300px] h-[350px] md:w-[400px] md:h-[450px] rounded-lg overflow-hidden scroll-snap-align-start"
          >
            <img
              src={src}
              alt={`Jídlo z Jaškovské Krčmy ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
              width={400}
              height={450}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
