import type { ReactNode } from 'react'
import clsx from 'clsx'
import { Badge } from './Badge'

interface CompetencyColumnsProps {
  competencies: string[]
  eq: { title: string; body: string; icon: ReactNode }[]
  fit: string
}

/** 3-column layout: competency chips, EQ notes, and company-fit prose. */
export function CompetencyColumns({ competencies, eq, fit }: CompetencyColumnsProps) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8 lg:divide-x lg:divide-rule">
      <div>
        <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">
          Core competencies
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {competencies.map((c, i) => (
            <Badge key={i} tone="neutral">
              {c}
            </Badge>
          ))}
        </div>
      </div>

      <div className="lg:pl-8">
        <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">
          Emotional intelligence
        </p>
        <div className="mt-4 space-y-5">
          {eq.map((item, i) => (
            <div key={i} className="flex gap-3">
              <span
                aria-hidden
                className={clsx(
                  'shrink-0',
                  i % 2 === 0 ? 'mt-0.5 text-brand' : 'mt-1 text-berry',
                )}
              >
                {item.icon}
              </span>
              <div>
                <p className="font-medium text-ink">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:pl-8">
        <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">Company fit</p>
        <p className="mt-4 max-w-prose text-[0.95rem] leading-relaxed text-ink-soft">{fit}</p>
      </div>
    </div>
  )
}
