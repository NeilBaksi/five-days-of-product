import type { PromptEntry } from '../types'

export const PROMPTS: PromptEntry[] = [
  {
    id: 'interview-synthesis',
    title: 'Interview Synthesis',
    useWhen:
      'You have a pile of raw user-interview transcripts and need ranked, actionable themes out the other end. Feed it full verbatim transcripts, never your own pre-summarised notes — synthesis works better from raw material.',
    prompt: `You're acting as a senior product researcher. Below are [N] full interview
transcripts with [type of user]. From them, produce: the recurring themes
ranked by frequency and severity; one memorable verbatim quote per theme;
any contradictions between what people said and what they actually
described doing; a Jobs-to-be-Done statement for each major cluster; which
findings are fixable this quarter versus structural; anything the pattern
suggests that a quantitative survey would likely miss; and the single
highest-priority thing to address first. Ground every claim in the
transcripts themselves — don't generalise beyond what's actually there —
and mark each finding as strong, moderate, or thin evidence.

[PASTE TRANSCRIPTS]`,
    tip: 'Once you have the output, ask it to compress to 200 words, then 100, while keeping every named theme — a good way to find your actual headline.',
  },
  {
    id: 'jtbd-extraction',
    title: 'Jobs-to-Be-Done Extraction',
    useWhen:
      'You want to strip the solution-talk out of research notes and get to the underlying job a user is actually trying to get done — a direct application of the framework introduced on Day 1.',
    prompt: `Act as a Jobs-to-be-Done strategist. From the material below, extract: the
core job the user is trying to get done; the triggering moment or struggle
that sends them looking for a solution; the four forces at play (the push
away from their current approach, the pull toward something new, the
anxiety holding them back, and the habit keeping them where they are);
five to seven solution-agnostic desired-outcome statements, written as
"minimise [metric] in [circumstance]"; and anything a team focused only on
features would likely miss entirely. Ground every claim in the source
material, and don't let any solution language creep back in.

[PASTE SOURCE MATERIAL]`,
  },
  {
    id: 'competitive-teardown',
    title: 'Competitive Teardown',
    useWhen:
      'You need a structured read on a rival from their public footprint — site, app listing, pricing, reviews, public statements — before a positioning or strategy conversation.',
    prompt: `You're acting as a competitive-intelligence product manager. Analyse
[competitor] in the context of [our product/category]. Produce: a feature
comparison (their advantage, our advantage, gaps on both sides); their
implied positioning — what job they're claiming to do better than anyone
else; their pricing and packaging; their five most common review
complaints, verbatim, each paired with a product opportunity; their three
most-praised differentiators; the strategic bets implied by what they've
shipped in the last twelve months; and the single most important thing to
study, plus the single biggest gap worth attacking. Ground every claim in
the material provided, mark anything that's inference rather than fact,
and skip the filler.

[PASTE SOURCE MATERIAL]`,
  },
  {
    id: 'feedback-mining',
    title: 'Feedback Mining',
    useWhen:
      'You’re working through volume — support tickets, app store reviews, NPS verbatims — and need to find the real signal underneath.',
    prompt: `You're a product manager analysing [N] [tickets/reviews] for [product]
over [time period]. Produce: the top eight themes ranked by volume and
severity, each with a supporting verbatim quote; the top three root
causes (the underlying issue, not just the surface complaint); quick wins
that could realistically ship within two weeks; any themes that hint at a
deeper, structural problem; and the specific phrase or pattern that, in
hindsight, would have made a good early-warning signal. Quote directly
from the source material, and flag anywhere the evidence is thin.

[PASTE FEEDBACK DATA]`,
  },
  {
    id: 'metrics-deep-dive',
    title: 'Metrics Deep Dive',
    useWhen:
      'You have an actual dataset or query output to reason through, rather than a vague description of one — models do far better work when they can see the real numbers.',
    prompt: `You're a growth-focused product manager at [company]. Here is [data /
query output]. Produce: three possible explanations for the pattern,
ranked by likelihood, each with supporting evidence from the data; what
additional data would confirm or rule out each explanation; the most
dangerous confounding factor to watch for; whether this looks like real
signal or noise; which metric would be the first to move if the
explanation is correct; and what decision this should actually change,
and in which direction. Show your reasoning, and flag anywhere you're
uncertain.

[PASTE DATA]`,
    tip: 'Good follow-up prompt — “List every assumption a skeptical data scientist would challenge in this analysis.”',
  },
]
