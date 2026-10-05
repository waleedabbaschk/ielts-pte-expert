import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { faqs } from '../../data/faqs'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-4 py-14 md:py-20">
      <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = openIndex === i
          return (
            <div key={f.question} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy-900"
              >
                {f.question}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gold-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen && <p className="px-5 pb-5 text-sm text-slate-600">{f.answer}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
