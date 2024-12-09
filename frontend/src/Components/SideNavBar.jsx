import React, { useState } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Dashboard from "../admin/Dashboard";
import ViewBooking from "../admin/ViewBooking";
import FlightSchedule from "../admin/FlightSchedule";
import PassangerManagement from "../admin/PassangerManagement";
import Settings from "../admin/Settings";
import AddCity from "../admin/AddCity";
import CityList from "../admin/CityList";

const SideNavBar = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user");

    // Redirect to login page
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
      <div className="bg-dark text-light d-flex flex-column p-3" style={{ width: "250px" }}>
        <Navbar.Brand href="#" className="mb-4 text-light">
          Admin Panel
        </Navbar.Brand>
        <Nav className="flex-column w-100">
          <NavItem>
            <button
              className={`btn btn-link text-light ${activeSection === "dashboard" ? "fw-bold" : ""}`}
              onClick={() => setActiveSection("dashboard")}
            >
              Dashboard
            </button>
          </NavItem>
          <NavItem>
            <button
              className={`btn btn-link text-light ${activeSection === "flightSchedule" ? "fw-bold" : ""}`}
              onClick={() => setActiveSection("flightSchedule")}
            >
              Flight Schedule
            </button>
          </NavItem>
          <NavItem>
            <button
              className={`btn btn-link text-light ${activeSection === "cityList" ? "fw-bold" : ""}`}
              onClick={() => setActiveSection("cityList")}
            >
              City List
            </button>
          </NavItem>
          <NavItem>
            <button
              className={`btn btn-link text-light ${activeSection === "passangerManagement" ? "fw-bold" : ""}`}
              onClick={() => setActiveSection("passangerManagement")}
            >
              Passenger Management
            </button>
          </NavItem>
          <NavItem>
            <button
              className={`btn btn-link text-light ${activeSection === "viewBooking" ? "fw-bold" : ""}`}
              onClick={() => setActiveSection("viewBooking")}
            >
              View Booking
            </button>
          </NavItem>
          <NavItem>
            <button
              className={`btn btn-link text-light ${activeSection === "settings" ? "fw-bold" : ""}`}
              onClick={() => setActiveSection("settings")}
            >
              Settings
            </button>
          </NavItem>
          <NavItem>
            <button className="btn btn-link text-light" onClick={handleLogout}>
              Logout
            </button>
          </NavItem>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-3">{renderContent()}</div>
    </div>
  );
};

export default SideNavBar;
