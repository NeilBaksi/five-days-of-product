import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import type { StoryItem } from '../../types'

interface StoryCardsProps {
  items: StoryItem[]
}

/** Grid of expandable disclosure cards, one per named product person. */
export function StoryCards({ items }: StoryCardsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        const panelId = `story-detail-${i}`

        return (
          <div
            key={i}
            className="rounded-2xl border border-rule bg-surface p-5 transition-colors hover:border-brand"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex min-h-[44px] w-full flex-col items-start gap-2 text-left"
            >
              <div className="flex w-full items-start justify-between gap-3">
                <h3 className="font-display text-lg font-bold leading-snug text-ink">{item.name}</h3>
                <ChevronDown
                  size={18}
                  strokeWidth={1.75}
                  aria-hidden
                  className={clsx('mt-1 shrink-0 text-muted transition-transform duration-300', isOpen && 'rotate-180')}
                />
              </div>
              <p className="font-mono text-xs text-muted">
                {item.product}
                {item.year ? ` · ${item.year}` : ''}
              </p>
              <p className="text-sm text-ink-soft">{item.hook}</p>
            </button>
            <div
              id={panelId}
              className="grid transition-[grid-template-rows] duration-300 ease-out-expo"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
