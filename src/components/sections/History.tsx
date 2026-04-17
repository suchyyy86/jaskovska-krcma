import { useInView } from "@/hooks/useInView"
import { timeline } from "@/data/content"
import { cn } from "@/lib/utils"

export function History() {
  const [titleRef, titleVisible] = useInView<HTMLHeadingElement>()
  const [timelineRef, timelineVisible] = useInView<HTMLDivElement>()

  return (
    <section className="py-16 md:py-24 lg:py-32" id="historie">
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
            Naše historie
          </span>
          Sedm století tradice
        </h2>

        <div 
          className={cn(
            "max-w-[900px] mx-auto mb-16 rounded-2xl overflow-hidden shadow-sm transition-all duration-1000 delay-200 ring-1 ring-border/50",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <img 
            src="/images/historie1.jpg" 
            alt="Historická podoba Jaškovské Krčmy" 
            className="w-full h-auto max-h-[500px] object-cover hover:scale-105 transition-transform duration-1000 hue-rotate-15 sepia-[.2]" 
            loading="lazy"
          />
        </div>

        <div
          ref={timelineRef}
          className={cn(
            "relative max-w-[800px] mx-auto transition-all duration-700 delay-300",
            timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Vertical line */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-border" />

          {timeline.map((item, i) => (
            <div
              key={i}
              className={cn(
                "relative mb-16 pl-[60px] md:pl-0 md:w-1/2",
                i % 2 === 0 ? "md:pr-10 md:ml-0" : "md:pl-10 md:pr-0 md:ml-[50%]"
              )}
            >
              {/* Dot */}
              <div
                className={cn(
                  "absolute top-1 w-[18px] h-[18px] rounded-full bg-cream border-[3px] border-gold z-10",
                  "left-[12px]",
                  "md:left-auto",
                  i % 2 === 0 ? "md:right-[-9px]" : "md:left-[-9px]"
                )}
              />
              <div className="font-decorative italic text-[1.75rem] text-gold mb-2">
                {item.year}
              </div>
              <h3 className="font-display text-xl mb-2">{item.title}</h3>
              <p className="text-sm text-text-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
