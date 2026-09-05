import FadeIn from '@/components/ui/FadeIn'
import SectionHeading from '@/components/ui/SectionHeading'
import { experiences } from '@/data/experience'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <FadeIn>
        <SectionHeading label="Experience" />
        <p className="text-slate-400 mb-12 max-w-2xl -mt-4 text-sm leading-relaxed">
          Career history focused on internal R&D, rapid PoC development, scalable platform engineering, and automation.
        </p>
        <div className="border-l border-slate-800 ml-3 space-y-12 relative">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-10">
              <div className="absolute w-3.5 h-3.5 bg-primary rounded-full -left-[7px] top-2 ring-4 ring-bg shadow-[0_0_12px_rgba(132,190,194,0.6)]" />
              <div className="mb-1 flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/20 font-mono font-medium">
                  {exp.period}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-primary">{exp.company}</span>
                {exp.focus && (
                  <span className="text-xs text-slate-500 font-mono">
                    · {exp.focus}
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                {exp.details}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}