import clsx from 'clsx'

interface FunnelStagesProps {
  stages: { label: string; note: string }[]
  caption?: string
}

// Width narrows sm: and above only — full width on mobile so labels don't crush.
const WIDTH_CLASSES = ['sm:w-full', 'sm:w-[92%]', 'sm:w-[84%]', 'sm:w-[76%]', 'sm:w-[68%]']

/** Five-stage demand funnel: bars narrow top-to-bottom so attrition reads at a glance. */
export function FunnelStages({ stages, caption }: FunnelStagesProps) {
  return (
    <div>
      <ol className="mx-auto flex max-w-2xl flex-col gap-4">
        {stages.map((stage, i) => (
          <li key={i}>
            {/* Solid bg-brand on every bar, not an opacity gradient: bg-brand/NN paired with
                text-paper fails WCAG AA on the lighter steps, and this site holds an AA
                baseline. The narrowing width alone carries the funnel metaphor. */}
            <div
              className={clsx(
                'mx-auto w-full rounded-xl bg-brand px-4 py-3 text-center',
                WIDTH_CLASSES[i] ?? WIDTH_CLASSES[WIDTH_CLASSES.length - 1],
              )}
            >
              <p className="font-display text-base font-bold text-paper">{stage.label}</p>
            </div>
            <p className="mx-auto mt-2 max-w-prose text-center text-sm leading-snug text-ink-soft">{stage.note}</p>
          </li>
        ))}
      </ol>

      {caption && <p className="mt-4 text-sm text-muted">{caption}</p>}
    </div>
  )
}
