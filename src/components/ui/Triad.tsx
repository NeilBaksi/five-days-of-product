import clsx from 'clsx'

interface TriadProps {
  center: string
  nodes: { label: string; desc?: string }[]
  variant: 'venn' | 'balance'
  caption?: string
}

const WASH_CLASSES = ['bg-blue-wash', 'bg-berry-wash', 'bg-green-wash']
const ACCENT_CLASSES = ['text-brand', 'text-berry', 'text-green']

/** Three nodes converging on (venn) or balancing around (balance) a center label. */
export function Triad({ center, nodes, variant, caption }: TriadProps) {
  return (
    <div>
      <div aria-hidden className="relative mx-auto grid max-w-md grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        {/* Center hub (decorative — real labels live in the <dl> below) */}
        <div
          className={clsx(
            'order-first flex items-center justify-center rounded-2xl border border-rule/60 p-4 text-center sm:order-none sm:col-start-2 sm:row-start-1',
            variant === 'venn' ? 'bg-surface' : 'bg-brand',
          )}
        >
          <span
            className={clsx(
              'font-mono text-[0.75rem] font-semibold uppercase tracking-widest',
              variant === 'venn' ? 'text-ink' : 'text-paper',
            )}
          >
            {center}
          </span>
        </div>

        {nodes.map((node, i) => (
          <div
            key={i}
            className={clsx(
              'rounded-2xl border border-rule/60 p-4 text-center sm:row-start-2',
              WASH_CLASSES[i % WASH_CLASSES.length],
              i === 0 && 'sm:col-start-1',
              i === 1 && 'sm:col-start-2',
              i === 2 && 'sm:col-start-3',
            )}
          >
            <p className={clsx('font-display text-base font-bold', ACCENT_CLASSES[i % ACCENT_CLASSES.length])}>
              {node.label}
            </p>
          </div>
        ))}
      </div>

      {/* Accessible content: center (screen-reader only, already visible in the hub) + full node labels/descriptions */}
      <span className="sr-only">{center}</span>
      <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {nodes.map((node, i) => (
          <div key={i}>
            <dt className={clsx('font-display text-sm font-bold', ACCENT_CLASSES[i % ACCENT_CLASSES.length])}>
              {node.label}
            </dt>
            {node.desc && <dd className="mt-1 text-xs leading-relaxed text-ink-soft">{node.desc}</dd>}
          </div>
        ))}
      </dl>

      {caption && <p className="mt-4 text-sm text-muted">{caption}</p>}
    </div>
  )
}
