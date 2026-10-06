$ErrorActionPreference = 'Stop'

# Project folder (agar tumhara folder alag jagah hai to yeh path badal do)
Set-Location 'C:\sir-atta-website'

if (-not (Test-Path 'src\components\sections')) {
  Write-Host 'ERROR: yeh sir-atta-website project folder nahi lag raha. Path check karo.' -ForegroundColor Red
  exit 1
}

# ---------------------------------------------------------------
# 1) Results data (34 students: PTE, IELTS, Oxford ELLT, LanguageCert)
# ---------------------------------------------------------------
Set-Content -Path 'src\data\results.ts' -Encoding UTF8 -Value @'
export type Exam = 'PTE' | 'IELTS' | 'Oxford ELLT' | 'LanguageCert'

export type Result = {
  name: string
  exam: Exam
  overall: string
  overallLabel: string
  max: number
  decimals: number
  skills: [string, number][]
}

const pte = (name: string, overall: number, l: number, r: number, s: number, w: number): Result => ({
  name,
  exam: 'PTE',
  overall: String(overall),
  overallLabel: 'Overall',
  max: 90,
  decimals: 0,
  skills: [['Listening', l], ['Reading', r], ['Speaking', s], ['Writing', w]],
})

const ielts = (name: string, overall: number, l: number, r: number, w: number, s: number): Result => ({
  name,
  exam: 'IELTS',
  overall: overall.toFixed(1),
  overallLabel: 'Overall Band',
  max: 9,
  decimals: 1,
  skills: [['Listening', l], ['Reading', r], ['Writing', w], ['Speaking', s]],
})

const oxford = (name: string, overall: number, l: number, r: number, w: number, s: number): Result => ({
  name,
  exam: 'Oxford ELLT',
  overall: String(overall),
  overallLabel: 'Overall Level',
  max: 12,
  decimals: 0,
  skills: [['Listening', l], ['Reading', r], ['Writing', w], ['Speaking', s]],
})

const languageCert = (name: string, skills: [string, number][]): Result => ({
  name,
  exam: 'LanguageCert',
  overall: 'B2',
  overallLabel: 'High Pass',
  max: 50,
  decimals: 0,
  skills,
})

export const results: Result[] = [
  // Top picks (shown on the home page)
  pte('Noman Saif Ullah', 90, 90, 77, 90, 86),
  pte('Shumaila Akbar', 85, 77, 66, 90, 63),
  ielts('Ubaid Abdullah', 7.5, 8.5, 7.5, 6.5, 6.5),
  pte('Muhammad Ahsan', 75, 76, 63, 79, 69),
  oxford('Rabia Shehzadi', 9, 9, 9, 9, 8),
  ielts('Saad Akbar Gondal', 7.0, 7.5, 7.0, 6.0, 7.5),

  // PTE
  pte('Ghulam Abbas', 72, 73, 60, 74, 65),
  pte('Tanzeela Rubab', 70, 66, 75, 65, 71),
  pte('Fahad Ali Amjad', 69, 65, 55, 72, 71),
  pte('Azka Batool', 68, 65, 69, 74, 64),
  pte('Nabeel Ahmed', 68, 64, 65, 76, 67),
  pte('Faizan Ali', 67, 64, 64, 71, 62),
  pte('Muhammad Musa Azeem', 67, 68, 66, 67, 69),
  pte('Sheraz Ul Hassan', 66, 65, 58, 64, 67),
  pte('Muhammad Taimoor', 66, 68, 66, 60, 70),
  pte('Tayyab Tahir', 64, 69, 51, 81, 60),
  pte('Muhammad Saad Ali', 61, 63, 60, 71, 57),
  pte('Wajahat Ali Feroze', 60, 60, 61, 60, 58),

  // IELTS
  ielts('Afnan Habib', 6.5, 7.5, 6.5, 6.0, 6.0),
  ielts('Muhammad Saad Raza', 6.5, 7.5, 6.0, 6.5, 5.5),
  ielts('Maria Urooj', 6.5, 7.0, 6.0, 6.0, 6.0),
  ielts('Farwa Shoukat', 6.5, 8.0, 6.5, 5.5, 6.5),
  ielts('Masooma Zahra', 6.0, 6.0, 6.0, 6.0, 6.0),

  // Oxford ELLT
  oxford('Muhammad Abdullah Manzoor', 9, 10, 9, 10, 7),
  oxford('Sana Hafeez', 8, 8, 7, 10, 7),
  oxford('Haseeb Hassan', 8, 8, 8, 7, 7),
  oxford('Syeda Arsha Ali', 8, 10, 8, 7, 7),
  oxford('Lutuf Ur Rehman', 8, 9, 8, 8, 6),
  oxford('Muhammad Rashid', 8, 9, 8, 9, 6),
  oxford('Zubaria Batool', 8, 8, 9, 7, 7),
  oxford('Abdul Basit Mehmood', 7, 6, 9, 6, 7),
  oxford('Muhammad Abdullah Zain', 7, 7, 8, 7, 5),

  // LanguageCert
  languageCert('Ahsan Ali', [['Speaking', 42]]),
  languageCert('Muhammad Haroon', [['Speaking', 38]]),
]
'@

# ---------------------------------------------------------------
# 2) Results cards + filter tabs
# ---------------------------------------------------------------
Set-Content -Path 'src\components\sections\SuccessStories.tsx' -Encoding UTF8 -Value @'
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
          title={`${siteInfo.successStories} Success Stories`}
          subtitle="Real scores from students who trained with us."
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
'@

# ---------------------------------------------------------------
# 3) Contact section (map fix + Get Directions button)
# ---------------------------------------------------------------
Set-Content -Path 'src\components\sections\Contact.tsx' -Encoding UTF8 -Value @'
import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { MapPin, MessageCircle, Phone } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { siteInfo } from '../../data/siteInfo'

type FormState = { name: string; phone: string; course: string; message: string }

const mapEmbed = 'https://maps.google.com/maps?q=Orkans%20International%20Chakwal&z=15&output=embed'
const mapLink = 'https://www.google.com/maps/search/?api=1&query=Orkans+International+Chakwal'

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', course: 'IELTS', message: '' })

  const update = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const text =
      `Assalam o Alaikum Sir, my name is ${form.name}.\n` +
      `Phone: ${form.phone}\n` +
      `Course: ${form.course}\n` +
      `${form.message}`
    window.open(`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
  }

  const input =
    'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20'

  return (
    <section id="contact" className="bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-[1760px] px-4 sm:px-8 lg:px-12 xl:px-16">
        <SectionTitle
          eyebrow="Contact"
          title="Book Your Free Demo"
          subtitle="Send your details and the message will open in WhatsApp, ready to send."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <form onSubmit={submit} className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <input className={input} name="name" placeholder="Your name" required value={form.name} onChange={update} />
            <input className={input} name="phone" placeholder="Your phone / WhatsApp number" required value={form.phone} onChange={update} />
            <select className={input} name="course" value={form.course} onChange={update}>
              <option>IELTS</option>
              <option>PTE</option>
              <option>Spoken English</option>
              <option>Academic English</option>
              <option>Study Abroad</option>
            </select>
            <textarea className={input} name="message" rows={4} placeholder="Your message (target score, exam date, etc.)" value={form.message} onChange={update} />
            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-semibold text-navy-900 transition hover:bg-gold-600"
            >
              <MessageCircle className="h-5 w-5" /> Send via WhatsApp
            </button>
          </form>

          <div className="space-y-6">
            <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
              <p className="flex items-center gap-3 text-slate-700">
                <Phone className="h-5 w-5 text-gold-600" /> {siteInfo.phone}
              </p>
              <p className="flex items-center gap-3 text-slate-700">
                <MapPin className="h-5 w-5 text-gold-600" /> {siteInfo.location}
              </p>
              <p className="text-sm text-slate-500">{siteInfo.mode}</p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <iframe
                title="Location map"
                src={mapEmbed}
                className="block h-64 w-full border-0 md:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="p-4">
                <Button href={mapLink}>
                  <MapPin className="h-4 w-4" /> Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
'@

# ---------------------------------------------------------------
# 4) Vercel: /about, /results waghera refresh par 404 na aaye
# ---------------------------------------------------------------
Set-Content -Path 'vercel.json' -Encoding UTF8 -Value @'
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
'@

Write-Host ''
Write-Host 'Done! 4 files update ho gayi:' -ForegroundColor Green
Write-Host '  src\data\results.ts'
Write-Host '  src\components\sections\SuccessStories.tsx'
Write-Host '  src\components\sections\Contact.tsx'
Write-Host '  vercel.json'
