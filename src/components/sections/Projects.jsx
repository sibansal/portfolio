import FadeIn from '@/components/ui/FadeIn'
import TiltCard from '@/components/ui/TiltCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Tag from '@/components/ui/Tag'
import { projects } from '@/data/projects'
import { ArrowRight } from 'lucide-react'

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
              <p className="text-slate-400 text-sm flex-grow mb-2">{p.desc}</p>
              <p className="text-xs font-semibold  mb-6 text-slate-400">
                {p.is_open_source ?
                  (<span className="text-green-300 opacity-50">Open Source</span>) :
                  (<span className="text-red-300 opacity-50">Closed Source</span>)}
              </p>
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
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.case_study_link && (
                  <a
                    href={p.case_study_link}
                    className="px-4 py-2 rounded-md bg-primary text-white text-[10px] font-medium hover:bg-accent-500 transition-all shadow-[0_0_12px_rgba(132,190,194,0.25)]
                hover:shadow-[0_0_20px_rgba(132,190,194,0.4)] inline-flex mt-4 items-center gap-1 w-max"
                  >
                    View Case Study
                    <ArrowRight className="w-3 h-3" />
                  </a>)}
                {p.code_link && (
                  <a
                    href={p.code_link}
                    className="px-4 py-2 rounded-md bg-primary text-white text-[10px] font-medium hover:bg-accent-500 transition-all shadow-[0_0_12px_rgba(132,190,194,0.25)]
                hover:shadow-[0_0_20px_rgba(132,190,194,0.4)] inline-flex mt-4 items-center gap-1 w-max"
                  >
                    View Code
                    <ArrowRight className="w-3 h-3" />
                  </a>)}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}