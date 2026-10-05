import { BookOpen, GraduationCap, Headphones, MessageSquare, Plane, Check } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../ui/SectionTitle'
import { courses } from '../../data/courses'

const icons: Record<string, ReactNode> = {
  ielts: <BookOpen className="h-7 w-7" />,
  pte: <Headphones className="h-7 w-7" />,
  spoken: <MessageSquare className="h-7 w-7" />,
  academic: <GraduationCap className="h-7 w-7" />,
  abroad: <Plane className="h-7 w-7" />,
}

export default function Courses() {
  return (
    <section className="bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-[1760px] px-4 sm:px-8 lg:px-12 xl:px-16">
        <SectionTitle
          eyebrow="Courses"
          title="Choose Your Course"
          subtitle="Programs designed around your goal, level and target score."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {courses.map((c) => (
            <div
              key={c.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-gold-500">
                {icons[c.id]}
              </div>
              <h3 className="text-lg font-bold text-navy-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.description}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-6 text-sm font-semibold text-gold-600 hover:underline">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
