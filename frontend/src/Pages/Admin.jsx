import { useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';
import SideNavBar from "../admin/SideNavBar";

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!isLoggedIn || !user || user.role !== "admin") {
      navigate("/login"); 
    }
  }, []); 

  return (
    <div>
      <SideNavBar /> 
    </div>
  );
}

export default Admin;