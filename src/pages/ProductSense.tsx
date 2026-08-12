import { PageHeader, Section, Reveal, PrevNextPager } from '../components/layout'
import { AbstractConcrete } from '../components/ui'
import { PRODUCT_SENSE_EXERCISES } from '../data/toolkit'
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

      <Section id="what-is-it" index="01" kicker="Toolkit" title="What is product sense?">
        <p className="prose-body">
          Product sense is a blend of two kinds of thinking, and neither half is enough on its own:{' '}
          <strong className="font-medium text-ink">Abstract</strong> — user empathy, creativity — the instinct for
          what a person actually needs and what might delight them — and{' '}
          <strong className="font-medium text-ink">Concrete</strong> — design knowledge, business acumen — the
          grounded understanding of how interfaces work and how a business actually functions.
        </p>
        <div className="mt-8">
          <AbstractConcrete
            left={{ title: 'Abstract', items: ['User empathy', 'Creativity'] }}
            right={{ title: 'Concrete', items: ['Design knowledge', 'Business acumen'] }}
            center="Product Sense"
            caption="Two halves of one skill — the instinct for what people need, joined to the grounded knowledge of how to build and sell it."
          />
        </div>
      </Section>

      <Section id="how-to-practice" index="02" kicker="Toolkit" title="Six ways to practice it">
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

      <PrevNextPager prev={prev} next={next} />
    </>
  )
}
