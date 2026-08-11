interface AbstractConcreteProps {
  left: { title: string; items: string[] } // Abstract
  right: { title: string; items: string[] } // Concrete
  center: string // "Product Sense"
  caption?: string
}

/** Two columns joined in the middle by a label chip — two halves of one skill, not two skills. */
export function AbstractConcrete({ left, right, center, caption }: AbstractConcreteProps) {
  return (
    <div className="rounded-2xl border border-rule bg-surface p-6">
      {/* Desktop: two tinted columns joined by a centre badge */}
      <svg viewBox="0 0 480 320" className="hidden w-full md:block" aria-hidden>
        <rect x="16" y="16" width="200" height="288" rx="16" className="fill-blue-wash" />
        <rect x="264" y="16" width="200" height="288" rx="16" className="fill-berry-wash" />

        <text x="116" y="56" textAnchor="middle" className="fill-brand font-display text-[20px] font-bold">
          {left.title}
        </text>
        {left.items.map((item, i) => (
          <text key={item} x="116" y={96 + i * 32} textAnchor="middle" className="fill-ink text-[14px]">
            {item}
          </text>
        ))}

        <text x="364" y="56" textAnchor="middle" className="fill-berry font-display text-[20px] font-bold">
          {right.title}
        </text>
        {right.items.map((item, i) => (
          <text key={item} x="364" y={96 + i * 32} textAnchor="middle" className="fill-ink text-[14px]">
            {item}
          </text>
        ))}

        <circle cx="240" cy="160" r="56" className="fill-brand" stroke="none" />
        <foreignObject x="184" y="132" width="112" height="56">
          <div className="flex h-full w-full items-center justify-center p-1 text-center">
            <span className="font-display text-xs font-bold leading-tight text-paper">{center}</span>
          </div>
        </foreignObject>
      </svg>

      {/* Accessible fallback for the desktop SVG (hidden entirely on mobile, where the stacked lists below are already accessible) */}
      <dl className="hidden md:sr-only md:block">
        <div>
          <dt>{left.title}</dt>
          {left.items.map((item) => (
            <dd key={item}>{item}</dd>
          ))}
        </div>
        <div>
          <dt>Joined by</dt>
          <dd>{center}</dd>
        </div>
        <div>
          <dt>{right.title}</dt>
          {right.items.map((item) => (
            <dd key={item}>{item}</dd>
          ))}
        </div>
      </dl>

      {/* Mobile: stacked bordered lists with the centre label as a chip between them */}
      <div className="md:hidden">
        <div className="rounded-xl border border-rule bg-blue-wash p-4">
          <p className="font-display text-base font-bold text-brand">{left.title}</p>
          <ul className="mt-2 space-y-1 text-sm text-ink">
            {left.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center py-2">
          <span className="rounded-full bg-brand px-4 py-1.5 font-display text-xs font-bold text-paper">
            {center}
          </span>
        </div>
        <div className="rounded-xl border border-rule bg-berry-wash p-4">
          <p className="font-display text-base font-bold text-berry">{right.title}</p>
          <ul className="mt-2 space-y-1 text-sm text-ink">
            {right.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {caption && <p className="mt-4 text-sm text-muted">{caption}</p>}
    </div>
  )
}
