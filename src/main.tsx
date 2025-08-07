import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import "./App.css";

// creates the root React component of our app at the #root HTML element
createRoot(document.getElementById('root')!).render(
  // enables development-only checks
  <StrictMode>
        {/* allows for routing in the application */}
      <BrowserRouter>
        {/* renders the App component */}
        <App />
      </BrowserRouter>
  </StrictMode>
)
