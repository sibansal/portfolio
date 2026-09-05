import React from 'react'
import Navbar             from '@/components/sections/Navbar'
import Hero               from '@/components/sections/Hero'
import Companies          from '@/components/sections/Companies'
import AreasOfExploration from '@/components/sections/AreasOfExploration'
import Projects           from '@/components/sections/Projects'
import HowIBuild          from '@/components/sections/HowIBuild'
import Experience         from '@/components/sections/Experience'
import Skills             from '@/components/sections/Skills'
import About              from '@/components/sections/About'
import Contact            from '@/components/sections/Contact'
import Footer             from '@/components/sections/Footer'
import BgGlow             from '@/components/ui/BgGlow'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg">
      <BgGlow />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Navbar />
        <main>
          <Hero />
          <Companies />
          <AreasOfExploration />
          <Projects />
          <HowIBuild />
          <Experience />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}