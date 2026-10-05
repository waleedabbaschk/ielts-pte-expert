import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'outline' | 'whatsapp'
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200'

  const styles = {
    primary: 'bg-gold-500 text-navy-900 hover:bg-gold-600 shadow-lg shadow-gold-500/20',
    outline: 'border border-white/40 text-white hover:bg-white/10',
    whatsapp: 'bg-green-500 text-white hover:bg-green-600',
  }

  const cls = `${base} ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
