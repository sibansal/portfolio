import { Compass, Hammer, Cog, Share2 } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    number: '01',
    name: 'Explore',
    icon: <Compass className="w-5 h-5 text-primary" />,
    summary: 'Investigate unfamiliar technologies, architectures, and approaches through rapid hands-on experimentation.',
  },
  {
    number: '02',
    name: 'Prototype',
    icon: <Hammer className="w-5 h-5 text-accent-400" />,
    summary: 'Turn uncertain hypotheses into tangible, working proof-of-concepts (PoCs) to validate feasibility quickly.',
  },
  {
    number: '03',
    name: 'Engineer',
    icon: <Cog className="w-5 h-5 text-primary" />,
    summary: 'Transform validated prototypes into robust, secure, and production-grade maintainable systems.',
  },
  {
    number: '04',
    name: 'Share',
    icon: <Share2 className="w-5 h-5 text-accent-400" />,
    summary: 'Document architecture decisions, performance benchmarks, and lessons learned through in-depth technical writing.',
  },
]

export default function HowIBuild() {
  return (
    <section className="py-24 border-t border-slate-800/80">
      <FadeIn>
        <SectionHeading label="How I Build" />
        <p className="text-slate-400 mb-12 max-w-2xl -mt-4 text-sm leading-relaxed">
          An engineering-first R&D methodology focused on rapid iteration, empirical testing, and turning experimental ideas into scalable systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-primary/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    {s.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-primary transition-colors">
                    {s.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {s.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {s.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
