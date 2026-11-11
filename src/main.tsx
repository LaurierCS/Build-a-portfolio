import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NAME, PAGE_ICON, THEME } from './data'
import { applyTheme, setPageInfo } from './lib/theme'

// Your colours, font, tab title and tab icon all come from data.ts
applyTheme(THEME)
setPageInfo(`${NAME} | Portfolio`, PAGE_ICON)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
