import { Nav, Footer} from "./common/common";
import { Landing } from "./landing/landing"

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
