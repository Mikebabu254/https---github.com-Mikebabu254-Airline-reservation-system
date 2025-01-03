const express = require("express")
const userModel = require("../models/userModel")
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const jwt = require('jsonwebtoken'); // Import JWT library

const registerUser = async (req, res) => {
    const { firstName, lastName, phoneNo, gender, email, DOB, password, role } = req.body;

    try {
        // Hash the password before saving to the database
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        const UserModel = await userModel.create({ 
            firstName, 
            lastName, 
            phoneNo, 
            gender, 
            email, 
            DOB, 
            password: hashedPassword, // Save the hashed password
            role: "user" 
        });

        res.status(201).json(UserModel); 
        console.log({ userModel: email }); 
    } catch (error) {
        console.log("error", error); 
        res.status(500).json({ message: 'Internal server error' }); 
    }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password." });
        }

        // Create a JWT
        const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

        // Return user details and token
        res.status(200).json({
            status: "login successful",
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const changePassword = (req, res)=>{
    try{
        res.json({msg : "change password"})
    }catch(Error){

    }
    
}

const viewProfile = (req, res)=>{
    try{
        res.json({msg : "view profile"})
    }catch(Error){

    }
}

const allUser = async (req, res) =>{
    try{
        const getUser = await userModel.find()
        res.json(getUser)
    }catch(Error){
        console.log("Error fetching user", Error)
    }
}

module.exports = {registerUser, loginUser, allUser}