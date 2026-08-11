import type { ReactNode } from 'react'
import { PageHeader, Section, Reveal, PrevNextPager } from '../components/layout'
import { CopyButton } from '../components/ui'
import { PROMPTS } from '../data/prompts'
import { pager } from '../lib/pager'
import type { PromptEntry } from '../types'

const highlight = (s: string): ReactNode[] =>
  s.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith('[') ? (
      <mark key={i} className="rounded bg-amber-wash px-1 text-gold-deep">
        {part}
      </mark>
    ) : (
      part
    ),
  )

function PromptCard({ title, useWhen, prompt, tip }: PromptEntry) {
  return (
    <div className="rounded-2xl border border-rule bg-surface p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-display text-xl text-ink">{title}</h3>
        <CopyButton text={prompt} label={`Copy prompt: ${title}`} />
      </div>
      <p className="mt-3 text-sm text-ink-soft">
        <span className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">Use when </span>
        {useWhen}
      </p>
      <pre className="mt-4 whitespace-pre-wrap break-words rounded-xl border border-rule bg-blue-wash/40 p-4 font-mono text-[0.82rem] leading-relaxed text-ink">
        {highlight(prompt)}
      </pre>
      {tip && (
        <p className="mt-4 text-sm italic text-ink-soft">
          <span className="not-italic">Tip: </span>
          {tip}
        </p>
      )}
    </div>
  )
}

export function PromptLibrary() {
  const { prev, next } = pager('/toolkit/prompts')
  return (
    <>
      <PageHeader
        kicker="Toolkit · AI Prompts"
        title="Prompt Library"
        subtitle="Ready-to-use prompts for the research grunt work — paste your own material into the brackets and go."
        prev={prev}
        next={next}
      />

      <Section
        id="prompts"
        index="01"
        kicker="Toolkit"
        title="Five prompts to start with"
        intro="Each one is written to be pasted as-is. Swap the highlighted placeholders for your own material, then paste your source data underneath."
      >
        <div className="flex flex-col gap-6">
          {PROMPTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.04}>
              <PromptCard {...p} />
            </Reveal>
          ))}
        </div>
      </Section>

      <PrevNextPager prev={prev} next={next} />
    </>
  )
}
