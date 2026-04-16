import { Gift, Mail, Phone } from "lucide-react"
import { SubpageHero } from "@/components/SubpageHero"
import { giftVouchers } from "@/data/content"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

export function DarkovePoukazy() {
  const [contentRef, contentVisible] = useInView<HTMLDivElement>()

  return (
    <>
      <SubpageHero
        title="Dárkové poukazy"
        subtitle="Darujte příjemné chvíle"
        image="https://jaskovskakrcma.cz/wp-content/uploads/2020/01/72_.jpg"
        breadcrumb="Dárkové poukazy"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <div
            ref={contentRef}
            className={cn(
              "transition-all duration-700",
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="font-decorative italic text-[clamp(1.25rem,3vw,1.75rem)] text-ink leading-relaxed text-center mb-12">
              {giftVouchers.intro}
            </p>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              {giftVouchers.options.map((option, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-8 shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-sm text-text-light leading-relaxed">{option}</p>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="bg-ink text-white rounded-lg p-8 md:p-12 text-center mb-12">
              <h2 className="font-display text-2xl mb-6">Hodnoty poukazů</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["500 Kč", "1 000 Kč", "1 500 Kč", "Dle přání"].map((val, i) => (
                  <div
                    key={i}
                    className={cn(
                      "px-6 py-4 rounded-lg border transition-colors",
                      i === 3
                        ? "bg-gold border-gold text-white"
                        : "border-white/20 hover:border-gold"
                    )}
                  >
                    <span className="text-lg font-medium">{val}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-sm max-w-[45ch] mx-auto">
                Vtipný slogan či osobní dárování bude určitě příjemným doplněním Vašeho dárku.
              </p>
            </div>

            {/* Order */}
            <div className="bg-cream rounded-lg p-8 md:p-12 text-center">
              <h2 className="font-display text-2xl mb-4">Jak objednat</h2>
              <p className="text-text-light mb-8">{giftVouchers.orderInfo}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:info@jaskovskakrcma.cz"
                  className="inline-flex items-center gap-2 bg-gold text-white text-sm font-medium uppercase tracking-[0.08em] px-8 py-3.5 hover:bg-gold-hover transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Objednat e-mailem
                </a>
                <a
                  href="tel:+420724782275"
                  className="inline-flex items-center gap-2 border border-gold text-gold text-sm font-medium uppercase tracking-[0.08em] px-8 py-3.5 hover:bg-gold hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Zavolat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
