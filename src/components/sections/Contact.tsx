import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

export function Contact() {
  const [titleRef, titleVisible] = useInView<HTMLHeadingElement>()
  const [gridRef, gridVisible] = useInView<HTMLDivElement>()

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white" id="kontakt">
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
            Kontakt
          </span>
          Navštivte nás
        </h2>

        <div
          ref={gridRef}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-16 transition-all duration-700",
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Info */}
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-display text-xl mb-4 text-ink">Adresa</h3>
              <p className="text-text-light leading-[1.8]">
                Horní Těrlicko 242
                <br />
                735 42 Těrlicko
              </p>
              <p className="mt-2 text-sm text-text-muted">
                GPS: 49°45´12.326&quot;N, 18°29´34.386&quot;E
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl mb-4 text-ink">
                Otevírací doba
              </h3>
              <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
                <span className="font-medium text-ink">Po – Čt</span>
                <span className="text-text-light">11:00 – 22:00</span>
                <span className="font-medium text-ink">Pá – So</span>
                <span className="text-text-light">11:00 – 23:00</span>
                <span className="font-medium text-ink">Neděle</span>
                <span className="text-text-light">11:00 – 20:00</span>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl mb-4 text-ink">
                Rezervace &amp; kontakt
              </h3>
              <p className="text-text-light leading-[1.8]">
                <a
                  href="tel:+420724782275"
                  className="text-gold hover:underline"
                >
                  +420 724 782 275
                </a>
                <br />
                <a
                  href="mailto:info@jaskovskakrcma.cz"
                  className="text-gold hover:underline"
                >
                  info@jaskovskakrcma.cz
                </a>
              </p>
              <p className="mt-2 text-sm text-text-muted">
                Vedoucí provozu: Jiří Mísař
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.1!2d18.4929!3d49.7534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714193b1a3df5e7%3A0x8c87a6db8e99dc01!2zSmHFoWtvdnNrw6Ega3LEjW1h!5e0!3m2!1scs!2scz!4v1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa — Jaškovská Krčma"
              className="w-full h-full min-h-[350px] border-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
