import { Dot } from 'lucide-react'

interface PressureDiagramProps {
  center: string
  forces: string[]
}

// Grid cells surrounding a centered 3x3 hub (row2/col2), reading top row then bottom row.
const RING_POSITIONS = [
  'row-start-1 col-start-1',
  'row-start-1 col-start-2',
  'row-start-1 col-start-3',
  'row-start-3 col-start-1',
  'row-start-3 col-start-2',
  'row-start-3 col-start-3',
  'row-start-2 col-start-1',
  'row-start-2 col-start-3',
]

/** N competing forces surrounding a central decision. Desktop: hub-and-ring grid. Mobile: hub + list. */
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

      {/* Desktop: forces arranged around the hub via CSS grid; still a real <ul><li> for a11y */}
      <ul className="hidden grid-cols-3 grid-rows-3 gap-3 md:grid">
        {forces.map((force, i) => (
          <li
            key={i}
            className={
              'flex items-center gap-2 rounded-xl border border-rule bg-surface p-3 text-sm text-ink ' +
              (RING_POSITIONS[i % RING_POSITIONS.length] ?? '')
            }
          >
            <Dot size={18} strokeWidth={1.75} aria-hidden className="shrink-0 text-muted" />
            {force}
          </li>
        ))}
        <li className="col-start-2 row-start-2 flex items-center justify-center rounded-2xl bg-brand p-4 text-center">
          <span className="font-display text-base font-bold text-paper">{center}</span>
        </li>
      </ul>
    </div>
  )
}
