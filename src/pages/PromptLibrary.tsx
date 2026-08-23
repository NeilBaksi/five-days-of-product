import type { ReactNode } from 'react'
import { PageHeader, Section, Reveal, PrevNextPager } from '../components/layout'
import { CopyButton, AttributionFooter } from '../components/ui'
import { PROMPTS, PROMPT_SOURCES } from '../data/prompts'
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
        id="how-to-adapt"
        index="01"
        kicker="Before you paste"
        title="Getting more out of these prompts"
        intro="A prompt copied verbatim is a starting point, not a finished tool — a little adaptation is what makes the output actually usable."
      >
        <p className="prose-body">
          Swap every <mark className="rounded bg-amber-wash px-1 text-gold-deep">[bracketed]</mark> span for your
          own specifics before you paste — the more concrete the fill-in (a real product name, a real time
          period, a real audience), the less generic the answer that comes back. Tone and format vary a little
          model to model: some follow a numbered “produce: …” list more literally than others, so if the output
          reads flat, ask directly for headers or a table. Whatever comes back, check it against the same
          standard as the prompt asks of itself — is every claim actually grounded in the material you pasted,
          or has the model quietly generalised beyond it? That’s the one failure mode worth checking for every
          time, regardless of which prompt or which model you used.
        </p>
      </Section>

      <Section
        id="prompts"
        index="02"
        kicker="Copy and adapt"
        title="A working set of prompts"
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

      <AttributionFooter sources={PROMPT_SOURCES} />

      <PrevNextPager prev={prev} next={next} />
    </>
  )
}
