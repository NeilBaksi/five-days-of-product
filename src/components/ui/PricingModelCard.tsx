import { CircleCheck, CircleX, AlertTriangle } from 'lucide-react'
import type { PricingModel } from '../../types'
import { Formula } from './Formula'
import { Reveal } from '../layout/Reveal'

interface PricingModelCardProps {
  model: PricingModel
  delay?: number
}

/** One pricing-model card: numbered title, strategy, optional formula, pros/cons split, watch-out line. */
export function PricingModelCard({ model, delay = 0 }: PricingModelCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="flex h-full flex-col rounded-2xl border border-rule bg-surface p-6">
        <h3 className="font-display text-xl font-bold leading-snug text-ink">
          <span className="text-brand">{model.number}.</span> {model.title}
          <span className="text-ink-soft"> — {model.tag}</span>
        </h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{model.strategy}</p>

        {model.detail && (
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {model.detailLabel && <span className="font-medium text-ink">{model.detailLabel}: </span>}
            {model.detail}
          </p>
        )}

        {model.formula && (
          <div className="mt-4">
            <Formula expression={model.formula.expression} note={model.formula.note} />
          </div>
        )}

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-2 rounded-xl bg-blue-wash p-3">
            <CircleCheck size={18} strokeWidth={1.75} aria-hidden className="mt-0.5 shrink-0 text-brand" />
            <p className="text-[0.88rem] leading-relaxed text-ink">
              <span className="mr-1 font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-brand">
                Pros:
              </span>
              {model.pros}
            </p>
          </div>
          <div className="flex items-start gap-2 rounded-xl bg-berry-wash p-3">
            <CircleX size={18} strokeWidth={1.75} aria-hidden className="mt-0.5 shrink-0 text-berry" />
            <p className="text-[0.88rem] leading-relaxed text-ink">
              <span className="mr-1 font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-berry">
                Cons:
              </span>
              {model.cons}
            </p>
          </div>
        </div>

        {model.inPractice && (
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            <span className="font-medium text-ink">{model.inPracticeLabel}: </span>
            {model.inPractice}
          </p>
        )}

        <div className="mt-auto pt-4">
          <p className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft">
            <AlertTriangle size={16} strokeWidth={1.75} aria-hidden className="mt-0.5 shrink-0 text-gold-deep" />
            <span>
              <span className="font-medium text-ink">Watch out for:</span> {model.watchOut}
            </span>
          </p>
        </div>
      </article>
    </Reveal>
  )
}
