
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
  // import termData and initialize State to use it
  const [terms, updateTerms] = useState<Term[]>(termData);

  return (
      <Routes>
          {/* The root path renders <Layout>. That component contains an <Outlet>
          which will render the elements of their child routes. */}
          <Route path="/" element={<Layout />}>

            {/* Renders the App in the Layout */}
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

            <Route path="/terms"> 
              {/* Index routes have no extra path (just "/terms" here) */}
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
