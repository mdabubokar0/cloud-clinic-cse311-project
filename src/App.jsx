import { BrowserRouter as Main, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { Portfolio } from "./components/Pages/Portfolio"

function App() {

  return (
    <Main>
      <Routes>
        <Route exact path="/" element={<Navbar />} />
      </Routes>
    </Main>
  )
}

export default App