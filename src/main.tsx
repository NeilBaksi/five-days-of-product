import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// A small hello for the curious who open devtools.
console.log(
  '%cFive Days of Product%c\nDigital Product Management, one day at a time.',
  'font: 700 15px Georgia, serif; color: #0a3d7a',
  'color: #545963',
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
