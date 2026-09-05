import { Terminal } from 'lucide-react'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research', href: '#research' },
  { label: 'Blog', href: 'https://blog.sibansal.dev', external: true },
  { label: 'Playground', href: 'https://playground.sibansal.dev', external: true },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 border-b border-slate-800/60 mb-0 sticky top-0 z-50 backdrop-blur-md bg-bg/80">
      <a href="#home" className="text-lg font-bold text-white flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-black text-sm">SB</div>
        Simran Bansal
      </a>
      <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="hover:text-primary transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
      <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-accent-500 transition-colors shadow-[0_0_16px_rgba(132,190,194,0.3)]">
        Get in Touch
      </a>
    </nav>
  )
}