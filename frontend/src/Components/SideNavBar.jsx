import React, { useState } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Login from "../Pages/Login";
import Dashboard from "../admin/Dashboard";
import ViewBooking from "../admin/ViewBooking";
import FlightSchedule from "../admin/FlightSchedule";
import PassangerManagement from "../admin/PassangerManagement";
import Settings from "../admin/Settings";
import AddCity from "../admin/AddCity";

const SideNavBar = () => {
    const [activeSection, setActiveSection] = useState("dashboard");

    const renderContent = () => {
        switch (activeSection) {
            case "dashboard":
                return <Dashboard/>;
            case "flightSchedule":
                return <FlightSchedule/>;
            case "addCity":
                return <AddCity/>;
            case "passangerManagement":
                return <PassangerManagement/>;
            case "viewBooking":
                return <ViewBooking/>;
            case "settings":
                return <Settings/>;
            default:
                return <Dashboard/>;
        }
    };

    return (
        <div className="d-flex vh-100">
            <div className="bg-dark text-light d-flex flex-column p-3" style={{ width: "250px" }}>
                <Navbar.Brand href="#" className="mb-4 text-light">
                    Admin Panel
                </Navbar.Brand>
                <Nav className="flex-column w-100">
                    <NavItem>
                        <button className="btn btn-link text-light" onClick={() => setActiveSection("dashboard")}>
                            Dashboard
                        </button>
                    </NavItem>
                    <NavItem>
                        <button className="btn btn-link text-light" onClick={() => setActiveSection("flightSchedule")}>
                            FLight Schedule 
                        </button>
                    </NavItem>
                    <NavItem>
                        <button className="btn btn-link text-light" onClick={() => setActiveSection("addCity")}>
                            Add City
                        </button>
                    </NavItem>
                    <NavItem>
                        <button className="btn btn-link text-light" onClick={() => setActiveSection("passangerManagement")}>
                        Passanger Management
                        </button>
                    </NavItem>
                    <NavItem>
                        <button className="btn btn-link text-light" onClick={() => setActiveSection("viewBooking")}>
                        View Booking
                        </button>
                    </NavItem>
                    <NavItem>
                        <button className="btn btn-link text-light" onClick={() => setActiveSection("settings")}>
                            Settings
                        </button>
                    </NavItem>
                    <NavItem>
                        <button className="btn btn-link text-light" onClick={() => setActiveSection("logout")}>
                            Logout
                        </button>
                    </NavItem>
                </Nav>
            </div>
            <div className="flex-grow-1 p-3">
                {renderContent()}
            </div>
        </div>
    );
};

export default SideNavBar;
