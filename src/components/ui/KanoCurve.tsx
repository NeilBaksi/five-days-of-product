interface KanoCurveProps {
  caption?: string
}

const CURVES = [
  { key: 'attractive', label: 'Attractive', desc: 'Delights when present; not missed when absent.', bar: 'bg-brand' },
  { key: 'performance', label: 'Performance', desc: 'Satisfaction scales linearly — more is simply better.', bar: 'bg-berry' },
  { key: 'must-be', label: 'Must-be', desc: 'Taken for granted; its absence causes real anger.', bar: 'bg-muted' },
] as const

/** Canonical Kano model: satisfaction vs functionality, with the three quality curves. */
export function KanoCurve({ caption }: KanoCurveProps) {
  return (
    <div>
      <div className="mx-auto w-full max-w-md">
        <svg viewBox="0 0 320 280" className="w-full" aria-hidden>
          {/* Neutral axes crossing at centre (functionality horizontal, satisfaction vertical) */}
          <line x1={20} y1={140} x2={300} y2={140} className="stroke-rule" strokeWidth={1.5} />
          <line x1={160} y1={12} x2={160} y2={268} className="stroke-rule" strokeWidth={1.5} />

          {/* Must-be: steep rise then plateaus just below the neutral line. Dashed so it reads distinctly from Performance even at a glance. */}
          <path
            d="M 24 262 C 90 168, 170 150, 300 142"
            className="fill-none stroke-muted"
            strokeWidth={2}
            strokeDasharray="5 4"
          />
          {/* Performance: straight diagonal through the centre */}
          <path d="M 24 262 L 300 18" className="fill-none stroke-berry" strokeWidth={2} />
          {/* Attractive: flat then exponential rise to delighted */}
          <path d="M 24 138 C 150 130, 230 70, 300 16" className="fill-none stroke-brand" strokeWidth={2} />

          {/* Curve labels — each pinned to an uncrowded stretch of its own curve, offset clear of the line itself, the other two curves, and the axis ticks */}
          <text x={214} y={176} textAnchor="middle" className="fill-muted font-mono" fontSize={9}>
            Must-be
          </text>
          <text x={70} y={198} textAnchor="middle" className="fill-berry font-mono" fontSize={9}>
            Performance
          </text>
          <text x={95} y={112} textAnchor="middle" className="fill-brand font-mono" fontSize={9}>
            Attractive
          </text>

          {/* Axis tick labels */}
          <text x={160} y={26} textAnchor="middle" className="fill-muted font-mono" fontSize={9}>
            Delighted
          </text>
          <text x={160} y={264} textAnchor="middle" className="fill-muted font-mono" fontSize={9}>
            Frustrated
          </text>
          <text x={26} y={156} textAnchor="start" className="fill-muted font-mono" fontSize={9}>
            Absent
          </text>
          <text x={298} y={156} textAnchor="end" className="fill-muted font-mono" fontSize={9}>
            Fully built
          </text>
        </svg>
      </div>

      {/* Real-text legend (a11y + mobile) */}
      <ul className="mt-3 flex flex-col gap-1.5">
        {CURVES.map((c) => (
          <li key={c.key} className="flex items-baseline gap-2 text-sm text-ink-soft">
            <span className={`h-0.5 w-5 shrink-0 self-center ${c.bar}`} aria-hidden />
            <span>
              <span className="font-display font-bold text-ink">{c.label}</span> — {c.desc}
            </span>
          </li>
        ))}
      </ul>

      {caption && <p className="mt-4 text-sm text-muted">{caption}</p>}
    </div>
  )
}
