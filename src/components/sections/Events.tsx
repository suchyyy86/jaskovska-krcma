import { Link } from "react-router-dom"
import { useInView } from "@/hooks/useInView"
import { events } from "@/data/content"
import { cn } from "@/lib/utils"

export function Events() {
  const [titleRef, titleVisible] = useInView<HTMLHeadingElement>()
  const [gridRef, gridVisible] = useInView<HTMLDivElement>()

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white" id="akce">
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
            Pro Vaši příležitost
          </span>
          Akce a služby
        </h2>

        <div
          ref={gridRef}
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-10 transition-all duration-700",
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {events.map((event, i) => (
            <Link
              key={i}
              to={event.route || "#"}
              className="group relative h-[300px] md:h-[400px] rounded-lg overflow-hidden block"
            >
              <div className="absolute inset-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                  loading="lazy"
                  width={400}
                  height={400}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,20,20,0.85)] via-[rgba(20,20,20,0.2)_60%] to-transparent flex flex-col justify-end p-10">
                <h3 className="font-display text-2xl text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {event.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-gold text-sm font-medium uppercase tracking-[0.08em] mt-4 transition-all group-hover:gap-3">
                  {event.link} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
