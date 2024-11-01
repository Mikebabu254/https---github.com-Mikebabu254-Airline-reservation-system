import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Registration() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100" style={{margin: '100px'}}>
            <div className="card shadow-sm p-4" style={{ maxWidth: '500px', width: '100%'}}>
                <h2 className="text-center mb-4">Create an Account</h2>
                
                <form>
                    {/* First Name Input */}
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="firstName" 
                            placeholder="Enter your first name" 
                            required 
                        />
                    </div>

                    {/* Last Name Input */}
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lastName" 
                            placeholder="Enter your last name" 
                            required 
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-3">
                        <label htmlFor="phoneNo" className="form-label">Phone Number</label>
                        <input 
                            type="tel"
                            className="form-control"
                            id="phoneNo"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>

                    {/* Gender Dropdown */}
                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <select className="form-select" id="gender" required>
                            <option value="">Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    {/* Email Input */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter your email" 
                            required 
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Enter your password" 
                            required 
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="confirmPassword" 
                            placeholder="Confirm your password" 
                            required 
                        />
                    </div>

                    {/* Register Button */}
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>

                {/* Login Link */}
                <div className="text-center mt-3">
                    <span>Already have an account? <Link to="/login" className="text-decoration-none">Login</Link></span>
                </div>
            </div>
        </div>
    );
}

export default Registration;
