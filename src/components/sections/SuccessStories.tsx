import { useState } from 'react'
import { Quote, Star } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { results } from '../../data/results'
import type { Exam, Result } from '../../data/results'
import { testimonials } from '../../data/testimonials'
import { siteInfo } from '../../data/siteInfo'

type Props = { limit?: number }
type Filter = 'All' | Exam

const tabs: Filter[] = ['All', 'PTE', 'IELTS', 'Oxford ELLT', 'LanguageCert']

function ResultCard({ r }: { r: Result }) {
  const initials = r.name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-gold-500">
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-navy-900">{r.name}</p>
          <span className="mt-1 inline-block rounded-md bg-gold-500/15 px-2 py-0.5 text-[11px] font-bold text-gold-600">
            {r.exam}
          </span>
        </div>
        <div className="text-right">
          <div className="text-3xl font-extrabold leading-none text-navy-900">{r.overall}</div>
          <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">{r.overallLabel}</div>
        </div>
      </div>

      <div className="mt-5 space-y-2.5">
        {r.skills.map(([label, value]) => (
          <div key={label}>
            <div className="mb-1 flex justify-between text-xs text-slate-500">
              <span>{label}</span>
              <span className="font-semibold text-navy-900">
                {value.toFixed(r.decimals)}
                {r.exam === 'LanguageCert' ? '/50' : ''}
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-600"
                style={{ width: `${(value / r.max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SuccessStories({ limit }: Props) {
  const [filter, setFilter] = useState<Filter>('All')
  const filtered = results.filter((r) => filter === 'All' || r.exam === filter)
  const shown = limit ? filtered.slice(0, limit) : filtered

  return (
    <section className="bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-[1760px] px-4 sm:px-8 lg:px-12 xl:px-16">
        <SectionTitle
          eyebrow="Results"
          title={limit ? `${siteInfo.successStories} Success Stories` : "Student Results"}
          subtitle={limit ? "Real scores from students who trained with us." : `A selection of real scores from the ${siteInfo.successStories} students who trained with us.`}
        />

        {!limit && (
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition ${
                  filter === t
                    ? 'bg-navy-900 text-white shadow-lg'
                    : 'bg-white text-navy-900 ring-1 ring-slate-200 hover:ring-gold-500'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((r) => (
            <ResultCard key={r.name} r={r} />
          ))}
        </div>

        {limit && (
          <div className="mt-10 text-center">
            <Button to="/results">View All Results</Button>
          </div>
        )}

        {testimonials.length > 0 && (
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <Quote className="h-8 w-8 text-gold-500/60" />
                <p className="mt-3 text-slate-700">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <p className="font-semibold text-navy-900">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      {t.exam} - {t.score}
                    </p>
                  </div>
                  <div className="flex text-gold-500">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
