import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const GetStarted = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState({});

  const handleInputChange = (e) => {
    setRole({
      ...role,
      [e.target.name]: e.target.value,
    });
  };

  if (role.role === "doctor") {
    navigate("/doctorlogin");
  } else {
    navigate("/patientlogin");
  }
  return (
    <div>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="flex flex-col gap-1 mb-3">
          <label
            htmlFor="role"
            className="text-[#009BA9] text-[16px] font-bold"
          >
            I'm a
          </label>
          <select
            name="role"
            id="role"
            onChange={handleInputChange}
            className="w-[600px] h-[48px] cursor-pointer rounded-[8px] bg-[#FAFAFA] border-l-[1px] border-l-[#009BA9] border-b-[1px] border-b-[#009BA9] focus:outline-none"
          >
            <option>-Select-</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
        </div>
        <Link
          to="/"
          className="text-[14px] border-[1px] bg-[#009BA9] text-white rounded-lg p-1"
        >
          Go back
        </Link>
      </div>
    </div>
  );
};
