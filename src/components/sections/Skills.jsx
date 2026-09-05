import FadeIn from '@/components/ui/FadeIn'
import SectionHeading from '@/components/ui/SectionHeading'
import { skillGroups } from '@/data/skills'
import { Layout, Server, Database, Cloud, Wrench } from 'lucide-react'

const icons = [
  <Layout className="w-5 h-5 text-primary" />,
  <Server className="w-5 h-5 text-primary" />,
  <Database className="w-5 h-5 text-primary" />,
  <Cloud className="w-5 h-5 text-primary" />,
  <Wrench className="w-5 h-5 text-primary" />,
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <FadeIn>
        <SectionHeading label="Technical Stack" />
        <p className="text-slate-400 mb-12 max-w-2xl -mt-4 text-sm leading-relaxed">
          Technologies, frameworks, and infrastructure tools I leverage for rapid prototyping, PoCs, and production systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((g, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-primary/40 hover:bg-slate-900 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    {icons[i]}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-none mb-1">
                      {g.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500">
                      {g.category}
                    </span>
                  </div>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed font-mono">
                  {g.skills}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}