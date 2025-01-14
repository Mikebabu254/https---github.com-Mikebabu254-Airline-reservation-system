const supportModel = require("../models/supportModel")

const support = async (req, res)=>{
    const {userID, complain} = req.body

    try{
        const SupportModel = await supportModel.create({
            userId,
            complaint
        })
    }catch(Error){
        console.log("An error occur when trying to send data to the database", Error)
    }
}

module.exports = support;