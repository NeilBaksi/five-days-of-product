import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: ReactNode
  className?: string
}

const VARIANT_CLASSES: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-brand text-paper hover:bg-brand-dark',
  secondary: 'border border-brand text-brand hover:bg-blue-wash',
  ghost: 'text-brand hover:bg-blue-wash/60',
}

const BASE =
  'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 font-mono text-[0.75rem] font-semibold uppercase tracking-wider transition-colors duration-300'

const TAP = { scale: 0.97 }

const MotionLink = motion.create(Link)

/** Pill CTA — renders a router Link, an external anchor, or a plain button depending on props. */
export function Button({ children, to, href, variant = 'primary', icon, className }: ButtonProps) {
  const classes = clsx(BASE, VARIANT_CLASSES[variant], className)
  const content = (
    <>
      {icon && (
        <span aria-hidden className="shrink-0">
          {icon}
        </span>
      )}
      {children}
    </>
  )

  if (to) {
    return (
      <MotionLink to={to} className={classes} whileTap={TAP}>
        {content}
      </MotionLink>
    )
  }

  if (href) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" className={classes} whileTap={TAP}>
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" className={classes} whileTap={TAP}>
      {content}
    </motion.button>
  )
}
