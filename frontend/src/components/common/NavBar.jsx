import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ userType }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Airline System</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {userType === 'admin' ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/manage-flights">Manage Flights</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/manage-users">Manage Users</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/flights">Flights</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reservations">Reservations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
