import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from "axios";

function Registration() {
    
    const [firstName, setFirstName] =useState()
    const [lastName, setLastName] =useState()
    const [phoneNo, setPhoneNo] =useState()
    const [gender, setGender] =useState()
    const [email, setEmail] =useState()
    const [DOB, setDOB] =useState()
    const [password, setPassword] =useState()
    const [confirmPassword, setConfirmPassword] =useState()
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('', {firstName,lastName,phoneNo,gender,email,DOB,password,confirmPassword})
        .then(result => console.log(result))
        .catch(err => console.log(err))
        
    }
    return (

        <div className="container d-flex justify-content-center align-items-center vh-100" style={{margin: '100px'}}>
        
            <div className="card shadow-sm p-4" style={{ maxWidth: '500px', width: '100%'}}>
                <h2 className="text-center mb-4">Create an Account</h2>
                
                
                <form onSubmit={handleSubmit}> 
                
                    {/* First Name Input */}
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">First Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="firstName" 
                            placeholder="Enter your first name  "
                            required 
                            onChange={(e)=> setFirstName(e.target.value)}
                            
                        />
    
                    </div>

                    {/* Last Name Input */}
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Last Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lastName" 
                            placeholder="Enter your last name" 
                            required 
                            onChange={(e)=> setLastName(e.target.value)}
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Phone Number</label>
                        <input 
                            type="tel"
                            className="form-control"
                            id="phoneNo"
                            placeholder="Enter your phone number"
                            required
                            onChange={(e)=> setPhoneNo(e.target.value)}
                        />
                    </div>

                    {/* Gender Dropdown */}
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Gender</label>
                        <select className="form-select" id="gender" required>
                            <option value="">Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            onChange={(e)=> setGender(e.target.value)}
                        </select>
                    </div>
                    
                    {/* {date of birth} */}
                    <div className="d-flex flex-column" style={{ minWidth: '120px' }}>
                        <label htmlFor="" className="form-label">DOB</label>
                        <input 
                            type="date"
                            id="DOB"
                            required
                            style={{
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                fontSize: '1em'
                            }}
                            onChange={(e)=> setDOB(e.target.value)}
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter your email" 
                            required 
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Enter your password" 
                            required 
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Confirm Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="confirmPassword" 
                            placeholder="Confirm your password" 
                            required 
                            onChange={(e)=> setConfirmPassword(e.target.value)}
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
