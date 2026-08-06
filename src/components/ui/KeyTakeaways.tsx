import { CheckCircle2 } from 'lucide-react'

interface KeyTakeawaysProps {
  items: string[]
}

/** End-of-page recap block, visually distinct from LearningObjectives. */
export function KeyTakeaways({ items }: KeyTakeawaysProps) {
  return (
    <div className="rounded-2xl bg-green-wash p-6">
      <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-green">Key takeaways</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-ink">
            <CheckCircle2 size={16} strokeWidth={1.75} aria-hidden className="mt-0.5 shrink-0 text-green" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
