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
    <section id={id} className="scroll-mt-32 py-16 sm:py-20 lg:py-28 md:scroll-mt-24">
      <Reveal>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
          {index && (
            <div className="lg:col-span-3" aria-hidden>
              <span
                className={`font-display text-6xl font-black leading-none sm:text-7xl ${numeralClass ?? 'text-brand/15'}`}
              >
                {index}
              </span>
            </div>
          )}
          <div className={index ? 'lg:col-span-9' : 'lg:col-span-12'}>
            {kicker && <p className="kicker">{kicker}</p>}
            <h2 className="mt-3 text-display-lg font-black text-ink">{title}</h2>
            {intro && <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">{intro}</p>}
          </div>
        </div>
      </Reveal>
      <div className={index ? 'mt-10 sm:mt-12 lg:mt-14 lg:pl-[25%]' : 'mt-10 sm:mt-12 lg:mt-14'}>{children}</div>
    </section>
  )
}
