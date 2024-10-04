import React from "react";
import { Link } from "react-router-dom";

export const PatientLogin = () => {
  return (
    <div className="flex h-full">
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
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
              <label htmlFor="email">Email</label>
              <input
                className="p-3 w-full h-[48px] rounded-[8px] bg-[#FAFAFA] border-l-[1px] border-l-[#009BA9] border-b-[1px] border-b-[#009BA9] focus:outline-none"
                type="email"
                placeholder="Enter Your Email"
                name="email"
              />
            </div>
            <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
              <label htmlFor="password">Password</label>
              <input
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
                  <Link to="/patientsignup" className="text-[#009BA9]">
                    Sign Up
                  </Link>
                </p>
                <Link
                  to="/getstarted"
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
