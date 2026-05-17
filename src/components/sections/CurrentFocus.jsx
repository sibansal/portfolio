import FadeIn from '@/components/ui/FadeIn'
import SectionHeading from '@/components/ui/SectionHeading'

const topics = [
  "AI-powered product development",
  "PoC engineering & rapid prototyping",
  "Scalable full-stack systems",
  "Developer platforms & automation tooling",
  "Research-driven architecture & innovation"
]

export default function CurrentFocus() {
  return (
    <section className="py-24 border-t border-slate-800">
      <FadeIn>
        <SectionHeading label="Current Focus" />
        <ul className="space-y-4 max-w-xl">
          {topics.map((t, i) => (
            <li key={i} className="flex items-center gap-3 text-slate-300 text-sm group">
              <span className="w-2 h-2 rounded-full bg-primary/60 flex-shrink-0 group-hover:bg-primary transition-colors" />
              {t}
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  )
}