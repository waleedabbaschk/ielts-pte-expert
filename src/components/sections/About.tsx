import { CheckCircle2 } from 'lucide-react'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'
import { siteInfo } from '../../data/siteInfo'

const highlights = [
  siteInfo.qualification,
  `${siteInfo.experience} of teaching experience`,
  'IELTS and PTE trainer',
  'Spoken English and Academic English',
  'Local and international students',
  'Demo lecture available',
]

export default function About() {
  return (
    <section className="mx-auto max-w-[1760px] px-4 sm:px-8 lg:px-12 xl:px-16 py-14 md:py-20">
      <SectionTitle
        eyebrow="About"
        title={`Meet ${siteInfo.name}`}
        subtitle="An English language specialist who helps students reach their target score with clear strategy and regular practice."
      />
      <div className="mx-auto max-w-6xl">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
              <span className="text-slate-700">{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Button to="/about">Read More</Button>
        </div>
      </div>
    </section>
  )
}

