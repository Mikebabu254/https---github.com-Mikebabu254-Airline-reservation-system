const express = require("express");
const mongoose = require("mongoose");


const app = express();
const PORT = 3000;


app.use(express.json());


// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Jetset-airline-reservation")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
