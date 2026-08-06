import { PageHeader, Section, Reveal } from '../components/layout'
import { Card, Callout, Badge } from '../components/ui'
import { DAYS } from '../data/days'
import { FRAMEWORKS } from '../data/frameworks'

export function Landing() {
  return (
    <>
      <PageHeader
        kicker="A companion course reader"
        title="Five Days of Product"
        subtitle="Digital Product Management, one day at a time. The essentials of a five-day DPM course, rewritten so anyone can pick up the fundamentals fast."
      />

      <Section
        id="covers"
        index="01"
        kicker="Overview"
        title="What this course covers"
        intro="Five days, five phases of the product lifecycle — from finding a problem worth solving to knowing whether the thing you shipped actually created value."
      >
        <p className="prose-body">
          Placeholder introduction. Each day pairs a short lecture write-up with the frameworks
          referenced along the way. You can read it end to end, or drop into a single day when you
          need it. Real lecture content is added one page at a time.
        </p>
      </Section>

      <Section
        id="roadmap"
        index="02"
        kicker="The five days"
        title="Your roadmap"
        intro="A consistent shape each day: what you’ll learn, the core ideas, the frameworks, and the key takeaways."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {DAYS.map((day, i) => (
            <Reveal key={day.slug} delay={i * 0.05}>
              <Card
                index={`0${day.n}`}
                title={`Day ${day.n} · ${day.title}`}
                body={day.subtitle}
                to={`/day/${day.n}`}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="navigate"
        index="03"
        kicker="Getting around"
        title="How to navigate this site"
      >
        <p className="prose-body">
          On a wide screen, the sidebar on the left is always there — jump between the overview,
          the frameworks reference, and any of the five days. On a phone, the same navigation lives
          behind the menu button at the top.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge tone="brand">Overview</Badge>
          <Badge tone="neutral">Frameworks</Badge>
          <Badge tone="berry">Day 1 – 5</Badge>
        </div>
        <div className="mt-8">
          <Callout kind="tip" title="Read in any order">
            Placeholder — the days build on each other, but each one stands on its own if you already
            know the basics.
          </Callout>
        </div>
      </Section>

      <Section
        id="frameworks-teaser"
        index="04"
        kicker="Reference"
        title="Frameworks you’ll meet"
        intro="A handful of models recur across the week. The Frameworks page collects them in one place."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FRAMEWORKS.slice(0, 3).map((f, i) => (
            <Reveal key={f.id} delay={i * 0.05}>
              <Card index={f.abbev ?? '—'} title={f.name} body={f.tagline} to="/frameworks" />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
