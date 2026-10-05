import SectionTitle from '../ui/SectionTitle'

const steps = [
  { title: 'Assess', text: 'Identify your current English level and test weaknesses.' },
  { title: 'Plan', text: 'Develop a preparation strategy according to your target score.' },
  { title: 'Practice', text: 'Work on authentic-style tasks and targeted exercises.' },
  { title: 'Analyze', text: 'Identify mistakes through detailed feedback.' },
  { title: 'Improve', text: 'Repeat, refine and strengthen weak areas.' },
  { title: 'Test', text: 'Regular mock practice to build exam readiness.' },
]

export default function TeachingApproach() {
  return (
    <section className="bg-navy-900 py-14 md:py-20">
      <div className="mx-auto max-w-[1760px] px-4 sm:px-8 lg:px-12 xl:px-16">
        <SectionTitle
          light
          eyebrow="Method"
          title="My Teaching Approach"
          subtitle="A clear six-step process that takes you from your current level to your target score."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-navy-800 p-6">
              <span className="text-4xl font-extrabold text-gold-500/80">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
