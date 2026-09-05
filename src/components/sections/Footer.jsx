export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-xs">
      <p className="text-white font-semibold mb-1 text-sm">Simran Bansal</p>
      <p className="mb-3 text-slate-400">R&D-Focused Full-Stack Engineer</p>
      <p className="text-slate-600">Built with precision &copy; {new Date().getFullYear()} Simran Bansal.</p>
    </footer>
  )
}