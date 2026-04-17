import { Phone, Check, Gift, Heart } from "lucide-react"
import { SubpageHero } from "@/components/SubpageHero"
import { weddingData } from "@/data/content"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

export function SvatbaPage() {
  const [introRef, introVisible] = useInView<HTMLDivElement>()
  const [variantsRef, variantsVisible] = useInView<HTMLDivElement>()
  const [venuesRef, venuesVisible] = useInView<HTMLDivElement>()
  const [extrasRef, extrasVisible] = useInView<HTMLDivElement>()

  return (
    <>
      <SubpageHero
        title="Svatba"
        subtitle="Váš den, Vaše oslava"
        image="/images/Monika_a_Tom_059-3ef25ff955.jpg"
        breadcrumb="Svatba"
      />

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div
          ref={introRef}
          className={cn(
            "max-w-[800px] mx-auto px-6 text-center transition-all duration-700",
            introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="font-decorative italic text-[clamp(1.25rem,3vw,1.75rem)] text-ink leading-relaxed mb-8">
            {weddingData.intro}
          </p>
          <p className="text-text-light leading-[1.8] mb-6">{weddingData.experience}</p>
          <p className="text-text-light leading-[1.8]">{weddingData.tabule}</p>
        </div>
      </section>

      {/* Wedding Variants */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div
            ref={variantsRef}
            className={cn(
              "transition-all duration-700",
              variantsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-normal mb-4 text-ink text-center relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-gold after:mt-4 after:mx-auto">
              <span className="font-decorative italic text-[0.5em] block mb-2">Nabídka</span>
              Svatební varianty
            </h2>
            <p className="text-center text-text-light max-w-[55ch] mx-auto mb-12">
              Vyberte si variantu, která Vám vyhovuje, nebo si sestavte svatbu na míru.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {weddingData.variants.map((v, i) => (
                <div
                  key={i}
                  className={cn(
                    "rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1",
                    i < 2 ? "bg-ink text-white shadow-lg" : "bg-cream shadow-sm"
                  )}
                >
                  <div className="p-8 md:p-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display text-xl mb-1">{v.title}</h3>
                        {v.maxGuests && (
                          <span className={cn("text-xs", i < 2 ? "text-white/50" : "text-text-muted")}>
                            {v.maxGuests}
                          </span>
                        )}
                      </div>
                      <span className="text-xl font-medium text-gold whitespace-nowrap">{v.price}</span>
                    </div>
                    <p className={cn("text-sm leading-relaxed mb-6", i < 2 ? "text-white/70" : "text-text-light")}>
                      {v.desc}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {v.includes.map((item, j) => (
                        <li
                          key={j}
                          className={cn(
                            "text-sm flex items-start gap-2",
                            i < 2 ? "text-white/80" : "text-text-light"
                          )}
                        >
                          <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {v.note && (
                      <p className={cn("text-xs leading-relaxed pt-4 border-t", i < 2 ? "text-white/40 border-white/10" : "text-text-muted border-border")}>
                        {v.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Gift */}
            <div className="mt-8 bg-gold/10 rounded-lg p-6 flex items-center gap-4 max-w-[600px] mx-auto">
              <Gift className="w-8 h-8 text-gold shrink-0" />
              <div>
                <span className="font-display text-sm block mb-0.5">Svatební dar Jaškovské krčmy</span>
                <span className="text-sm text-text-light">{weddingData.gift}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Prices & Ceremony */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div
            ref={venuesRef}
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700",
              venuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {/* Venue rental */}
            <div className="bg-white rounded-lg p-8 md:p-10 shadow-sm">
              <h3 className="font-display text-xl mb-6">Pronájem prostor</h3>
              <div className="space-y-4">
                {weddingData.venueRental.map((v, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-border pb-3 last:border-0">
                    <div>
                      <span className="font-medium text-sm">{v.name}</span>
                      {v.capacity && (
                        <span className="text-xs text-text-muted block">{v.capacity}</span>
                      )}
                    </div>
                    <span className="text-gold font-medium text-sm">{v.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ceremony */}
            <div className="bg-white rounded-lg p-8 md:p-10 shadow-sm">
              <h3 className="font-display text-xl mb-6">Venkovní obřad</h3>
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-text-light text-sm">Cena kompletního zajištění</span>
                <span className="text-2xl font-medium text-gold">{weddingData.ceremony.price}</span>
              </div>
              <p className="text-sm text-text-muted mb-4">
                Dvě varianty: {weddingData.ceremony.variants.join(" nebo ")}
              </p>
              <p className="text-sm text-text-light leading-relaxed mb-6">
                Zahrnuje: {weddingData.ceremony.includes}
              </p>
              <div className="flex items-center gap-3 p-4 bg-cream rounded">
                <Heart className="w-5 h-5 text-gold shrink-0" />
                <span className="text-sm text-text-light">
                  Obřady na travnatém paloučku za krčmou, v případě špatného počasí na terase nebo v sále.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extras & Terms */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div
            ref={extrasRef}
            className={cn(
              "transition-all duration-700",
              extrasVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-cream rounded-lg p-8">
                <h3 className="font-display text-lg mb-4">Příplatky a výzdoba</h3>
                <ul className="space-y-2">
                  {weddingData.extras.map((e, i) => (
                    <li key={i} className="text-sm text-text-light flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-1.5" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-cream rounded-lg p-8">
                <h3 className="font-display text-lg mb-4">Podmínky</h3>
                <div className="space-y-3 text-sm text-text-light">
                  <p><span className="font-medium text-ink">Záloha:</span> {weddingData.deposit}</p>
                  <p><span className="font-medium text-ink">Storno:</span> {weddingData.storno}</p>
                  <p>
                    <span className="font-medium text-ink">Oddávající:</span> Novomanželé si zajistí sami (obecní úřad Těrlicko nebo evangelický farář).
                  </p>
                  <p>
                    <span className="font-medium text-ink">Hudba:</span> Reprobedna k zapůjčení za 500 Kč, nebo zajistíme DJ/živou hudbu.
                  </p>
                  <p>
                    <span className="font-medium text-ink">Výzdoba:</span> Ve spolupráci s agenturou Svatbuj s námi (tel. +420 736 251 529).
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="tel:+420724782275"
                className="inline-flex items-center gap-2 bg-gold text-white text-sm font-medium uppercase tracking-[0.08em] px-8 py-3.5 hover:bg-gold-hover transition-colors"
              >
                <Phone className="w-4 h-4" />
                Nezávazná konzultace
              </a>
              <p className="text-sm text-text-muted mt-3">
                Nebo pište na{" "}
                <a href="mailto:info@jaskovskakrcma.cz" className="text-gold hover:underline">
                  info@jaskovskakrcma.cz
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
