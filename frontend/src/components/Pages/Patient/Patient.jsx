import React from "react";
import { Sidebar } from "../../Bars/Sidebar";
import { Profile } from "../../Profile/Profile";

export const Patient = () => {
  const role = localStorage.getItem("role");

  return (
    <div className="flex">
      <Sidebar />
      <div className="pl-3 pr-3 w-full">
        <div className="top-0 flex items-center justify-between sticky bg-[#EFF0F6] z-10 py-3">
          <h1 className="text-[28px] font-semibold">Patients</h1>
          <Profile />
        </div>
        <div className="bg-[#FAFAFA] rounded-[20px] pt-5">
          {role === "Admin" && (
            <div className="px-5 pb-3">
              <div className="w-[120px] h-[48px] bg-[#009BA9] text-[18px] font-normal rounded-[8px] flex items-center justify-center text-white">
                Add New
              </div>
            </div>
          )}
          <table className="w-full pt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Gender</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center h-[48px] bg-[#F1F1F1]">
                <td>20241</td>
                <td>Dr. Sunil Hurippa</td>
                <td>sunil@gmail.com</td>
                <td>12345678901</td>
                <td>Male</td>
                <td>India</td>
              </tr>
              <tr className="text-center h-[48px]">
                <td>20241</td>
                <td>Dr. Sunil Hurippa</td>
                <td>sunil@gmail.com</td>
                <td>12345678901</td>
                <td>Male</td>
                <td>India</td>
              </tr>
              <tr className="text-center h-[48px] bg-[#F1F1F1]">
                <td>20241</td>
                <td>Dr. Sunil Hurippa</td>
                <td>sunil@gmail.com</td>
                <td>12345678901</td>
                <td>Male</td>
                <td>India</td>
              </tr>
              <tr className="text-center h-[48px]">
                <td>20241</td>
                <td>Dr. Sunil Hurippa</td>
                <td>sunil@gmail.com</td>
                <td>12345678901</td>
                <td>Male</td>
                <td>India</td>
              </tr>
              <tr className="text-center h-[48px] bg-[#F1F1F1]">
                <td>20241</td>
                <td>Dr. Sunil Hurippa</td>
                <td>sunil@gmail.com</td>
                <td>12345678901</td>
                <td>Male</td>
                <td>India</td>
              </tr>
              <tr className="text-center h-[48px]">
                <td>20241</td>
                <td>Dr. Sunil Hurippa</td>
                <td>sunil@gmail.com</td>
                <td>12345678901</td>
                <td>Male</td>
                <td>India</td>
              </tr>
              <tr className="text-center h-[48px] bg-[#F1F1F1]">
                <td>20241</td>
                <td>Dr. Sunil Hurippa</td>
                <td>sunil@gmail.com</td>
                <td>12345678901</td>
                <td>Male</td>
                <td>India</td>
              </tr>
              <tr className="text-center h-[48px]">
                <td>20241</td>
                <td>Dr. Sunil Hurippa</td>
                <td>sunil@gmail.com</td>
                <td>12345678901</td>
                <td>Male</td>
                <td>India</td>
              </tr>
              <tr className="text-center h-[48px] bg-[#F1F1F1]">
                <td>20241</td>
                <td>Dr. Sunil Hurippa</td>
                <td>sunil@gmail.com</td>
                <td>12345678901</td>
                <td>Male</td>
                <td>India</td>
              </tr>
              <tr className="text-center h-[48px]">
                <td>20241</td>
                <td>Dr. Sunil Hurippa</td>
                <td>sunil@gmail.com</td>
                <td>12345678901</td>
                <td>Male</td>
                <td>India</td>
              </tr>
              <tr className="text-center h-[48px] bg-[#F1F1F1]">
                <td>20241</td>
                <td>Dr. Sunil Hurippa</td>
                <td>sunil@gmail.com</td>
                <td>12345678901</td>
                <td>Male</td>
                <td>India</td>
              </tr>
              <tr className="text-center h-[48px]">
                <td>20241</td>
                <td>Dr. Sunil Hurippa</td>
                <td>sunil@gmail.com</td>
                <td>12345678901</td>
                <td>Male</td>
                <td>India</td>
              </tr>
              <tr className="text-center h-[48px] bg-[#F1F1F1]">
                <td>20241</td>
                <td>Dr. Sunil Hurippa</td>
                <td>sunil@gmail.com</td>
                <td>12345678901</td>
                <td>Male</td>
                <td>India</td>
              </tr>
              <tr className="text-center h-[48px]">
                <td>20241</td>
                <td>Dr. Sunil Hurippa</td>
                <td>sunil@gmail.com</td>
                <td>12345678901</td>
                <td>Male</td>
                <td>India</td>
              </tr>
              <tr className="text-center h-[48px] bg-[#F1F1F1]">
                <td>20241</td>
                <td>Dr. Sunil Hurippa</td>
                <td>sunil@gmail.com</td>
                <td>12345678901</td>
                <td>Male</td>
                <td>India</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
