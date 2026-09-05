import { ArrowRight, BookOpen, Terminal, Code2 } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import TiltCard from '@/components/ui/TiltCard'

const metrics = [
  { value: '80%', label: 'Reduced reporting turnaround at Nokia' },
  { value: '40%', label: 'Improved page performance as freelancer' },
  { value: '10+', label: 'Containerized analytics deployments' },
  { value: '30%', label: 'Faster frontend delivery via reusable systems' },
]

export default function Hero() {
  return (
    <section id="home" className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left */}
      <FadeIn>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-sm font-medium text-accent-400 mb-6 font-mono overflow-hidden">
          <Terminal className="w-4 h-4 shrink-0" />
          <div className="flex items-center whitespace-nowrap">
            <span className="overflow-hidden animate-typing inline-block">
              ~ / roles / rd-focused-engineer
            </span>
            <span className="animate-cursor ml-0.5">_</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
          R&D-Focused<br />
          <span className="text-primary">Full-Stack Engineer</span>
        </h1>

        <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
          Building AI products, automation infrastructure, and scalable systems through rapid prototyping,
          technical exploration, and engineering experimentation.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-accent-500 transition-all shadow-[0_0_20px_rgba(132,190,194,0.3)] hover:shadow-[0_0_32px_rgba(132,190,194,0.5)] flex items-center gap-2"
          >
            <Code2 className="w-4 h-4" /> View My Work <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://blog.sibansal.dev"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg bg-slate-900 text-white font-medium border border-slate-700 hover:border-primary hover:text-primary transition-all flex items-center gap-2 shadow-sm"
          >
            <BookOpen className="w-4 h-4 text-primary" /> Read My Blog
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-800">
          {metrics.map((m, i) => (
            <div key={i}>
              <div className={`text-3xl font-bold mb-1 ${i % 2 === 0 ? 'text-white' : 'text-primary'}`}>{m.value}</div>
              <div className="text-sm text-slate-500 leading-snug">{m.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Right — Profile Card */}
      <FadeIn delay={0.15} className="flex justify-center lg:justify-end">
        <TiltCard>
          <div className="relative w-80 h-96 sm:w-96 sm:h-[420px] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex flex-col items-center justify-between shadow-[0_20px_60px_-10px_rgba(132,190,194,0.25)] overflow-hidden group p-4">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors pointer-events-none" />
            
            {/* Top pill */}
            <div className="w-full z-10 text-center">
              <span className="text-[11px] font-mono text-slate-400 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800">
                R&D / PoC · Full-Stack Systems · AI · Infra
              </span>
            </div>

            {/* Profile Image */}
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border border-slate-700/80 my-auto shadow-inner bg-slate-950">
              <img
                className="w-full h-full object-cover"
                src="/simran-bansal-dp.png"
                alt="Simran Bansal"
              />
            </div>

            {/* Bottom Status Card */}
            <div className="w-full bg-slate-950/90 backdrop-blur rounded-xl p-3.5 border border-slate-800 flex items-center gap-3 z-10">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-xs text-slate-300 leading-relaxed">
                Working at Neutrinos on PoC development, rapid prototyping, scalable product solutions, and technical exploration.
              </span>
            </div>
          </div>
        </TiltCard>
      </FadeIn>
    </section>
  )
}