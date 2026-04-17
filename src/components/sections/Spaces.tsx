import { useState, useEffect } from "react"
import { X, ExternalLink, View } from "lucide-react"
import { spaces, type SpaceItem } from "@/data/content"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

export function Spaces() {
  const [titleRef, titleVisible] = useInView<HTMLHeadingElement>()
  const [gridRef, gridVisible] = useInView<HTMLDivElement>()
  const [activeSpace, setActiveSpace] = useState<SpaceItem | null>(null)

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
                  <span className="text-xs text-gold uppercase tracking-widest block mb-2 font-medium">
                    {space.subtitle}
                  </span>
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

      {/* Street View Modal */}
      {activeSpace && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col pointer-events-auto">
          <div className="flex items-center justify-between p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent text-white absolute top-0 w-full z-[201] pointer-events-none">
            <div>
              <span className="text-gold text-xs uppercase tracking-widest block font-medium mb-1 drop-shadow-md">
                {activeSpace.subtitle}
              </span>
              <h3 className="font-display text-2xl md:text-3xl drop-shadow-lg">{activeSpace.title}</h3>
            </div>
          </div>
          <button
            onClick={() => setActiveSpace(null)}
            className="absolute top-4 md:top-6 right-4 md:right-6 z-[202] w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-ink backdrop-blur-sm rounded-full flex items-center justify-center transition-all shadow-xl"
            aria-label="Zavřít"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="w-full flex-1 flex items-center justify-center p-4 md:p-12 pb-8">
            <div className="w-full h-full bg-neutral-900 rounded-xl overflow-hidden relative shadow-2xl flex items-center justify-center border border-white/10">
              
              {/* Fallback state clearly explaining Google Policy */}
              <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-8 bg-neutral-900 z-0">
                  <View className="w-16 h-16 text-white/20 mb-6" />
                  <h4 className="font-display text-2xl text-white mb-2">Příprava prostorů pro vložení</h4>
                  <p className="text-white/60 max-w-md mx-auto mb-8">
                    Google Maps z bezpečnostních důvodů blokuje přímé vkládání uživatelských 360° panoramat (Iframe hlásí chybu: 400 Bad Request). 
                  </p>
                  <p className="text-white/60 max-w-md mx-auto mb-8">
                    Chcete-li otevřít Street View panoramu pro <strong>{activeSpace.title}</strong>, klikněte na tlačítko níže, panorama se načte v plném okně Googlu.
                  </p>
                  <a 
                    href={`https://www.google.com/maps/@?api=1&map_action=pano&pano=${activeSpace.panoId}&heading=${activeSpace.heading}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3 rounded hover:bg-gold-hover transition-colors font-medium uppercase tracking-widest"
                  >
                    Otevřít 360° Prohlídku v novém okně <ExternalLink className="w-4 h-4" />
                  </a>
              </div>

              {/* Old Iframe (kept but hidden below if it fails) */}
              <iframe
                src={`https://maps.google.com/maps?layer=c&panoid=${activeSpace.panoId}&cbp=1,${activeSpace.heading},,0,0&output=svembed`}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                className="relative z-10 bg-transparent"
                title={`Virtuální prohlídka - ${activeSpace.title}`}
                onError={(e) => {
                  (e.target as HTMLIFrameElement).style.display = 'none';
                }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
