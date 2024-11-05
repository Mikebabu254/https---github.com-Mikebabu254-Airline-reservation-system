import React, { useState } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

const SideNavBar = () => {
    const [activeSection, setActiveSection] = useState("dashboard");

    const renderContent = () => {
        switch (activeSection) {
            case "dashboard":
                return <div>Dashboard Content</div>;
            case "users":
                return <div>Manage Users Content</div>;
            case "orders":
                return <div>Manage Orders Content</div>;
            case "reports":
                return <div>Reports Content</div>;
            case "settings":
                return <div>Settings Content</div>;
            default:
                return <div>Welcome to the Admin Panel</div>;
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
                        <button className="btn btn-link text-light" onClick={() => setActiveSection("users")}>
                            Manage Users
                        </button>
                    </NavItem>
                    <NavItem>
                        <button className="btn btn-link text-light" onClick={() => setActiveSection("orders")}>
                            Manage Orders
                        </button>
                    </NavItem>
                    <NavItem>
                        <button className="btn btn-link text-light" onClick={() => setActiveSection("reports")}>
                            Reports
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
