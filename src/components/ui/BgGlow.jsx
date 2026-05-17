export default function BgGlow() {
  return (
    <>
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-600/10 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-500/10 blur-[120px] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-grid-faint bg-[size:32px_32px] opacity-100 pointer-events-none z-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
    </>
  )
}