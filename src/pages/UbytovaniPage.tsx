import { Phone, Check, Clock, MapPin, Star } from "lucide-react"
import { SubpageHero } from "@/components/SubpageHero"
import { accommodations, hotelDetails, hotelExtras, stayPackages } from "@/data/content"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

export function UbytovaniPage() {
  const [infoRef, infoVisible] = useInView<HTMLDivElement>()
  const [extrasRef, extrasVisible] = useInView<HTMLDivElement>()
  const [packRef, packVisible] = useInView<HTMLDivElement>()

  return (
    <>
      <SubpageHero
        title="Ubytování"
        subtitle="Hotel, Chata & Apartmány"
        image="https://jaskovskakrcma.cz/wp-content/plugins/widgetkit/cache/gallery/1034/DSC_0730-43e219195b.jpg"
        breadcrumb="Ubytování"
      />

      {/* Accommodation Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {accommodations.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-[250px] overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-10">
                  <h3 className="font-display text-[clamp(1.25rem,3vw,1.75rem)] mb-4">{item.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed mb-6">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feat, fi) => (
                      <span key={fi} className="text-xs text-text-light bg-cream px-3 py-1 rounded-full">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div
            ref={infoRef}
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-16 transition-all duration-700",
              infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div>
              <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-normal mb-8 text-ink relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-gold after:mt-4">
                Informace o hotelu
              </h2>
              <p className="text-text-light leading-[1.8] mb-6">{hotelDetails.info}</p>
              <p className="text-text-light leading-[1.8] mb-6">{hotelDetails.cycling}</p>
              <p className="text-text-light leading-[1.8]">{hotelDetails.services}</p>
            </div>
            <div>
              {/* Check-in/out */}
              <div className="bg-cream rounded-lg p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-gold" />
                  <h3 className="font-display text-xl">Check-in / Check-out</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-text-muted block">Check-in</span>
                    <span className="font-medium text-lg">{hotelDetails.checkIn}</span>
                  </div>
                  <div>
                    <span className="text-sm text-text-muted block">Check-out</span>
                    <span className="font-medium text-lg">{hotelDetails.checkOut}</span>
                  </div>
                </div>
                <p className="text-sm text-text-muted mt-3">Nebo dle domluvy</p>
              </div>

              {/* Room types */}
              <div className="bg-cream rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h3 className="font-display text-xl">Kapacita: {hotelDetails.capacity}</h3>
                </div>
                <ul className="space-y-2">
                  {hotelDetails.rooms.map((room, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-light">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      {room}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-text-muted mt-4 border-t border-border pt-4">
                  V ceně ubytování je započítaná bohatá snídaně.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extras / Doplňkové služby */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div
            ref={extrasRef}
            className={cn(
              "transition-all duration-700",
              extrasVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-normal mb-4 text-ink text-center relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-gold after:mt-4 after:mx-auto">
              <span className="font-decorative italic text-[0.5em] block mb-2">Zpříjemněte si pobyt</span>
              Doplňkové služby
            </h2>
            <p className="text-center text-text-light max-w-[60ch] mx-auto mb-12">
              Chcete potěšit svou drahou polovičku? S požadavky kontaktujte personál a my uděláme vše proto, aby byl Váš pobyt dokonalý.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotelExtras.map((extra, i) => (
                <div key={i} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-lg">{extra.title}</h3>
                    {extra.price && (
                      <span className="text-sm font-medium text-gold whitespace-nowrap bg-gold/10 px-3 py-1 rounded-full">
                        {extra.price}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-light leading-relaxed">{extra.desc}</p>
                  {extra.items && (
                    <ul className="mt-3 space-y-1">
                      {extra.items.map((item, j) => (
                        <li key={j} className="text-xs text-text-muted flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stay Packages */}
      <section className="py-16 md:py-24 bg-white" id="balicky">
        <div className="max-w-[1200px] mx-auto px-6">
          <div
            ref={packRef}
            className={cn(
              "transition-all duration-700",
              packVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-normal mb-4 text-ink text-center relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-gold after:mt-4 after:mx-auto">
              <span className="font-decorative italic text-[0.5em] block mb-2">Výhodné nabídky</span>
              Pobytové balíčky
            </h2>
            <p className="text-center text-text-muted text-sm mb-12">Dítě do 4 let bez nároku na lůžko zdarma.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stayPackages.map((pkg, i) => (
                <div
                  key={i}
                  className={cn(
                    "relative rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1",
                    pkg.highlight
                      ? "bg-ink text-white shadow-lg ring-2 ring-gold"
                      : "bg-cream shadow-sm"
                  )}
                >
                  {pkg.highlight && (
                    <div className="absolute top-0 left-0 right-0 bg-gold text-white text-xs font-medium text-center py-1.5 uppercase tracking-wider flex items-center justify-center gap-1">
                      <Star className="w-3 h-3" />
                      Romantika
                    </div>
                  )}
                  <div className={cn("p-8", pkg.highlight && "pt-12")}>
                    <div className="mb-6">
                      <h3 className="font-display text-xl mb-1">{pkg.title}</h3>
                      {pkg.subtitle && (
                        <span className={cn("text-sm", pkg.highlight ? "text-white/60" : "text-text-muted")}>
                          {pkg.subtitle}
                        </span>
                      )}
                    </div>
                    <div className="mb-6">
                      <span className="text-2xl font-medium text-gold">{pkg.price}</span>
                      {pkg.childPrice && (
                        <p className={cn("text-xs mt-1", pkg.highlight ? "text-white/50" : "text-text-muted")}>
                          Dítě: {pkg.childPrice}
                        </p>
                      )}
                    </div>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, j) => (
                        <li
                          key={j}
                          className={cn(
                            "text-sm flex items-start gap-2",
                            pkg.highlight ? "text-white/80" : "text-text-light"
                          )}
                        >
                          <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="mailto:info@jaskovskakrcma.cz"
                className="inline-flex items-center gap-2 bg-gold text-white text-sm font-medium uppercase tracking-[0.08em] px-8 py-3.5 hover:bg-gold-hover transition-colors"
              >
                Rezervovat balíček
              </a>
              <p className="text-sm text-text-muted mt-3">
                Nebo volejte{" "}
                <a href="tel:+420724782275" className="text-gold hover:underline">+420 724 782 275</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold text-white text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="font-display text-[clamp(1.5rem,4vw,2.5rem)] mb-4">Máte dotaz?</h2>
          <p className="text-white/80 mb-8">Kontaktujte nás pro individuální nabídku nebo speciální požadavky.</p>
          <a
            href="tel:+420724782275"
            className="inline-flex items-center gap-2 bg-white text-ink text-sm font-medium uppercase tracking-[0.08em] px-8 py-3.5 hover:bg-cream transition-colors"
          >
            <Phone className="w-4 h-4" />
            +420 724 782 275
          </a>
        </div>
      </section>
    </>
  )
}
