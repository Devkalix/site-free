import { Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"
import { About } from "./components/About"
import Header from "./components/header/Header"
import SectionA from "./components/sectionA/SectionA"

function App() {

  return (
    <>
      <Header />
      <SectionA />
      <Routes>
        <Route path="site-free" element={<Home />}></Route>
        <Route path="site-free/about" element={<About />}></Route>
      </Routes>
    </>
  )
}

export default App
