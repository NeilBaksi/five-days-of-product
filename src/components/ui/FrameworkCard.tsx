import { Link } from 'react-router-dom'
import type { Framework } from '../../types'
import { renderBlock } from '../../pages/blocks'
import { Accordion } from './Accordion'
import { Reveal } from '../layout/Reveal'

interface FrameworkCardProps {
  framework: Framework
  delay?: number
}

/** One framework reference card: eyebrow + name, tagline, summary, points, origin, when-not-to-use, cross-links, and an optional in-practice accordion. */
export function FrameworkCard({ framework, delay = 0 }: FrameworkCardProps) {
  return (
    <Reveal delay={delay}>
      <article className="flex flex-col rounded-2xl border border-rule bg-surface p-6">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">{framework.category}</span>
          {framework.abbev && (
            <span className="rounded-full bg-blue-wash px-2.5 py-0.5 font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-brand">
              {framework.abbev}
            </span>
          )}
        </div>

        <h3 className="font-display text-xl font-bold text-ink">{framework.name}</h3>
        <p className="mt-1 text-sm font-medium text-berry">{framework.tagline}</p>
        <p className="mt-3 text-ink-soft">{framework.summary}</p>

        <ul className="mt-4 space-y-2">
          {framework.points.map((point) => {
            const dashIndex = point.indexOf('—')
            const label = dashIndex >= 0 ? point.slice(0, dashIndex).trim() : null
            const clause = dashIndex >= 0 ? point.slice(dashIndex + 1).trim() : point
            return (
              <li key={point} className="flex gap-2 text-sm leading-relaxed">
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>
                  {label && <span className="font-display font-bold text-ink">{label} — </span>}
                  <span className="text-ink-soft">{clause}</span>
                </span>
              </li>
            )
          })}
        </ul>

        {framework.origin && (
          <p className="mt-4 text-sm text-ink-soft">
            <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">
              Origin:{' '}
            </span>
            {framework.origin}
          </p>
        )}

        {framework.whenNotToUse && (
          <div className="mt-4 rounded-xl bg-amber-wash p-3">
            <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-gold-deep">
              When not to use it
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink">{framework.whenNotToUse}</p>
          </div>
        )}

        {framework.usedOn && framework.usedOn.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {framework.usedOn.map((route) => {
              const match = route.match(/\/day\/(\d+)/)
              const label = match ? `Day ${match[1]}` : route
              return (
                <Link
                  key={route}
                  to={route}
                  aria-label={`Used in ${label}`}
                  className="rounded-full border border-rule bg-surface px-3 py-1 font-mono text-[0.68rem] tracking-wide text-brand transition-colors hover:bg-blue-wash"
                >
                  {label}
                </Link>
              )
            })}
          </div>
        )}

        {framework.detail && framework.detail.length > 0 && (
          <div className="mt-auto pt-4">
            <Accordion
              items={[
                {
                  title: 'How it works in practice',
                  body: <div className="flex flex-col gap-4">{framework.detail.map(renderBlock)}</div>,
                },
              ]}
            />
          </div>
        )}
      </article>
    </Reveal>
  )
}
