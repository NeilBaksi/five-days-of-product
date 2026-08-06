import type { DayContent } from '../types'

// PLACEHOLDER content for all five days. Structure is final; prose is dummy.
// Real lecture content replaces the block arrays in later prompts — the section
// skeleton stays identical so content drops in cleanly.

const LOREM =
  'Placeholder text. This paragraph stands in for the lecturer’s explanation and will be replaced with real course content. It keeps the visual rhythm — measure, leading, and spacing — honest while the layout is reviewed.'

export const DAYS: DayContent[] = [
  {
    n: 1,
    slug: 'day-1',
    title: 'Discovery & the Product Mindset',
    subtitle:
      'What a product manager actually does, and why discovery comes before a single line of code.',
    accent: 'brand',
    meta: [
      { label: 'Theme', value: 'Discovery' },
      { label: 'Duration', value: '~90 min' },
      { label: 'Frameworks', value: 'JTBD · Double Diamond' },
    ],
    objectives: [
      'Placeholder — define the role of a digital product manager.',
      'Placeholder — distinguish problem space from solution space.',
      'Placeholder — run a first Jobs-to-be-Done interview.',
    ],
    sections: [
      {
        id: 'role',
        kicker: 'The role',
        heading: 'What product management is (and is not)',
        intro: 'A short framing of the discipline before we get to method.',
        blocks: [
          { type: 'paragraph', text: LOREM },
          {
            type: 'cards',
            items: [
              { title: 'Discovery', body: 'Placeholder — learn what is worth building.' },
              { title: 'Definition', body: 'Placeholder — decide what to build first.' },
              { title: 'Delivery', body: 'Placeholder — ship it and learn.' },
            ],
          },
          {
            type: 'callout',
            kind: 'info',
            title: 'A note on scope',
            body: 'Placeholder — the PM owns the “why” and the “what”, not the “how”. Engineering owns the how.',
          },
        ],
      },
      {
        id: 'jtbd',
        kicker: 'Framework',
        heading: 'Jobs to be Done',
        intro: 'People don’t buy products; they hire them to make progress.',
        blocks: [
          { type: 'paragraph', text: LOREM },
          {
            type: 'quote',
            quote:
              'Placeholder — “People don’t want a quarter-inch drill. They want a quarter-inch hole.”',
            attribution: 'Attributed to Theodore Levitt',
          },
          {
            type: 'steps',
            items: [
              { title: 'Recruit', body: 'Placeholder — find people who recently made the switch.' },
              { title: 'Interview', body: 'Placeholder — reconstruct the timeline of their decision.' },
              { title: 'Synthesise', body: 'Placeholder — write the job statement.' },
            ],
          },
        ],
      },
      {
        id: 'diamond',
        kicker: 'Process',
        heading: 'The Double Diamond',
        blocks: [
          {
            type: 'table',
            data: {
              caption: 'The four phases of the Double Diamond',
              emphasisKey: 'mode',
              columns: [
                { key: 'phase', label: 'Phase' },
                { key: 'mode', label: 'Mode' },
                { key: 'goal', label: 'Goal' },
              ],
              rows: [
                { phase: 'Discover', mode: 'Diverge', goal: 'Explore the problem widely' },
                { phase: 'Define', mode: 'Converge', goal: 'Frame the right problem' },
                { phase: 'Develop', mode: 'Diverge', goal: 'Explore solutions widely' },
                { phase: 'Deliver', mode: 'Converge', goal: 'Ship the right solution' },
              ],
            },
          },
          { type: 'placeholder', note: 'Worked example of a real discovery sprint drops in here.' },
        ],
      },
    ],
    takeaways: [
      'Placeholder — discovery de-risks delivery.',
      'Placeholder — frame problems before solutions.',
      'Placeholder — JTBD reframes demand around progress.',
    ],
  },

  {
    n: 2,
    slug: 'day-2',
    title: 'Definition & Prioritisation',
    subtitle: 'Turning a messy problem space into a defensible, sequenced plan.',
    accent: 'berry',
    meta: [
      { label: 'Theme', value: 'Definition' },
      { label: 'Duration', value: '~90 min' },
      { label: 'Frameworks', value: 'RICE · Opportunity trees' },
    ],
    objectives: [
      'Placeholder — write a crisp problem statement.',
      'Placeholder — score a backlog with RICE.',
      'Placeholder — defend a prioritisation call.',
    ],
    sections: [
      {
        id: 'problem',
        kicker: 'Framing',
        heading: 'Writing the problem statement',
        blocks: [
          { type: 'paragraph', text: LOREM },
          {
            type: 'callout',
            kind: 'tip',
            title: 'Keep it testable',
            body: 'Placeholder — a good problem statement names the user, the friction, and the evidence.',
          },
          { type: 'placeholder' },
        ],
      },
      {
        id: 'rice',
        kicker: 'Framework',
        heading: 'RICE prioritisation',
        intro: 'Reach × Impact × Confidence ÷ Effort.',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Reach', body: 'Placeholder — how many users, per period.' },
              { title: 'Impact', body: 'Placeholder — how much it moves the goal.' },
              { title: 'Confidence', body: 'Placeholder — how sure are we.' },
              { title: 'Effort', body: 'Placeholder — person-months to ship.' },
            ],
          },
          { type: 'placeholder', note: 'Live RICE scoring table drops in here.' },
        ],
      },
    ],
    takeaways: [
      'Placeholder — prioritisation is a communication tool.',
      'Placeholder — make trade-offs explicit.',
    ],
  },

  {
    n: 3,
    slug: 'day-3',
    title: 'Design & Solution Shaping',
    subtitle: 'From an agreed problem to a solution worth building and testing.',
    accent: 'green',
    meta: [
      { label: 'Theme', value: 'Design' },
      { label: 'Duration', value: '~90 min' },
      { label: 'Frameworks', value: 'Kano · Story mapping' },
    ],
    objectives: [
      'Placeholder — shape a solution with the team.',
      'Placeholder — classify features with Kano.',
      'Placeholder — build a story map.',
    ],
    sections: [
      {
        id: 'shaping',
        kicker: 'Method',
        heading: 'Solution shaping',
        blocks: [
          { type: 'paragraph', text: LOREM },
          {
            type: 'callout',
            kind: 'warning',
            title: 'Avoid gold-plating',
            body: 'Placeholder — resist adding delighters before the basics are solid.',
          },
          { type: 'placeholder' },
        ],
      },
      {
        id: 'kano',
        kicker: 'Framework',
        heading: 'The Kano model',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Basic', body: 'Placeholder — expected; absence causes anger.' },
              { title: 'Performance', body: 'Placeholder — more is linearly better.' },
              { title: 'Delight', body: 'Placeholder — unexpected exciters.' },
            ],
          },
          { type: 'placeholder', note: 'Kano survey walkthrough drops in here.' },
        ],
      },
    ],
    takeaways: [
      'Placeholder — nail basics before delighters.',
      'Placeholder — shape solutions collaboratively.',
    ],
  },

  {
    n: 4,
    slug: 'day-4',
    title: 'Delivery & Execution',
    subtitle: 'Shipping in slices, measuring as you go, and keeping the team unblocked.',
    accent: 'gold-deep',
    meta: [
      { label: 'Theme', value: 'Delivery' },
      { label: 'Duration', value: '~90 min' },
      { label: 'Frameworks', value: 'Agile · Definition of Done' },
    ],
    objectives: [
      'Placeholder — slice work into shippable increments.',
      'Placeholder — write a clear Definition of Done.',
      'Placeholder — run a useful stand-up.',
    ],
    sections: [
      {
        id: 'slicing',
        kicker: 'Practice',
        heading: 'Vertical slicing',
        blocks: [
          { type: 'paragraph', text: LOREM },
          {
            type: 'steps',
            items: [
              { title: 'Thin slice', body: 'Placeholder — smallest end-to-end value.' },
              { title: 'Ship', body: 'Placeholder — release behind a flag.' },
              { title: 'Measure', body: 'Placeholder — read the signal, iterate.' },
            ],
          },
          { type: 'placeholder' },
        ],
      },
      {
        id: 'done',
        kicker: 'Standard',
        heading: 'Definition of Done',
        blocks: [
          {
            type: 'callout',
            kind: 'example',
            title: 'A sample DoD',
            body: 'Placeholder — tested, documented, accessible, and observable in production.',
          },
          { type: 'placeholder', note: 'Team’s real Definition of Done drops in here.' },
        ],
      },
    ],
    takeaways: [
      'Placeholder — ship thin, learn fast.',
      'Placeholder — “done” means shippable.',
    ],
  },

  {
    n: 5,
    slug: 'day-5',
    title: 'Growth & Measurement',
    subtitle: 'Knowing whether the product is actually creating compounding value.',
    accent: 'brand-dark',
    meta: [
      { label: 'Theme', value: 'Growth' },
      { label: 'Duration', value: '~90 min' },
      { label: 'Frameworks', value: 'North Star · AARRR' },
    ],
    objectives: [
      'Placeholder — choose a North Star metric.',
      'Placeholder — map inputs to the outcome.',
      'Placeholder — read the AARRR funnel.',
    ],
    sections: [
      {
        id: 'northstar',
        kicker: 'Framework',
        heading: 'The North Star',
        blocks: [
          { type: 'paragraph', text: LOREM },
          {
            type: 'callout',
            kind: 'info',
            title: 'One metric, not ten',
            body: 'Placeholder — the North Star captures the core value a user gets.',
          },
          { type: 'placeholder' },
        ],
      },
      {
        id: 'funnel',
        kicker: 'Framework',
        heading: 'AARRR metrics',
        blocks: [
          {
            type: 'table',
            data: {
              caption: 'The AARRR lifecycle funnel',
              columns: [
                { key: 'stage', label: 'Stage' },
                { key: 'question', label: 'Question' },
              ],
              rows: [
                { stage: 'Acquisition', question: 'How do users find us?' },
                { stage: 'Activation', question: 'Do they reach first value?' },
                { stage: 'Retention', question: 'Do they come back?' },
                { stage: 'Referral', question: 'Do they tell others?' },
                { stage: 'Revenue', question: 'Do they pay?' },
              ],
            },
          },
          { type: 'placeholder', note: 'Real metric tree for the case study drops in here.' },
        ],
      },
    ],
    takeaways: [
      'Placeholder — measure value, not vanity.',
      'Placeholder — one North Star, a few inputs.',
    ],
  },
]

export function getDay(n: number): DayContent | undefined {
  return DAYS.find((d) => d.n === n)
}
