import type { Framework, FrameworkTableData } from '../types'

// PLACEHOLDER content — realistic DPM frameworks so the visual system can be
// reviewed. Real definitions replace these in a later prompt.

export const FRAMEWORKS: Framework[] = [
  {
    id: 'jtbd',
    name: 'Jobs to be Done',
    abbev: 'JTBD',
    tagline: 'People hire products to make progress.',
    summary:
      'Placeholder summary. Frame demand around the progress a user is trying to make in a given circumstance, rather than around demographics or features.',
    points: [
      'Situation — the context that triggers the job',
      'Motivation — the progress the user seeks',
      'Outcome — how they measure success',
    ],
    usedOn: ['/day/1', '/day/2'],
  },
  {
    id: 'rice',
    name: 'RICE Prioritisation',
    abbev: 'RICE',
    tagline: 'Score initiatives by expected value per effort.',
    summary:
      'Placeholder summary. Rank a backlog by Reach × Impact × Confidence ÷ Effort to make trade-offs explicit and defensible.',
    points: ['Reach', 'Impact', 'Confidence', 'Effort'],
    usedOn: ['/day/2', '/day/4'],
  },
  {
    id: 'north-star',
    name: 'North Star Framework',
    abbev: 'NSM',
    tagline: 'One metric that captures core value delivered.',
    summary:
      'Placeholder summary. Align the team behind a single leading metric and the input levers that move it.',
    points: ['North Star metric', 'Input metrics', 'Work → inputs → outcome'],
    usedOn: ['/day/5'],
  },
  {
    id: 'kano',
    name: 'Kano Model',
    abbev: 'Kano',
    tagline: 'Not all features satisfy equally.',
    summary:
      'Placeholder summary. Classify features as basic, performance, or delight to shape a balanced roadmap.',
    points: ['Basic (expected)', 'Performance (linear)', 'Delight (exciters)'],
    usedOn: ['/day/3'],
  },
  {
    id: 'double-diamond',
    name: 'Double Diamond',
    abbev: null as unknown as string,
    tagline: 'Diverge then converge, twice.',
    summary:
      'Placeholder summary. A discovery-and-delivery model: Discover → Define → Develop → Deliver.',
    points: ['Discover', 'Define', 'Develop', 'Deliver'],
    usedOn: ['/day/1', '/day/3'],
  },
  {
    id: 'aarrr',
    name: 'AARRR Metrics',
    abbev: 'AARRR',
    tagline: 'The pirate metrics funnel.',
    summary:
      'Placeholder summary. Track the lifecycle: Acquisition, Activation, Retention, Referral, Revenue.',
    points: ['Acquisition', 'Activation', 'Retention', 'Referral', 'Revenue'],
    usedOn: ['/day/5'],
  },
]

export const FRAMEWORK_COMPARISON: FrameworkTableData = {
  caption: 'When to reach for each framework across the product lifecycle',
  emphasisKey: 'stage',
  columns: [
    { key: 'framework', label: 'Framework' },
    { key: 'stage', label: 'Best stage' },
    { key: 'question', label: 'Question it answers' },
    { key: 'output', label: 'Typical output' },
  ],
  rows: [
    {
      framework: 'Jobs to be Done',
      stage: 'Discovery',
      question: 'Why would anyone use this?',
      output: 'Job statements',
    },
    {
      framework: 'RICE',
      stage: 'Definition',
      question: 'What do we build first?',
      output: 'Ranked backlog',
    },
    {
      framework: 'Kano',
      stage: 'Design',
      question: 'Which features matter most?',
      output: 'Feature tiers',
    },
    {
      framework: 'Double Diamond',
      stage: 'End-to-end',
      question: 'How do we move from problem to ship?',
      output: 'Process map',
    },
    {
      framework: 'North Star + AARRR',
      stage: 'Growth',
      question: 'Is value compounding?',
      output: 'Metric tree',
    },
  ],
}
