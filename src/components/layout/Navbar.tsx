import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import { siteInfo, navLinks } from '../../data/siteInfo'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition hover:text-gold-500 ${isActive ? 'text-gold-500' : 'text-white'}`

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1760px] items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-16 py-4">
        <Link to="/" className="flex items-center gap-2 text-white">
          <img src="/logo.png" alt="Atta ur Rehman IELTS and PTE logo" className="h-11 w-11 rounded-full bg-white object-contain" />
          <span className="font-bold leading-tight">
            {siteInfo.shortName}
            <span className="block text-[11px] font-normal text-white/60">IELTS &amp; PTE Expert</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <Button to="/contact">Book Free Demo</Button>
        </nav>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-white/10 bg-navy-900 px-4 py-5 md:hidden">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Button to="/contact" onClick={() => setOpen(false)}>
            Book Free Demo
          </Button>
        </nav>
      )}
    </header>
  )
}
