interface StepListProps {
  items: { title: string; body: string }[]
}

/** Ordered, numbered steps connected by a thin vertical line. */
export function StepList({ items }: StepListProps) {
  return (
    <ol className="relative">
      {items.map((item, i) => (
        <li key={i} className="relative flex gap-4 pb-8 last:pb-0">
          {i < items.length - 1 && (
            <span aria-hidden className="absolute left-[15px] top-9 h-[calc(100%-2rem)] w-px bg-rule" />
          )}
          <span
            aria-hidden
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-wash font-mono text-[0.8rem] font-semibold text-brand"
          >
            {i + 1}
          </span>
          <div className="pt-1">
            <h4 className="font-medium text-ink">{item.title}</h4>
            <p className="mt-1 text-[0.92rem] leading-relaxed text-ink-soft">{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
