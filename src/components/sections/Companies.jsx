import FadeIn from '@/components/ui/FadeIn'
import { companies } from '@/data/companies'

export default function Companies() {
  return (
    <section className="py-10 border-y border-slate-800">
      <FadeIn>
        <p className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-8">
          Worked With
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
          {companies.map((c, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm font-medium">
              <span className="w-6 h-6 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-white">
                {c[0]}
              </span>
              {c}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}