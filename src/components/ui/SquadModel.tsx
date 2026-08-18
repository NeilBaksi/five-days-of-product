interface SquadModelProps {
  tribe: { name: string; squads: { name: string; mission: string }[] }
  chapter: { name: string; desc: string }
  guild: { name: string; desc: string }
  caption?: string
}

const VB_W = 760
const VB_H = 400

// Guild = loosest boundary (outermost, dashed). Tribe = formal org boundary, inset from it.
const GUILD_X = 10
const GUILD_Y = 10
const GUILD_W = 740
const GUILD_H = 366

const TRIBE_X = 26
const TRIBE_Y = 26
const TRIBE_W = 708
const TRIBE_H = 330

// Squad row sits inside the tribe, below its label.
const SQUAD_AREA_X = 46
const SQUAD_AREA_W = 668
const SQUAD_TOP = 78
const SQUAD_H = 258
const SQUAD_GAP = 16

// Each squad is one whole box; the chapter is a translucent band laid OVER the row, so it
// visibly crosses every squad and the gaps between them. Drawing it over (rather than
// slicing each squad in two) keeps a squad's name and mission together in one box.
const BAND_Y = 256
const BAND_H = 46

// Squad name + mission share one label block, sitting entirely above the band.
const LABEL_Y = SQUAD_TOP + 12
const LABEL_H = BAND_Y - LABEL_Y - 10

/** Spotify's org model: squads inside a tribe, a chapter cutting across all of them, a guild looser and voluntary. */
export function SquadModel({ tribe, chapter, guild, caption }: SquadModelProps) {
  const n = tribe.squads.length
  const squadW = (SQUAD_AREA_W - SQUAD_GAP * (n - 1)) / n

  return (
    <div>
      {/* Desktop: nested containment geometry */}
      <div className="relative mx-auto hidden w-full max-w-2xl md:block">
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="mx-auto w-full" aria-hidden>
          {/* 1. Containers: guild (loosest, dashed) behind the tribe boundary */}
          <rect
            x={GUILD_X}
            y={GUILD_Y}
            width={GUILD_W}
            height={GUILD_H}
            rx={28}
            strokeDasharray="4 4"
            className="fill-none stroke-rule"
          />
          <rect x={TRIBE_X} y={TRIBE_Y} width={TRIBE_W} height={TRIBE_H} rx={20} className="fill-blue-wash stroke-rule" />

          {/* 2. Squad boxes: one whole box each */}
          {tribe.squads.map((_, i) => {
            const x = SQUAD_AREA_X + i * (squadW + SQUAD_GAP)
            return (
              <rect
                key={i}
                x={x}
                y={SQUAD_TOP}
                width={squadW}
                height={SQUAD_H}
                rx={16}
                className="fill-surface stroke-rule"
              />
            )
          })}

          {/* 3. Chapter band, laid over the whole row so it crosses every squad and the gaps
              between them. Translucent, so the squad boxes still read through it. */}
          <rect
            x={SQUAD_AREA_X}
            y={BAND_Y}
            width={SQUAD_AREA_W}
            height={BAND_H}
            className="fill-amber-wash stroke-rule"
            fillOpacity={0.85}
          />

          {/* 4. Text last, always on top */}
          <text x={46} y={50} className="fill-muted font-mono text-[0.65rem] uppercase tracking-widest">
            Tribe · {tribe.name}
          </text>
          <text x={26} y={384} className="fill-muted font-mono text-[0.6rem] uppercase tracking-widest">
            Guild · {guild.name}
          </text>
          <text x={SQUAD_AREA_X + 12} y={BAND_Y + BAND_H / 2 + 4} className="fill-muted font-mono text-[0.6rem] uppercase tracking-widest">
            Chapter · {chapter.name}
          </text>

          {tribe.squads.map((squad, i) => {
            const x = SQUAD_AREA_X + i * (squadW + SQUAD_GAP)
            return (
              <foreignObject key={i} x={x} y={LABEL_Y} width={squadW} height={LABEL_H}>
                <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 px-3 text-center">
                  <p className="font-display text-[1rem] font-bold leading-tight text-ink">{squad.name}</p>
                  <p className="text-[0.78rem] leading-tight text-ink-soft">{squad.mission}</p>
                </div>
              </foreignObject>
            )
          })}
        </svg>
      </div>

      {/* Mobile: abandon the geometry — stacked cards read top to bottom */}
      <div className="flex flex-col gap-3 md:hidden">
        <div className="rounded-2xl border border-rule/60 bg-blue-wash p-4">
          <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">Tribe · {tribe.name}</p>
          <div className="mt-3 flex flex-col gap-2">
            {tribe.squads.map((squad, i) => (
              <div key={i} className="rounded-xl border border-rule bg-surface p-3">
                <p className="font-display text-base font-bold text-ink">{squad.name}</p>
                <p className="mt-1 text-sm leading-snug text-ink-soft">{squad.mission}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-rule/60 bg-amber-wash p-4">
          <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">Chapter · {chapter.name}</p>
          <p className="mt-1 text-sm leading-snug text-ink-soft">{chapter.desc}</p>
        </div>
        <div className="rounded-2xl border border-dashed border-rule p-4">
          <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">Guild · {guild.name}</p>
          <p className="mt-1 text-sm leading-snug text-ink-soft">{guild.desc}</p>
        </div>
      </div>

      {/* Accessible fallback: real text for screen readers, hidden visually, present at every width */}
      <dl className="sr-only">
        <div>
          <dt>Tribe: {tribe.name}</dt>
          {tribe.squads.map((squad, i) => (
            <dd key={i}>
              {squad.name}: {squad.mission}
            </dd>
          ))}
        </div>
        <div>
          <dt>Chapter: {chapter.name}</dt>
          <dd>{chapter.desc}</dd>
        </div>
        <div>
          <dt>Guild: {guild.name}</dt>
          <dd>{guild.desc}</dd>
        </div>
      </dl>

      {caption && <p className="mt-4 text-sm text-muted">{caption}</p>}
    </div>
  )
}
