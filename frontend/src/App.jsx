import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import { Portfolio } from "./components/Pages/Portfolio/Portfolio";
import { Register } from "./components/Pages/Auth/Register";
import { Login } from "./components/Pages/Auth/Login";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { Admin } from "./components/Pages/Admin/Admin";
import { Doctor } from "./components/Pages/Doctor/Doctor";
import { Patient } from "./components/Pages/Patient/Patient";
import { Nurse } from "./components/Pages/Nurse/Nurse";
import { Appointment } from "./components/Pages/Appointment/Appointment";
import { Department } from "./components/Pages/Department/Department";

function App() {
  return (
    <Main>
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/doctor" element={<Doctor />} />
        <Route exact path="/patient" element={<Patient />} />
        <Route exact path="/nurse" element={<Nurse />} />
        <Route exact path="/appointment" element={<Appointment />} />
        <Route exact path="/department" element={<Department />} />
      </Routes>
    </Main>
  );
}

export default App;
