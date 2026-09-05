import { Bot, RefreshCw, Network, Wrench, Layout, Server, Sparkles, Activity } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeading from '@/components/ui/SectionHeading'
import { explorationAreas } from '@/data/areasOfExploration'

const icons = [
  <Bot className="w-5 h-5" />,
  <RefreshCw className="w-5 h-5" />,
  <Network className="w-5 h-5" />,
  <Wrench className="w-5 h-5" />,
  <Layout className="w-5 h-5" />,
  <Server className="w-5 h-5" />,
  <Sparkles className="w-5 h-5" />,
  <Activity className="w-5 h-5" />,
]

export default function AreasOfExploration() {
  return (
    <section id="exploration" className="py-24">
      <FadeIn>
        <SectionHeading label="Areas of Exploration" />
        <p className="text-slate-400 mb-12 max-w-2xl -mt-4 text-sm leading-relaxed">
          Technical domains I actively explore through projects, PoCs, engineering work, experimentation, and technical writing.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {explorationAreas.map((area, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 hover:bg-slate-900/90 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  {icons[i]}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
