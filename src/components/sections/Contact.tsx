import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { MapPin, MessageCircle, Phone } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { siteInfo } from '../../data/siteInfo'

type FormState = { name: string; phone: string; course: string; message: string }

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
            <iframe
              title="Location map"
              src="https://www.google.com/maps?q=Orkans+International,+Chakwal,+Pakistan&output=embed"
              className="h-64 w-full rounded-2xl border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
