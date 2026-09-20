import { useState } from 'react'
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Blog',       href: 'https://blog.sibansal.dev', external: true },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Playground', href: 'https://playground.sibansal.dev', external: true },
  { label: 'Skills',     href: '#skills' },
  { label: 'About',      href: '#about' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-4xl mx-auto rounded-2xl border border-slate-800/80 bg-bg/90 backdrop-blur-xl shadow-2xl px-4 sm:px-6 py-2.5 md:py-3 pointer-events-auto relative">
        <nav className="flex justify-between items-center">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-base sm:text-lg font-bold text-white flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-black text-sm shadow-sm group-hover:bg-accent-500 transition-colors">
              SB
            </div>
            <span className="tracking-tight">Simran Bansal</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-5 lg:gap-6 text-sm font-medium text-slate-400">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-accent-500 transition-colors shadow-[0_0_16px_rgba(83,142,151,0.3)]"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Animated Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="md:hidden absolute top-full left-0 right-0 mt-2 p-3 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 shadow-2xl flex flex-col gap-1 z-50"
            >
              {links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors flex items-center justify-between"
                >
                  <span>{l.label}</span>
                  {l.external ? (
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                  )}
                </a>
              ))}

              <div className="pt-2 mt-1 border-t border-slate-800/80">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-accent-500 shadow-[0_0_16px_rgba(83,142,151,0.3)] transition-all"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}