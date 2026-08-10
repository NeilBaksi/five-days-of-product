interface OpportunityChartProps {
  xLabel: string
  yLabel: string
  dots: { x: number; y: number; label?: string; highlight?: boolean }[]
  zoneLabel: string
  caption?: string
}

// Plot area within the 320x280 viewBox.
const PLOT_LEFT = 40
const PLOT_RIGHT = 300
const PLOT_TOP = 10
const PLOT_BOTTOM = 230

const plotX = (x: number) => PLOT_LEFT + ((x - 1) / 9) * (PLOT_RIGHT - PLOT_LEFT)
const plotY = (y: number) => PLOT_BOTTOM - ((y - 1) / 9) * (PLOT_BOTTOM - PLOT_TOP)

/** ODI-style opportunity scatter: satisfaction vs importance, with the high-opportunity quadrant shaded. */
export function OpportunityChart({ xLabel, yLabel, dots, zoneLabel, caption }: OpportunityChartProps) {
  const highlighted = dots.filter((d) => d.highlight && d.label)

  return (
    <div>
      <div className="relative mx-auto w-full max-w-md">
        <svg viewBox="0 0 320 280" className="mx-auto w-full max-w-md" aria-hidden>
          {/* High-opportunity quadrant: high importance (top), low satisfaction (left) */}
          <rect
            x={PLOT_LEFT}
            y={PLOT_TOP}
            width={(PLOT_RIGHT - PLOT_LEFT) / 2}
            height={(PLOT_BOTTOM - PLOT_TOP) / 2}
            className="fill-brand/10"
          />

          {/* Axes */}
          <path
            d={`M ${PLOT_LEFT} ${PLOT_TOP} V ${PLOT_BOTTOM} H ${PLOT_RIGHT}`}
            className="stroke-rule"
            strokeWidth={1.5}
            fill="none"
          />

          {/* Tick labels */}
          <text x={PLOT_LEFT} y={PLOT_BOTTOM + 14} textAnchor="middle" className="fill-muted font-mono" fontSize={9}>
            1
          </text>
          <text x={PLOT_RIGHT} y={PLOT_BOTTOM + 14} textAnchor="middle" className="fill-muted font-mono" fontSize={9}>
            10
          </text>
          <text x={PLOT_LEFT - 8} y={PLOT_BOTTOM + 4} textAnchor="end" className="fill-muted font-mono" fontSize={9}>
            1
          </text>
          <text x={PLOT_LEFT - 8} y={PLOT_TOP + 4} textAnchor="end" className="fill-muted font-mono" fontSize={9}>
            10
          </text>

          {/* Data points */}
          {dots.map((d, i) =>
            d.highlight ? (
              <circle key={i} cx={plotX(d.x)} cy={plotY(d.y)} r={5.5} className="fill-brand" />
            ) : (
              <circle key={i} cx={plotX(d.x)} cy={plotY(d.y)} r={4} className="fill-ink-soft" />
            ),
          )}
        </svg>

        <span
          className="absolute font-mono text-[0.65rem] uppercase tracking-widest text-brand"
          style={{ left: '14%', top: '3%' }}
        >
          {zoneLabel}
        </span>
        <span
          className="absolute -translate-y-1/2 -rotate-90 whitespace-nowrap font-mono text-[0.65rem] uppercase tracking-widest text-muted"
          style={{ left: '-2.2rem', top: '50%' }}
        >
          {yLabel}
        </span>
      </div>

      <p className="mt-2 text-center font-mono text-[0.7rem] uppercase tracking-widest text-muted">{xLabel}</p>

      {highlighted.length > 0 && (
        <div className="mt-3 flex flex-col gap-1">
          {highlighted.map((d, i) => (
            <p key={i} className="text-sm text-ink">
              <span className="font-display font-bold text-brand">{d.label}</span> — satisfaction {d.x}, importance{' '}
              {d.y}
            </p>
          ))}
        </div>
      )}

      {caption && <p className="mt-4 text-sm text-muted">{caption}</p>}
    </div>
  )
}
