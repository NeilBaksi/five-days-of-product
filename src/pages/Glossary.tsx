import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, Section, Reveal, PrevNextPager } from '../components/layout'
import { GLOSSARY, GLOSSARY_CATEGORIES } from '../data/glossary'
import { pager } from '../lib/pager'
import type { GlossaryCategory } from '../types'

const CATEGORY_STYLE: Record<GlossaryCategory, { dot: string; on: string; off: string }> = {
  'Engineering & Technical': { dot: 'bg-muted', on: 'bg-rule/60 text-ink border-ink-soft', off: 'border-rule bg-surface text-ink-soft hover:bg-blue-wash/40' },
  'Design & UX': { dot: 'bg-berry', on: 'bg-berry-wash text-berry border-berry', off: 'border-rule bg-surface text-ink-soft hover:bg-blue-wash/40' },
  'Process & Agile': { dot: 'bg-green', on: 'bg-green-wash text-green border-green', off: 'border-rule bg-surface text-ink-soft hover:bg-blue-wash/40' },
  'Data & Metrics': { dot: 'bg-gold', on: 'bg-amber-wash text-gold-deep border-gold-deep', off: 'border-rule bg-surface text-ink-soft hover:bg-blue-wash/40' },
  'Product & Growth': { dot: 'bg-brand', on: 'bg-blue-wash text-brand border-brand', off: 'border-rule bg-surface text-ink-soft hover:bg-blue-wash/40' },
}

export function Glossary() {
  const { prev, next } = pager('/toolkit/glossary')
  const [active, setActive] = useState<GlossaryCategory | 'All'>('All')

  const visibleCategories = active === 'All' ? GLOSSARY_CATEGORIES : [active]
  const shownCount = GLOSSARY.filter((t) => active === 'All' || t.category === active).length

  return (
    <>
      <PageHeader
        kicker="Toolkit · Reference"
        title="Glossary"
        subtitle="The vocabulary that comes up constantly in product work — engineering terms you’ll hear in standup, design terms you’ll use in critique, agile shorthand from every planning meeting, the metrics that fill a dashboard, and the product and growth language that shows up in every roadmap review."
        prev={prev}
        next={next}
      />

      {/* ponytail: filter state is plain useState, not useSearchParams — nobody deep-links a
          glossary filter, and SidebarLayout’s scroll-reset keys on location.pathname, so a
          search-param write would silently skip that reset. Revisit if someone asks to share
          a filtered view. */}
      <div className="-mx-5 mb-10 bg-paper/90 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8 md:sticky md:top-0 md:z-30 md:py-4">
        <label className="sr-only" htmlFor="glossary-cat">
          Filter by category
        </label>
        <select
          id="glossary-cat"
          className="min-h-[44px] w-full rounded-lg border border-rule bg-surface px-3 text-sm text-ink md:hidden"
          value={active}
          onChange={(e) => setActive(e.target.value as GlossaryCategory | 'All')}
        >
          <option value="All">All categories</option>
          {GLOSSARY_CATEGORIES.map((c) => (
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
          {GLOSSARY_CATEGORIES.map((c) => {
            const style = CATEGORY_STYLE[c]
            const pressed = active === c
            return (
              <button
                key={c}
                type="button"
                aria-pressed={pressed}
                onClick={() => setActive(c)}
                className={`flex min-h-[44px] items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors ${
                  pressed ? style.on : style.off
                }`}
              >
                <span className={`size-2 rounded-full ${style.dot}`} aria-hidden />
                {c}
              </button>
            )
          })}
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {shownCount} of {GLOSSARY.length} terms{active !== 'All' ? ` in ${active}` : ''}
      </p>

      <Section id="glossary" title="Terms">
        {visibleCategories.map((category) => {
          const style = CATEGORY_STYLE[category]
          const terms = GLOSSARY.filter((t) => t.category === category)
          return (
            <Reveal key={category} as="section" className="mb-12 last:mb-0">
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
                <span className={`size-2.5 rounded-full ${style.dot}`} aria-hidden />
                {category}
              </h2>
              <dl className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {terms.map((t) => (
                  <div key={t.term}>
                    <dt className="font-display text-base font-bold text-ink">{t.term}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {t.definition}
                      {t.seeAlso && (
                        <Link to={t.seeAlso.to} className="ml-2 font-mono text-[0.7rem] text-brand hover:underline">
                          See {t.seeAlso.label} →
                        </Link>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )
        })}
      </Section>

      <PrevNextPager prev={prev} next={next} />
    </>
  )
}
