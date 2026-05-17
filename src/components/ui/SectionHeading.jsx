export default function SectionHeading({ label }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="w-8 h-1 rounded-full bg-primary flex-shrink-0" />
      <h2 className="text-3xl font-bold text-white">{label}</h2>
    </div>
  )
}