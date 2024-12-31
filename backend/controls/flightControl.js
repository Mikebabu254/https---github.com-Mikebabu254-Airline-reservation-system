const express= require("express")
const flightModel = require("../models/flightModel")

const addFlight = async (req, res) => {
    const {from, to, depatureDate, returnDate, price, payed} = req.body;
    try{
        const FlightModel = await flightModel.create({from, to, depatureDate, returnDate, price, payed})
        res.status(201).json(FlightModel)
    }catch(Error){
        console.log("error")
    }
}

const deleteFlight =(req, res)=>{
    try{

    }catch(Error){

    }
}

const viewFlight =(req, res)=>{
    try{

    }catch(Error){

    }
}

const modifyFlight =(req, res)=>{
    try{

    }catch(Error){

    }
}

module.exports ={addFlight, deleteFlight, viewFlight, modifyFlight}