import { PageHeader, Section, Reveal, PrevNextPager } from '../components/layout'
import { FrameworkTable, Callout } from '../components/ui'
import { FRAMEWORKS, FRAMEWORK_COMPARISON } from '../data/frameworks'

export function Frameworks() {
  return (
    <>
      <PageHeader
        kicker="Reference"
        title="Product frameworks"
        subtitle="The recurring models this course leans on. Each one is a lens — reach for the one that fits the question you’re trying to answer."
        prev={{ to: '/', label: 'Overview' }}
        next={{ to: '/day/1', label: 'Day 1 · Discovery' }}
      />

      <Section
        id="catalogue"
        index="01"
        kicker="The catalogue"
        title="Core frameworks"
        intro="Placeholder overviews. Full definitions, examples, and when-to-use notes arrive with the real content."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {FRAMEWORKS.map((f, i) => (
            <Reveal key={f.id} delay={i * 0.04}>
              <article className="flex h-full flex-col rounded-2xl border border-rule bg-surface p-6">
                <div className="mb-2 flex items-baseline gap-2">
                  <span className="font-mono text-[0.7rem] uppercase tracking-wider text-brand">
                    {f.abbev ?? '—'}
                  </span>
                </div>
                <h3 className="font-display text-xl text-ink">{f.name}</h3>
                <p className="mt-1 text-sm font-medium text-berry">{f.tagline}</p>
                <p className="mt-3 text-ink-soft">{f.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {f.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full bg-blue-wash px-3 py-1 font-mono text-[0.68rem] tracking-wide text-brand"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="compare"
        index="02"
        kicker="At a glance"
        title="When to use which"
        intro="One view of where each framework earns its place across the product lifecycle."
      >
        <FrameworkTable data={FRAMEWORK_COMPARISON} />
        <div className="mt-8">
          <Callout kind="info" title="Frameworks are lenses, not laws">
            Placeholder — no single model is complete. Combine them, and drop the ones that don’t
            help with the decision in front of you.
          </Callout>
        </div>
      </Section>

      <PrevNextPager
        prev={{ to: '/', label: 'Overview' }}
        next={{ to: '/day/1', label: 'Day 1 · Discovery' }}
      />
    </>
  )
}
