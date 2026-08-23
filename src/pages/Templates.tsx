import { Link } from 'react-router-dom'
import { PageHeader, Section, Reveal, PrevNextPager } from '../components/layout'
import { StepList, AttributionFooter } from '../components/ui'
import {
  STRATEGY_TEMPLATE_FIELDS,
  GOAL_INITIATIVES_EXAMPLE,
  GOAL_RISKS_EXAMPLE,
  PROJECT_ONE_PAGER_FIELDS,
  DEFINITION_OF_DONE_ITEMS,
  STORY_MAP_RELEASE_LABELS,
  VERTICAL_SLICE_EXAMPLE,
  TEMPLATES_SOURCES,
} from '../data/toolkit'
import { pager } from '../lib/pager'

function BlankTable({ caption, columns, rows = 5 }: { caption: string; columns: string[]; rows?: number }) {
  return (
    <div className="overflow-x-auto">
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
    </div>
  )
}

/** Same shell as BlankTable, filled in — shows a reader what "good" looks like. */
function FilledTable({ caption, columns, rows }: { caption: string; columns: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-rule">
        <caption className="mb-2 text-left font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">
          {caption} <span className="normal-case tracking-normal text-brand">— worked example</span>
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
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} className="border border-rule px-4 py-3 text-sm leading-relaxed text-ink-soft">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** One field of the project one-pager canvas — a blank writing box plus a faint filled example below it. */
function CanvasField({
  label,
  hint,
  example,
  wide,
}: {
  label: string
  hint: string
  example: string
  wide?: boolean
}) {
  return (
    <div className={wide ? 'sm:col-span-2' : undefined}>
      <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">{label}</p>
      <p className="mt-1 text-xs text-ink-soft">{hint}</p>
      <div className={`mt-2 rounded-lg border border-dashed border-rule ${wide ? 'h-20' : 'h-14'}`} />
      <p className="mt-1.5 text-xs italic text-muted">e.g. {example}</p>
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
        subtitle="Six practical, fill-in-the-blank tools — from a one-page product strategy canvas to a vertical-slice worksheet — each meant to be copied, printed, and filled in for real work."
        prev={prev}
        next={next}
      />

      <Section
        id="strategy-template"
        index="01"
        kicker="Strategy"
        title="Product Strategy Template"
        intro="A single page, kept deliberately short (one to two pages, no more), meant to define the strategy for one team or product area clearly enough that it can actually govern the next few months of roadmap decisions. If it takes longer than a page to say, it probably isn’t decided yet. Seven fields, each answering one specific question."
      >
        <StepList items={STRATEGY_TEMPLATE_FIELDS} />
      </Section>

      <Section
        id="reference-tables"
        index="02"
        kicker="Worked examples"
        title="Reference tables"
        intro="Two blank structures to round out the canvas, each shown worked through once first — a B2B invoicing tool cutting its time-to-first-invoice and raising its on-time payment rate — so the shape of a good entry is obvious before you copy the blank version."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <FilledTable
              caption="Goal → Initiatives"
              columns={['Goal', 'Initiative(s)']}
              rows={GOAL_INITIATIVES_EXAMPLE.map((r) => [r.goal, r.initiatives])}
            />
            <BlankTable caption="Goal → Initiatives" columns={['Goal', 'Initiative(s)']} />
          </Reveal>
          <Reveal delay={0.04} className="flex flex-col gap-6">
            <FilledTable
              caption="Goal → Key Risks & Mitigants"
              columns={['Goal', 'Key Risk', 'Mitigant']}
              rows={GOAL_RISKS_EXAMPLE.map((r) => [r.goal, r.risk, r.mitigant])}
            />
            <BlankTable caption="Goal → Key Risks & Mitigants" columns={['Goal', 'Key Risk', 'Mitigant']} />
          </Reveal>
        </div>
        <p className="mt-6 text-sm text-muted">Meant to be copied or printed and filled in yourself.</p>
      </Section>

      <Section
        id="project-one-pager"
        index="03"
        kicker="Scoping"
        title="Project one-pager / canvas"
        intro="The right-sizing case for this canvas is made on Day 3 — here’s the fillable artefact itself, one field per question, with a faint worked example under each box."
      >
        <p className="text-sm text-ink-soft">
          See{' '}
          <Link to="/day/3" className="text-brand hover:underline">
            Day 3
          </Link>{' '}
          for why a one-pager beats both a one-line ticket and a full business case.
        </p>
        <Reveal className="mt-6 grid gap-6 rounded-2xl border border-rule bg-surface p-6 sm:grid-cols-2">
          {PROJECT_ONE_PAGER_FIELDS.map((field) => (
            <CanvasField key={field.label} {...field} />
          ))}
        </Reveal>
      </Section>

      <Section
        id="definition-of-done"
        index="04"
        kicker="Delivery standard"
        title="Definition of Done checklist"
        intro="The fillable list a team edits down to the criteria it actually agrees on, then reuses on every ticket."
      >
        <p className="text-sm text-ink-soft">
          See{' '}
          <Link to="/frameworks" className="text-brand hover:underline">
            the frameworks page
          </Link>{' '}
          for when a shared Definition of Done actually earns its keep.
        </p>
        <Reveal className="mt-6 rounded-2xl border border-rule bg-surface p-6">
          <ul className="flex flex-col gap-2.5">
            {DEFINITION_OF_DONE_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[0.92rem] text-ink-soft">
                <span aria-hidden className="mt-0.5 shrink-0 text-muted">
                  ☐
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-rule pt-4">
            <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">
              Add your own
            </p>
            <div className="mt-3 flex flex-col gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-6 border-b border-rule" />
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section
        id="story-map-skeleton"
        index="05"
        kicker="Sequencing work"
        title="Story map skeleton"
        intro="Backbone activities across the top, tasks underneath each, release slices cut across as horizontal bands."
      >
        <p className="text-sm text-ink-soft">
          See{' '}
          <Link to="/frameworks" className="text-brand hover:underline">
            the frameworks page
          </Link>{' '}
          for when to reach for a story map.
        </p>
        <Reveal className="mt-6 rounded-2xl border border-rule bg-surface p-6">
          <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">
            Backbone activities
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-10 rounded-md border border-dashed border-rule bg-blue-wash" />
            ))}
          </div>
          <p className="mt-4 font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">Tasks</p>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="h-9 rounded-md border border-dashed border-rule" />
            ))}
          </div>
          <p className="mt-5 font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">
            Release slices
          </p>
          <div className="mt-2 flex flex-col gap-2">
            {STORY_MAP_RELEASE_LABELS.map((label) => (
              <div key={label} className="flex items-center gap-3 rounded-md border border-rule bg-berry-wash p-2.5">
                <span className="shrink-0 font-mono text-[0.7rem] font-medium uppercase tracking-widest text-berry">
                  {label}
                </span>
                <span className="h-6 flex-1 rounded border border-dashed border-rule/60" />
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        id="vertical-slice-worksheet"
        index="06"
        kicker="Delivery slicing"
        title="Vertical-slice worksheet"
        intro="Turning one fat feature into thin end-to-end slices that each ship real value — worked through once below, then a blank worksheet for your own."
      >
        <p className="text-sm text-ink-soft">
          See{' '}
          <Link to="/frameworks" className="text-brand hover:underline">
            the frameworks page
          </Link>{' '}
          for what vertical slicing is and when to use it.
        </p>
        <Reveal className="mt-6 flex flex-col gap-6">
          <FilledTable
            caption="Fat feature: multi-currency invoicing"
            columns={['Slice', 'What ships end-to-end', 'Real value on its own']}
            rows={VERTICAL_SLICE_EXAMPLE.map((r) => [r.slice, r.endToEnd, r.value])}
          />
          <div>
            <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">
              Fat feature (one sentence)
            </p>
            <div className="mt-2 h-10 rounded-lg border border-dashed border-rule" />
          </div>
          <BlankTable
            caption="Your slices"
            columns={['Slice', 'What ships end-to-end', 'Real value on its own']}
            rows={4}
          />
        </Reveal>
      </Section>

      <AttributionFooter sources={TEMPLATES_SOURCES} />

      <PrevNextPager prev={prev} next={next} />
    </>
  )
}
