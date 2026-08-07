import { CircleCheck, CircleX } from 'lucide-react'
import { Reveal } from '../layout/Reveal'

interface GoodBadListProps {
  items: { good: string; bad: string }[]
}

/** Ben Horowitz-style "Good PM / Bad PM" contrast rows. Column-paired on sm+, stacked on mobile. */
export function GoodBadList({ items }: GoodBadListProps) {
  return (
    <div>
      <div className="hidden sm:grid sm:grid-cols-2 sm:gap-3">
        <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-brand">
          Good product managers
        </span>
        <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-berry">
          Bad product managers
        </span>
      </div>
      <ul className="mt-3 flex flex-col gap-3">
        {items.map((item, i) => (
          <Reveal key={i} as="li" delay={i * 0.05}>
            <div className="grid grid-cols-1 gap-3 border-b border-rule/50 pb-3 last:border-b-0 last:pb-0 sm:grid-cols-2">
              <div className="flex items-start gap-2 rounded-xl bg-blue-wash p-3">
                <CircleCheck size={18} strokeWidth={1.75} aria-hidden className="mt-0.5 shrink-0 text-brand" />
                <p className="text-[0.92rem] leading-relaxed text-ink">
                  <span className="mr-1 font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-brand sm:hidden">
                    Good:
                  </span>
                  {item.good}
                </p>
              </div>
              <div className="flex items-start gap-2 rounded-xl bg-berry-wash p-3">
                <CircleX size={18} strokeWidth={1.75} aria-hidden className="mt-0.5 shrink-0 text-berry" />
                <p className="text-[0.92rem] leading-relaxed text-ink">
                  <span className="mr-1 font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-berry sm:hidden">
                    Bad:
                  </span>
                  {item.bad}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}
