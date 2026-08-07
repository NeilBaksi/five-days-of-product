import { ArrowRight, ArrowDown } from 'lucide-react'
import clsx from 'clsx'
import { Reveal } from '../layout/Reveal'

interface SpectrumProps {
  stages: { label: string; note?: string }[]
}

const WASH_CLASSES = ['bg-blue-wash', 'bg-amber-wash', 'bg-green-wash', 'bg-berry-wash']

/** Left-to-right progression of stages, connected by arrows. Stacks vertically on mobile. */
export function Spectrum({ stages }: SpectrumProps) {
  return (
    <ol className="flex flex-col sm:flex-row sm:items-stretch">
      {stages.map((stage, i) => (
        <li key={i} className="flex flex-1 flex-col sm:flex-row sm:items-center">
          <Reveal delay={i * 0.06} className="flex-1">
            <div
              className={clsx(
                'h-full rounded-2xl border border-rule/60 p-5',
                WASH_CLASSES[i % WASH_CLASSES.length],
              )}
            >
              <p className="font-display text-lg font-bold text-ink">{stage.label}</p>
              {stage.note && <p className="mt-1 text-sm text-ink-soft">{stage.note}</p>}
            </div>
          </Reveal>
          {i < stages.length - 1 && (
            <div className="flex items-center justify-center py-3 sm:px-3 sm:py-0">
              <ArrowDown size={20} strokeWidth={1.75} aria-hidden className="text-muted sm:hidden" />
              <ArrowRight size={20} strokeWidth={1.75} aria-hidden className="hidden text-muted sm:block" />
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}
