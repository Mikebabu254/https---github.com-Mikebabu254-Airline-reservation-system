const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegistrationModel = require('./models/registration'); // Assuming you have a registration model file
const FlightModel = require("./models/flight");             // Use updated flight model
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

const PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/Jetset-airline-reservation", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB", err));

// POST route for registration
app.post("/registration", (req, res) => {
  const { firstName, lastName, phoneNo, gender, email, DOB, password } = req.body;

  RegistrationModel.findOne({ email })
    .then(user => {
      if (user) {
        res.json("The user already exists");
      } else {
        RegistrationModel.create({ 
          firstName, 
          lastName, 
          phoneNo, 
          gender, 
          email, 
          DOB, 
          password, 
          role: "user"  // Default role set to "user"
        })
        .then(result => res.json("Account created successfully"))
        .catch(err => res.json(err));
      }
    })
    .catch(err => res.json(err));
});

// POST route for login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  RegistrationModel.findOne({ email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ status: "success", role: user.role }); // Include role in the response
        } else {
          res.json({ message: "The password is incorrect" });
        }
      } else {
        res.json({ message: "The user does not exist" });
      }
    })
    .catch(err => res.json({ message: "An error occurred", error: err }));
});

// POST route for adding a flight to the schedule
app.post("/flight-schedule", (req, res) => {
  const { flightNumber, origin, destination, time, date } = req.body;

  // Create a new flight document
  FlightModel.create({ flightNumber, origin, destination, time, date })
    .then(flight => res.json({ message: "Flight added successfully", flight }))
    .catch(err => res.json({ message: "Failed to add flight", error: err }));
});

//getting flights 


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
