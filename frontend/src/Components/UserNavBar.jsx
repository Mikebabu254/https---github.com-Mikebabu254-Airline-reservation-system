import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser } from 'react-icons/fa';

const UserNavBar = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user information from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.firstName) {
      setUserName(user.firstName);
    }
  }, []);

  const handleLogout = () => {
    // Remove user data and navigate to login
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/HomeUser">
          <img
            src="/logo.png" // Replace with your logo path
            alt="Airline Logo"
            width="60"
            height="60"
            className="d-inline-block align-top me-2"
          />
          Jet Set Airline Booking
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Navigation Links */}
            <li className="nav-item">
              <Link className="nav-link" to="/HomeUser">
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/my-bookings">
                My Bookings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/check-in">
                Check-In
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Customer Support
              </Link>
            </li>

            {/* User Profile with Icon */}
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/profile">
                <FaUser className="me-1" />
                {userName || "Profile"}
              </Link>
            </li>

            {/* Logout Button */}
            <li className="nav-item ms-lg-3">
              <button
                className="btn btn-primary"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserNavBar;
