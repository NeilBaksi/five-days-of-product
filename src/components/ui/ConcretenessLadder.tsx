import { ArrowDown } from 'lucide-react'

interface ConcretenessLadderProps {
  /** Top (broadest, most abstract) → bottom (narrowest, most concrete). */
  tiers: { label: string; meta: string; desc?: string }[]
  caption?: string
}

// Widest at the top, narrowing downward; fill deepens toward the concrete end.
const WIDTHS = ['100%', '78%', '56%']
const FILLS = [
  { bg: 'bg-blue-wash', label: 'text-brand', meta: 'text-ink-soft', desc: 'text-ink-soft' },
  { bg: 'bg-brand/25', label: 'text-brand', meta: 'text-ink-soft', desc: 'text-ink-soft' },
  { bg: 'bg-brand', label: 'text-paper', meta: 'text-paper/80', desc: 'text-paper/90' },
] as const

/** Vision → Strategy → Tactics funnel: narrows downward as abstraction turns into concrete choices. */
export function ConcretenessLadder({ tiers, caption }: ConcretenessLadderProps) {
  return (
    <div>
      <div className="flex gap-3">
        {/* Vertical axis hint */}
        <div className="flex flex-col items-center justify-center">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted [writing-mode:vertical-rl]">
            increasing concreteness ↓
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center gap-2">
          {tiers.map((tier, i) => {
            const fill = FILLS[i] ?? FILLS[FILLS.length - 1]
            const isLast = i === tiers.length - 1
            return (
              <div key={i} className="flex w-full flex-col items-center">
                <div
                  className={`rounded-2xl px-5 py-4 text-center ${fill.bg}`}
                  style={{ width: WIDTHS[i] ?? WIDTHS[WIDTHS.length - 1], minWidth: '12rem' }}
                >
                  <p className={`font-display text-lg font-bold leading-tight ${fill.label}`}>{tier.label}</p>
                  <p className={`mt-0.5 font-mono text-[0.7rem] uppercase tracking-wide ${fill.meta}`}>{tier.meta}</p>
                  {tier.desc && <p className={`mt-1.5 text-sm leading-snug ${fill.desc}`}>{tier.desc}</p>}
                </div>
                {!isLast && (
                  <ArrowDown size={18} strokeWidth={1.75} aria-hidden className="my-1 text-muted" />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {caption && <p className="mt-4 text-sm text-muted">{caption}</p>}
    </div>
  )
}
