import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { SidebarLayout, PageTransition } from './components/layout'
import { Landing } from './pages/Landing'
import { Frameworks } from './pages/Frameworks'
import { Day } from './pages/Day'
import { Glossary } from './pages/Glossary'
import { Templates } from './pages/Templates'
import { PromptLibrary } from './pages/PromptLibrary'
import { ProductSense } from './pages/ProductSense'
import { PricingModels } from './pages/PricingModels'

export default function App() {
  const location = useLocation()
  return (
    <SidebarLayout>
      <PageTransition>
        <Routes location={location}>
          <Route path="/" element={<Landing />} />
          <Route path="/frameworks" element={<Frameworks />} />
          <Route path="/toolkit/glossary" element={<Glossary />} />
          <Route path="/toolkit/templates" element={<Templates />} />
          <Route path="/toolkit/prompts" element={<PromptLibrary />} />
          <Route path="/toolkit/product-sense" element={<ProductSense />} />
          <Route path="/toolkit/pricing" element={<PricingModels />} />
          <Route path="/day/:n" element={<Day />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
    </SidebarLayout>
  )
}
