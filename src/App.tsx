import { Nav, Footer} from "./components/common";
import { Landing } from "./components/landing"
import "./App.css";

// functions that return JSX are React Components
// files must have .tsx extension
function App() {
  return (
    <>
      <Nav />
      <Landing />
      <Footer />
    </>
  )
}

// export component for use in main.tsx
export default App
