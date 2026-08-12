interface PriceCurveChartProps {
  caption?: string
}

/** Skimming (high→low steps) vs. penetration (low→high steps) price curves over time. */
export function PriceCurveChart({ caption }: PriceCurveChartProps) {
  return (
    <div>
      <div className="mx-auto w-full max-w-md">
        <svg viewBox="0 0 320 240" className="w-full" aria-hidden>
          <line x1={20} y1={200} x2={300} y2={200} className="stroke-rule" strokeWidth={1.5} />
          <line x1={20} y1={20} x2={20} y2={200} className="stroke-rule" strokeWidth={1.5} />

          {/* Skimming: high → stepping down */}
          <path
            d="M 40 30 L 130 30 L 130 80 L 210 80 L 210 120 L 290 120"
            className="fill-none stroke-brand"
            strokeWidth={2}
          />
          {/* Penetration: low → stepping up */}
          <path
            d="M 40 180 L 130 180 L 130 140 L 210 140 L 210 95 L 290 95"
            className="fill-none stroke-berry"
            strokeWidth={2}
          />

          <text x={296} y={112} textAnchor="end" className="fill-brand font-mono" fontSize={9}>
            Skimming
          </text>
          <text x={296} y={103} textAnchor="end" className="fill-berry font-mono" fontSize={9}>
            Penetration
          </text>

          <text x={160} y={218} textAnchor="middle" className="fill-muted font-mono" fontSize={9}>
            Time
          </text>
          <text x={10} y={112} textAnchor="middle" className="fill-muted font-mono" fontSize={9} transform="rotate(-90 10 112)">
            Price
          </text>
        </svg>
      </div>
      <ul className="mt-3 flex flex-col gap-1.5">
        <li className="flex items-baseline gap-2 text-sm text-ink-soft">
          <span className="h-0.5 w-5 shrink-0 self-center bg-brand" aria-hidden />
          <span>
            <span className="font-display font-bold text-ink">Skimming</span> — launch high, step down as segments widen.
          </span>
        </li>
        <li className="flex items-baseline gap-2 text-sm text-ink-soft">
          <span className="h-0.5 w-5 shrink-0 self-center bg-berry" aria-hidden />
          <span>
            <span className="font-display font-bold text-ink">Penetration</span> — launch low, step up once entrenched.
          </span>
        </li>
      </ul>
      {caption && <p className="mt-4 text-sm text-muted">{caption}</p>}
    </div>
  )
}
