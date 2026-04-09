import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { WPProvider } from './store/WordPressContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WPProvider >
      <App />
    </WPProvider>
  </StrictMode>,
)
