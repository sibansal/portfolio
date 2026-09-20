import { useState } from 'react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeading from '@/components/ui/SectionHeading'
import Tag from '@/components/ui/Tag'
import { projects } from '@/data/projects'
import { ArrowUpRight, TrendingUp, Lock, ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 4)
  const hasMore = projects.length > 4

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <FadeIn>
        <SectionHeading label="Selected Work" />
        <p className="text-slate-400 mb-10 max-w-2xl -mt-4 text-sm leading-relaxed">
          Systems, products, and engineering projects I&apos;ve built or contributed to across AI, automation, infrastructure, and full-stack development.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedProjects.map((p, i) => {
          const isOddLast = i === displayedProjects.length - 1 && displayedProjects.length % 2 === 1
          return (
            <div
              key={p.title}
              className={`w-full ${isOddLast ? 'md:col-span-2' : ''}`}
            >
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all h-full flex flex-col justify-between relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Header: Source tag + Focus tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-3">
                    {p.source === 'Open Source' ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Open Source
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-800 text-slate-400 border border-slate-700/80 inline-flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5 text-slate-500" />
                        {p.source || 'Closed Source'}
                      </span>
                    )}
                    {p.focus.slice(0, isOddLast ? 4 : 2).map((f, fi) => (
                      <span
                        key={fi}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-primary/10 text-primary border border-primary/20"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors mb-2.5">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-slate-300 text-xs leading-relaxed mb-4 ${isOddLast ? 'max-w-3xl' : ''}`}>
                    {p.desc}
                  </p>

                  {/* Key Outcome Highlight */}
                  {p.achievements && p.achievements.length > 0 && (
                    <div className="flex items-start gap-2 text-xs text-slate-300 mb-4 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 font-mono">
                      <TrendingUp className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span className="leading-snug">{p.achievements[0]}</span>
                    </div>
                  )}
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-slate-800/60">
                    {p.tech.map(t => (
                      <Tag key={t} label={t} />
                    ))}
                  </div>

                  {/* CTA links */}
                  <div className="flex flex-wrap items-center gap-2">
                    {p.live_link && (
                      <a
                        href={p.live_link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-medium hover:bg-accent-500 transition-all shadow-[0_0_12px_rgba(83,142,151,0.3)]"
                      >
                        Live Site
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {p.code_link && (
                      <a
                        href={p.code_link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium hover:border-primary hover:text-white transition-all shadow-sm"
                      >
                        <Github className="w-3 h-3" />
                        GitHub
                      </a>
                    )}
                    {p.case_study_link && (
                      <a
                        href={p.case_study_link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-medium hover:bg-primary hover:text-white transition-all shadow-sm"
                      >
                        View Case Study
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono font-medium hover:border-primary/60 hover:text-white transition-all shadow-sm group"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="w-4 h-4 text-primary group-hover:-translate-y-0.5 transition-transform" />
              </>
            ) : (
              <>
                Load More Work ({projects.length - 4} more)
                <ChevronDown className="w-4 h-4 text-primary group-hover:translate-y-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  )
}