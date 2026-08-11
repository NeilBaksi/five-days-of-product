import type { SenseExercise } from '../types'

/** Product Strategy Template fields — shape matches StepList's `items` prop. */
export const STRATEGY_TEMPLATE_FIELDS: { title: string; body: string }[] = [
  {
    title: 'Goal',
    body: 'What do you want to see change in the world? Define the team’s purpose and its north-star metric in one or two sentences.',
  },
  {
    title: 'Hypothesis',
    body: 'Why do you believe this particular approach will get you there? This is the actual strategy — your best-reasoned bet, not a list of features.',
  },
  {
    title: 'Right to Win',
    body: 'Why is this team specifically positioned to pull this off, versus anyone else who could attempt it?',
  },
  {
    title: 'Metrics',
    body: 'How will you know it’s actually working? Link to real dashboards, cap it at two or three metrics maximum, and track each one’s current value alongside a simple status (red/yellow/green).',
  },
  {
    title: 'Initiatives',
    body: 'What has to happen to reach the goal? A short, prioritised list — three to four initiatives per goal, no more.',
  },
  {
    title: 'Risks',
    body: 'Why might this fail, and what’s the specific mitigation for each risk?',
  },
  {
    title: 'Long-Term Outcomes',
    body: 'How does this work compound beyond the immediate goal, into a durable advantage that’s still paying off a year or two from now?',
  },
]

export const PRODUCT_SENSE_EXERCISES: SenseExercise[] = [
  {
    title: 'Use dozens of products, deliberately',
    instruction:
      'Nothing trains product sense faster than actually using a wide range of products with intention. Every time you open something new, ask:',
    questions: [
      'What problem does this tackle?',
      'Who actually faces this problem?',
      'Who else is already trying to solve it?',
      'What’s distinctive about this particular approach?',
      'How does it make money?',
      'And, honestly — what was my own experience like using it?',
    ],
  },
  {
    title: 'Compare products head-to-head within a category',
    instruction:
      'Pick a category — food delivery, note-taking, whatever you actually use — and try three to five real competitors in it. Then ask:',
    questions: [
      'What do they all share?',
      'Where does each one clearly win or lose?',
      'Which would you personally choose, and why?',
      'If someone else picked differently, what would explain that?',
    ],
  },
  {
    title: 'Read real user feedback closely',
    instruction:
      'Pick a product you already know well and dig into its actual feedback — reviews, feature requests, complaints.',
    questions: [
      'What comes up most often?',
      'What are people actually trying to accomplish underneath the literal request?',
      'Is there a smarter way to get them there than what they asked for?',
    ],
  },
  {
    title: 'Redesign something that frustrated you',
    instruction: 'Think of a specific experience that genuinely annoyed you recently.',
    questions: [
      'Why was it subpar?',
      'How would you fix it?',
      'Why is your version actually better, not just different?',
      'Could your fix create a new problem for some other group of users, even a small one?',
      'What would a sharp critic say about your redesign?',
    ],
  },
  {
    title: 'Design something from scratch',
    instruction: 'Imagine a product or feature you wish existed, then define it precisely.',
    questions: [
      'What’s the use case — does it solve a specific, real problem, or open up something genuinely new?',
      'Who’s the target audience? Be specific — “everyone” isn’t an audience.',
      'What’s the competition? Remember the real competitor is very often not a rival product, but the status quo: whatever people do today instead.',
    ],
  },
  {
    title: 'A few standing habits',
    instruction: 'The reps that compound quietly in the background.',
    questions: [
      'Study user psychology, design fundamentals, and basic business concepts deliberately, not just incidentally on the job.',
      'Read “how did they actually do that” case studies.',
      'Track industry trends.',
      'Find people ahead of you who are willing to practice alongside you.',
      'Don’t limit the habit to digital products — plenty of product sense lives in well-designed physical products and services too.',
    ],
  },
]
