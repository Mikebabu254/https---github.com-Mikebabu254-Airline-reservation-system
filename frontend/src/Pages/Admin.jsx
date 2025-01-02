import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import SideNavBar from "../Components/SideNavBar";
import { useNavigate } from 'react-router-dom';

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