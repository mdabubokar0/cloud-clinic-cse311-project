import { BrowserRouter as Main, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { Portfolio } from "./components/Pages/Portfolio"
import { GetStarted } from "./components/Pages/User/GetStarted"
import { DoctorSignUp } from "./components/Pages/User/DoctorSignUp"
import { DoctorLogin } from "./components/Pages/User/DoctorLogin"
import { PatientSignUp } from "./components/Pages/User/PatientSignUp"
import { PatientLogin } from "./components/Pages/User/PatientLogin"
import { Dashboard } from "./components/Pages/Dashboard/Dashboard"

function App() {

  return (
    <Main>
      <Routes>
        <Route exact path="/" element={<Navbar />} />
        <Route exact path="/getstarted" element={<GetStarted />} />
        <Route exact path="/doctorsignup" element={<DoctorSignUp />} />
        <Route exact path="/doctorlogin" element={<DoctorLogin />} />
        <Route exact path="/patientsignup" element={<PatientSignUp />} />
        <Route exact path="/patientlogin" element={<PatientLogin />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Main>
  )
}

export default App