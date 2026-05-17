import FadeIn from '@/components/ui/FadeIn'
import SectionHeading from '@/components/ui/SectionHeading'
import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <FadeIn>
        <SectionHeading label="Experience" />
        <div className="border-l border-slate-800 ml-3 space-y-12 relative">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-10">
              <div className="absolute w-3 h-3 bg-primary/60 rounded-full -left-[6.5px] top-2 ring-4 ring-bg" />
              <div className="mb-1 flex flex-wrap items-center gap-3">
                <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/20 font-mono">{exp.period}</span>
              </div>
              <p className="text-sm font-medium text-primary mb-2">{exp.company}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{exp.details}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}