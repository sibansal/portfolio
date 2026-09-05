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
          {/* Card: fixed width ~415px, flex-col, no padding so strip can bleed to edges */}
          <div
            className="relative flex flex-col rounded-[18px] overflow-hidden group shadow-[0_20px_60px_-10px_rgba(132,190,194,0.25)]"
            style={{
              width: '415px',
              background: '#080e1a',
              border: '1px solid rgba(32,160,160,0.35)',
            }}
          >
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/8 transition-colors pointer-events-none z-0" />

            {/* Top pill — tight padding above portrait */}
            <div className="relative flex justify-center">
              <span
                className="text-[11px] font-mono px-3 rounded-full mt-1"
                style={{
                  color: '#7ecece',
                  background: 'rgba(8,22,36,0.85)',
                  border: '1px solid rgba(32,160,160,0.4)',
                  lineHeight: '28px',
                  display: 'inline-block',
                  position: 'absolute',
                  zIndex: 20
                }}
              >
                R&D / PoC · Full-Stack Systems · AI · Infra
              </span>
            </div>

            {/* Portrait — dominant hero element, ~87% card width */}
            <div
              className="relative z-10 overflow-hidden"
              style={{
                // margin: '0 27px 10px 27px',
                height: '375px',
                // borderRadius: '15px',
                border: '1px solid rgba(32,160,160,0.35)',
                background: '#0a1520',
                flexShrink: 0,
              }}
            >
              <img
                src="/simran-bansal-dp.png"
                alt="Simran Bansal"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
            </div>

            {/* Working strip — full-width footer anchored to bottom */}
            <div
              className="relative z-10 flex items-center gap-0"
              style={{
                background: '#060b11',
                borderTop: '1px solid rgba(32,160,160,0.25)',
                minHeight: '88px',
                padding: '14px 18px',
              }}
            >
              {/* Yellow status dot */}
              <div
                className="animate-pulse flex-shrink-0"
                style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: '#d3b634ff',
                  boxShadow: '0 0 8px 2px rgba(52,211,153,0.55)',
                  marginRight: '14px',
                }}
              />
              {/* Vertical divider */}
              <div
                style={{
                  width: '1px',
                  height: '52px',
                  background: 'rgba(32,160,160,0.35)',
                  flexShrink: 0,
                  marginRight: '14px',
                }}
              />
              {/* Status text */}
              <span
                style={{
                  fontSize: '12px',
                  color: '#c8d8e4',
                  lineHeight: '1.6',
                  fontFamily: 'inherit',
                }}
              >
                Working at Neutrinos on PoC development, rapid prototyping, scalable product solutions, and technical exploration.
              </span>
            </div>
          </div>
        </TiltCard>
      </FadeIn>
    </section>
  )
}