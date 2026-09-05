import FadeIn from '@/components/ui/FadeIn'
import TiltCard from '@/components/ui/TiltCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Tag from '@/components/ui/Tag'
import { projects } from '@/data/projects'
import { ArrowUpRight, TrendingUp } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <FadeIn>
        <SectionHeading label="Selected Work" />
        <p className="text-slate-400 mb-12 max-w-2xl -mt-4 text-sm leading-relaxed">
          Systems, products, and engineering projects I&apos;ve built or contributed to across AI, automation, infrastructure, and full-stack development.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <TiltCard key={i}>
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all h-full flex flex-col relative overflow-hidden group shadow-lg">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Title & Focus Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.focus.map((f, fi) => (
                    <span
                      key={fi}
                      className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                {p.desc}
              </p>

              {/* Problem & Approach */}
              <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800/80 mb-6 space-y-3">
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold tracking-wider block mb-1">
                    Challenge
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.problem}
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-primary/80 font-semibold tracking-wider block mb-1">
                    Engineering Approach
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.approach}
                  </p>
                </div>
              </div>

              {/* Measurable Outcomes */}
              <div className="mb-6">
                <div className="flex items-center gap-1.5 mb-2.5">
                  <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                    Measurable Outcomes
                  </h4>
                </div>
                <ul className="space-y-2">
                  {p.achievements.map((a, j) => (
                    <li key={j} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span className="leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-slate-800/60">
                {p.tech.map(t => (
                  <Tag key={t} label={t} />
                ))}
              </div>

              {/* CTA link */}
              {p.case_study_link && (
                <div>
                  <a
                    href={p.case_study_link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-medium hover:bg-primary hover:text-white transition-all shadow-sm"
                  >
                    View Case Study
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}