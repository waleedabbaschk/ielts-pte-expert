import { Link } from 'react-router-dom'
import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { siteInfo, navLinks } from '../../data/siteInfo'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="mx-auto grid max-w-[1760px] grid-cols-2 gap-x-6 gap-y-10 px-6 py-12 sm:px-8 md:grid-cols-3 md:gap-12 lg:px-12 xl:px-16 xl:py-16">
        <div className="col-span-2 text-center md:col-span-1 md:text-left">
          <div className="mb-4 flex items-center justify-center gap-2 text-white md:justify-start">
            <img src="/logo.png" alt="Atta ur Rehman IELTS and PTE logo" className="h-11 w-11 rounded-full bg-white object-contain" />
            <span className="text-lg font-bold">{siteInfo.name}</span>
          </div>
          <p className="mx-auto max-w-md text-sm leading-relaxed md:mx-0">
            {siteInfo.title}. {siteInfo.qualification}, {siteInfo.experience} of teaching
            experience. Helping students reach their target scores.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-gold-500">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <a href={`tel:${siteInfo.phone}`} className="transition hover:text-gold-500">
                {siteInfo.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <a
                href={`https://wa.me/${siteInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-gold-500"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              {siteInfo.location}
            </li>
            <li className="text-white/60">{siteInfo.mode}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 pb-24 text-center text-xs text-white/50 md:pb-5">
        © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
      </div>
    </footer>
  )
}
