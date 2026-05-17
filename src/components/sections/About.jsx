import { MapPin, CheckCircle, Code } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import TiltCard from '@/components/ui/TiltCard'
import SectionHeading from '@/components/ui/SectionHeading'

const facts = [
  { icon: <MapPin className="w-5 h-5"/>, label: 'Location', detail: 'HSR Layout, Bangalore, India' },
  { icon: <CheckCircle className="w-5 h-5"/>, label: 'Education', detail: 'M.Tech & B.Tech in Computer Science' },
  { icon: <Code className="w-5 h-5"/>, label: 'Focus', detail: 'Full-Stack Development, PoC Engineering, System Architecture, Rapid Prototyping & AI-Driven Products' },
]

export default function About() {
  return (
    <section id="about" className="py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
      <FadeIn>
        <SectionHeading label="About Me" />
        <div className="space-y-5 text-slate-400 leading-relaxed">
          <p>
            Since childhood, I've had a deep passion for technology which drove me to pursue technical
            education. My thirst for knowledge and growth in this field has only intensified over time.
          </p>
          <blockquote className="border-l-4 border-primary pl-4 py-2 italic text-slate-300 bg-primary/5 rounded-r-lg text-sm">
            "If I am 1, then a team of two is 11, and three is 111. Together, we can accomplish great things."
          </blockquote>
          <p>
            Technology is not just about me — it's about us. Good systems involve hundreds of components
            working as a team toward a common goal.
          </p>
          <p>
            I believe in expression over impression. I often build projects from scratch, resulting in a
            70% success rate as of now.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <TiltCard>
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 h-full">
            <h3 className="text-lg font-semibold text-white mb-6">Quick Facts</h3>
            <ul className="space-y-6">
              {facts.map((f, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mt-0.5 flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">{f.label}</div>
                    <div className="text-slate-400 text-sm">{f.detail}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </TiltCard>
      </FadeIn>
    </section>
  )
}