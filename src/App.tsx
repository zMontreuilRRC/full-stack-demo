import { Routes, Route } from "react-router-dom";
import { Landing } from "./components/pages/landing/Landing";
import { Layout } from "./components/layout/Layout";
import { AllTerms } from "./components/pages/all-terms/AllTerms";
import { MyTerms } from "./components/pages/my-terms/MyTerms";
import { SearchResult } from "./components/pages/search-results/SearchResults";

function App() {
    return(
        <Routes>
          {/* Layout renders all child routes via outlet */}
          <Route path="/" element={<Layout />}>

            <Route index element={<Landing />} />

            <Route path="/terms"> 
              {/* // see dynamic segments https://reactrouter.com/7.1.4/start/library/routing#dynamic-segments */}
              <Route index element={<AllTerms />} />
              <Route path="search" element={<SearchResult />} />
              {/* <Route path=":termId" element={<TermCard />} />  */}
              <Route path="my-terms" element={<MyTerms />} />
            </Route>
          </Route>
        </Routes>
    );
}
     
export default App;