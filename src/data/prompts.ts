import type { PromptEntry } from '../types'

export const PROMPT_SOURCES: { label: string; url: string }[] = [
  { label: 'Prompts are original to this site, written for this course rather than drawn from an external framework or publication.', url: '#' },
]

export const PROMPTS: PromptEntry[] = [
  {
    id: 'interview-synthesis',
    title: 'Interview Synthesis',
    useWhen:
      'You have a pile of raw user-interview transcripts and need ranked, actionable themes out the other end. Feed it full verbatim transcripts, never your own pre-summarised notes — synthesis works better from raw material.',
    prompt: `You’re acting as a senior product researcher. Below are [N] full interview
transcripts with [type of user]. From them, produce: the recurring themes
ranked by frequency and severity; one memorable verbatim quote per theme;
any contradictions between what people said and what they actually
described doing; a Jobs-to-be-Done statement for each major cluster; which
findings are fixable this quarter versus structural; anything the pattern
suggests that a quantitative survey would likely miss; and the single
highest-priority thing to address first. Ground every claim in the
transcripts themselves — don’t generalise beyond what’s actually there —
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
material, and don’t let any solution language creep back in.

[PASTE SOURCE MATERIAL]`,
  },
  {
    id: 'competitive-teardown',
    title: 'Competitive Teardown',
    useWhen:
      'You need a structured read on a rival from their public footprint — site, app listing, pricing, reviews, public statements — before a positioning or strategy conversation.',
    prompt: `You’re acting as a competitive-intelligence product manager. Analyse
[competitor] in the context of [our product/category]. Produce: a feature
comparison (their advantage, our advantage, gaps on both sides); their
implied positioning — what job they’re claiming to do better than anyone
else; their pricing and packaging; their five most common review
complaints, verbatim, each paired with a product opportunity; their three
most-praised differentiators; the strategic bets implied by what they’ve
shipped in the last twelve months; and the single most important thing to
study, plus the single biggest gap worth attacking. Ground every claim in
the material provided, mark anything that’s inference rather than fact,
and skip the filler.

[PASTE SOURCE MATERIAL]`,
  },
  {
    id: 'feedback-mining',
    title: 'Feedback Mining',
    useWhen:
      'You’re working through volume — support tickets, app store reviews, NPS verbatims — and need to find the real signal underneath.',
    prompt: `You’re a product manager analysing [N] [tickets/reviews] for [product]
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
    prompt: `You’re a growth-focused product manager at [company]. Here is [data /
query output]. Produce: three possible explanations for the pattern,
ranked by likelihood, each with supporting evidence from the data; what
additional data would confirm or rule out each explanation; the most
dangerous confounding factor to watch for; whether this looks like real
signal or noise; which metric would be the first to move if the
explanation is correct; and what decision this should actually change,
and in which direction. Show your reasoning, and flag anywhere you’re
uncertain.

[PASTE DATA]`,
    tip: 'Good follow-up prompt — “List every assumption a skeptical data scientist would challenge in this analysis.”',
  },
  {
    id: 'framework-selection',
    title: 'Choosing Between Frameworks',
    useWhen:
      'You’re deciding how to approach a specific decision and aren’t sure which framework actually fits — useful before a prioritisation call, a market-sizing exercise, or any moment where reaching for the first familiar tool would be a mistake.',
    prompt: `You’re acting as a product strategy advisor. I’m deciding how to approach
[the decision, e.g. "prioritising Q3 roadmap items" or "sizing a new
market"]. The options I’m weighing are [framework A], [framework B], and
[framework C]. For each one, explain: the specific question it answers
well; what it would force me to ignore or oversimplify in this situation;
and what kind of team or decision it’s actually built for. Then recommend
the one (or combination) best suited to [your context and constraints],
and name the one piece of data or input I’d need to gather first to use
it properly. If none of the three actually fits well, say so plainly
instead of forcing one to work.

[DESCRIBE YOUR DECISION AND CONSTRAINTS]`,
  },
  {
    id: 'kano-survey',
    title: 'Kano Survey Question Pairs',
    useWhen:
      'You want to run a Kano-style survey on a shortlist of candidate features and need properly paired functional/dysfunctional questions, not just a list of feature names.',
    prompt: `You’re a research-savvy product manager building a Kano model survey. For
each of the following candidate features — [list your candidate
features] — write one functional question ("How would you feel if the
product had [feature]?") and its paired dysfunctional question ("How
would you feel if the product did NOT have [feature]?"), each using the
standard five-point Kano response scale: I like it that way, I expect it
that way, I am neutral, I can tolerate it that way, I dislike it that
way. Keep every question in plain language a real user would understand
without further explanation. After the question pairs, add two sentences
on how to read the results — which response combinations map to must-be,
performance, attractive, indifferent, and reverse — so whoever runs the
analysis doesn’t have to look it up separately.

[LIST YOUR CANDIDATE FEATURES]`,
  },
  {
    id: 'story-map-generation',
    title: 'Story Map From a User Goal',
    useWhen:
      'You have a single high-level user goal and want a first-draft story map — backbone activities plus the stories beneath them — to react to and correct, rather than starting from a blank page.',
    prompt: `You’re acting as a product manager building a story map. The overall user
goal is: [describe your user goal]. Produce: the backbone — five to
eight sequential activities a user moves through to accomplish this
goal, written as verbs; under each activity, three to six user stories
in the standard "As a [user], I want [goal], so that [reason]" form,
ordered from essential to nice-to-have; a single horizontal line marking
where a first, walking-skeleton release should cut across the map, with
one sentence justifying where that line falls; and any activity where
you had to guess at missing context, flagged explicitly. Don’t invent
user needs that aren’t implied by the stated goal.

[DESCRIBE YOUR USER GOAL AND ANY KNOWN CONSTRAINTS]`,
  },
  {
    id: 'dod-review',
    title: 'Definition of Done Review',
    useWhen:
      'Your team already has a Definition of Done and you want a critical outside read on whether it actually protects quality, or just looks thorough on paper.',
    prompt: `You’re a delivery-focused engineering lead reviewing a team’s Definition
of Done for [team or product context]. Assess the list below for: any
criterion that’s unverifiable as written (can’t be checked yes or no by
someone other than the author); anything missing that a team at this
stage typically needs and regrets skipping later; criteria that sound
thorough but are routinely skipped in practice, and why that keeps
happening; and whether the list is short enough that people will
actually use it, or long enough that it quietly gets ignored. Finish
with a revised version, no longer than the original, and a one-line
reason for each change.

[PASTE YOUR CURRENT DEFINITION OF DONE]`,
  },
  {
    id: 'strategy-pressure-test',
    title: 'Pressure-Testing a Product Strategy',
    useWhen:
      'You have a drafted strategy and want it stress-tested for the assumptions it’s quietly resting on, before presenting it to stakeholders who’ll find the same holes.',
    prompt: `You’re acting as a skeptical but constructive board advisor reviewing a
product strategy for [company or product]. Below is the strategy as
currently written. Identify: the two or three assumptions the whole
strategy depends on that aren’t explicitly stated anywhere in the
document; what would have to be true about the market, the customer, or
the competition for this strategy to fail even if executed well; where
the strategy states an intention (like "we will differentiate on X")
without a mechanism for how; the single competitor response that would
hurt this strategy the most; and one question a sharp investor or board
member would ask that the document doesn’t currently answer. Be specific
to what’s actually written — critique this strategy, not a generic one.

[PASTE YOUR STRATEGY DOCUMENT]`,
  },
  {
    id: 'project-one-pager',
    title: 'Project One-Pager',
    useWhen:
      'You need to turn a rough idea or a pile of scattered notes into a single, shareable one-pager before a project gets a green light — the document people actually skim before a kickoff meeting.',
    prompt: `You’re acting as a product manager writing a project one-pager for
[project name]. From the material below, produce a one-page document
with these sections, each genuinely short: the problem (two sentences,
framed from the user’s side, not the business’s); the proposed solution
(three sentences, no implementation detail); success metrics (two to
three, each with a specific target and timeframe, not just a direction);
scope (explicitly what’s in, and what’s deliberately out, for this
phase); key risks (the two most likely ways this fails, and the
mitigation for each); and open questions (anything still unresolved that
shouldn’t block a first conversation). Keep the whole thing readable in
under two minutes — cut anything that isn’t load-bearing.

[PASTE YOUR ROUGH NOTES / IDEA]`,
  },
]
