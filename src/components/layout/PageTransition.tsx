import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

interface PageTransitionProps {
  children: ReactNode
}

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

/** Animates page content on route change: fade + rise in, fade out. */
export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
