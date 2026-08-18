import { ArrowRight, ArrowDown } from 'lucide-react'

interface TranslationMapProps {
  leftLabel: string
  rightLabel: string
  pairs: { left: string; right: string; note?: string }[]
  caption?: string
}

/** Tech says one thing, the exec hears another — paired rows that translate between the two. */
export function TranslationMap({ leftLabel, rightLabel, pairs, caption }: TranslationMapProps) {
  return (
    <div>
      <div className="mx-auto mb-2 hidden max-w-2xl grid-cols-[1fr_auto_1fr] gap-4 sm:grid">
        <span className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">{leftLabel}</span>
        <span />
        <span className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">{rightLabel}</span>
      </div>

      <div className="mx-auto flex max-w-2xl flex-col gap-4">
        {pairs.map((pair, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4"
          >
            <div className="w-full rounded-2xl border border-rule/60 bg-blue-wash p-4">
              <p className="font-display text-base font-bold text-brand">{pair.left}</p>
            </div>
            <ArrowDown size={20} strokeWidth={1.75} aria-hidden className="shrink-0 text-muted sm:hidden" />
            <ArrowRight size={20} strokeWidth={1.75} aria-hidden className="hidden shrink-0 text-muted sm:block" />
            <div className="w-full rounded-2xl border border-rule/60 bg-amber-wash p-4">
              <p className="font-display text-base font-bold text-gold-deep">{pair.right}</p>
              {pair.note && <p className="mt-1 text-xs leading-relaxed text-ink-soft">{pair.note}</p>}
            </div>
          </div>
        ))}
      </div>

      {caption && <p className="mt-4 text-sm text-muted">{caption}</p>}
    </div>
  )
}
