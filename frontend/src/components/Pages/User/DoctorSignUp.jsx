import React from "react";
import { Link } from "react-router-dom";

export const DoctorSignUp = () => {
  return (
    <div className="flex h-full">
      <div className="w-[50vw] h-full p-10 flex items-center justify-center">
        <div className="w-full">
          <h1 className="text-center text-[#009BA9] text-[50px] font-bold">
            Sign Up
          </h1>
          <form className="flex flex-col gap-3">
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
                <label htmlFor="first_name">First Name</label>
                <input
                  className="p-3 w-full h-[48px] rounded-[8px] bg-[#FAFAFA] border-l-[1px] border-l-[#009BA9] border-b-[1px] border-b-[#009BA9] focus:outline-none"
                  type="text"
                  placeholder="Enter Your First Name"
                  name="first_name"
                />
              </div>
              <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
                <label htmlFor="last_name">Last Name</label>
                <input
                  className="p-3 w-full h-[48px] rounded-[8px] bg-[#FAFAFA] border-l-[1px] border-l-[#009BA9] border-b-[1px] border-b-[#009BA9] focus:outline-none"
                  type="text"
                  placeholder="Enter Your Last Name"
                  name="last_name"
                />
              </div>
            </div>
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
              <label htmlFor="phone_no">Phone No.</label>
              <input
                className="p-3 w-full h-[48px] rounded-[8px] bg-[#FAFAFA] border-l-[1px] border-l-[#009BA9] border-b-[1px] border-b-[#009BA9] focus:outline-none"
                type="number"
                placeholder="Enter Your Phone No."
                name="phone_no"
              />
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="gender" className="text-[#009BA9] text-[16px]">
                  Gender
                </label>
                <select
                  name="gender"
                  className="h-[48px] cursor-pointer rounded-[8px] bg-[#FAFAFA] border-l-[1px] border-l-[#009BA9] border-b-[1px] border-b-[#009BA9] focus:outline-none"
                >
                  <option>-Select Gender-</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="specialization"
                  className="text-[#009BA9] text-[16px]"
                >
                  Specialization
                </label>
                <select
                  name="specialization"
                  className="h-[48px] cursor-pointer rounded-[8px] bg-[#FAFAFA] border-l-[1px] border-l-[#009BA9] border-b-[1px] border-b-[#009BA9] focus:outline-none"
                >
                  <option>-Select Specialization-</option>
                  <option value="cardiologist">Cardiologist</option>
                  <option value="immunologist">Immunologist</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
              <label htmlFor="address">Address</label>
              <input
                className="p-3 w-full h-[48px] rounded-[8px] bg-[#FAFAFA] border-l-[1px] border-l-[#009BA9] border-b-[1px] border-b-[#009BA9] focus:outline-none"
                type="text"
                placeholder="Enter Your Address"
                name="address"
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
                Sign Up
              </button>
              <div className="mt-2 flex items-center justify-between">
                <p>
                  Already have an account?{" "}
                  <Link to="/doctorlogin" className="text-[#009BA9]">
                    Login
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
      <div className="w-[50vw] h-auto bg-[#009BA9] flex items-center justify-center">
        <div>
          <h1 className="text-white text-[40px] font-bold text-center">
            Welcome to SCC
          </h1>
          <img src="img/doctor.png" alt="doctor" />
        </div>
      </div>
    </div>
  );
};
