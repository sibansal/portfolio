import { Mail, Phone, Github, Linkedin, Download, MapPin, Send, Calendar } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeading from '@/components/ui/SectionHeading'

const socials = [
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/sibansal', label: 'GitHub' },
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/sibansal', label: 'LinkedIn' },
  { icon: <Send className="w-5 h-5" />, href: 'https://t.me/sibansal', label: 'Telegram' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-slate-800 grid grid-cols-1 lg:grid-cols-2 gap-16">
      <FadeIn>
        <SectionHeading label="Let's Build Something Great" />
        <p className="text-slate-400 mb-8 max-w-md text-sm leading-relaxed">
          Ready to discuss your next project or collaboration opportunity? I typically respond within 24 hours. For urgent matters please call or message on Telegram.
        </p>
        <ul className="space-y-3">
          <li>
            <a href="mailto:hireme@sibansal.dev" className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-primary/50 text-slate-300 hover:text-white transition-all">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <div className="text-xs text-slate-500">Email</div>
                <div className="font-medium text-sm">hireme@sibansal.dev</div>
              </div>
            </a>
          </li>
          <li>
          </li>
          <li>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <div className="text-xs text-slate-500">Location</div>
                <div className="font-medium text-sm">HSR Layout, Bangalore, India</div>
              </div>
            </div>
          </li>
        </ul>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Connect with me</h3>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  className="p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-primary text-slate-400 hover:text-primary transition-all"
                  aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white mb-2">
              1:1 Consultation
            </h3>

            <p className="text-slate-400 text-sm mb-4">
              Book a personalized session to discuss backend engineering,
              system design, cloud infrastructure, and career guidance.
            </p>

            <a
              href="https://topmate.io/sibansal"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary/10 border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all text-sm"
            >
              <Calendar className="w-4 h-4" />
              Book a Consultation
            </a>
          </div>

          <ul className="space-y-2">
            {['Open to full-time opportunities', 'Willing to relocate for the right opportunity'].map((note, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" /> {note}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  )
}