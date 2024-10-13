import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const EditProfile = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      axios
        .get("http://localhost:8081/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setProfileData(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [token, navigate]);

  return <div>{profileData.name}</div>;
};
