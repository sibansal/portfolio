import React from 'react'
import Navbar       from '@/components/sections/Navbar'
import Hero         from '@/components/sections/Hero'
import Companies    from '@/components/sections/Companies'
import About        from '@/components/sections/About'
import Projects     from '@/components/sections/Projects'
import Skills       from '@/components/sections/Skills'
import Experience   from '@/components/sections/Experience'
import ResearchAreas from '@/components/sections/ResearchAreas'
import CurrentFocus from '@/components/sections/CurrentFocus'
import Contact      from '@/components/sections/Contact'
import Footer       from '@/components/sections/Footer'
import BgGlow       from '@/components/ui/BgGlow'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg">
      <BgGlow />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Navbar />
        <main>
          <Hero />
          <Companies />
          <About />
          <ResearchAreas />
          <Projects />
          <Skills />
          <Experience />
          <CurrentFocus />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}