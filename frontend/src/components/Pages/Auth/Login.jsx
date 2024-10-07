import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8081/login", formData)
      .then((res) => {
        console.log("Login successful");
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex h-[100vh]">
      <div className="w-[50vw] h-[100vh] bg-[#009BA9] flex items-center justify-center">
        <div>
          <h1 className="text-white text-[40px] font-bold text-center">
            Welcome back to SCC
          </h1>
          <img src="img/patient.png" alt="patient" />
        </div>
      </div>
      <div className="w-[50vw] h-[100vh] p-10 flex items-center justify-center">
        <div className="w-full">
          <h1 className="text-center text-[#009BA9] text-[50px] font-bold">
            Login
          </h1>
          <form className="flex flex-col gap-3" onSubmit={handleLogin}>
            <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
              <label htmlFor="user_id">ID</label>
              <input
                onChange={handleChange}
                value={formData.user_id}
                className="p-3 w-full h-[48px] rounded-[8px] bg-[#FAFAFA] border-l-[1px] border-l-[#009BA9] border-b-[1px] border-b-[#009BA9] focus:outline-none"
                type="number"
                placeholder="Enter Your ID"
                name="user_id"
              />
            </div>
            
            <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
              <label htmlFor="password">Password</label>
              <input
                onChange={handleChange}
                value={formData.password}
                className="p-3 w-full h-[48px] rounded-[8px] bg-[#FAFAFA] border-l-[1px] border-l-[#009BA9] border-b-[1px] border-b-[#009BA9] focus:outline-none"
                type="password"
                placeholder="Enter Your Password"
                name="password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="mt-2 w-full h-[48px] bg-[#009BA9] flex items-center justify-center text-[16px] text-white font-bold rounded-lg"
              >
                Login
              </button>
              <div className="mt-2 flex items-center justify-between">
                <p>
                  Don't have an account?{" "}
                  <Link to="/register" className="text-[#009BA9]">
                    Sign Up
                  </Link>
                </p>
                <Link
                  to="/"
                  className="text-[14px] border-[1px] bg-[#009BA9] text-white rounded-lg p-1"
                >
                  Go back
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
