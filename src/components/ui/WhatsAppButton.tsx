import { MessageCircle } from 'lucide-react'
import { siteInfo } from '../../data/siteInfo'

export default function WhatsAppButton() {
  const text = encodeURIComponent('Assalam o Alaikum Sir, I want to know about IELTS/PTE classes.')
  return (
    <a
      href={`https://wa.me/${siteInfo.whatsapp}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110 hover:bg-green-600"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
