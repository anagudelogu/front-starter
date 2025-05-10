import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './temp.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
