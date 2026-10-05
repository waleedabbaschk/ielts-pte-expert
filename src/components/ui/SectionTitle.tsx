type SectionTitleProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionTitle({ eyebrow, title, subtitle, light = false }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-8 md:mb-12 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold-600">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-2xl font-bold sm:text-3xl md:text-4xl ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 ${light ? 'text-white/70' : 'text-slate-600'}`}>{subtitle}</p>
      )}
    </div>
  )
}

