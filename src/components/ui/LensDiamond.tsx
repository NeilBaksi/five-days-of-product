import clsx from 'clsx'

interface LensDiamondProps {
  center: string
  nodes: { label: string; desc?: string }[]
  emphasisIndex?: number
  caption?: string
}

const WASH_CLASSES = ['bg-blue-wash', 'bg-berry-wash', 'bg-green-wash', 'bg-amber-wash']
const ACCENT_CLASSES = ['text-brand', 'text-berry', 'text-green', 'text-gold-deep']

// Diamond positions around the centre cell — no rotation, so text stays upright.
const POSITIONS = [
  'sm:col-start-2 sm:row-start-1',
  'sm:col-start-3 sm:row-start-2',
  'sm:col-start-2 sm:row-start-3',
  'sm:col-start-1 sm:row-start-2',
]

/** Four lenses around a shared centre — DVF grown a fourth vertex without demoting the original three. */
export function LensDiamond({ center, nodes, emphasisIndex, caption }: LensDiamondProps) {
  return (
    <div>
      <div aria-hidden className="mx-auto grid max-w-md grid-cols-1 gap-3 sm:grid-cols-3 sm:grid-rows-3 sm:gap-4">
        {/* Hub (decorative — real labels live in the <dl> below) */}
        <div className="order-first flex items-center justify-center rounded-2xl border border-rule/60 bg-brand p-4 text-center sm:order-none sm:col-start-2 sm:row-start-2">
          <span className="font-mono text-[0.75rem] font-semibold uppercase tracking-widest text-paper">
            {center}
          </span>
        </div>

        {nodes.map((node, i) => (
          <div
            key={i}
            className={clsx(
              'rounded-2xl border border-rule/60 p-4 text-center',
              WASH_CLASSES[i % WASH_CLASSES.length],
              POSITIONS[i % POSITIONS.length],
              i === emphasisIndex && 'ring-1 ring-brand',
            )}
          >
            <p className={clsx('font-display text-base font-bold', ACCENT_CLASSES[i % ACCENT_CLASSES.length])}>
              {node.label}
            </p>
          </div>
        ))}
      </div>

      {/* Accessible content: centre (already visible in the hub) + full node labels/descriptions */}
      <span className="sr-only">{center}</span>
      <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
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
