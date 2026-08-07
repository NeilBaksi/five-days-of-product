import { Link } from 'react-router-dom'
import clsx from 'clsx'
import type { DayContent } from '../../types'
import { ACCENTS } from '../../lib/accents'
import { Reveal } from '../layout/Reveal'

interface RoadmapStepperProps {
  days: DayContent[]
}

/** 5-step course roadmap — horizontal stepper on md+, vertical below md. */
export function RoadmapStepper({ days }: RoadmapStepperProps) {
  return (
    <ol className="relative">
      <div aria-hidden className="absolute bottom-0 left-4 top-0 w-px bg-rule md:hidden" />
      <div aria-hidden className="absolute left-0 right-0 top-4 hidden h-px bg-rule md:block" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4">
        {days.map((day, i) => {
          const accent = ACCENTS[day.accent]
          return (
            <Reveal as="li" key={day.n} delay={i * 0.06} className="relative flex gap-4 md:flex-col md:gap-0">
              <span
                aria-hidden
                className={clsx(
                  'relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-[0.8rem] font-semibold text-paper',
                  accent.dot,
                )}
              >
                {day.n}
              </span>
              <Link
                to={`/day/${day.n}`}
                className="flex-1 rounded-2xl border border-rule bg-surface p-5 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-brand md:mt-4"
              >
                <span
                  className={clsx(
                    'inline-flex items-center rounded-full px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider',
                    accent.badge,
                  )}
                >
                  Day 0{day.n}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">{day.title}</h3>
                <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                  {day.themes.map((theme, ti) => (
                    <span key={ti} className="font-mono text-[0.65rem] uppercase tracking-wide text-muted">
                      {theme}
                      {ti < day.themes.length - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{day.promise}</p>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </ol>
  )
}
