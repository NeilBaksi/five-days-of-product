import { useParams, Navigate } from 'react-router-dom'
import { PageHeader, Section, Reveal, PrevNextPager } from '../components/layout'
import { LearningObjectives, KeyTakeaways, AttributionFooter } from '../components/ui'
import { getDay } from '../data/days'
import { NAV, DAY_COUNT } from '../data/nav'
import { renderBlock } from './blocks'

/** One data-driven template renders all five day pages. */
export function Day() {
  const { n } = useParams<{ n: string }>()
  const num = Number(n)
  const day = Number.isInteger(num) ? getDay(num) : undefined

  if (!day) return <Navigate to="/" replace />

  const prev =
    day.n === 1
      ? { to: '/frameworks', label: 'Frameworks' }
      : { to: `/day/${day.n - 1}`, label: dayLabel(day.n - 1) }
  const next =
    day.n === DAY_COUNT
      ? { to: '/', label: 'Back to overview' }
      : { to: `/day/${day.n + 1}`, label: dayLabel(day.n + 1) }

  return (
    <>
      <PageHeader
        kicker={`Day ${day.n} of ${DAY_COUNT}`}
        title={day.title}
        subtitle={day.subtitle}
        meta={day.meta}
      />

      <div className="mb-16">
        <LearningObjectives items={day.objectives} />
      </div>

      {day.sections.map((section, si) => (
        <Section
          key={section.id}
          id={section.id}
          index={String(si + 1).padStart(2, '0')}
          kicker={section.kicker}
          title={section.heading}
          intro={section.intro}
        >
          <div className="flex flex-col gap-8">
            {section.blocks.map((block, bi) => (
              <Reveal key={bi} delay={bi * 0.04}>
                {renderBlock(block, bi)}
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      <div className="my-16">
        <KeyTakeaways items={day.takeaways} />
      </div>

      {day.sources && day.sources.length > 0 && <AttributionFooter sources={day.sources} />}

      <PrevNextPager prev={prev} next={next} />
    </>
  )
}

function dayLabel(n: number): string {
  const item = NAV.find((i) => i.to === `/day/${n}`)
  return item?.label ?? `Day ${n}`
}
