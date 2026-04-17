import { useInView } from "@/hooks/useInView"
import { foodGalleryImages } from "@/data/content"
import { cn } from "@/lib/utils"

export function Gallery() {
  const [ref, isVisible] = useInView<HTMLDivElement>()

  return (
    <section className="py-12 md:py-24" aria-label="Fotogalerie jídel">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-normal mb-12 text-ink text-center relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-gold after:mt-4 after:mx-auto">
            <span className="font-decorative italic text-[0.5em] block mb-2">
              Galerie
            </span>
            Naše kuchyně
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {foodGalleryImages.map((src, i) => (
              <div
                key={i}
                className={cn(
                  "overflow-hidden rounded-lg",
                  i === 0 && "md:col-span-2 md:row-span-2",
                )}
              >
                <img
                  src={src}
                  alt={`Jídlo z naší kuchyně ${i + 1}`}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
