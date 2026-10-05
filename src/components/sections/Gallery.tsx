import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Play, X } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

type Item = { type: 'image' | 'video'; src: string; caption: string }

const items: Item[] = [
  { type: 'image', src: '/images/gallery/classroom-1.jpg', caption: 'Classroom session' },
  { type: 'video', src: '/images/gallery/clip-1.mp4', caption: 'Computer lab practice' },
  { type: 'image', src: '/images/gallery/lab-1.jpg', caption: 'Computer lab' },
  { type: 'image', src: '/images/gallery/classroom-2.jpg', caption: 'Lecture with projector' },
  { type: 'video', src: '/images/gallery/clip-2.mp4', caption: 'Live class' },
  { type: 'image', src: '/images/gallery/lab-2.jpg', caption: 'Practice session' },
]

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="mx-auto max-w-[1760px] px-4 py-14 sm:px-8 md:py-20 lg:px-12 xl:px-16">
      <SectionTitle
        eyebrow="Gallery"
        title="Inside Our Classes"
        subtitle="A look at our classroom and computer lab where students prepare for their exams."
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
        {items.map((item) => (
          <div
            key={item.src}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-200 shadow-md"
          >
            {item.type === 'image' ? (
              <>
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  onClick={() => setActive(item.src)}
                  className="h-full w-full cursor-zoom-in object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 text-sm font-semibold text-white">
                  {item.caption}
                </div>
              </>
            ) : (
              <>
                <video
                  src={`${item.src}#t=0.5`}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
                  <Play className="h-3 w-3 fill-current" /> {item.caption}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {active &&
        createPortal(
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={active}
              alt="Gallery"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-full rounded-xl object-contain"
            />
          </div>,
          document.body,
        )}
    </section>
  )
}
