import { useState } from "react"
import { useInView } from "@/hooks/useInView"
import { menuCategories } from "@/data/content"
import { cn } from "@/lib/utils"

export function MenuSection() {
  const [activeTab, setActiveTab] = useState("predkrmy")
  const [titleRef, titleVisible] = useInView<HTMLHeadingElement>()
  const [tabsRef, tabsVisible] = useInView<HTMLDivElement>()
  const [noteRef, noteVisible] = useInView<HTMLParagraphElement>()

  const activeCategory = menuCategories.find((c) => c.id === activeTab)

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white" id="restaurace">
      <div className="max-w-[900px] mx-auto px-6">
        <h2
          ref={titleRef}
          className={cn(
            "font-display text-[clamp(2rem,5vw,4rem)] font-normal mb-10 text-ink relative text-center transition-all duration-700",
            "after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-gold after:mt-4 after:mx-auto",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="font-decorative italic text-[0.5em] block mb-2">
            Menu
          </span>
          Jídelní lístek
        </h2>

        {/* Tabs */}
        <div
          ref={tabsRef}
          className={cn(
            "flex flex-wrap justify-center gap-2 mb-12 border-b border-border pb-4 transition-all duration-700",
            tabsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          role="tablist"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                "text-sm font-medium px-4 py-2.5 relative whitespace-nowrap transition-colors cursor-pointer",
                "after:content-[''] after:absolute after:bottom-[-17px] after:left-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300",
                activeTab === cat.id
                  ? "text-gold after:w-full"
                  : "text-text-light hover:text-gold after:w-0"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items — clean list, no photos */}
        {activeCategory && (
          <div className="flex flex-col">
            {activeCategory.items.map((item, i) => (
              <div
                key={i}
                className={cn(
                  "py-5",
                  i < activeCategory.items.length - 1 && "border-b border-border/50"
                )}
              >
                <div className="flex justify-between items-baseline gap-4 mb-1">
                  <span className="font-display text-[1.1rem] font-medium text-ink">
                    {item.name}
                  </span>
                  <span className="flex-1 border-b border-dotted border-border min-w-[20px] relative -top-1 mx-2" />
                  <span className="text-base font-medium text-gold whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-text-light leading-relaxed">
                  {item.desc}
                </p>
                {item.descEn && (
                  <p className="text-xs text-text-muted italic mt-0.5">
                    {item.descEn}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        <p
          ref={noteRef}
          className={cn(
            "text-sm text-text-muted mt-10 pt-6 border-t border-border leading-relaxed transition-all duration-700 text-center",
            noteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          V případě objednávky polovičních porcí účtujeme 70 % ceny jídla. V
          případě skupinky hostů s počtem nad 12 osob je nutný výběr jídla ze
          zkrácené nabídkové karty. Gramáž v menu uvádí hmotnost v syrovém
          stavu.
        </p>
      </div>
    </section>
  )
}
