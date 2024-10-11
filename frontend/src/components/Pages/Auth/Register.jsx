import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    hos_name: "",
    hos_email: "",
    hos_no: "",
    hos_address: "",
    hos_password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8081/register",
        formData
      );
      console.log(response);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full">
      <div className="w-full md:w-[50vw] h-full p-10 flex items-center justify-center">
        <div className="w-full">
          <h1 className="text-center text-[#009BA9] text-[50px] font-bold">
            Register
          </h1>
          {error && (
            <div className="bg-red-200 text-red-600 p-2 rounded mb-4">
              {error}
            </div>
          )}
          <form className="flex flex-col gap-3" onSubmit={handleRegister}>
            <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
              <label htmlFor="hos_name">Hospital Name</label>
              <input
                onChange={handleChange}
                value={formData.hos_name}
                className="p-3 w-full h-[48px] rounded-[8px] bg-[#FAFAFA] border-l-[1px] border-l-[#009BA9] border-b-[1px] border-b-[#009BA9] focus:outline-none"
                type="text"
                placeholder="Enter Your Hospital Name"
                name="hos_name"
              />
            </div>
            {/* More form fields */}
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
                <label htmlFor="hos_email">Email</label>
                <input
                  onChange={handleChange}
                  value={formData.hos_email}
                  className="p-3 w-full h-[48px] rounded-[8px] bg-[#FAFAFA] border-l-[1px] border-l-[#009BA9] border-b-[1px] border-b-[#009BA9] focus:outline-none"
                  type="email"
                  placeholder="Enter Your Email"
                  name="hos_email"
                />
              </div>
              <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
                <label htmlFor="hos_no">Phone No.</label>
                <input
                  onChange={handleChange}
                  value={formData.hos_no}
                  className="p-3 w-full h-[48px] rounded-[8px] bg-[#FAFAFA] border-l-[1px] border-l-[#009BA9] border-b-[1px] border-b-[#009BA9] focus:outline-none"
                  type="number"
                  placeholder="Enter Your Phone No."
                  name="hos_no"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
              <label htmlFor="hos_address">Address</label>
              <input
                onChange={handleChange}
                value={formData.hos_address}
                className="p-3 w-full h-[48px] rounded-[8px] bg-[#FAFAFA] border-l-[1px] border-l-[#009BA9] border-b-[1px] border-b-[#009BA9] focus:outline-none"
                type="text"
                placeholder="Enter Your Address"
                name="hos_address"
              />
            </div>
            <div className="flex flex-col gap-1 text-[#009BA9] text-[16px] w-full">
              <label htmlFor="hos_password">Password</label>
              <input
                onChange={handleChange}
                value={formData.hos_password}
                className="p-3 w-full h-[48px] rounded-[8px] bg-[#FAFAFA] border-l-[1px] border-l-[#009BA9] border-b-[1px] border-b-[#009BA9] focus:outline-none"
                type="password"
                placeholder="Enter Your Password"
                name="hos_password"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full h-[48px] bg-[#009BA9] flex items-center justify-center text-[16px] text-white font-bold rounded-lg"
              >
                {loading ? "Registering..." : "Register"}
              </button>
              <div className="mt-2 flex items-center justify-between">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#009BA9]">
                    Login
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
      <div className="w-full md:w-[50vw] h-auto bg-[#009BA9] flex items-center justify-center">
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
