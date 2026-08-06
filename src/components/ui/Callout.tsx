import type { ReactNode } from 'react'
import { Info, Lightbulb, AlertTriangle, ListChecks } from 'lucide-react'
import type { CalloutKind } from '../../types'

const CONFIG: Record<
  CalloutKind,
  { bg: string; icon: typeof Info; accent: string; label: string }
> = {
  info: { bg: 'bg-blue-wash', icon: Info, accent: 'text-brand', label: 'Note' },
  tip: { bg: 'bg-green-wash', icon: Lightbulb, accent: 'text-green', label: 'Tip' },
  warning: { bg: 'bg-amber-wash', icon: AlertTriangle, accent: 'text-gold-deep', label: 'Watch out' },
  example: { bg: 'bg-berry-wash', icon: ListChecks, accent: 'text-berry', label: 'Example' },
}

interface CalloutProps {
  kind: CalloutKind
  title: string
  children: ReactNode
}

/** Full tinted panel — kind is signalled by icon + mono label, never colour alone. */
export function Callout({ kind, title, children }: CalloutProps) {
  const { bg, icon: Icon, accent, label } = CONFIG[kind]

  return (
    <div className={`rounded-2xl border border-rule/60 ${bg} p-5`}>
      <div className="flex items-start gap-3">
        <Icon size={18} strokeWidth={1.75} aria-hidden className={`mt-0.5 shrink-0 ${accent}`} />
        <div>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className={`font-mono text-[0.7rem] font-semibold uppercase tracking-widest ${accent}`}>
              {label}
            </span>
            <p className="font-medium text-ink">{title}</p>
          </div>
          <div className="mt-2 text-[0.92rem] leading-relaxed text-ink">{children}</div>
        </div>
      </div>
    </div>
  )
}
