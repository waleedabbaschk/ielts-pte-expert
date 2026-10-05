import { ClipboardCheck, Globe, Laptop, MessageSquare } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const reasons = [
  {
    icon: <Laptop className="h-6 w-6" />,
    title: 'Online + Physical Classes',
    text: 'Join from anywhere online, or attend in person in Chakwal.',
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: 'Detailed Feedback',
    text: 'Your mistakes are analyzed so you know exactly what to fix.',
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: 'Regular Mock Tests',
    text: 'Exam-style practice that builds confidence before test day.',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Local & International Students',
    text: 'Experience teaching students from Pakistan and abroad.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-[1760px] px-4 sm:px-8 lg:px-12 xl:px-16 py-14 md:py-20">
      <SectionTitle eyebrow="Why Choose Us" title="Learn With Confidence" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r) => (
          <div key={r.title} className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
              {r.icon}
            </div>
            <h3 className="font-bold text-navy-900">{r.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
