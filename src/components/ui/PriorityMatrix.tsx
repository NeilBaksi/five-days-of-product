import clsx from 'clsx'

interface MatrixItem {
  label: string
  /** Product value band: 0 = low, 1 = medium, 2 = high. */
  value: 0 | 1 | 2
  /** Implementation complexity band: 0 = low, 1 = medium, 2 = high. */
  complexity: 0 | 1 | 2
  highlight?: boolean
}

interface PriorityMatrixProps {
  xLabel: string
  yLabel: string
  items: MatrixItem[]
  /** Label for the shaded high-value / low-complexity corner. */
  zoneLabel?: string
  caption?: string
}

// Rows render top→bottom as value 2,1,0; columns left→right as complexity 0,1,2.
const VALUE_ROWS = [2, 1, 0] as const
const COMPLEXITY_COLS = [0, 1, 2] as const

/** Value × complexity prioritisation heatmap. The high-value / low-complexity corner is shaded "build first". */
export function PriorityMatrix({ xLabel, yLabel, items, zoneLabel = 'Build first', caption }: PriorityMatrixProps) {
  return (
    <div>
      <div className="flex gap-2">
        {/* Y-axis label */}
        <div className="flex flex-col items-center justify-center">
          <span className="font-mono text-[0.7rem] uppercase tracking-widest text-muted [writing-mode:vertical-rl] [transform:rotate(180deg)]">
            {yLabel} →
          </span>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-3 gap-2">
            {VALUE_ROWS.map((v) =>
              COMPLEXITY_COLS.map((c) => {
                const cellItems = items.filter((it) => it.value === v && it.complexity === c)
                const isZone = v === 2 && c === 0
                return (
                  <div
                    key={`${v}-${c}`}
                    className={clsx(
                      'relative flex min-h-[5rem] flex-col gap-1.5 rounded-xl border p-2.5',
                      isZone ? 'border-brand/40 bg-blue-wash' : 'border-rule/60 bg-surface',
                    )}
                  >
                    {isZone && (
                      <span className="font-mono text-[0.6rem] uppercase tracking-widest text-brand">
                        {zoneLabel}
                      </span>
                    )}
                    {cellItems.map((it, i) => (
                      <span
                        key={i}
                        className={clsx(
                          'rounded-full px-2 py-0.5 text-center text-[0.8rem] font-medium leading-tight',
                          it.highlight ? 'bg-brand text-paper' : 'bg-ink/5 text-ink',
                        )}
                      >
                        {it.label}
                      </span>
                    ))}
                  </div>
                )
              }),
            )}
          </div>

          {/* X-axis label */}
          <p className="mt-2 text-center font-mono text-[0.7rem] uppercase tracking-widest text-muted">
            {xLabel} →
          </p>
        </div>
      </div>

      {caption && <p className="mt-4 text-sm text-muted">{caption}</p>}
    </div>
  )
}
