import clsx from 'clsx'

interface CompetencyWheelProps {
  center: string
  spokes: { label: string; desc?: string }[]
  emphasisIndex?: number
}

const VB_W = 760
const VB_H = 640
const CX = 380
const CY = 320
const HUB_R = 62
const NODE_R = 150
const NODE_DOT_R = 9
const LABEL_W = 210
const LABEL_H = 104

const MOBILE_WASH = ['bg-blue-wash', 'bg-berry-wash', 'bg-green-wash', 'bg-amber-wash']

/** A central hub with spokes radiating to equally-weighted competencies, one picked out in brand accent. */
export function CompetencyWheel({ center, spokes, emphasisIndex }: CompetencyWheelProps) {
  return (
    <div>
      <div className="relative mx-auto hidden w-full max-w-2xl md:block">
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="mx-auto w-full" aria-hidden>
          {/* Spokes + nodes (drawn first so labels sit on top) */}
          {spokes.map((_, i) => {
            const angle = (i * 360) / spokes.length - 90
            const rad = (angle * Math.PI) / 180
            const isEmphasis = i === emphasisIndex
            const hubX = CX + HUB_R * Math.cos(rad)
            const hubY = CY + HUB_R * Math.sin(rad)
            const x = CX + NODE_R * Math.cos(rad)
            const y = CY + NODE_R * Math.sin(rad)
            return (
              <g key={i}>
                <line
                  x1={hubX}
                  y1={hubY}
                  x2={x}
                  y2={y}
                  strokeWidth={1.5}
                  fill="none"
                  className={isEmphasis ? 'stroke-brand' : 'stroke-rule'}
                />
                <circle
                  cx={x}
                  cy={y}
                  r={NODE_DOT_R}
                  strokeWidth={1.5}
                  className={isEmphasis ? 'fill-brand stroke-brand' : 'fill-surface stroke-rule'}
                />
              </g>
            )
          })}

          {/* Hub */}
          <circle cx={CX} cy={CY} r={HUB_R} className="fill-brand" stroke="none" />
          <foreignObject x={CX - HUB_R} y={CY - HUB_R} width={HUB_R * 2} height={HUB_R * 2}>
            <div className="flex h-full w-full items-center justify-center p-2 text-center">
              <span className="font-mono text-[0.7rem] font-semibold uppercase leading-tight tracking-widest text-paper">
                {center}
              </span>
            </div>
          </foreignObject>

          {/* Labels seated around each spoke: right side left-aligned, left side right-aligned,
              top/bottom centred */}
          {spokes.map((spoke, i) => {
            const angle = (i * 360) / spokes.length - 90
            const rad = (angle * Math.PI) / 180
            const c = Math.cos(rad)
            const x = CX + NODE_R * c
            const y = CY + NODE_R * Math.sin(rad)
            const isEmphasis = i === emphasisIndex

            let boxX: number
            let boxY: number
            let align: string
            if (c > 0.1) {
              // right side
              boxX = x + 18
              boxY = y - LABEL_H / 2
              align = 'items-start text-left'
            } else if (c < -0.1) {
              // left side
              boxX = x - 18 - LABEL_W
              boxY = y - LABEL_H / 2
              align = 'items-end text-right'
            } else if (Math.sin(rad) < 0) {
              // top
              boxX = x - LABEL_W / 2
              boxY = y - 18 - LABEL_H
              align = 'items-center text-center'
            } else {
              // bottom
              boxX = x - LABEL_W / 2
              boxY = y + 18
              align = 'items-center text-center'
            }
            return (
              <foreignObject key={i} x={boxX} y={boxY} width={LABEL_W} height={LABEL_H}>
                <div className={clsx('flex h-full w-full flex-col justify-center gap-1', align)}>
                  <p
                    className={clsx(
                      'font-display text-[1.1rem] font-bold leading-tight',
                      isEmphasis ? 'text-brand' : 'text-ink',
                    )}
                  >
                    {spoke.label}
                  </p>
                  {spoke.desc && <p className="text-[0.85rem] leading-tight text-ink-soft">{spoke.desc}</p>}
                </div>
              </foreignObject>
            )
          })}
        </svg>
      </div>

      {/* Mobile: one card per spoke, emphasis picked out with a brand ring */}
      <div className="flex flex-col gap-3 md:hidden">
        <p className="text-center font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">
          {center}
        </p>
        {spokes.map((spoke, i) => {
          const isEmphasis = i === emphasisIndex
          return (
            <div
              key={i}
              className={clsx(
                'rounded-2xl border border-rule/60 p-4',
                MOBILE_WASH[i % MOBILE_WASH.length],
                isEmphasis && 'ring-1 ring-brand',
              )}
            >
              <p className={clsx('font-display font-bold', isEmphasis ? 'text-brand' : 'text-ink')}>{spoke.label}</p>
              {spoke.desc && <p className="mt-1 text-sm leading-snug text-ink-soft">{spoke.desc}</p>}
            </div>
          )
        })}
      </div>

      {/* Accessible fallback: real text for screen readers, hidden visually */}
      <dl className="sr-only">
        {spokes.map((spoke, i) => (
          <div key={i}>
            <dt>{spoke.label}</dt>
            {spoke.desc && <dd>{spoke.desc}</dd>}
          </div>
        ))}
      </dl>
    </div>
  )
}
