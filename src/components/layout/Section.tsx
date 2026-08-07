import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionProps {
  id?: string
  /** Editorial numeral, e.g. "01" */
  index?: string
  kicker?: string
  title: string
  intro?: string
  /** Optional numeral color class (per-day accent). Defaults to faint brand. */
  numeralClass?: string
  children: ReactNode
}

/**
 * Editorial section shell: a big serif numeral in a narrow left column, a
 * kicker eyebrow, a display heading, an optional intro, then content.
 * Asymmetric on desktop — never centered.
 */
export function Section({ id, index, kicker, title, intro, numeralClass, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-16">
      <Reveal>
        {(index || kicker) && (
          <p className="flex items-baseline gap-2">
            {index && (
              <span className={`font-display text-lg font-bold leading-none ${numeralClass ?? 'text-brand'}`}>
                {index}
              </span>
            )}
            {index && kicker && <span className="text-muted/50" aria-hidden>·</span>}
            {kicker && <span className="kicker">{kicker}</span>}
          </p>
        )}
        <h2 className="mt-2 text-display-lg font-bold text-ink">{title}</h2>
        {intro && <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">{intro}</p>}
      </Reveal>
      <div className="mt-8 sm:mt-10">{children}</div>
    </section>
  )
}
