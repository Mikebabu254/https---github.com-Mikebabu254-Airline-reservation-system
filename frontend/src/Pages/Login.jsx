import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Login</h2>
                
                <form>
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

                    {/* Remember Me Checkbox */}
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>

                    {/* Login Button */}
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>

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
