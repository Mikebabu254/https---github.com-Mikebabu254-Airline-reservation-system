const express = require("express")
const userModel = require("../models/userModel")

const registerUser = async (req, res)=>{
    const {firstName, lastName, phoneNo, gender, email,DOB, password, role} = req.body

    try{


        const UserModel = await userModel.create({ firstName, lastName, phoneNo, gender, email,DOB, password, role:"user"});
        res.status(201).json(UserModel); 
    }catch(Error){
        console.log("error")
    }


}

const loginUser = (req,res)=>{
    res.json({msg : "login user"})
}

const changePassword = (req, res)=>{
    res.json({msg : "change password"})
}

const viewProfile = (req, res)=>{
    res.json({msg : "view profile"})
}

module.exports = {registerUser, loginUser}