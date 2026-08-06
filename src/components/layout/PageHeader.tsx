import { motion } from 'framer-motion'
import clsx from 'clsx'
import type { DayAccent } from '../../types'
import { ACCENTS } from '../../lib/accents'

interface PageHeaderMeta {
  label: string
  value: string
}

interface PageHeaderProps {
  kicker?: string
  title: string
  subtitle?: string
  badge?: string
  /** Optional per-day accent — tints the badge and its marker dot. */
  accent?: DayAccent
  meta?: PageHeaderMeta[]
}

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

// Orchestrated one-shot entrance. Framer collapses this for reduced-motion users.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.02 } },
}
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
}

/** Per-page hero: badge pill, kicker, display title, subtitle, and meta row. Left-aligned. */
export function PageHeader({ kicker, title, subtitle, badge, accent, meta }: PageHeaderProps) {
  const a = accent ? ACCENTS[accent] : null
  return (
    <motion.header
      className="pt-14 pb-10 sm:pt-20 sm:pb-14"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {badge && (
        <motion.span
          variants={item}
          className={clsx(
            'inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em]',
            a ? a.badge : 'bg-blue-wash text-brand',
          )}
        >
          {a && <span className={clsx('h-1.5 w-1.5 rounded-full', a.dot)} aria-hidden />}
          {badge}
        </motion.span>
      )}
      {kicker && (
        <motion.p variants={item} className={clsx('kicker', badge && 'mt-4')}>
          {kicker}
        </motion.p>
      )}
      <motion.h1 variants={item} className="mt-3 text-display-xl font-black text-ink">
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p variants={item} className="mt-5 max-w-prose text-lg leading-relaxed text-ink-soft">
          {subtitle}
        </motion.p>
      )}
      {meta && meta.length > 0 && (
        <motion.dl variants={item} className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">{m.label}</dt>
              <dd className="text-sm font-medium text-ink">{m.value}</dd>
            </div>
          ))}
        </motion.dl>
      )}
    </motion.header>
  )
}
