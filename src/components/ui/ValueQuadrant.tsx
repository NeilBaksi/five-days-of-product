import type { ReactNode } from 'react'
import clsx from 'clsx'

interface ValueQuadrantProps {
  items: { label: string; desc: string; icon: ReactNode }[]
}

const WASH_CLASSES = ['bg-blue-wash', 'bg-berry-wash', 'bg-green-wash', 'bg-amber-wash']
const ACCENT_CLASSES = ['text-brand', 'text-berry', 'text-green', 'text-gold-deep']

/** 2x2 (1-col mobile) grid of tinted panels — e.g. Valuable/Usable/Feasible/Viable. */
export function ValueQuadrant({ items }: ValueQuadrantProps) {
  return (
    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item, i) => (
        <div
          key={i}
          className={clsx('rounded-2xl border border-rule/60 p-6', WASH_CLASSES[i % 4])}
        >
          <span aria-hidden className={clsx('inline-flex', ACCENT_CLASSES[i % 4])}>
            {item.icon}
          </span>
          <dt className="mt-3 font-display text-lg font-bold text-ink">{item.label}</dt>
          <dd className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">{item.desc}</dd>
        </div>
      ))}
    </dl>
  )
}
