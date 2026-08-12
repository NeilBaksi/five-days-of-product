import type { PricingModel, SaasPricingModel } from '../types'

export const PRICING_MODELS: PricingModel[] = [
  {
    number: 1,
    title: 'Cost-Plus Pricing',
    tag: 'The Safe Default',
    strategy: 'Take what it costs you to produce something and add a fixed markup on top.',
    formula: { expression: 'Production Cost + Markup % = Price' },
    pros: 'Simple to calculate, predictable, and guarantees a margin on every unit sold.',
    cons: 'Ignores what the customer would actually pay — leaves money on the table when the value delivered is high, and gives no warning at all when it’s low.',
    inPracticeLabel: 'Where it shows up',
    inPractice:
      'Manufacturing, retail, agencies billing cost-plus. Rare in software — the marginal cost of serving one more user is close to zero, so there’s no meaningful "cost" to mark up in the first place.',
    watchOut: 'Treating your own build cost as a fair anchor for what to charge. Customers don’t know or care what something cost you to build.',
  },
  {
    number: 2,
    title: 'Value-Based Pricing',
    tag: 'The Gold Standard',
    strategy: 'Charge based on what the problem is worth to the customer, not what it cost you to solve it.',
    detailLabel: 'How it’s actually done',
    detail:
      'Requires real customer research into willingness-to-pay — a Van Westendorp price sensitivity survey, conjoint analysis, or simply structured interviews asking what a solution would genuinely be worth.',
    pros: 'Captures far more of the value actually created, and aligns price with what customers care about rather than what you spent.',
    cons: 'The hardest model to execute well — it requires real research, not a guess, and gets harder to defend without clear, demonstrable proof of the value delivered.',
    inPracticeLabel: 'Example pattern',
    inPractice: 'Premium hardware and EV makers price on performance, brand, and status — not on component cost plus a fixed margin.',
    watchOut: 'Skipping the research and calling a guess "value-based." Without proof of value delivered, the price is just as arbitrary as cost-plus.',
  },
  {
    number: 3,
    title: 'Penetration Pricing',
    tag: 'Market Share',
    strategy: 'Launch low to grab market share fast, then raise price later once you’re entrenched.',
    detailLabel: 'The deciding factor',
    detail:
      'Whether the product creates real switching costs after adoption — data lock-in, an embedded workflow, a network effect. Where that lock-in exists, an early low price converts into durable share. Where customers can switch costlessly, a low launch price mostly just trains them to expect it, and churn spikes the moment the price rises.',
    pros: 'Fast market-share capture, and where switching costs exist, an early low price converts into durable, defensible share.',
    cons: 'Trains your own customer base to treat the discount as the "real" price, and can trigger a race-to-the-bottom if a competitor matches it without ever needing to raise theirs.',
    watchOut: 'Assuming the low price alone builds loyalty. Without real lock-in, it just sets the customer’s expectation for what "normal" costs.',
  },
  {
    number: 4,
    title: 'Skimming Pricing',
    tag: 'Early Adopters',
    strategy: 'Launch high to capture the customers least sensitive to price first, then lower the price in steps to reach progressively larger, more price-sensitive segments.',
    detailLabel: 'Classic pattern',
    detail:
      'Innovators pay the highest price point, early adopters follow at a somewhat lower one, and the mass market arrives once the price has stepped down to something broadly affordable. Consumer electronics are the textbook category — a flagship device launches at a premium, and the price steps down release over release.',
    pros: 'Extracts the most revenue from the least price-sensitive segment first, which helps fund the next generation of R&D.',
    cons: 'Leaves a window open for a lower-priced competitor to undercut you while you’re still skimming — and it only works at all if genuinely price-insensitive early adopters exist for your category.',
    watchOut: 'Skimming too long. The wider the gap between your price and the market’s, the more room you leave a challenger to walk in underneath you.',
  },
  {
    number: 5,
    title: 'Freemium',
    tag: 'The Funnel',
    strategy: 'A genuinely free base tier, with paid upgrades for more capability, capacity, or removed limits.',
    detailLabel: 'The real mechanic',
    detail:
      'The free tier isn’t charity — it’s a marketing funnel. It removes the single biggest barrier to trying a product (price) and lets the product sell itself before you ever ask for a credit card.',
    pros: 'Removes price as the barrier to trying the product, and lets it sell itself before you ever ask for payment.',
    cons: 'A free tier so generous that almost nobody ever needs to upgrade quietly turns a funnel into a pure cost center.',
    inPracticeLabel: 'Example pattern',
    inPractice: 'An ad-supported free tier that converts a meaningful slice of engaged users to an ad-free paid subscription over time — the standard model in consumer music and video streaming.',
    watchOut: 'Watching the size of the free tier instead of the free-to-paid conversion rate. A huge free user base with a near-zero conversion rate isn’t a funnel — it’s just a cost center.',
  },
  {
    number: 6,
    title: 'Dynamic Pricing',
    tag: 'Real-Time',
    strategy: 'Adjust price continuously based on real-time supply and demand, instead of holding one fixed price.',
    detailLabel: 'Mechanism',
    detail:
      'Rideshare surge pricing is the standard teaching example — demand spikes sharply the moment a concert or game lets out, and a real-time price increase pulls more drivers onto the road to meet it. The industry argument (a genuinely contested one) is that without the price signal, there would be no cars available at any price, rather than a smaller number available at a higher one.',
    pros: 'Matches supply to demand in real time, and can meaningfully increase revenue during predictable peak periods without creating a total stockout.',
    cons: 'Deeply unpopular with customers when it isn’t well explained. A price that jumps unpredictably feels less like market efficiency and more like being taken advantage of at the exact moment you need something most.',
    watchOut: 'Letting the price move without explaining why. Communicating why the price moved matters as much as the pricing mechanism itself.',
  },
  {
    number: 7,
    title: 'Geographic Pricing',
    tag: 'Location',
    strategy: 'Adjust price by region to reflect local costs and local purchasing power, rather than charging one global price everywhere.',
    detailLabel: 'Mechanism',
    detail:
      'A single global price is effectively unaffordable in some markets and meaningfully underpriced in others. Regional or purchasing-power-adjusted pricing tries to capture appropriate value in each market instead of picking one number that’s wrong almost everywhere.',
    pros: 'Captures appropriate value in each market instead of one price point that’s wrong almost everywhere.',
    cons: 'Vulnerable to cross-border arbitrage — if the gap between two regions is large and the product is easy to access from anywhere, customers will find a way around it.',
    inPracticeLabel: 'Common in',
    inPractice: 'Software subscriptions with region-specific pricing tiers, and physical retail or restaurant pricing that reflects local rent and labour costs.',
    watchOut: 'A price gap wide enough, and a product easy enough to access from anywhere, that customers simply buy at the cheaper region’s price unless there’s a real barrier stopping them.',
  },
]

export const SAAS_PRICING_MODELS: SaasPricingModel[] = [
  {
    title: 'Tiered (Good-Better-Best) Pricing',
    body: 'Three or four fixed packages (say, Basic / Pro / Enterprise) at increasing price points, each unlocking more features or capacity. The most common structure in B2B SaaS, in part because a middle "Pro" tier priced deliberately close to "Best" tends to anchor most customers toward the higher of the two.',
  },
  {
    title: 'Per-Seat Pricing',
    body: 'Price scales directly with the number of users or accounts within a customer’s organisation. Simple to understand and to sell, but it can quietly discourage a customer from rolling a product out to their whole team, since every new seat is a new cost.',
  },
  {
    title: 'Usage-Based Pricing',
    body: 'Price scales with actual consumption (API calls, storage, compute, messages sent) rather than seat count. Increasingly common in infrastructure and AI products, since it aligns price directly with the value or cost actually incurred — but it also makes revenue much harder to forecast than a flat subscription.',
  },
]
