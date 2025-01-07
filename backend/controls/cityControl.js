const cityModel = require("../models/cityModel")

const addCity = async (req, res) => {
    const { cityCode, countryName, cityName, timeZone } = req.body;
  
    try {
      // Check if the city and country already exist in the database
      const existingCity = await cityModel.findOne({
        cityCode: cityCode,
        cityName: cityName,
        countryName: countryName,
      });
  
      if (existingCity) {
        return res.status(400).json({
          message: "City and country combination already exists in the database.",
        });
      }else{
        
      }
  
      // If not, add the city to the database
      const newCity = await cityModel.create({
        cityCode,
        countryName,
        cityName,
        timeZone,
      });
  
      res.status(201).json(newCity);
    } catch (error) {
      console.error("Error adding city:", error);
      res.status(500).json({
        message: "An error occurred while adding the city.",
        error: error.message,
      });
    }
  };
  

const viewCity= async (req, res)=>{
    try{
        const getCity = await cityModel.find()
        res.json(getCity)
    }catch(Error){
        console.log(Error)
    }
}

const countCity = async (req, res) =>{
    try{
        const numberOfCities = await cityModel.countDocuments();
        res.json({numberOfCities})
    }catch(Error){
        console.log("Error counting the numbers of cities")
    }
}

module.exports = {addCity, viewCity, countCity}