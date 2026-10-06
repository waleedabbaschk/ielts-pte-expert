import { MessageCircle } from 'lucide-react'
import Button from '../ui/Button'
import { siteInfo } from '../../data/siteInfo'

export default function ReviewCTA() {
  const text = encodeURIComponent(
    'Assalam o Alaikum Sir, I am your student and I would like to share my feedback.',
  )

  return (
    <section className="bg-slate-50 pb-14 md:pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <div className="rounded-2xl border border-gold-500/30 bg-white p-8 text-center shadow-sm">
          <h3 className="text-xl font-bold text-navy-900 md:text-2xl">
            Studied with us? Share your experience
          </h3>
          <p className="mt-2 text-slate-600">
            Your feedback helps other students choose with confidence.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href={`https://wa.me/${siteInfo.whatsapp}?text=${text}`} variant="whatsapp">
              <MessageCircle className="h-4 w-4" /> Send Your Feedback
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
