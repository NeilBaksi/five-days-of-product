import { Dot } from 'lucide-react'

interface PressureDiagramProps {
  center: string
  forces: string[]
}

// Wash tokens cycled across the 6 overlapping petals.
const WASH_FILLS = ['fill-blue-wash', 'fill-berry-wash', 'fill-green-wash', 'fill-amber-wash']

/** N competing forces surrounding a central decision. Desktop: overlapping-petal Venn + list. Mobile: hub + list. */
export function PressureDiagram({ center, forces }: PressureDiagramProps) {
  return (
    <div>
      {/* Mobile: hub on top, forces as a plain list below */}
      <div className="md:hidden">
        <div className="rounded-2xl bg-brand p-5 text-center">
          <p className="font-display text-lg font-bold text-paper">{center}</p>
        </div>
        <ul className="mt-4 flex flex-col gap-2">
          {forces.map((force, i) => (
            <li
              key={i}
              className="flex items-start gap-2 rounded-xl border border-rule bg-surface p-3 text-sm text-ink"
            >
              <Dot size={18} strokeWidth={1.75} aria-hidden className="mt-0.5 shrink-0 text-muted" />
              {force}
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop: decorative overlapping-petal Venn visual, labels inside each petal */}
      <div className="hidden md:block">
        <div className="relative mx-auto max-w-md">
          <svg viewBox="0 0 400 400" className="w-full" aria-hidden>
            {/* Pass 1: all petal fills, so no petal's fill can later paint over another petal's label */}
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = i * 60
              const rad = (angle * Math.PI) / 180
              const cx = 200 + 70 * Math.cos(rad)
              const cy = 200 + 70 * Math.sin(rad)
              return (
                <ellipse
                  key={i}
                  cx={cx}
                  cy={cy}
                  rx={110}
                  ry={70}
                  transform={`rotate(${angle} ${cx} ${cy})`}
                  className={`${WASH_FILLS[i % WASH_FILLS.length]} opacity-70`}
                />
              )
            })}
            {/* Pass 2: all labels, drawn after every fill so text always sits on top */}
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = i * 60
              const rad = (angle * Math.PI) / 180
              const cx = 200 + 70 * Math.cos(rad)
              const cy = 200 + 70 * Math.sin(rad)
              return (
                <foreignObject
                  key={i}
                  x={cx + 60 * Math.cos(rad) - 55}
                  y={cy + 60 * Math.sin(rad) - 30}
                  width={110}
                  height={60}
                >
                  <p className="flex h-full w-full items-center justify-center text-center font-mono text-[0.6rem] font-medium leading-tight text-ink-soft">
                    {forces[i]}
                  </p>
                </foreignObject>
              )
            })}
          </svg>
          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand p-2 text-center">
            <p className="font-display text-xs font-bold leading-tight text-paper sm:text-sm">{center}</p>
          </div>
        </div>

        {/* Accessible fallback: real text for screen readers, hidden visually */}
        <ul className="sr-only">
          {forces.map((force, i) => (
            <li key={i}>{force}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
