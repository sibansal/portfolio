export default function Tag({ label }) {
  return (
    <span className="px-3 py-1 text-xs rounded border border-slate-700 bg-slate-800 text-blue-300 font-mono">
      {label}
    </span>
  )
}