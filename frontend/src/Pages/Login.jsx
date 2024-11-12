// Login.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data.status === "success") {
                    if (result.data.role === "admin") {
                        navigate("/admin"); // Redirect to admin page if role is "admin"
                    } else {
                        navigate("/Profile"); // Redirect to home page for regular users
                    }
                } else {
                    setMessage(result.data.message); // Display message from the server
                }
            })
            .catch(err => {
                setMessage("An error occurred. Please try again.");
                console.error(err);
            });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Login</h2>
                
                <form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter your email" 
                            required 
                            onChange={(e) => setEmail(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Remember Me Checkbox */}
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>

                    {/* Login Button */}
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>

                {/* Feedback Message */}
                {message && (
                    <div className="alert alert-info mt-3 text-center" role="alert">
                        {message}
                    </div>
                )}

                {/* Additional Links */}
                <div className="text-center mt-3">
                    <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
                    <br />
                    <span>New user? <Link to="/Registration" className="text-decoration-none">Register here</Link></span>
                </div>
            </div>
        </div>
    );
}

export default Login;
