import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AllTerms } from './components/pages/all-terms.tsx'
import { Layout } from './components/layout.tsx'
import App from './App.tsx'
import "./App.css";
import { MyTerms } from './components/pages/my-terms.tsx'

// creates the root React component of our app at the #root HTML element
createRoot(document.getElementById('root')!).render(
  // enables development-only checks
  <StrictMode>
    {/* allows for routing in the application */}
    <BrowserRouter>
      {/* renders the App component */}
      <Routes>
        {/* Layout renders all child routes via outlet */}
        <Route path="/" element={<Layout />}>

          <Route index element={<App />} />

          <Route path="/terms"> 
            {/* // see dynamic segments https://reactrouter.com/7.1.4/start/library/routing#dynamic-segments */}
            <Route index element={<AllTerms />} />
            {/* <Route path=":termId" element={<TermCard />} />  */}
            <Route path="my-terms" element={<MyTerms />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
