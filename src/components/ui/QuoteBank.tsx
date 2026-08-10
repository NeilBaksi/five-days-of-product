import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from 'lucide-react'

interface QuoteBankProps {
  items: { quote: string; attribution: string }[]
}

const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const
const AUTOPLAY_MS = 7000

function chunkPairs<T>(arr: T[]): T[][] {
  const pairs: T[][] = []
  for (let i = 0; i < arr.length; i += 2) pairs.push(arr.slice(i, i + 2))
  return pairs
}

function QuoteCard({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-rule bg-surface p-6">
      <Quote size={18} strokeWidth={1.75} aria-hidden className="text-brand/40" />
      <blockquote className="mt-3 flex-1 font-display text-[1.1rem] italic leading-snug text-ink">
        {quote}
      </blockquote>
      <figcaption className="mt-4 font-mono text-[0.68rem] uppercase tracking-widest text-muted">
        {attribution}
      </figcaption>
    </figure>
  )
}

/**
 * Auto-advancing pair carousel: crossfades through quotes two at a time.
 * Pauses on hover/focus, offers manual prev/next + play/pause, and drops
 * autoplay entirely under prefers-reduced-motion (WCAG 2.2.2).
 */
export function QuoteBank({ items }: QuoteBankProps) {
  const pairs = useMemo(() => chunkPairs(items), [items])
  const [pairIndex, setPairIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined)

  useEffect(() => {
    if (paused || reduceMotion || pairs.length <= 1) return
    timerRef.current = setInterval(() => {
      setPairIndex((i) => (i + 1) % pairs.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(timerRef.current)
  }, [paused, reduceMotion, pairs.length])

  const goTo = (next: number) => setPairIndex(((next % pairs.length) + pairs.length) % pairs.length)
  const current = pairs[pairIndex]

  return (
    <div
      className="relative"
      role="group"
      aria-label="Quote carousel, two at a time"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {current.map((item, slot) => (
          <div key={slot} className="relative min-h-[12.5rem] sm:min-h-[11rem]">
            <AnimatePresence initial={false}>
              <motion.div
                key={`${pairIndex}-${slot}`}
                className="absolute inset-0"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.45, ease: EASE_OUT_QUART }}
              >
                <QuoteCard quote={item.quote} attribution={item.attribution} />
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>

      {pairs.length > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => goTo(pairIndex - 1)}
              aria-label="Previous quotes"
              className="rounded-full p-1.5 text-muted transition-colors duration-200 hover:bg-blue-wash hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <ChevronLeft size={16} strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={() => goTo(pairIndex + 1)}
              aria-label="Next quotes"
              className="rounded-full p-1.5 text-muted transition-colors duration-200 hover:bg-blue-wash hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <ChevronRight size={16} strokeWidth={1.75} />
            </button>
            {!reduceMotion && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? 'Resume auto-advance' : 'Pause auto-advance'}
                className="ml-1 rounded-full p-1.5 text-muted transition-colors duration-200 hover:bg-blue-wash hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                {paused ? <Play size={14} strokeWidth={1.75} /> : <Pause size={14} strokeWidth={1.75} />}
              </button>
            )}
          </div>
          <p className="font-mono text-[0.68rem] uppercase tracking-widest text-muted">
            <span className="font-display text-sm font-bold text-ink">{String(pairIndex + 1).padStart(2, '0')}</span>
            {' / '}
            {String(pairs.length).padStart(2, '0')}
          </p>
        </div>
      )}
    </div>
  )
}
