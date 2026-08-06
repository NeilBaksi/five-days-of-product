import { Target } from 'lucide-react'

interface LearningObjectivesProps {
  items: string[]
}

/** Prominent day-opening block: eyebrow + heading + list of objectives. */
export function LearningObjectives({ items }: LearningObjectivesProps) {
  return (
    <div className="rounded-2xl bg-blue-wash p-6">
      <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-brand">
        By the end of this day
      </p>
      <h2 className="mt-2 font-display text-xl font-bold text-ink">You will be able to</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-ink">
            <Target size={16} strokeWidth={1.75} aria-hidden className="mt-0.5 shrink-0 text-brand" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
