import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { MobileHeader } from './MobileHeader'
import { MobileDrawer } from './MobileDrawer'
import { Footer } from './Footer'

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
        <main id="main" className="mx-auto max-w-5xl px-5 sm:px-8">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
