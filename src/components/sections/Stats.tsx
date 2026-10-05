import { siteInfo } from '../../data/siteInfo'

const stats = [
  { value: siteInfo.experience, label: 'Teaching Experience' },
  { value: siteInfo.successStories, label: 'Success Stories' },
  { value: 'Online + Physical', label: 'Class Modes' },
  { value: 'MPhil', label: 'English Linguistics' },
]

export default function Stats() {
  return (
    <section className="relative z-10 mx-auto -mt-10 max-w-[1760px] px-4 sm:px-8 lg:px-12 xl:px-16">
      <div className="grid grid-cols-2 gap-6 rounded-2xl bg-white p-5 md:p-8 shadow-xl md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-xl font-extrabold text-navy-900 sm:text-2xl md:text-3xl">{s.value}</p>
            <p className="mt-1 text-sm text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

