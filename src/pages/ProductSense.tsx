import { CircleCheck, CircleX } from 'lucide-react'
import { PageHeader, Section, Reveal, PrevNextPager } from '../components/layout'
import { AbstractConcrete, AttributionFooter } from '../components/ui'
import { PRODUCT_SENSE_EXERCISES, PRODUCT_SENSE_DIAGRAM, PRODUCT_SENSE_CALIBRATION, PRODUCT_SENSE_SOURCES } from '../data/toolkit'
import { pager } from '../lib/pager'

export function ProductSense() {
  const { prev, next } = pager('/toolkit/product-sense')
  return (
    <>
      <PageHeader
        kicker="Toolkit · Practice"
        title="Building Your Product Sense"
        subtitle="Product sense isn’t something you’re born with — it’s built the same way a musician builds an ear: through repetition, across thousands of small, deliberate reps."
        prev={prev}
        next={next}
      />

      <Section id="what-is-it" index="01" kicker="Concept" title="What is product sense?">
        <p className="prose-body">
          Product sense is a blend of two kinds of thinking, and neither half is enough on its own:{' '}
          <strong className="font-medium text-ink">Abstract</strong> — user empathy, creativity — the instinct for
          what a person actually needs and what might delight them — and{' '}
          <strong className="font-medium text-ink">Concrete</strong> — design knowledge, business acumen — the
          grounded understanding of how interfaces work and how a business actually functions.
        </p>
        <div className="mt-8">
          <AbstractConcrete {...PRODUCT_SENSE_DIAGRAM} />
        </div>
      </Section>

      <Section id="how-to-practice" index="02" kicker="Practice reps" title="Six ways to practice it">
        <div className="grid gap-4 sm:grid-cols-2">
          {PRODUCT_SENSE_EXERCISES.map((exercise, i) => (
            <Reveal key={exercise.title} delay={i * 0.04} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-rule bg-surface p-5 transition-colors hover:border-brand">
                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">{exercise.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{exercise.instruction}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
                  {exercise.questions.map((q) => (
                    <li key={q} className="flex gap-2">
                      <span aria-hidden className="text-brand">
                        ·
                      </span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="calibration"
        index="03"
        kicker="Calibration"
        title="What a strong answer actually looks like"
        intro="The exercises above only work if you can tell a shallow answer from a real one. Same six exercises, one weak pass and one strong pass on each, so you know what you’re aiming for."
      >
        <div className="flex flex-col gap-4">
          {PRODUCT_SENSE_CALIBRATION.map((item, i) => (
            <Reveal key={item.exercise} delay={i * 0.04}>
              <article className="rounded-2xl border border-rule bg-surface p-5">
                <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">
                  {item.exercise}
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-2 rounded-xl bg-amber-wash p-3">
                    <CircleX size={18} strokeWidth={1.75} aria-hidden className="mt-0.5 shrink-0 text-gold-deep" />
                    <p className="text-[0.92rem] leading-relaxed text-ink">
                      <span className="mr-1 font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-gold-deep">
                        Weak:
                      </span>
                      {item.weak}
                    </p>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl bg-green-wash p-3">
                    <CircleCheck size={18} strokeWidth={1.75} aria-hidden className="mt-0.5 shrink-0 text-green" />
                    <p className="text-[0.92rem] leading-relaxed text-ink">
                      <span className="mr-1 font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-green">
                        Strong:
                      </span>
                      {item.strong}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <AttributionFooter sources={PRODUCT_SENSE_SOURCES} />

      <PrevNextPager prev={prev} next={next} />
    </>
  )
}
