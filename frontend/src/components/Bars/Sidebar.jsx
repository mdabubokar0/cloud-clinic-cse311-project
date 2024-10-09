import React, { useState } from "react";
import bData from "./barData.json";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const handleActive = (link) => {
    setActive(link);
  };

  return (
    <div className="text-white w-[350px] h-[100vh] top-0 sticky bg-[#009BA9]">
      <h1 className="text-[40px] font-bold text-center mt-3">CC</h1>
      {bData.map((b) => (
        <div
          key={b.id}
          onClick={() => handleActive(b.link)}
          className={`text-[18px] rounded-l-lg ml-10 p-3 cursor-pointer
            ${
              active === b.link
                ? "bg-[#EFF0F6] text-[#20211A]"
                : "bg-transparent"
            }`}
        >
          <Link to={b.link} className="block w-full h-full">
            {b.title}
          </Link>
        </div>
      ))}
    </div>
  );
};
