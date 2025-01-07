import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaPlane,
  FaCity,
  FaUsers,
  FaClipboardList,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";

import Dashboard from "./Dashboard";
import ViewBooking from "./ViewBooking";
import FlightSchedule from "./FlightSchedule";
import PassangerManagement from "./PassangerManagement";
import Settings from "./Settings";
import CityList from "./CityList";

const SideNavBar = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "flightSchedule":
        return <FlightSchedule />;
      case "cityList":
        return <CityList />;
      case "passangerManagement":
        return <PassangerManagement />;
      case "viewBooking":
        return <ViewBooking />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div
        className="bg-dark text-light d-flex flex-column p-3 sticky-top"
        style={{
          width: "280px",
          height: "100vh",
          overflowY: "auto",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="text-center mb-4">
          <h4 className="text-light fw-bold">Admin Panel</h4>
          <hr className="bg-secondary" />
        </div>
        <Nav className="flex-column w-100">
          <Nav.Item
            className={`nav-item py-3 px-3 mb-2 ${
              activeSection === "dashboard" ? "bg-primary text-light rounded" : "hover-bg"
            }`}
            onClick={() => setActiveSection("dashboard")}
          >
            <FaTachometerAlt className="me-2" /> Dashboard
          </Nav.Item>

          <Nav.Item
            className={`nav-item py-3 px-3 mb-2 ${
              activeSection === "flightSchedule" ? "bg-primary text-light rounded" : "hover-bg"
            }`}
            onClick={() => setActiveSection("flightSchedule")}
          >
            <FaPlane className="me-2" /> Flight Schedule
          </Nav.Item>

          <Nav.Item
            className={`nav-item py-3 px-3 mb-2 ${
              activeSection === "cityList" ? "bg-primary text-light rounded" : "hover-bg"
            }`}
            onClick={() => setActiveSection("cityList")}
          >
            <FaCity className="me-2" /> City List
          </Nav.Item>

          <Nav.Item
            className={`nav-item py-3 px-3 mb-2 ${
              activeSection === "passangerManagement" ? "bg-primary text-light rounded" : "hover-bg"
            }`}
            onClick={() => setActiveSection("passangerManagement")}
          >
            <FaUsers className="me-2" /> Passenger Management
          </Nav.Item>

          <Nav.Item
            className={`nav-item py-3 px-3 mb-2 ${
              activeSection === "viewBooking" ? "bg-primary text-light rounded" : "hover-bg"
            }`}
            onClick={() => setActiveSection("viewBooking")}
          >
            <FaClipboardList className="me-2" /> View Booking
          </Nav.Item>

          <Nav.Item
            className={`nav-item py-3 px-3 mb-2 ${
              activeSection === "settings" ? "bg-primary text-light rounded" : "hover-bg"
            }`}
            onClick={() => setActiveSection("settings")}
          >
            <FaCogs className="me-2" /> Settings
          </Nav.Item>

          <Nav.Item
            className="nav-item py-3 px-3 mt-4 bg-danger text-light rounded"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="me-2" /> Logout
          </Nav.Item>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 overflow-auto">{renderContent()}</div>
    </div>
  );
};

export default SideNavBar;
