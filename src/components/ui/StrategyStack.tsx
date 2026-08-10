import clsx from 'clsx'

interface StrategyStackProps {
  topTier: { label: string }[]
  support: string[]
  center: string
  nodes: { label: string; desc?: string }[]
  caption?: string
}

const ACCENT_CLASSES = ['text-brand', 'text-berry', 'text-green']
const WASH_FILLS = ['fill-blue-wash', 'fill-berry-wash', 'fill-green-wash']

// Symmetric 3-circle Venn geometry. Centres sit 120° apart at distance R = r/√3 from the
// centroid, so adjacent centres are exactly r apart (textbook overlap; true triple-intersection
// at the centroid). Hub is drawn IN the SVG at the centroid so it lands dead-centre.
const R_CIRCLE = 95
const CX = 145
const CY = 130
const R_OFFSET = R_CIRCLE / Math.sqrt(3) // ≈ 54.8
const COS30 = Math.cos(Math.PI / 6)
const SIN30 = Math.sin(Math.PI / 6)

// Outward radial unit vectors: blue upper-left, berry upper-right, green bottom.
const OUTWARD = [
  { x: -COS30, y: -SIN30 },
  { x: COS30, y: -SIN30 },
  { x: 0, y: 1 },
]
const CIRCLES = OUTWARD.map((o) => ({ cx: CX + R_OFFSET * o.x, cy: CY + R_OFFSET * o.y }))

// Label blocks sit in each circle's outer (non-overlapping) lobe. Top two are raised above the
// hub and spread wide so their wide text boxes clear both the hub and each other; the bottom
// label drops straight down below the hub.
const CIRCLE_LABEL_POS = [
  { x: CX - 62, y: CY - 78 }, // blue (Desirability)
  { x: CX + 62, y: CY - 78 }, // berry (Viability)
  { x: CX, y: CY + 78 }, // green (Feasibility)
]

const HUB_R = 37

/** Two-tier strategy diagram: org-level decisions feeding a 3-circle venn of product-level decisions. */
export function StrategyStack({ topTier, support, center, nodes, caption }: StrategyStackProps) {
  return (
    <div>
      <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">
        Organisation-level decisions
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {topTier.map((item, i) => (
          <div key={i} className="rounded-2xl border border-rule bg-surface p-4 text-center">
            <p className="font-display text-sm font-bold text-ink">{item.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center font-mono text-[0.7rem] text-muted">{support.join(' · ')}</p>

      <svg
        aria-hidden
        viewBox="0 0 40 32"
        className="mx-auto mt-2 h-8 w-8 stroke-muted"
        fill="none"
      >
        <line x1="20" y1="0" x2="20" y2="20" strokeWidth="1.5" />
        <path d="M12 18 L20 26 L28 18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="relative mx-auto mt-2 w-full max-w-sm">
        <svg aria-hidden viewBox="0 0 290 290" className="mx-auto w-full max-w-sm">
          {/* Three washed circles (drawn first so labels + hub sit on top) */}
          {CIRCLES.map((c, i) => (
            <circle
              key={i}
              cx={c.cx}
              cy={c.cy}
              r={R_CIRCLE}
              className={clsx(WASH_FILLS[i % WASH_FILLS.length], 'stroke-rule')}
              strokeWidth="1.5"
            />
          ))}

          {/* Node label + description, seated in each circle's outer lobe */}
          {CIRCLE_LABEL_POS.map((pos, i) => {
            const node = nodes[i]
            if (!node) return null
            return (
              <foreignObject key={i} x={pos.x - 58} y={pos.y - 42} width={116} height={84}>
                <div className="flex h-full w-full flex-col items-center justify-center gap-0.5 px-1 text-center">
                  <p className={clsx('font-display text-base font-bold', ACCENT_CLASSES[i % ACCENT_CLASSES.length])}>
                    {node.label}
                  </p>
                  {node.desc && <p className="text-[0.7rem] leading-tight text-ink-soft">{node.desc}</p>}
                </div>
              </foreignObject>
            )
          })}

          {/* Hub at the centroid = true triple-intersection */}
          <circle cx={CX} cy={CY} r={HUB_R} className="fill-brand" />
          <foreignObject x={CX - HUB_R} y={CY - HUB_R} width={HUB_R * 2} height={HUB_R * 2}>
            <div className="flex h-full w-full items-center justify-center p-1 text-center">
              <span className="font-mono text-[0.6rem] font-semibold uppercase leading-tight tracking-widest text-paper">
                {center}
              </span>
            </div>
          </foreignObject>
        </svg>
      </div>

      {/* Accessible fallback: real text for screen readers, hidden visually */}
      <dl className="sr-only">
        {nodes.map((node, i) => (
          <div key={i}>
            <dt>{node.label}</dt>
            {node.desc && <dd>{node.desc}</dd>}
          </div>
        ))}
      </dl>

      {caption && <p className="mt-4 text-sm text-muted">{caption}</p>}
    </div>
  )
}
