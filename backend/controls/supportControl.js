const supportModel = require("../models/supportModel")

const support = async (req, res)=>{
    const {userID, complain} = req.body

    try{
        supportModel.create({
            userId,
            complaint
        });
        res.status(201).json({message: "complaint successfully submitted. Thank you for t"})
    }catch(Error){
        console.log("An error occur when trying to send data to the database", Error)
    }
}

module.exports = support;