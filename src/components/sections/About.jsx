import { MapPin, GraduationCap, Sparkles, Terminal } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import TiltCard from '@/components/ui/TiltCard'
import SectionHeading from '@/components/ui/SectionHeading'

const facts = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    label: 'Education',
    detail: 'M.Tech & B.Tech in Computer Science',
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    label: 'Current Focus',
    detail: 'PoC Engineering, AI Products, Automation Infrastructure & Scalable Systems',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Location',
    detail: 'HSR Layout, Bangalore, India',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      <FadeIn>
        <SectionHeading label="About Me" />
        <div className="space-y-4 text-slate-300 text-sm leading-relaxed -mt-2">
          <p>
            I am a full-stack engineer driven by technical curiosity, hands-on experimentation, and systems thinking.
            My work revolves around evaluating emerging technologies, building proof-of-concept prototypes, and engineering
            scalable production architectures.
          </p>
          <p>
            Rather than relying on theoretical assumptions, I believe in an empirical approach: write code, stress-test ideas,
            measure outcomes, and document key architectural insights.
          </p>
          <p className="text-slate-400">
            Whether collaborating closely with product teams to bootstrap an AI workflow or optimizing data-intensive ETL
            infrastructure, I focus on velocity, maintainability, and high-impact engineering execution.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <TiltCard>
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 h-full">
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              Quick Background
            </h3>
            <ul className="space-y-6">
              {facts.map((f, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mt-0.5 flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{f.label}</div>
                    <div className="text-slate-400 text-xs mt-0.5 leading-relaxed">{f.detail}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </TiltCard>
      </FadeIn>
    </section>
  )
}