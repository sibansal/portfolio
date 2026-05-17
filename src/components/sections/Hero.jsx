import { ArrowRight, FileText, Mail, Terminal, Image as ImageIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'
import TiltCard from '@/components/ui/TiltCard'

const metrics = [
  { value: '80%',  label: 'Reduced reporting turnaround at Nokia' },
  { value: '40%',  label: 'Improved page performance as freelancer' },
  { value: '10+',  label: 'Containerized analytics deployments' },
  { value: '30%',  label: 'Faster frontend delivery via reusable systems' },
]

export default function Hero() {
  return (
    <section id="home" className="py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left */}
      <FadeIn>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-sm font-medium text-accent-400 mb-6 font-mono">
          <Terminal className="w-4 h-4" />
          <span>~ / roles / research-oriented-engineer</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
          Research-Oriented<br />
          <span className="text-primary">Full-Stack Engineer</span>
        </h1>

        <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
          5+ years bridging frontend excellence with robust backend systems. Designing automation
          infrastructure, AI product workflows, and scalable platforms across enterprise and startup environments.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="#projects" className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-accent-500 transition-all shadow-[0_0_20px_rgba(132,190,194,0.3)] hover:shadow-[0_0_32px_rgba(132,190,194,0.5)] flex items-center gap-2">
            View My Work <ArrowRight className="w-4 h-4" />
          </a>
          <a href="/Simran_Bansal-SDE-III.pdf" className="px-6 py-3 rounded-lg bg-slate-900 text-white font-medium border border-slate-700 hover:border-primary transition-colors flex items-center gap-2">
            <FileText className="w-4 h-4" /> Download Resume
          </a>
          <a href="#contact" className="px-6 py-3 text-slate-400 hover:text-white transition-colors flex items-center gap-2">
            <Mail className="w-4 h-4" /> Contact
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-800">
          {metrics.map((m, i) => (
            <div key={i}>
              <div className={`text-3xl font-bold mb-1 ${i % 2 === 0 ? 'text-white' : 'text-primary'}`}>{m.value}</div>
              <div className="text-sm text-slate-500">{m.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Right — 3D profile card */}
      <FadeIn delay={0.15} className="flex justify-center lg:justify-end">
        <TiltCard>
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex flex-col items-center justify-center shadow-[0_20px_60px_-10px_rgba(132,190,194,0.25)] overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            {/* Replace the block below with <img src="/profile.jpg" ... /> */}
            <ImageIcon className="w-16 h-16 text-slate-500 mb-3" />
            <img className="text-slate-500 font-mono text-sm w-full h-full" src='/simran-bansal-dp.png' alt='Simran Bansal'/>
            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur rounded-xl p-4 border border-slate-800 flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-xs text-slate-300">Working at Neutrinos on PoC development, rapid prototyping, and scalable product solutions.</span>
            </div>
          </div>
        </TiltCard>
      </FadeIn>
    </section>
  )
}