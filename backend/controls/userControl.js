const express = require("express")
const userModel = require("../models/userModel")

const registerUser = async (req, res)=>{
    const {firstName, lastName, phoneNo, gender, email,DOB, password, role} = req.body

    try{
        const UserModel = await userModel.create({ firstName, lastName, phoneNo, gender, email,DOB, password, role:"user"});
        res.status(201).json(UserModel); 
        console.log({userModel:email})
    }catch(Error){
        console.log("error")
    }


}

const loginUser = async (req,res)=>{
    const {email, password} = req.body

    try{
        const user = await userModel.findOne({email})
        if(!user){
            return console.log("no user found")
        }

        if (user.password !== password) {
            return res.status(401).json("Invalid password.");
        }

        res.status(200).json({msg:"login successful"})
    }catch(Error){
        console.log("error", Error)
    }
}

const changePassword = (req, res)=>{
    res.json({msg : "change password"})
}

const viewProfile = (req, res)=>{
    res.json({msg : "view profile"})
}

module.exports = {registerUser, loginUser}