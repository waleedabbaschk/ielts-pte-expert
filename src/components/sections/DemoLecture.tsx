import { useState } from 'react'
import { PlayCircle } from 'lucide-react'
import Button from '../ui/Button'
import { siteInfo } from '../../data/siteInfo'

export default function DemoLecture() {
  const [hasPoster, setHasPoster] = useState(true)
  const text = encodeURIComponent('Assalam o Alaikum Sir, I want to book a free demo lecture.')

  return (
    <section className="bg-gradient-to-r from-navy-900 to-navy-700 py-14 text-white md:py-20">
      <div
        className={`mx-auto grid max-w-[1760px] items-center gap-10 px-4 sm:px-8 lg:px-12 xl:px-16 ${
          hasPoster ? 'lg:grid-cols-2' : ''
        }`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <PlayCircle className="mx-auto h-12 w-12 text-gold-500" />
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">Try Before You Join</h2>
          <p className="mt-3 text-white/75">
            Attend a free demo lecture, see the teaching style and decide with confidence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={`https://wa.me/${siteInfo.whatsapp}?text=${text}`} variant="whatsapp">
              Book Demo on WhatsApp
            </Button>
            <Button to="/contact" variant="outline">
              Contact Form
            </Button>
          </div>
        </div>

        {hasPoster && (
          <div className="flex justify-center">
            <img
              src="/images/posters/poster-1.jpg"
              alt="Free demo class poster"
              loading="lazy"
              onError={() => setHasPoster(false)}
              className="w-full max-w-md rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </div>
        )}
      </div>
    </section>
  )
}
