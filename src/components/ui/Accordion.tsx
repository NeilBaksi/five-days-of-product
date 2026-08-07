import type { ReactNode } from 'react'
import { useId, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface AccordionProps {
  items: { title: string; body: ReactNode }[]
}

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

function AccordionItem({ title, body }: { title: string; body: ReactNode }) {
  const [open, setOpen] = useState(false)
  const rawId = useId()
  const triggerId = `${rawId}-trigger`
  const panelId = `${rawId}-panel`

  return (
    <div className="border-b border-rule">
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="flex min-h-[44px] w-full items-center justify-between gap-4 py-4 text-left font-medium text-ink transition-colors duration-200 hover:text-brand"
        >
          <span>{title}</span>
          <motion.span
            aria-hidden
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
            className="shrink-0 text-muted"
          >
            <ChevronDown size={18} strokeWidth={1.75} />
          </motion.span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="grid transition-[grid-template-rows] duration-300 ease-out-expo"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="pb-4 text-[0.92rem] leading-relaxed text-ink-soft">{body}</div>
        </div>
      </div>
    </div>
  )
}

/** Accessible disclosure group — items open/close independently, stay mounted for screen readers. */
export function Accordion({ items }: AccordionProps) {
  return (
    <div>
      {items.map((item, i) => (
        <AccordionItem key={i} title={item.title} body={item.body} />
      ))}
    </div>
  )
}
