import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// function creates the root React component of our app at the #root HTML element
createRoot(document.getElementById('root')!).render(
  // Enables development-only checks
  <StrictMode>
    {/* allows for routing in any child components (e.g. the application) */}
    <BrowserRouter>
      {/* Render the App, which contains our Routes*/}
      <App />
    </BrowserRouter>
  </StrictMode>,
);