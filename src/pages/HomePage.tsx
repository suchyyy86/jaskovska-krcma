import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { MenuSection } from "@/components/sections/MenuSection"
import { Gallery } from "@/components/sections/Gallery"
import { Accommodation } from "@/components/sections/Accommodation"
import { Events } from "@/components/sections/Events"
import { Services } from "@/components/sections/Services"
import { History } from "@/components/sections/History"
import { News } from "@/components/sections/News"
import { Contact } from "@/components/sections/Contact"

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <Accommodation />
      <Events />
      <Services />
      <History />
      <News />
      <Contact />
    </>
  )
}
