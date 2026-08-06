import { SquarePen } from 'lucide-react'

interface PlaceholderProps {
  note?: string
}

/** Unmistakable marker for empty content slots: dashed border + mono "PLACEHOLDER" label. */
export function Placeholder({ note }: PlaceholderProps) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-rule bg-surface/50 p-8 text-center">
      <div className="flex flex-col items-center gap-3">
        <SquarePen size={22} strokeWidth={1.5} aria-hidden className="text-muted" />
        <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">Placeholder</p>
        <p className="text-sm text-muted">{note ?? 'Lecture content drops in here.'}</p>
      </div>
    </div>
  )
}
