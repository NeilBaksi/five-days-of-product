import { PageHeader, Section, Reveal, PrevNextPager } from '../components/layout'
import { PricingModelCard, PriceCurveChart, Triad, Callout, AttributionFooter } from '../components/ui'
import { PRICING_MODELS, SAAS_PRICING_MODELS, CONVERSION_DRIVERS, PRICING_SOURCES } from '../data/pricing'
import { pager } from '../lib/pager'

export function PricingModels() {
  const { prev, next } = pager('/toolkit/pricing')
  const skimming = PRICING_MODELS.find((m) => m.title === 'Skimming Pricing')!
  const penetration = PRICING_MODELS.find((m) => m.title === 'Penetration Pricing')!

  return (
    <>
      <PageHeader
        kicker="Toolkit · Pricing"
        title="Pricing Models"
        subtitle="Pricing is a product decision, not just a finance one — the model you choose shapes who buys, when they buy, and what they expect from you afterward. Seven core strategies, and a few more you’ll run into specifically in SaaS."
        prev={prev}
        next={next}
      />

      <Section
        id="core-models"
        index="01"
        kicker="The playbook"
        title="Seven pricing models"
        intro="Pricing rarely gets the same rigour as feature prioritisation, even though a pricing change often moves revenue faster than any single feature ever will. Every model below trades off the same three things differently: how simple it is to run, how much value it actually captures, and how it shapes customer behaviour over time. Most real-world pricing isn’t purely one of these — it’s a blend, with one model as the anchor philosophy and one or two others layered on top."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {PRICING_MODELS.map((model, i) => (
            <PricingModelCard key={model.number} model={model} delay={i * 0.04} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-rule/60 bg-surface p-6">
          <p className="kicker">Skimming vs. penetration</p>
          <p className="mt-2 text-sm text-ink-soft">
            Models {penetration.number} and {skimming.number} are mirror strategies — one starts low and steps up,
            the other starts high and steps down.
          </p>
          <div className="mt-5">
            <PriceCurveChart />
          </div>
        </div>
      </Section>

      <Section
        id="saas-models"
        index="02"
        kicker="SaaS specifics"
        title="A few more you’ll run into specifically in SaaS"
        intro="The seven models above are the classic general-business pricing playbook, but three more come up constantly in digital products specifically and are worth knowing by name."
      >
        <ul className="flex flex-col gap-4">
          {SAAS_PRICING_MODELS.map((m, i) => (
            <Reveal key={m.title} as="li" delay={i * 0.05}>
              <div className="rounded-2xl border border-rule bg-surface p-5">
                <h3 className="font-display text-lg font-bold text-ink">{m.title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        id="free-to-paid"
        index="03"
        kicker="The upgrade moment"
        title="Free-tier to paid: what actually converts"
        intro="A freemium funnel only works if the free tier eventually produces a paying customer. What actually drives that upgrade decision comes down to one of three mechanics."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {CONVERSION_DRIVERS.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-rule bg-surface p-5">
                <h3 className="font-display text-base font-bold text-ink">{d.title}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-soft">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="prose-body mt-8">
          Where the upgrade prompt actually sits matters as much as which mechanic triggers it. Parked on a
          standalone pricing page, it competes with everything else a user could be doing that day; surfaced at
          the exact moment a limit bites — mid-workflow, with the thing they were already trying to do now
          stalled in front of them — it competes with nothing. The strongest freemium products don’t sell the
          upgrade so much as let the limit interrupt at the point of need and then get out of the way.
        </p>

        <div className="mt-6">
          <Callout kind="warning" title="Tightening a limit after the fact">
            Lowering an existing limit purely to force more conversions reads as a bait-and-switch to anyone who
            signed up under the old one, and the backlash usually costs more goodwill than the extra conversions
            are worth. The safer move is to grandfather everyone already on the free tier at their original
            limit and apply the tighter ceiling only to new signups going forward — the metric still moves, but
            nobody who trusted the original deal has it pulled out from under them.
          </Callout>
        </div>
      </Section>

      <Section id="how-to-choose" index="04" kicker="Synthesis" title="How to choose">
        <p className="prose-body">
          Most durable pricing strategies aren’t one pure model — they’re a blend. A common, effective combination:
          value-based pricing as the underlying philosophy (charge based on what it’s worth), a freemium or trial
          funnel to get the price objection out of the way at signup, tiered packaging to let different customer
          segments self-select into the right price point, and geographic adjustment once the product goes global.
          The model isn’t really the decision — the decision is which combination of these actually matches how your
          specific customers evaluate and buy.
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <Triad
            center="Value-Based Pricing"
            variant="balance"
            nodes={[
              { label: 'Freemium Funnel', desc: 'Removes the price objection at signup.' },
              { label: 'Tiered Packaging', desc: 'Lets segments self-select into the right price.' },
              { label: 'Geographic Adjustment', desc: 'Captures appropriate value once you go global.' },
            ]}
            caption="Supporting layers around one core philosophy, not four competing choices."
          />
        </div>
      </Section>

      <AttributionFooter sources={PRICING_SOURCES} />

      <PrevNextPager prev={prev} next={next} />
    </>
  )
}
