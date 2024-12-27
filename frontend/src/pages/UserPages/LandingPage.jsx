import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="container text-center mt-5">
    <h1>Welcome to Airline Reservation System</h1>
    <p>Book flights easily and manage your reservations.</p>
    <div className="mt-4">
      <Link to="/login" className="btn btn-primary me-3">Login</Link>
      <Link to="/register" className="btn btn-secondary">Register</Link>
    </div>
  </div>
);

export default LandingPage;