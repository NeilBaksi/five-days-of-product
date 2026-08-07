import { ArrowRight, CheckCircle2, Cpu, Scale, Sparkles } from 'lucide-react'
import { PageHeader, Section, Reveal } from '../components/layout'
import {
  Button,
  ValueQuadrant,
  DebateCallout,
  Accordion,
  CompetencyColumns,
  RoadmapStepper,
  AttributionFooter,
  PullQuote,
} from '../components/ui'
import { DAYS } from '../data/days'
import {
  HERO,
  VALUE_QUADRANT,
  DEBATE,
  PM_PHILOSOPHIES,
  COMPETENCIES,
  EQ_TRAITS,
  COMPANY_FIT,
  PULL_QUOTES,
  ATTRIBUTION_SOURCES,
} from '../data/landing'

// Icons are attached here at composition time — the data files stay plain data.
const QUADRANT_ICONS = [Sparkles, CheckCircle2, Cpu, Scale]
const EQ_ICONS = [CheckCircle2, Sparkles, Scale, Cpu]

export function Landing() {
  return (
    <>
      <PageHeader kicker="A field guide, not a textbook" title={HERO.title} subtitle={HERO.subtitle} />

      <div className="-mt-6 mb-4 flex flex-col gap-6 sm:mb-6">
        <p className="max-w-prose text-base text-ink-soft sm:text-lg">{HERO.supporting}</p>
        <div className="flex flex-wrap gap-3">
          <Button to="/day/1" icon={<ArrowRight size={16} aria-hidden />}>
            Start Day 1
          </Button>
          <Button to="/frameworks" variant="secondary">
            Explore the frameworks
          </Button>
        </div>
      </div>

      <Section
        id="what-is-dpm"
        index="01"
        kicker="Definitions"
        title="What is digital product management?"
        intro="The discipline of deciding what gets built, why it gets built, and whether it worked — for digital products, in a way that serves the customer and the business at once."
      >
        <div className="flex flex-col gap-8">
          <p className="prose-body">
            It sits at the intersection of technology, business, and user experience, but it isn’t
            simply “a bit of all three.” It’s its own discipline with its own competencies. A useful
            way to frame it: the product manager’s job is to find a product that is valuable,
            usable, feasible, and viable — all four at once, not just one or two.
          </p>
          <ValueQuadrant
            items={VALUE_QUADRANT.map((item, i) => {
              const Icon = QUADRANT_ICONS[i % QUADRANT_ICONS.length]
              return { ...item, icon: <Icon size={20} aria-hidden /> }
            })}
          />
          <p className="prose-body">
            It’s also worth being precise about what it isn’t. Product managers don’t have direct
            authority over most of what makes their products succeed — that tension between full
            accountability for the outcome and no authority over the people who build it is close
            to the heart of what makes the role hard, and interesting.
          </p>
        </div>
      </Section>

      <Section
        id="why-it-matters"
        index="02"
        kicker="Stakes"
        title="Why it matters"
        intro="Behind almost every product you use daily, someone — usually invisible, rarely a household name — decided what to build, said no to good ideas in favor of the right ones, and dragged a good idea through a company that had every reason to resist it."
      >
        <div className="flex flex-col gap-10">
          <PullQuote
            quote="Behind every great product, there is someone, usually someone behind the scenes, working tirelessly, that is playing this critical role. They usually have the title “product manager” … The title is not important; the work they do is."
            attribution="Marty Cagan, Behind Every Great Product (SVPG, 2016)"
          />
          <DebateCallout left={DEBATE.left} right={DEBATE.right} resolution={DEBATE.resolution} />
        </div>
      </Section>

      <Section
        id="how-its-evolving"
        index="03"
        kicker="Direction of travel"
        title="How digital product management is evolving"
        intro="Product management is a young discipline, and it’s still being defined in public. One of the clearest shifts: how PM and engineering divide the work."
      >
        <div className="flex flex-col gap-8">
          <Accordion items={PM_PHILOSOPHIES} />
          <p className="prose-body">
            The center of gravity in the industry has moved firmly toward the PM–engineering
            partnership over the last decade — product, design, and engineering as equal partners
            rather than a request-and-delivery chain. Alongside that: a shift from shipping features
            to owning outcomes, and from tribal-knowledge gut-feel to a real, teachable competency
            set.
          </p>
        </div>
      </Section>

      <Section
        id="what-it-takes"
        index="04"
        kicker="The job, up close"
        title="What it actually takes"
        intro="Great PMs need three things at once: core competencies, emotional intelligence, and company fit. Missing any one of the three usually shows up as a specific, recognizable failure pattern."
      >
        <CompetencyColumns
          competencies={COMPETENCIES}
          eq={EQ_TRAITS.map((trait, i) => {
            const Icon = EQ_ICONS[i % EQ_ICONS.length]
            return { ...trait, icon: <Icon size={18} aria-hidden /> }
          })}
          fit={COMPANY_FIT}
        />
      </Section>

      <Reveal as="div" className="my-4">
        <PullQuote quote={PULL_QUOTES[0].quote} attribution={PULL_QUOTES[0].attribution} />
      </Reveal>

      <Section
        id="roadmap"
        index="05"
        kicker="The five days"
        title="Your roadmap"
        intro="Five days, five themes. Here’s exactly what the course covers, day by day."
      >
        <RoadmapStepper days={DAYS} />
      </Section>

      <Reveal as="div" className="my-4">
        <PullQuote quote={PULL_QUOTES[2].quote} attribution={PULL_QUOTES[2].attribution} />
      </Reveal>

      <Section id="how-to-use" index="06" kicker="Getting around" title="How to use this site">
        <div className="flex flex-col gap-8">
          <p className="prose-body">
            Start with the Frameworks page for the core mental models referenced throughout the
            course, then work through Day 1 to Day 5 in order — each day builds on the one before
            it. Content is drawn directly from lecture material, written up so it’s useful to
            anyone, not just people sitting in the classroom.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="/frameworks" variant="secondary">
              View the frameworks
            </Button>
            <Button to="/day/1" icon={<ArrowRight size={16} aria-hidden />}>
              Start with Day 1
            </Button>
          </div>
        </div>
      </Section>

      <AttributionFooter sources={ATTRIBUTION_SOURCES} />
    </>
  )
}
