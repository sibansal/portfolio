import FadeIn from '@/components/ui/FadeIn'
import TiltCard from '@/components/ui/TiltCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Tag from '@/components/ui/Tag'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <FadeIn>
        <SectionHeading label="Notable Projects" />
        <p className="text-slate-400 mb-12 max-w-2xl -mt-4">
          Key projects demonstrating expertise in full-stack development, automation, and infrastructure.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <TiltCard key={i}>
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-colors h-full flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">{p.desc}</p>
              <div className="mb-6">
                <h4 className="text-xs font-mono text-slate-500 uppercase mb-2">Key Achievements</h4>
                <ul className="space-y-1.5">
                  {p.achievements.map((a, j) => (
                    <li key={j} className="text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">•</span> {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tech.map(t => <Tag key={t} label={t} />)}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}