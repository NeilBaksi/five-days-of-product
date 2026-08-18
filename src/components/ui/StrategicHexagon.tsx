import clsx from 'clsx'

interface StrategicHexagonProps {
  axes: { name: string; poles: { label: string; example: string; desc: string }[] }[]
  caption?: string
}

const VB_W = 760
const VB_H = 640
const CX = 380
const CY = 320
const HUB_R = 62
const NODE_R = 175
const NODE_DOT_R = 9
const LABEL_W = 200
const LABEL_H = 110
const AXIS_LABEL_R = 100

// Six poles at 60° intervals, starting straight up. Axis i's two poles sit at
// i*60° and i*60°+180° so opposing poles land directly across the hub.
const AXIS_ANGLE_OFFSET = -90

const MOBILE_WASH = ['bg-blue-wash', 'bg-berry-wash', 'bg-green-wash']

/** Three tensions radiating from one hub — each axis's opposing poles sit directly across the wheel, not side by side. */
export function StrategicHexagon({ axes, caption }: StrategicHexagonProps) {
  // Flatten to six poles, each carrying its resolved angle around the hub.
  const poles = axes.flatMap((axis, axisIndex) =>
    axis.poles.map((pole, poleIndex) => ({
      pole,
      angle: AXIS_ANGLE_OFFSET + axisIndex * 60 + poleIndex * 180,
    })),
  )

  return (
    <div>
      {/* Desktop: six poles radiating from a solid hub, opposing poles across from each other */}
      <div className="relative mx-auto hidden w-full max-w-2xl md:block">
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="mx-auto w-full" aria-hidden>
          {poles.map(({ angle }, i) => {
            const rad = (angle * Math.PI) / 180
            const hubX = CX + HUB_R * Math.cos(rad)
            const hubY = CY + HUB_R * Math.sin(rad)
            const x = CX + NODE_R * Math.cos(rad)
            const y = CY + NODE_R * Math.sin(rad)
            return (
              <g key={i}>
                <line x1={hubX} y1={hubY} x2={x} y2={y} strokeWidth={1.5} fill="none" className="stroke-rule" />
                <circle cx={x} cy={y} r={NODE_DOT_R} strokeWidth={1.5} className="fill-surface stroke-rule" />
              </g>
            )
          })}

          {/* Hub */}
          <circle cx={CX} cy={CY} r={HUB_R} className="fill-brand" stroke="none" />

          {/* Axis names, nudged off the hub-to-pole line so they don't sit on top of it */}
          {axes.map((axis, i) => {
            const angle = AXIS_ANGLE_OFFSET + i * 60
            const rad = (angle * Math.PI) / 180
            const perpRad = rad + Math.PI / 2
            const x = CX + AXIS_LABEL_R * Math.cos(rad) + 14 * Math.cos(perpRad)
            const y = CY + AXIS_LABEL_R * Math.sin(rad) + 14 * Math.sin(perpRad)
            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor="middle"
                className="fill-muted font-mono text-[0.6rem] uppercase tracking-widest"
              >
                {axis.name}
              </text>
            )
          })}

          {/* Pole labels, aligned outward: right-half left-aligned, left-half right-aligned */}
          {poles.map(({ pole, angle }, i) => {
            const rad = (angle * Math.PI) / 180
            const c = Math.cos(rad)
            const x = CX + NODE_R * c
            const y = CY + NODE_R * Math.sin(rad)

            let boxX: number
            let boxY: number
            let align: string
            if (c > 0.1) {
              boxX = x + 18
              boxY = y - LABEL_H / 2
              align = 'items-start text-left'
            } else if (c < -0.1) {
              boxX = x - 18 - LABEL_W
              boxY = y - LABEL_H / 2
              align = 'items-end text-right'
            } else if (Math.sin(rad) < 0) {
              boxX = x - LABEL_W / 2
              boxY = y - 18 - LABEL_H
              align = 'items-center text-center'
            } else {
              boxX = x - LABEL_W / 2
              boxY = y + 18
              align = 'items-center text-center'
            }

            return (
              <foreignObject key={i} x={boxX} y={boxY} width={LABEL_W} height={LABEL_H}>
                <div className={clsx('flex h-full w-full flex-col justify-center gap-0.5', align)}>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">{pole.example}</p>
                  <p className="font-display text-[1.05rem] font-bold text-ink">{pole.label}</p>
                  <p className="text-[0.85rem] leading-tight text-ink-soft">{pole.desc}</p>
                </div>
              </foreignObject>
            )
          })}
        </svg>
      </div>

      {/* Mobile: one card per axis, its two poles stacked either side of a ↔ */}
      <div className="flex flex-col gap-3 md:hidden">
        {axes.map((axis, i) => (
          <div key={i} className={clsx('rounded-2xl border border-rule/60 p-5', MOBILE_WASH[i % MOBILE_WASH.length])}>
            <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">{axis.name}</p>
            <div className="mt-3 flex flex-col items-center gap-2 text-center">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">
                  {axis.poles[0].example}
                </p>
                <p className="font-display text-base font-bold text-ink">{axis.poles[0].label}</p>
                <p className="mt-1 text-sm leading-snug text-ink-soft">{axis.poles[0].desc}</p>
              </div>
              <span aria-hidden className="text-muted">
                ↔
              </span>
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">
                  {axis.poles[1].example}
                </p>
                <p className="font-display text-base font-bold text-ink">{axis.poles[1].label}</p>
                <p className="mt-1 text-sm leading-snug text-ink-soft">{axis.poles[1].desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Accessible fallback: every pole as real text, always present */}
      <dl className="sr-only">
        {axes.map((axis, i) =>
          axis.poles.map((pole, j) => (
            <div key={`${i}-${j}`}>
              <dt>
                {axis.name}: {pole.label} ({pole.example})
              </dt>
              <dd>{pole.desc}</dd>
            </div>
          )),
        )}
      </dl>

      {caption && <p className="mt-4 text-sm text-muted">{caption}</p>}
    </div>
  )
}
