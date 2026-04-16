import { Phone, Check, Coffee, UtensilsCrossed, Moon } from "lucide-react"
import { SubpageHero } from "@/components/SubpageHero"
import { venues, cateringOptions } from "@/data/content"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

export function PronajemPage() {
  const [venuesRef, venuesVisible] = useInView<HTMLDivElement>()
  const [cateringRef, cateringVisible] = useInView<HTMLDivElement>()

  return (
    <>
      <SubpageHero
        title="Firemní akce a pronájem"
        subtitle="Školení, konference, večírky"
        image="https://jaskovskakrcma.cz/wp-content/uploads/2020/01/70.jpg"
        breadcrumb="Pronájem"
      />

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="font-decorative italic text-[clamp(1.25rem,3vw,1.75rem)] text-ink leading-relaxed mb-6">
            Spokojenost vaše a vašich zaměstnanců na firemním školení nebo ve formě večírku jako odměna za pracovní nasazení je pro nás prioritou…
          </p>
          <p className="text-text-light leading-[1.8]">
            Sály jsou vybaveny dobovým nábytkem, promítacím plátnem a Wi-Fi připojením. Pronájem zahrnuje přípravu variabilního uspořádání místnosti. Mezi další možnosti patří ubytování v hotelu s kapacitou 60 osob, široká paleta teambuildingových aktivit a grilování.
          </p>
        </div>
      </section>

      {/* Venue Spaces */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div
            ref={venuesRef}
            className={cn(
              "transition-all duration-700",
              venuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-normal mb-4 text-ink text-center relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-gold after:mt-4 after:mx-auto">
              <span className="font-decorative italic text-[0.5em] block mb-2">Naše prostory</span>
              Salónky a terasy
            </h2>
            <p className="text-center text-text-light max-w-[55ch] mx-auto mb-12">
              Stoly mohou být ustaveny dle Vašich požadavků. Školení s AV technikou doporučujeme v salóncích Veselá chasa a Hraběcí sněm.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {venues.map((venue, i) => (
                <div
                  key={i}
                  className="group relative bg-cream rounded-lg p-8 hover:bg-ink transition-colors duration-300 cursor-default"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <span className="font-decorative italic text-gold text-lg">{i + 1}</span>
                  </div>
                  <h3 className="font-display text-lg mb-2 group-hover:text-white transition-colors">
                    {venue.name}
                  </h3>
                  <p className="text-sm text-text-light group-hover:text-white/70 transition-colors">
                    {venue.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catering */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div
            ref={cateringRef}
            className={cn(
              "transition-all duration-700",
              cateringVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-normal mb-12 text-ink text-center relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-gold after:mt-4 after:mx-auto">
              <span className="font-decorative italic text-[0.5em] block mb-2">Občerstvení</span>
              Catering a služby
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Coffee Breaks */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Coffee className="w-5 h-5 text-gold" />
                  <h3 className="font-display text-xl">Coffee Break</h3>
                </div>
                <div className="space-y-4">
                  {cateringOptions.coffeeBreaks.map((cb, i) => (
                    <div key={i} className="border-b border-border pb-4 last:border-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-medium text-sm">{cb.variant}</span>
                        <span className="text-sm text-gold font-medium">{cb.price}</span>
                      </div>
                      <p className="text-xs text-text-muted">{cb.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lunch */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <UtensilsCrossed className="w-5 h-5 text-gold" />
                  <h3 className="font-display text-xl">Oběd</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed">{cateringOptions.lunch}</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Moon className="w-5 h-5 text-gold" />
                    <h3 className="font-display text-xl">Večeře</h3>
                  </div>
                  <p className="text-sm text-text-light leading-relaxed">{cateringOptions.dinner}</p>
                </div>
              </div>

              {/* Extras */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="font-display text-xl mb-6">Doplňkové služby</h3>
                <ul className="space-y-3">
                  {cateringOptions.extras.map((extra, i) => (
                    <li key={i} className="text-sm text-text-light flex items-start gap-2">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      {extra}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hotel capacity info */}
            <div className="bg-ink text-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl mb-2">Kapacita hotelu: 60 lůžek</h3>
                <p className="text-white/70 text-sm">Kompletní ubytování pro účastníky Vaší akce včetně snídaně.</p>
              </div>
              <a
                href="tel:+420724782275"
                className="inline-flex items-center gap-2 bg-gold text-white text-sm font-medium uppercase tracking-[0.08em] px-8 py-3.5 hover:bg-gold-hover transition-colors whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4" />
                Nezávazná poptávka
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
