import { useState, useEffect } from "react"
import { X, View } from "lucide-react"
import { spaces, type SpaceItem } from "@/data/content"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

export function Spaces() {
  const [titleRef, titleVisible] = useInView<HTMLHeadingElement>()
  const [gridRef, gridVisible] = useInView<HTMLDivElement>()
  const [activeSpace, setActiveSpace] = useState<SpaceItem | null>(null)

  // Prevent scroll when modal is open + Escape key handler
  useEffect(() => {
    if (activeSpace) {
      document.body.style.overflow = "hidden"
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setActiveSpace(null)
      }
      window.addEventListener("keydown", handleKeyDown)
      return () => {
        document.body.style.overflow = ""
        window.removeEventListener("keydown", handleKeyDown)
      }
    } else {
      document.body.style.overflow = ""
    }
  }, [activeSpace])

  return (
    <>
      <section className="py-16 md:py-24" id="prostory">
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
              Virtual View
            </span>
            Prostory krčmy
          </h2>

          <div
            ref={gridRef}
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-700",
              gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {spaces.map((space, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => setActiveSpace(space)}
              >
                <div className="h-[250px] shrink-0 relative overflow-hidden">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/90 text-ink px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <View className="w-4 h-4" /> 360° Prohlídka
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,3vw,1.75rem)] mb-3 text-ink">
                    {space.title}
                  </h3>
                  <p className="text-sm text-text-light flex-1">
                    Prohlédněte si tento prostor ve 3D zobrazení na Google Street View.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Street View Popup Modal */}
      {activeSpace && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setActiveSpace(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Virtuální prohlídka - ${activeSpace.title}`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

          {/* Popup container */}
          <div
            className="relative z-[201] w-full max-w-5xl rounded-2xl overflow-hidden flex flex-col animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxHeight: "90vh",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 25px 80px -12px rgba(0,0,0,0.5), 0 0 60px -20px oklch(0.72 0.1 75 / 0.25)",
            }}
          >
            {/* Header */}
            <div
              className="relative flex items-center justify-between px-7 py-5"
              style={{
                background: "linear-gradient(135deg, oklch(0.15 0 0) 0%, oklch(0.2 0.02 60) 100%)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
                  <View className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl text-white tracking-wide">
                    {activeSpace.title}
                  </h3>
                  <div className="w-10 h-[1px] bg-gold/50 mt-1" />
                </div>
              </div>
              <button
                onClick={() => setActiveSpace(null)}
                className="group w-11 h-11 rounded-full border border-white/20 hover:border-gold bg-white/10 hover:bg-gold flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gold/20"
                aria-label="Zavřít prohlídku"
              >
                <X className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-200" />
              </button>
            </div>

            {/* Street View iframe */}
            <div className="relative w-full bg-ink" style={{ height: "clamp(300px, 68vh, 750px)" }}>
              <iframe
                src={activeSpace.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Virtuální prohlídka - ${activeSpace.title}`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
