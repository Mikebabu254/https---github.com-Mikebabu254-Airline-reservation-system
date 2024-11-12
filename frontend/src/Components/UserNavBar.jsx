import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser } from 'react-icons/fa';  // Import FontAwesome user icon

const UserNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="/logo.png"  // Add your logo path here
            alt="Airline Logo"
            width="60"
            height="60"
            className="d-inline-block align-top"
            style={{ marginRight: '10px' }}
          />
          Jet Set AirLine Booking
        </Link>

        {/* Toggle button for mobile view */}
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

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
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
              <Link className="nav-link" to="/profile">
                <FaUser style={{ marginRight: '5px' }} /> Profile
              </Link>
            </li>

            {/* Logout Button */}
            <li className="nav-item ms-lg-3">
              <Link className="btn btn-primary" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserNavBar;
