const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegistrationModel = require('./models/registration');
const FlightModel = require("./models/flight");
const { default: FlightSchedule } = require("./models/flight");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Jetset-airline-reservation", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB", err));

// Registration route
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
          role: "user",
        })
        .then(result => res.json("Account created successfully"))
        .catch(err => res.json(err));
      }
    })
    .catch(err => res.json(err));
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  RegistrationModel.findOne({ email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ status: "success", role: user.role, user: {
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender,
            email: user.email,
            DOB: user.DOB
          } });
        } else {
          res.json({ message: "The password is incorrect" });
        }
      } else {
        res.json({ message: "The user does not exist" });
      }
    })
    .catch(err => res.json({ message: "An error occurred", error: err }));
});

// Route for adding a flight
app.post("/flight-schedule", (req, res) => {
  const { flightNumber, origin, destination, time, date } = req.body;

  FlightModel.create({ flightNumber, origin, destination, time, date })
    .then(flight => res.json({ message: "Flight added successfully", flight }))
    .catch(err => res.json({ message: "Failed to add flight", error: err }));
});

// Route for getting all flights
app.get("/flights", async (req, res) => {
  try {
    const flights = await FlightModel.find();
    res.json(flightschedule);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving flights" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
