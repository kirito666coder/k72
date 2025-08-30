import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NavContext from './context/NavContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavContext>
    <App />
    </NavContext>
  </StrictMode>,
)
