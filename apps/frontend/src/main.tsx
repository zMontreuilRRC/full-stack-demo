import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import "./App.css";
import { ClerkProvider } from '@clerk/clerk-react'

// creates the root React component of our app at the #root HTML element
createRoot(document.getElementById('root')!).render(
  // enables development-only checks
  <StrictMode>
    {/* the VITE_ prefix allows vite to expose .env variables  */}
    {/* The ClerkProvider allows use of Clerk auth, similar to context, in app */}
    <ClerkProvider publishableKey = {import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
        {/* allows for routing in the application */}
      <BrowserRouter>
        {/* renders the App component */}
        <App />
      </BrowserRouter>
    </ClerkProvider>

  </StrictMode>,
)
