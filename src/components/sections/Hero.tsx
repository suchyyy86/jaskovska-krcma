export function Hero() {
  const handleScrollClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.getElementById("o-nas")
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-dvh min-h-[600px] flex items-center justify-center overflow-hidden" id="hero">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://jaskovskakrcma.cz/wp-content/uploads/2020/01/IGP8478.jpg"
          alt="Jaškovská Krčma — budova u Těrlické přehrady"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-[900px]">
        <p className="font-decorative italic text-[clamp(1rem,2.5vw,1.5rem)] font-light mb-4 opacity-90">
          Hotel a restaurace
        </p>
        <h1 className="font-decorative italic text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.1] mb-6">
          Jaškovská Krčma
        </h1>
        <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] font-light tracking-[0.15em] uppercase opacity-80 mb-16">
          Sedm století dlouhá cesta ke spokojenosti těla i ducha
        </p>

        <button
          onClick={handleScrollClick}
          className="group inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll dolů"
        >
          <span>Scroll to explore</span>
          <span className="relative w-px h-10 bg-white/40 overflow-hidden">
            <span className="absolute left-0 w-full h-full bg-white animate-[scrollLine_2s_infinite]" />
          </span>
        </button>
      </div>
    </section>
  )
}
