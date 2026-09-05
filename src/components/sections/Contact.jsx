import { Mail, Github, Linkedin, MapPin, Send, Calendar, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeading from '@/components/ui/SectionHeading'

const socials = [
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/sibansal', label: 'GitHub' },
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/sibansal', label: 'LinkedIn' },
  { icon: <Send className="w-5 h-5" />, href: 'https://t.me/sibansal', label: 'Telegram' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-slate-800 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <FadeIn>
        <SectionHeading label="Let's Build Something" />
        <p className="text-slate-400 mb-8 max-w-md text-sm leading-relaxed -mt-2">
          Have an interesting product, technical problem, or idea worth exploring? Let&apos;s talk.
          I typically respond within 24 hours.
        </p>
        <ul className="space-y-3">
          <li>
            <a
              href="mailto:queries@sibansal.dev"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-primary/50 text-slate-300 hover:text-white transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Email</div>
                <div className="font-medium text-sm text-white">queries@sibansal.dev</div>
              </div>
            </a>
          </li>
          <li>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Location</div>
                <div className="font-medium text-sm text-white">HSR Layout, Bangalore, India</div>
              </div>
            </div>
          </li>
        </ul>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 font-mono">
              Connect With Me
            </h3>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-primary text-slate-400 hover:text-primary transition-all"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-2">
              1:1 Consultation & Technical Advisory
            </h3>

            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Book a personalized session to discuss rapid prototyping, backend systems,
              AI workflows, and architecture strategy.
            </p>

            <a
              href="https://topmate.io/sibansal"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 border border-primary/40 text-primary font-medium hover:bg-primary hover:text-white transition-all text-xs"
            >
              <Calendar className="w-4 h-4" />
              Book a Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <ul className="space-y-2">
            {[
              'Open to full-time engineering & R&D roles',
              'Available for technical advisory and product prototyping',
            ].map((note, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  )
}