import { useMemo, useState } from 'react'
import { PageHeader, Section, Reveal, PrevNextPager } from '../components/layout'
import { FrameworkTable, Callout, FrameworkCard, AttributionFooter } from '../components/ui'
import { FRAMEWORKS, FRAMEWORK_COMPARISON, FRAMEWORK_SOURCES } from '../data/frameworks'
import { pager } from '../lib/pager'
import type { FrameworkCategory, FrameworkTableData } from '../types'

const CATEGORIES: FrameworkCategory[] = [
  'Discovery',
  'Definition',
  'Design',
  'Delivery',
  'Growth',
  'Strategy & Org',
]

// The comparison table's `framework` cell doesn't always match a FRAMEWORKS `name`/`abbev`
// exactly (shortened labels, or a merged row covering two frameworks). Handle those by name.
const ROW_CATEGORY_OVERRIDES: Partial<Record<string, FrameworkCategory>> = {
  // Represents both North Star Framework and AARRR Metrics — both Growth, so file it there
  // rather than inventing an "always shown" row type for one entry.
  'North Star + AARRR': 'Growth',
}
const ROW_NAME_ALIASES: Partial<Record<string, string>> = {
  Hooked: 'The Hook Model',
}

function categoryForRow(rowFrameworkName: string): FrameworkCategory | null {
  const override = ROW_CATEGORY_OVERRIDES[rowFrameworkName]
  if (override) return override
  const target = ROW_NAME_ALIASES[rowFrameworkName] ?? rowFrameworkName
  const match = FRAMEWORKS.find((f) => f.name === target || f.abbev === target || f.name.startsWith(target))
  return match?.category ?? null
}

export function Frameworks() {
  const { prev, next } = pager('/frameworks')
  const [active, setActive] = useState<FrameworkCategory | 'All'>('All')

  const visibleCategories = active === 'All' ? CATEGORIES : [active]
  const shownCount = FRAMEWORKS.filter((f) => active === 'All' || f.category === active).length

  const filteredTable = useMemo<FrameworkTableData>(() => {
    if (active === 'All') return FRAMEWORK_COMPARISON
    return {
      ...FRAMEWORK_COMPARISON,
      caption: `${FRAMEWORK_COMPARISON.caption} — ${active} only`,
      rows: FRAMEWORK_COMPARISON.rows.filter((row) => categoryForRow(row.framework) === active),
    }
  }, [active])

  return (
    <>
      <PageHeader
        kicker="Reference"
        title="Product frameworks"
        subtitle="The recurring models this course leans on. Each one is a lens — reach for the one that fits the question you’re trying to answer."
        prev={prev}
        next={next}
      />

      <Section
        id="catalogue"
        index="01"
        kicker="The catalogue"
        title="Core frameworks"
        intro="Full definitions, origin, and where each one earns its keep — including when not to reach for it. Filter by stage, or scan the whole set below."
      >
        <div className="-mx-5 mb-10 bg-paper/90 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8 md:sticky md:top-0 md:z-30 md:py-4">
          <label className="sr-only" htmlFor="framework-cat">
            Filter by category
          </label>
          <select
            id="framework-cat"
            className="min-h-[44px] w-full rounded-lg border border-rule bg-surface px-3 text-sm text-ink md:hidden"
            value={active}
            onChange={(e) => setActive(e.target.value as FrameworkCategory | 'All')}
          >
            <option value="All">All categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <div role="group" aria-label="Filter by category" className="hidden flex-wrap gap-2 md:flex">
            <button
              type="button"
              aria-pressed={active === 'All'}
              onClick={() => setActive('All')}
              className={`flex min-h-[44px] items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors ${
                active === 'All' ? 'bg-blue-wash text-brand border-brand' : 'border-rule bg-surface text-ink-soft hover:bg-blue-wash/40'
              }`}
            >
              All
            </button>
            {CATEGORIES.map((c) => {
              const pressed = active === c
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={pressed}
                  onClick={() => setActive(c)}
                  className={`flex min-h-[44px] items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors ${
                    pressed ? 'bg-blue-wash text-brand border-brand' : 'border-rule bg-surface text-ink-soft hover:bg-blue-wash/40'
                  }`}
                >
                  {c}
                </button>
              )
            })}
          </div>
        </div>

        <p aria-live="polite" className="sr-only">
          Showing {shownCount} of {FRAMEWORKS.length} frameworks{active !== 'All' ? ` in ${active}` : ''}
        </p>

        {visibleCategories.map((category) => {
          const items = FRAMEWORKS.filter((f) => f.category === category)
          if (items.length === 0) return null
          return (
            <Reveal key={category} as="section" className="mb-12 last:mb-0">
              <h2 className="font-display text-xl font-bold text-ink">{category}</h2>
              <div className="mt-4 grid items-start gap-6 xl:grid-cols-2">
                {items.map((f, i) => (
                  <FrameworkCard key={f.id} framework={f} delay={i * 0.04} />
                ))}
              </div>
            </Reveal>
          )
        })}
      </Section>

      <Section
        id="compare"
        index="02"
        kicker="At a glance"
        title="When to use which"
        intro="One view of where each framework earns its place across the product lifecycle."
      >
        <p aria-live="polite" className="sr-only">
          Showing {filteredTable.rows.length} of {FRAMEWORK_COMPARISON.rows.length} comparison rows
          {active !== 'All' ? ` for ${active}` : ''}
        </p>
        {filteredTable.rows.length > 0 ? (
          <FrameworkTable data={filteredTable} />
        ) : (
          <p className="text-sm text-ink-soft">No comparison rows for {active}.</p>
        )}
        <div className="mt-8">
          <Callout kind="info" title="Frameworks are lenses, not laws">
            No single model is complete. Combine them, and drop the ones that don’t help with the
            decision in front of you.
          </Callout>
        </div>
      </Section>

      <AttributionFooter sources={FRAMEWORK_SOURCES} />

      <PrevNextPager
        prev={prev}
        next={next}
      />
    </>
  )
}
