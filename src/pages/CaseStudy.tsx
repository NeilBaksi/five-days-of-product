import { Link, useParams, Navigate } from 'react-router-dom'
import { PageHeader, Section, Reveal, PrevNextPager } from '../components/layout'
import { Callout, KeyTakeaways, AttributionFooter } from '../components/ui'
import { CASE_STUDIES, getCaseStudy } from '../data/caseStudies'
import { FRAMEWORKS } from '../data/frameworks'
import type { FrameworkRef } from '../types'
import { renderBlock } from './blocks'

/** Resolve a FrameworkRef to chip text and link target. Unknown ids throw in dev. */
function resolveFramework(ref: FrameworkRef) {
  const fw = FRAMEWORKS.find((f) => f.id === ref.id)
  if (!fw) {
    if (import.meta.env.DEV) throw new Error(`Unknown framework id in case study: "${ref.id}"`)
    return null
  }
  return { label: ref.label ?? fw.name, to: ref.to ?? fw.usedOn?.[0] ?? '/frameworks' }
}

/** One data-driven template renders every case-study page. */
export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const study = slug ? getCaseStudy(slug) : undefined

  if (!study) return <Navigate to="/" replace />

  const i = CASE_STUDIES.findIndex((c) => c.slug === study.slug)
  const prevStudy = CASE_STUDIES[i - 1]
  const nextStudy = CASE_STUDIES[i + 1]
  const link = (c: (typeof CASE_STUDIES)[number]) => ({ to: `/case-studies/${c.slug}`, label: c.title })
  const prev = prevStudy ? link(prevStudy) : { to: '/', label: 'Overview' }
  const next = nextStudy ? link(nextStudy) : { to: '/', label: 'Back to overview' }

  return (
    <>
      <PageHeader
        kicker={study.kicker}
        title={study.title}
        subtitle={study.subtitle}
        meta={study.meta}
        prev={prev}
        next={next}
      />

      <div className="mb-16">
        <Callout kind="info" title={study.disclosure.title}>
          {study.disclosure.body}
        </Callout>
      </div>

      {study.sections.map((section, si) => {
        const chips = (section.frameworks ?? [])
          .map((ref) => ({ ref, resolved: resolveFramework(ref) }))
          .filter((c) => c.resolved)
        return (
          <Section
            key={section.id}
            id={section.id}
            index={String(si + 1).padStart(2, '0')}
            kicker={section.kicker}
            title={section.heading}
            intro={section.intro}
          >
            <div className="flex flex-col gap-8">
              {chips.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="kicker mr-1">Frameworks used</span>
                  {chips.map(({ ref, resolved }) => (
                    <Link
                      key={ref.id}
                      to={resolved!.to}
                      className="inline-flex min-h-[44px] items-center rounded-full border border-rule bg-surface px-4 font-mono text-[0.68rem] tracking-wide text-brand transition-colors hover:bg-blue-wash"
                    >
                      {resolved!.label}
                    </Link>
                  ))}
                </div>
              )}
              {section.blocks.map((block, bi) => (
                <Reveal key={bi} delay={bi * 0.04}>
                  {renderBlock(block, bi)}
                </Reveal>
              ))}
            </div>
          </Section>
        )
      })}

      <div className="my-16">
        <KeyTakeaways items={study.takeaways} />
      </div>

      {study.sources && study.sources.length > 0 && <AttributionFooter sources={study.sources} />}

      <PrevNextPager prev={prev} next={next} />
    </>
  )
}
