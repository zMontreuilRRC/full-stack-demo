import { Routes, Route } from "react-router-dom";
import { AllTerms } from "./components/pages/AllTerms";
import { Layout } from "./components/layout/Layout";
import { MyTerms } from "./components/pages/MyTerms";
import { SearchResult } from "./components/pages/SearchResults";
import { Landing } from "./components/pages/Landing";

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