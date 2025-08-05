
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import { Layout } from "./components/common/layout/Layout";
import { AllTerms } from "./components/pages/AllTerms";
import { MyTerms } from "./components/pages/MyTerms";
import { termData } from "./terms/termData";
import Landing from "./components/pages/Landing";
import { Term } from "./types/term";
import Module2Example from "./components/pages/Module2Example";

function App() {
  // Initialize state with the imported termData, as an array of terms.
  // We store this in top-level state so this list can be read/updated in any child components
  // This makes the list of terms "favourites" persist through the session accross pages
  const [terms, updateTerms] = useState<Term[]>(termData);

  return (
    /**
     * Nested Route Link Structure:
     * A <Route> renders its Element component when the browser navigates to the 
     * associated path.
     * 
     * Routes can be nested so they "add" onto their paths (so the "/" contains all
     * paths starting with "/" (all of them), the "/terms" contains all paths 
     * starting with "/terms", etc.).
     */

      <Routes>
          {/* The root path renders <Layout>. That component contains an <Outlet>
          which will render the elements of their child routes. */}
          <Route path="/" element={<Layout />}>

            {/* 
              Renders the different pages in the Layout. 
              index: indicates route at the root of this path (/)
            */}
            <Route index element={
              <Landing 
                terms={terms} 
                updateTerms={updateTerms}
              />
              } 
            />


            <Route 
              path="/mod-2-example"
              element={<Module2Example />}
            >
            </Route>

              {/* all paths starting with "/terms" */}
            <Route path="/terms"> 
              {/* index: "terms" route */}
              <Route index element={
                <AllTerms 
                  terms={terms}
                  updateTerms={updateTerms} 
                />} 
              />
              
              {/* Child routes add their path to the parent (e.g. "/terms/my-terms") */}
              <Route path="my-terms" element={
                <MyTerms 
                  terms={terms}
                  updateTerms={updateTerms}
                />
                } 
              />
            </Route>
          </Route>
        </Routes>
    );
}

// export component for use in main.tsx
export default App