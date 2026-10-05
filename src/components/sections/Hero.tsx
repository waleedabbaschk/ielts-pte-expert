import { useState } from 'react'
import { GraduationCap, MessageCircle } from 'lucide-react'
import Button from '../ui/Button'
import { siteInfo } from '../../data/siteInfo'

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
      <div className="mx-auto grid max-w-[1760px] items-center gap-12 px-4 sm:px-8 lg:px-12 xl:px-16 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="mb-4 inline-block rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-gold-500">
            {siteInfo.qualification}
          </span>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-6xl">
            Achieve Your Dream <span className="text-gold-500">IELTS &amp; PTE</span> Score with Expert Guidance
          </h1>
          <p className="mt-6 max-w-lg text-base text-white/75 sm:text-lg">
            Learn with {siteInfo.shortName}, {siteInfo.experience} of teaching experience and{' '}
            {siteInfo.successStories} success stories. Online and physical classes available.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/contact">Book Free Demo</Button>
            <Button
              variant="outline"
              href={`https://wa.me/${siteInfo.whatsapp}`}
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gold-500/20 blur-2xl" />
            {imgError ? (
              <div className="relative flex h-80 w-64 sm:h-96 sm:w-80 lg:h-[30rem] lg:w-96 flex-col items-center justify-center rounded-3xl border border-white/10 bg-navy-800 text-white/60">
                <GraduationCap className="h-20 w-20 text-gold-500" />
                <p className="mt-4 text-sm">Photo coming soon</p>
              </div>
            ) : (
              <img
                src="/images/sir-atta.jpg"
                alt={siteInfo.name}
                onError={() => setImgError(true)}
                className="relative h-80 w-64 sm:h-96 sm:w-80 lg:h-[30rem] lg:w-96 rounded-3xl border border-white/10 object-cover shadow-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

