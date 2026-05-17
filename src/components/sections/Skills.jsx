import FadeIn from '@/components/ui/FadeIn'
import SectionHeading from '@/components/ui/SectionHeading'
import { skillGroups } from '@/data/skills'
import { Code, Server, Database, Terminal, CheckCircle } from 'lucide-react'

const icons = [<Code/>, <Server/>, <Database/>, <Terminal/>, <Code/>, <CheckCircle/>]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <FadeIn>
        <SectionHeading label="Technical Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((g, i) => (
            <div key={i} className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-3 text-white font-medium text-sm">
                <div className="p-2 rounded bg-primary/10 text-primary w-9 h-9 flex items-center justify-center">
                  {icons[i]}
                </div>
                {g.title}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{g.skills}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}