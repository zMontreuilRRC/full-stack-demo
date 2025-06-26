import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// function creates the root React component of our app at the #root HTML element
createRoot(document.getElementById('root')!).render(
  // Enables development-only checks
  <StrictMode>
    {/* allows for routing in the application */}
    <BrowserRouter>
      {/* Render the App, which contains our Routes*/}
      <App />
    </BrowserRouter>
  </StrictMode>,
);

/**
 * Nested Route Link Structure:
 * A <Route> renders its Element component when the browser navigates to the 
 * associated path.
 * 
 * Routes can be nested so they "add" onto their paths (so the "/" contains all
 * paths starting with "/" (all of them), the "/terms" contains all paths 
 * starting with "/terms", etc.).
 */
