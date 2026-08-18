import type { Framework, FrameworkTableData } from '../types'

// Framework reference cards for the /frameworks page: one entry per framework
// taught (or referenced) across the course, each with a short summary, key
// points, and — where a day page still covers it — a usedOn link back.

export const FRAMEWORKS: Framework[] = [
  {
    id: 'jtbd',
    name: 'Jobs to be Done',
    abbev: 'JTBD',
    tagline: 'People hire products to make progress.',
    summary:
      'JTBD treats a purchase as an act of hiring: something in the buyer’s situation changed, and this product was pulled in to resolve it. It protects against designing for a persona instead of a problem, and against mistaking a stated preference for the job actually being hired to do.',
    points: [
      'Situation — the context that triggers the job',
      'Motivation — the progress the user seeks',
      'Outcome — how they measure success',
    ],
    usedOn: ['/day/1', '/day/2'],
  },
  {
    id: 'working-backwards',
    name: 'Working Backwards',
    abbev: null as unknown as string,
    tagline: 'Start from the customer, not the roadmap.',
    summary:
      'Popularised by Amazon: before writing a line of code, write the future press release and FAQ as if the product had already shipped. Forces the team to argue about customer value and the hard trade-offs on paper — while changing a sentence is still free.',
    points: [
      'Press release — the customer-facing pitch, written first',
      'FAQ — the hard internal and external questions, answered up front',
      'Roadmap and backlog follow from the narrative, not the other way round',
    ],
  },
  {
    id: 'opportunity-solution-tree',
    name: 'Opportunity Solution Tree',
    abbev: 'OST',
    tagline: 'Map outcome to opportunities to solutions, visibly.',
    summary:
      'A tree that connects one desired outcome to the customer opportunities that could drive it, and the range of solutions worth testing for each. Keeps every option visible side by side so a team never locks onto a single solution before the opportunity space has actually been explored.',
    points: [
      'Outcome — the single result the team is steering toward',
      'Opportunities — the needs, pains, and desires that could move it',
      'Solutions — several candidate bets tested per opportunity, not one',
    ],
  },
  {
    id: 'rice',
    name: 'RICE Prioritisation',
    abbev: 'RICE',
    tagline: 'Score initiatives by expected value per effort.',
    summary:
      'Score competing initiatives by Reach × Impact × Confidence ÷ Effort, then rank the backlog by the result. The inputs are still estimates, not facts, but forcing every argument for an idea onto the same four axes stops prioritisation being won by whoever pitches loudest or shouts last.',
    points: [
      'Reach — how many people or events it touches in a given period',
      'Impact — how much it moves the needle for each one it reaches',
      'Confidence — how sure the estimate is, expressed as a percentage',
      'Effort — how many person-months it costs to ship',
    ],
  },
  {
    id: 'mvp',
    name: 'Minimum Viable Product',
    abbev: 'MVP',
    tagline: 'Ship the smallest thing that teaches you something.',
    summary:
      'Build the smallest version of a product that still delivers real value, so assumptions get tested against actual behaviour instead of debated in a room. Runs on the Build–Measure–Learn loop: ship a small bet, observe what real usage says, and let that evidence — not opinion — decide what happens next.',
    points: [
      'Build — the smallest version that can actually be tested',
      'Measure — real usage, not stated preference',
      'Learn — an assumption validated or killed, cheaply',
    ],
    usedOn: ['/day/4'],
  },
  {
    id: 'kano',
    name: 'Kano Model',
    abbev: 'Kano',
    tagline: 'Not all features satisfy equally.',
    summary:
      "Classifies features by the kind of satisfaction they produce — must-be, performance, or delighter — not simply whether they're wanted. The category most roadmaps mishandle is the delighter: what wows users today quietly decays into a must-be over time, so yesterday's differentiator becomes today's bare minimum.",
    points: [
      'Basic — expected by default; skip it and users notice immediately',
      "Performance — satisfaction rises in a straight line with how well it's done",
      'Delighter — a surprise today, a must-be tomorrow if it lands',
    ],
    usedOn: ['/day/2'],
  },
  {
    id: 'double-diamond',
    name: 'Double Diamond',
    abbev: null as unknown as string,
    tagline: 'Diverge then converge, twice.',
    summary:
      "Two diamonds, each a diverge-then-converge cycle: Discover and Define explore then narrow the right problem, Develop and Deliver explore then narrow the right solution. The shape is the point — a visible reminder that both problem and solution deserve to be opened up wide before either gets locked down.",
    points: [
      'Discover — diverge to explore the problem space widely',
      'Define — converge on the specific problem worth solving',
      'Develop — diverge to explore a range of solutions',
      'Deliver — converge on the one solution that ships',
    ],
  },
  {
    id: 'north-star',
    name: 'North Star Framework',
    abbev: 'NSM',
    tagline: 'One metric that captures core value delivered.',
    summary:
      "One number sits at the top, chosen because it best represents the value a product actually creates for the people using it, fed by a small set of input metrics a team can move day to day. The real job isn't the metric itself — it's getting every function pointed at the same definition of progress, instead of each optimising its own.",
    points: [
      'North Star metric — the single number that best represents value delivered',
      'Input metrics — the smaller, directly-actionable levers that move it',
      "Work → inputs → outcome — every team's effort traces a line to the top metric",
    ],
  },
  {
    id: 'aarrr',
    name: 'AARRR Metrics',
    abbev: 'AARRR',
    tagline: 'The pirate metrics funnel.',
    summary:
      'Five funnel stages tracked as one cadence: Acquisition brings someone in, Activation gets them to real value fast, Retention keeps them returning, Referral turns them into a channel, Revenue is where it pays for itself. Its real use is diagnostic — fixating on acquisition while retention quietly leaks is how a product stays busy without ever actually growing.',
    points: [
      'Acquisition — how someone first finds the product',
      'Activation — the first moment they experience real value',
      'Retention — whether they come back without being chased',
      'Referral — whether they bring others along with them',
      'Revenue — where the funnel starts paying for itself',
    ],
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
      framework: 'Working Backwards',
      stage: 'Discovery',
      question: 'What should we build, from the customer in?',
      output: 'Press release + FAQ',
    },
    {
      framework: 'Opportunity Solution Tree',
      stage: 'Definition',
      question: 'Which opportunities are actually worth solving?',
      output: 'Opportunity map',
    },
    {
      framework: 'RICE',
      stage: 'Definition',
      question: 'What do we build first?',
      output: 'Ranked backlog',
    },
    {
      framework: 'MVP',
      stage: 'Delivery',
      question: 'Is this worth building further?',
      output: 'Validated (or killed) assumption',
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
