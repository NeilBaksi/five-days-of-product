import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { MobileHeader } from './MobileHeader'
import { MobileDrawer } from './MobileDrawer'
import { DotPattern } from '../ui/DotPattern'

interface SidebarLayoutProps {
  children: ReactNode
}

/** App shell: skip link, desktop sidebar / mobile header+drawer, main content, footer. */
export function SidebarLayout({ children }: SidebarLayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()
  // Opener element captured on open so focus can return to it on close.
  const openerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setDrawerOpen(false)
    // Reset scroll on navigation (prev/next pager, sidebar links) so each page opens at the top.
    window.scrollTo(0, 0)
  }, [location.pathname])

  const openDrawer = () => {
    openerRef.current = document.activeElement as HTMLElement | null
    setDrawerOpen(true)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
    openerRef.current?.focus()
  }

  return (
    <>
      {/* Decorative dot field — fixed behind everything, concentrated toward the
          top so it textures the hero and fades out behind reading text. */}
      <DotPattern className="fixed inset-0 -z-10 [mask-image:radial-gradient(130%_75%_at_50%_0%,white,transparent_72%)]" />

      <a
        href="#main"
        className="sr-only rounded-full bg-ink px-4 py-2 font-mono text-sm text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
      >
        Skip to content
      </a>

      <Sidebar />
      <MobileHeader onOpen={openDrawer} />
      <MobileDrawer open={drawerOpen} onClose={closeDrawer} />

      <div className="md:pl-[260px]">
        <main id="main" className="mx-auto max-w-5xl px-5 pb-20 sm:px-8 sm:pb-24">
          {children}
        </main>
      </div>
    </>
  )
}
