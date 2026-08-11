import { PageHeader, Section, PrevNextPager } from '../components/layout'
import { StepList } from '../components/ui'
import { STRATEGY_TEMPLATE_FIELDS } from '../data/toolkit'
import { pager } from '../lib/pager'

function BlankTable({ caption, columns, rows = 5 }: { caption: string; columns: string[]; rows?: number }) {
  return (
    <div>
      <table className="w-full border-collapse border border-rule">
        <caption className="mb-2 text-left font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-rule bg-surface">
            {columns.map((col) => (
              <th
                key={col}
                scope="col"
                className="border border-rule px-4 py-3 font-mono text-[0.7rem] font-medium uppercase tracking-widest text-muted"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, ri) => (
            <tr key={ri}>
              {columns.map((col) => (
                <td key={col} className="h-14 border border-rule" />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-sm text-muted">Meant to be copied or printed and filled in yourself.</p>
    </div>
  )
}

export function Templates() {
  const { prev, next } = pager('/toolkit/templates')
  return (
    <>
      <PageHeader
        kicker="Toolkit · Template"
        title="Templates"
        subtitle="Practical, fill-in-the-blank tools — start with the Product Strategy Template below; more will land here as the toolkit grows."
        prev={prev}
        next={next}
      />

      <Section
        id="strategy-template"
        index="01"
        kicker="Toolkit"
        title="Product Strategy Template"
        intro="A single page, kept deliberately short (one to two pages, no more), meant to define the strategy for one team or product area clearly enough that it can actually govern the next few months of roadmap decisions. If it takes longer than a page to say, it probably isn’t decided yet. Seven fields, each answering one specific question."
      >
        <StepList items={STRATEGY_TEMPLATE_FIELDS} />
      </Section>

      <Section
        id="reference-tables"
        index="02"
        kicker="Toolkit"
        title="Reference tables"
        intro="Two blank structures to round out the canvas — copy, screenshot, or print them and fill them in yourself."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <BlankTable caption="Goal → Initiatives" columns={['Goal', 'Initiative(s)']} />
          <BlankTable caption="Goal → Key Risks & Mitigants" columns={['Goal', 'Mitigant(s)']} />
        </div>
      </Section>

      <PrevNextPager prev={prev} next={next} />
    </>
  )
}
