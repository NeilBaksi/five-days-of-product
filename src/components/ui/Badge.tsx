import type { ReactNode } from 'react'
import clsx from 'clsx'

interface BadgeProps {
  children: ReactNode
  tone?: 'brand' | 'berry' | 'neutral'
}

const TONE_CLASSES: Record<NonNullable<BadgeProps['tone']>, string> = {
  brand: 'bg-blue-wash text-brand',
  berry: 'bg-berry-wash text-berry',
  neutral: 'bg-rule/60 text-ink-soft',
}

/** Small mono uppercase pill. */
export function Badge({ children, tone = 'neutral' }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider',
        TONE_CLASSES[tone],
      )}
    >
      {children}
    </span>
  )
}
