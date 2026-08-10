import type { ReactNode } from 'react'

interface MoscowRingsProps {
  /** Center → outward: Must have, Should have, Could have, Contingency. */
  rings: { label: string; effort: string }[]
  caption?: string
}

// Per-band styling, indexed from the centre (0) outward. The centre is the solid
// emphasis; each successive ring is a lighter brand tint; the outermost is an
// unfilled dashed buffer.
const BAND = [
  { fill: 'bg-brand', text: 'text-paper', effort: 'text-paper/80', swatch: 'bg-brand' },
  { fill: 'bg-brand/25', text: 'text-ink', effort: 'text-ink-soft', swatch: 'bg-brand/25' },
  { fill: 'bg-brand/10', text: 'text-ink', effort: 'text-ink-soft', swatch: 'bg-brand/10' },
  { fill: 'border border-dashed border-rule', text: 'text-muted', effort: 'text-muted', swatch: 'border border-dashed border-rule' },
] as const

/** Concentric MoSCoW effort budget: nested rounded rings, centre = Must have. */
export function MoscowRings({ rings, caption }: MoscowRingsProps) {
  // Build from the innermost ring outward, wrapping each level in the next band.
  const nested = rings.reduce<ReactNode>((inner, _ring, i) => {
    // rings[0] is the centre; walk indices outward as we wrap.
    const idx = i
    const band = BAND[idx] ?? BAND[BAND.length - 1]
    const ring = rings[idx]
    const isCentre = idx === 0
    return (
      <div className={`rounded-[1.25rem] ${band.fill} ${isCentre ? 'p-6 text-center' : 'p-4'}`}>
        <div className={`flex items-baseline justify-between gap-3 ${isCentre ? 'flex-col items-center gap-0.5' : ''}`}>
          <span className={`font-display text-sm font-bold leading-tight ${band.text}`}>{ring.label}</span>
          <span className={`font-mono text-[0.7rem] uppercase tracking-wider ${band.effort}`}>{ring.effort}</span>
        </div>
        {inner && <div className="mt-3">{inner}</div>}
      </div>
    )
  }, null)

  return (
    <div>
      <div className="mx-auto w-full max-w-md">{nested}</div>

      {/* Real-text legend (a11y + mobile) */}
      <ul className="mt-4 flex flex-col gap-1.5">
        {rings.map((ring, i) => {
          const band = BAND[i] ?? BAND[BAND.length - 1]
          return (
            <li key={i} className="flex items-baseline gap-2 text-sm text-ink-soft">
              <span className={`h-3 w-3 shrink-0 self-center rounded-[0.25rem] ${band.swatch}`} aria-hidden />
              <span>
                <span className="font-display font-bold text-ink">{ring.label}</span> — {ring.effort}
              </span>
            </li>
          )
        })}
      </ul>

      {caption && <p className="mt-4 text-sm text-muted">{caption}</p>}
    </div>
  )
}
