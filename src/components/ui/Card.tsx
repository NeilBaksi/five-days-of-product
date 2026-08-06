import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import clsx from 'clsx'

interface CardProps {
  title: string
  body: string
  /** Mono eyebrow numeral, e.g. "01" */
  index?: string
  icon?: ReactNode
  /** If provided, the whole card becomes a router Link. */
  to?: string
}

/** A key-concept card. Plain <article>, or a Link with a subtle hover lift when `to` is set. */
export function Card({ title, body, index, icon, to }: CardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          {icon && (
            <span aria-hidden className="text-brand">
              {icon}
            </span>
          )}
          {index && (
            <span className="font-mono text-[0.75rem] font-medium tracking-wider text-brand">{index}</span>
          )}
        </div>
        {to && (
          <ArrowUpRight
            size={16}
            strokeWidth={1.75}
            aria-hidden
            className="shrink-0 text-muted transition-colors duration-300 group-hover:text-brand"
          />
        )}
      </div>
      <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink">{title}</h3>
      <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">{body}</p>
    </>
  )

  if (to) {
    return (
      <Link
        to={to}
        className="group block rounded-2xl border border-rule bg-surface p-6 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-brand hover:shadow-sm"
      >
        {content}
      </Link>
    )
  }

  return <article className={clsx('rounded-2xl border border-rule bg-surface p-6')}>{content}</article>
}
