import { UserRound } from 'lucide-react'

interface PersonaCardProps {
  /** The persona's name — a single fictional person built from real user problems. */
  name: string
  /** One-line Jobs-to-be-Done statement: "[Persona] needs to [job], so they can [outcome]". */
  jtbd: string
  /** 2-3 supporting problem statements, written exactly as heard. */
  problems: string[]
}

/** A single persona card: identity + JTBD one-liner + the raw problems behind it. */
export function PersonaCard({ name, jtbd, problems }: PersonaCardProps) {
  return (
    <article className="rounded-2xl border border-rule bg-surface p-6">
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-wash text-brand"
        >
          <UserRound size={20} strokeWidth={1.75} />
        </span>
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-brand">Persona</p>
          <h3 className="font-display text-xl font-bold leading-snug text-ink">{name}</h3>
        </div>
      </div>

      <p className="mt-4 border-l-2 border-brand/40 pl-4 font-display text-lg italic leading-snug text-ink-soft">
        {jtbd}
      </p>

      <ul className="mt-5 flex flex-col gap-2">
        {problems.map((problem, i) => (
          <li key={i} className="flex gap-2 text-[0.92rem] leading-relaxed text-ink-soft">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
            <span>{problem}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
