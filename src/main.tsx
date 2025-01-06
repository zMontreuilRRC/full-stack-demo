import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// creates the root React component of our app at the #root HTML element
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* renders the App component */}
    <App />
  </StrictMode>,
)
