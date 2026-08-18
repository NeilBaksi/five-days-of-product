import clsx from 'clsx'

interface HorizonBoardProps {
  columns: { label: string; note: string; cards: string[] }[]
  caption?: string
}

/** Now / Next / Later — a horizon roadmap where the far column is honestly still a buffer. */
export function HorizonBoard({ columns, caption }: HorizonBoardProps) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {columns.map((column, i) => {
          const isBuffer = i === columns.length - 1
          return (
            <div key={i}>
              <span className="inline-block rounded-full bg-brand px-3 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-paper">
                {column.label}
              </span>
              <p className="mt-2 text-sm leading-snug text-ink-soft">{column.note}</p>
              <ul className="mt-3 flex flex-col gap-3">
                {column.cards.map((card, j) => (
                  <li
                    key={j}
                    className={clsx(
                      'rounded-2xl border p-4 text-sm',
                      isBuffer
                        ? 'border-dashed border-rule bg-transparent text-ink-soft'
                        : 'border-rule bg-surface text-ink',
                    )}
                  >
                    {card}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      {caption && <p className="mt-4 text-sm text-muted">{caption}</p>}
    </div>
  )
}
