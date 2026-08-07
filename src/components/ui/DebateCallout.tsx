interface DebateSide {
  quote: string
  attribution: string
}

interface DebateCalloutProps {
  left: DebateSide
  right: DebateSide
  resolution: string
}

/** Two opposing quotes either side of a "↔" marker, settled by a resolution line. */
export function DebateCallout({ left, right, resolution }: DebateCalloutProps) {
  return (
    <div className="rounded-2xl border border-rule bg-surface p-6 sm:p-8">
      <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
        <div>
          <p className="font-display text-lg italic leading-relaxed text-ink">&ldquo;{left.quote}&rdquo;</p>
          <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-widest text-muted">{left.attribution}</p>
        </div>

        {/* Mobile divider */}
        <div className="flex items-center gap-3 sm:hidden" aria-hidden>
          <span className="h-px flex-1 bg-rule" />
          <span className="font-mono text-sm text-berry">↔</span>
          <span className="h-px flex-1 bg-rule" />
        </div>

        <div>
          <p className="font-display text-lg italic leading-relaxed text-ink">&ldquo;{right.quote}&rdquo;</p>
          <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-widest text-muted">{right.attribution}</p>
        </div>

        {/* Desktop marker, centered between columns */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface px-2 font-mono text-sm text-berry sm:block"
        >
          ↔
        </span>
      </div>

      <p className="mt-8 border-t border-rule pt-6 text-[0.95rem] leading-relaxed text-ink-soft">{resolution}</p>
    </div>
  )
}
