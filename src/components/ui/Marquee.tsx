const items = [
  'IELTS',
  'PTE',
  'Spoken English',
  'Academic English',
  'Mock Tests',
  'Online Classes',
  'Physical Classes',
  'Demo Lecture',
  'Study Abroad',
]

export default function Marquee() {
  const list = [...items, ...items]

  return (
    <div className="marquee mt-12 overflow-hidden border-y border-slate-200 bg-slate-50 py-4">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {list.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-10 pr-10 text-sm font-semibold uppercase tracking-widest text-navy-900/70"
          >
            {t}
            <span className="text-gold-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
