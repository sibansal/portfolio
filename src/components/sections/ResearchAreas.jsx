import { Cpu, Activity, Network, Database, Layers, Code, Search, Server } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeading from '@/components/ui/SectionHeading'
import { researchAreas } from '@/data/researchAreas'

const icons = [<Cpu/>, <Activity/>, <Network/>, <Code/>, <Layers/>, <Database/>, <Search/>, <Server/>]

export default function ResearchAreas() {
  return (
    <section id="research" className="py-24">
      <FadeIn>
        <SectionHeading label="Research Areas" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {researchAreas.map((area, i) => (
            <div key={i} className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-primary/40 hover:bg-slate-900/80 transition-all group cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                {icons[i] && <span className="w-4 h-4">{icons[i]}</span>}
              </div>
              <h3 className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{area.title}</h3>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}