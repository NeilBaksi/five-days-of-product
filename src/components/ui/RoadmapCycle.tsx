import { ArrowRight, ArrowDown, RotateCcw } from 'lucide-react'

interface RoadmapCycleProps {
  steps: { label: string; note?: string }[]
  caption?: string
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function StepBox({ i, label, note }: { i: number; label: string; note?: string }) {
  return (
    <div className="flex h-full flex-1 flex-col rounded-2xl border border-rule bg-surface p-4">
      <span className="font-display text-2xl font-bold leading-none text-brand">{pad(i + 1)}</span>
      <p className="mt-2 font-display text-base font-bold leading-tight text-ink">{label}</p>
      {note && <p className="mt-1 text-sm leading-snug text-ink-soft">{note}</p>}
    </div>
  )
}

/** Five-milestone product roadmap drawn as a cycle — numbered stages with a loop back to the start. */
export function RoadmapCycle({ steps, caption }: RoadmapCycleProps) {
  return (
    <div>
      {/* Desktop: horizontal numbered stages + a loop-back arc returning to step 01 */}
      <div className="hidden md:block">
        <ol className="flex items-stretch gap-0">
          {steps.map((step, i) => (
            <li key={i} className="flex flex-1 items-stretch">
              <StepBox i={i} label={step.label} note={step.note} />
              {i < steps.length - 1 && (
                <div className="flex items-center px-2">
                  <ArrowRight size={20} strokeWidth={1.75} aria-hidden className="text-muted" />
                </div>
              )}
            </li>
          ))}
        </ol>

        {/* Loop-back: curves from under the last stage across to the first, arrowhead into 01 */}
        <svg viewBox="0 0 100 12" preserveAspectRatio="none" className="mt-1 h-6 w-full" aria-hidden>
          <path
            d="M 98 0 C 98 9, 98 10, 90 10 L 6 10 C 2 10, 2 9, 2 2"
            className="fill-none stroke-brand"
            strokeWidth="0.4"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 2 2 L 0.2 5.5 M 2 2 L 3.8 5.5"
            className="fill-none stroke-brand"
            strokeWidth="0.4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <p className="text-center font-mono text-[0.7rem] uppercase tracking-widest text-muted">
          Insight from stage 05 loops back to sharpen stage 01
        </p>
      </div>

      {/* Mobile: vertical stack + an explicit "cycle repeats" return affordance */}
      <div className="md:hidden">
        <ol className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <li key={i} className="flex flex-col">
              <StepBox i={i} label={step.label} note={step.note} />
              {i < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown size={18} strokeWidth={1.75} aria-hidden className="text-muted" />
                </div>
              )}
            </li>
          ))}
        </ol>
        <div className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-dashed border-rule px-4 py-3">
          <RotateCcw size={16} strokeWidth={1.75} aria-hidden className="text-brand" />
          <span className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">
            Cycle repeats from 01
          </span>
        </div>
      </div>

      {caption && <p className="mt-4 text-sm text-muted">{caption}</p>}
    </div>
  )
}
