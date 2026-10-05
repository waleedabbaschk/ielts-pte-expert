import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

type Rule = [string, string, number | 'stagger']

// [selector, animation, delay in ms]
const rules: Rule[] = [
  ['main h1', 'up', 100],
  ['main h2', 'up', 0],
  ['main h1 + p, main h2 + p', 'up', 150],
  ['main span.rounded-full', 'fade', 0],
  ['main section.bg-gradient-to-br .mt-8.flex', 'up', 300],
  ['main .justify-center > .relative', 'zoom', 200],
  ['main .grid > *', 'up', 'stagger'],
  ['main section.bg-navy-900 .grid > *', 'zoom', 'stagger'],
  ['main ul.grid > li', 'left', 'stagger'],
  ['main .space-y-3 > *', 'up', 'stagger'],
  ['main form', 'left', 0],
  ['main .space-y-6', 'right', 150],
  ['main .border-dashed', 'zoom', 0],
  ['main section.bg-gradient-to-r > div', 'zoom', 0],
]

function countUp(el: HTMLElement) {
  const final = el.dataset.final ?? ''
  const m = final.match(/^(\d+)(.*)$/)
  if (!m) return
  const target = Number(m[1])
  const suffix = m[2]
  const start = performance.now()
  const duration = 1600
  const tick = (now: number) => {
    const p = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - p, 3)
    el.textContent = Math.round(target * eased) + suffix
    if (p < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

export default function ScrollEffects() {
  const { pathname } = useLocation()
  const barRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const main = document.querySelector('main')
    if (main) {
      main.classList.remove('page-in')
      main.getBoundingClientRect()
      main.classList.add('page-in')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          observer.unobserve(el)
          if (el.dataset.count) countUp(el)
          else el.classList.add('is-visible')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    const targets = new Set<HTMLElement>()

    rules.forEach(([selector, variant, delay]) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        const index = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0
        const d = delay === 'stagger' ? Math.min(index * 90, 450) : delay
        el.classList.add('rv')
        el.dataset.rv = variant
        el.style.setProperty('--d', `${d}ms`)
        targets.add(el)
      })
    })

    document.querySelectorAll<HTMLElement>('main .grid-cols-2 p.font-extrabold').forEach((el) => {
      const final = el.dataset.final ?? el.textContent ?? ''
      el.dataset.final = final
      if (/^\d/.test(final)) {
        el.dataset.count = '1'
        el.textContent = final.replace(/^\d+/, '0')
        targets.add(el)
      }
    })

    targets.forEach((el) => observer.observe(el))

    const onScroll = () => {
      const y = window.scrollY
      const h = document.documentElement.scrollHeight - window.innerHeight
      if (barRef.current) barRef.current.style.width = `${h > 0 ? (y / h) * 100 : 0}%`
      document.querySelector('header')?.classList.toggle('scrolled', y > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [pathname])

  return <div ref={barRef} className="scroll-progress" />
}
