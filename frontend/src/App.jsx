import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Register } from "./components/Pages/Auth/Register";
import { Login } from "./components/Pages/Auth/Login";

function App() {
  return (
    <Main>
      <Routes>
        <Route exact path="/" element={<Navbar />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Main>
  );
}

export default App;
