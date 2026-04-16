import { useInView } from "@/hooks/useInView"
import { foodGalleryImages } from "@/data/content"
import { cn } from "@/lib/utils"

export function About() {
  const [ref, isVisible] = useInView<HTMLDivElement>()
  const [galleryRef, galleryVisible] = useInView<HTMLDivElement>()

  return (
    <section className="py-16 md:py-24 lg:py-32" id="o-nas">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-normal mb-10 text-ink relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-gold after:mt-4">
              O nás
            </h2>
            <p className="font-decorative italic text-[clamp(1.5rem,3vw,2rem)] text-ink leading-relaxed my-10">
              Jsme stylová středověká krčma s vyhlášenou a moderně pojatou
              českou kuchyní, kterou obohacujeme o tématické kulinářské dny.
            </p>
            <p className="text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.8] text-text-light max-w-[65ch]">
              Ubytování v hotelu s výhledem na pláž Těrlické přehrady je
              výjimečné svým umístěním v klidném prostředí a přívětivostí.
              Nacházíme se v blízkosti měst Havířov, Karviná a Ostrava.
            </p>
            <p className="text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.8] text-text-light max-w-[65ch] mt-6">
              Restaurace je vybavena bezplatnou Wi-Fi a disponuje dostatkem
              parkovacích míst. Jejími prostory je Pivnice Hladoví zbrojnoši s
              velkým barem, nekuřácký salónek a zastřešená Ohnivá terasa.
              Interiér je bohatě zdobený freskami.
            </p>
          </div>
          <div>
            <img
              src="https://jaskovskakrcma.cz/wp-content/uploads/2020/01/59.jpg"
              alt="Interiér Jaškovské Krčmy zdobený freskami"
              className="rounded-lg w-full aspect-[4/3] object-cover"
              loading="lazy"
              width={600}
              height={450}
            />
          </div>
        </div>

        {/* Food Gallery — "Naše kuchyně" */}
        <div
          ref={galleryRef}
          className={cn(
            "mt-20 transition-all duration-700",
            galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-normal mb-8 text-ink text-center relative after:content-[''] after:block after:w-[40px] after:h-[2px] after:bg-gold after:mt-3 after:mx-auto">
            <span className="font-decorative italic text-[0.5em] block mb-1">Ochutnejte</span>
            Naše kuchyně
          </h3>
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
