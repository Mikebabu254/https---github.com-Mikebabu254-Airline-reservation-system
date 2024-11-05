import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom"; // If you are using React Router for navigation

const SideNavBar = () => {
    return (
        <div className="d-flex flex-column vh-100 bg-dark" style={{ width: "250px" }}>
            <Navbar bg="dark" variant="dark" className="flex-column align-items-start p-3">
                <Navbar.Brand href="#" className="mb-4 text-light">
                    Admin Panel
                </Navbar.Brand>
                <Nav className="flex-column w-100">
                    <NavItem>
                        <Link to="/admin/dashboard" className="nav-link text-light">Dashboard</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/admin/users" className="nav-link text-light">Manage Users</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/admin/orders" className="nav-link text-light">Manage Orders</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/admin/reports" className="nav-link text-light">Reports</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/admin/settings" className="nav-link text-light">Settings</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/logout" className="nav-link text-light">Logout</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};

export default SideNavBar;
