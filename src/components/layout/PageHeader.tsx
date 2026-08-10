import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface PageHeaderMeta {
  label: string
  value: string
}

interface PageHeaderLink {
  to: string
  label: string
}

interface PageHeaderProps {
  kicker?: string
  title: string
  subtitle?: string
  meta?: PageHeaderMeta[]
  prev?: PageHeaderLink
  next?: PageHeaderLink
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

/** Per-page hero: kicker, display title, subtitle, and meta row. Left-aligned. */
export function PageHeader({ kicker, title, subtitle, meta, prev, next }: PageHeaderProps) {
  return (
    <motion.header
      className="pt-14 pb-10 sm:pt-20 sm:pb-14"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {(kicker || prev || next) && (
        <div className="flex items-center justify-between gap-4">
          {kicker ? (
            <motion.p variants={item} className="kicker">
              {kicker}
            </motion.p>
          ) : (
            <span />
          )}
          {(prev || next) && (
            <motion.nav variants={item} aria-label="Page navigation" className="flex items-center gap-2">
              {prev ? (
                <Link
                  to={prev.to}
                  aria-label={`Previous: ${prev.label}`}
                  title={prev.label}
                  className="flex size-8 items-center justify-center rounded-full border border-rule text-muted transition-colors hover:border-brand hover:text-brand"
                >
                  <ArrowLeft size={16} aria-hidden />
                </Link>
              ) : (
                <span className="size-8" />
              )}
              {next ? (
                <Link
                  to={next.to}
                  aria-label={`Next: ${next.label}`}
                  title={next.label}
                  className="flex size-8 items-center justify-center rounded-full border border-rule text-muted transition-colors hover:border-brand hover:text-brand"
                >
                  <ArrowRight size={16} aria-hidden />
                </Link>
              ) : null}
            </motion.nav>
          )}
        </div>
      )}
      <motion.h1 variants={item} className="mt-3 text-display-xl font-bold text-ink">
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
