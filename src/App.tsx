import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { SidebarLayout, PageTransition } from './components/layout'
import { Landing } from './pages/Landing'
import { Frameworks } from './pages/Frameworks'
import { Day } from './pages/Day'

export default function App() {
  const location = useLocation()
  return (
    <SidebarLayout>
      <PageTransition>
        <Routes location={location}>
          <Route path="/" element={<Landing />} />
          <Route path="/frameworks" element={<Frameworks />} />
          <Route path="/day/:n" element={<Day />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
    </SidebarLayout>
  )
}
