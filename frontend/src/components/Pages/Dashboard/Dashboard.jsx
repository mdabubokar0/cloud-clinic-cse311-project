import React, { useEffect } from "react";
import { Sidebar } from "../../Bars/Sidebar";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <div className="flex">
      <Sidebar />
      <div className="pl-3 pr-3 w-full">
        <div className="top-0 flex items-center justify-between sticky bg-[#EFF0F6] z-10 py-3">
          <h1 className="text-[28px] font-semibold">Dashboard</h1>
          <div className="bg-[#009BA9] rounded-lg p-3 text-white cursor-pointer">
            Evercare Hospital
          </div>
        </div>
        <div className="bg-[#FAFAFA] rounded-[20px] p-5">Hi</div>
      </div>
    </div>
  );
};
