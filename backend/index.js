const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegistrationModel = require('./models/registration');
const FlightModel = require("./models/flight");
const { default: FlightSchedule } = require("./models/flight");
const Booking = require("./models/booking");
const AddCityModel = require("./models/addCity");
const app = express();
const session = require("express-session");


app.use(cors());
app.use(express.json());

app.use(
  session({
      secret: "your_secret_key", // Use a strong, random secret key
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false } // Set to true if using HTTPS
  })
);

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

// ...       ..........  .........   ...  .........
// ...       ..........  .........   ...  .........
// ...       ...    ...  ...         ...  ...   ...
// ...       ...    ...  ...    ...  ...  ...   ...
// ........  ..........  ..........  ...  ...   ...
// ........  ..........  ..........  ...  ...   ...

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  RegistrationModel.findOne({ email })
      .then(user => {
          if (user) {
              if (user.password === password) {
                  // Set user data in the session
                  req.session.user = {
                      id: user._id,
                      role: user.role,
                      firstName: user.firstName,
                      email: user.email
                  };

                  res.json({
                      status: "success",
                      role: user.role,
                      user: {
                          firstName: user.firstName,
                          lastName: user.lastName,
                          gender: user.gender,
                          email: user.email,
                          DOB: user.DOB
                      }
                  });
              } else {
                  res.json({ message: "The password is incorrect" });
              }
          } else {
              res.json({ message: "The user does not exist" });
          }
      })
      .catch(err => res.json({ message: "An error occurred", error: err }));
});


// Get user data from session
// Get logged-in user data from session
app.get("/getUserData", (req, res) => {
  if (req.session.user) {
    const userId = req.session.user.id; // Retrieve the user ID from the session

    // Query the database for the full user data
    RegistrationModel.findById(userId)
      .then(user => {
        if (user) {
          res.json({
            status: 'success',
            user: {
              firstName: user.firstName,
              lastName: user.lastName,
              gender: user.gender,
              email: user.email,
              DOB: user.DOB,
              role: user.role, // Add any other fields as necessary
            },
          });
        } else {
          res.json({ status: 'error', message: 'User not found in the database' });
        }
      })
      .catch(err => {
        res.json({ status: 'error', message: 'An error occurred while fetching user data', error: err });
      });
  } else {
    res.json({ status: 'error', message: 'User not logged in' });
  }
});

  





//logout API
app.post("/logout", (req, res) => {
  if (req.session) {
      req.session.destroy(err => {
          if (err) {
              res.json({ message: "Logout failed", error: err });
          } else {
              res.json({ status: "success", message: "Logged out successfully" });
          }
      });
  } else {
      res.json({ message: "No active session" });
  }
});

// Route for adding a flight
app.post("/flight-schedule", (req, res) => {
  const { flightNumber, origin, destination, time, date, noOfSeats } = req.body;

  // Validate that all required fields are present
  if (!flightNumber || !origin || !destination || !time || !date || noOfSeats === undefined) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Create a new flight document
  FlightModel.create({ flightNumber, origin, destination, time, date, noOfSeats })
    .then((flight) => res.json({ message: "Flight added successfully", flight }))
    .catch((err) => res.status(500).json({ message: "Failed to add flight", error: err.message }));
});





// Route for getting flights with optional filters
app.get("/flight-schedule", async (req, res) => {
  const { destination, origin, date } = req.query;

  const filters = {};
  if (destination) filters.destination = { $regex: destination, $options: "i" };
  if (origin) filters.origin = { $regex: origin, $options: "i" };
  if (date) filters.date = date;

  try {
      const flights = await FlightModel.find(filters).limit(5); // Limit to 5 flights
      res.json(flights);
  } catch (err) {
      res.status(500).json({ message: "Error fetching flights", error: err });
  }
});





// Route for adding cities
app.post("/add-city", async (req, res) => {
  const { cityCode, countryName, cityName, timeZone } = req.body;

  // Validate request data
  if (!cityCode || !countryName || !cityName || !timeZone) {
      return res.status(400).json({ message: "All fields are required." });
  }

  try {
      // Check if the city code already exists
      const existingCity = await AddCityModel.findOne({ cityCode });
      if (existingCity) {
          return res.status(409).json({ message: "City with this code already exists." });
      }

      // Create a new city entry
      const city = await AddCityModel.create({ cityCode, countryName, cityName, timeZone });
      res.status(201).json({ message: "City added successfully", city });
  } catch (err) {
      res.status(500).json({ message: "Failed to add city", error: err });
  }
});




// Route for getting all cities
app.get("/cities", async (req, res) => {
  try {
      const cities = await AddCityModel.find(); // Fetch all cities from the database
      res.status(200).json(cities); // Send the cities as a response
  } catch (error) {
      console.error("Error fetching cities:", error);
      res.status(500).json({ message: "Failed to fetch cities." });
  }
});






//Router for fetching cities
app.get("/get-cities", async (req, res) => {
  try {
      const cities = await AddCityModel.find({});
      res.status(200).json(cities);
  } catch (err) {
      res.status(500).json({ message: "Failed to fetch cities", error: err });
  }
});






// Route for getting all flights
app.get("/flight-schedule", async (req, res) => {
  try {
    const flights = await FlightModel.find(); // Fetch all flights from the database
    res.status(200).json(flights);
  } catch (error) {
    console.error("Error fetching flights:", error);
    res.status(500).json({ message: "Failed to fetch flights", error });
  }
});




//Route to get all users details
app.get("/registration", async (req, res) => {
  try{
    const users = await RegistrationModel.find();
    res.status(200).json(users);
  }catch(error){
    console.error("Error fetching the users: ", error);
    res.status(500).json({message: "failed to fetch user data", error});
  }
});






//Route for booking flights
app.post("/bookings", async (req, res) =>{
  try{
    const bookingData = req.body;
    const booking = new Booking(bookingData);
    await booking.save();
    res.status(201).json({ message: "Booking saved successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to save booking." });
    }
})






// Delete route for deleting a flight by ID
app.delete("/flight-schedule/:id", async (req, res) => {
  try {
      const flightId = req.params.id;

      // Use FlightModel to delete the flight
      const deletedFlight = await FlightModel.findByIdAndDelete(flightId);

      if (!deletedFlight) {
          return res.status(404).json({ message: "Flight not found" });
      }

      res.status(200).json({ message: "Flight deleted successfully" });
  } catch (error) {
      console.error("Error deleting flight:", error);
      res.status(500).json({ message: "Error deleting flight", error });
  }
});

//getting flight by id to edit
app.get("/flight-schedule/:id", async (req, res) => {
  try {
      const flight = await FlightModel.findById(req.params.id);
      if (!flight) return res.status(404).json({ message: "Flight not found" });
      res.status(200).json(flight);
  } catch (error) {
      res.status(500).json({ message: "Error fetching flight", error });
  }
});

//editing flight
app.put("/flight-schedule/:id", async (req, res) => {
  try {
      const updatedFlight = await FlightModel.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
      });
      if (!updatedFlight) return res.status(404).json({ message: "Flight not found" });
      res.status(200).json({ message: "Flight updated successfully", updatedFlight });
  } catch (error) {
      res.status(500).json({ message: "Error updating flight", error });
  }
});

app.get("/flight-schedule", (req, res) => {
  const { fromLocation, destination, departureDate } = req.query;

  // Query the database for matching flights
  FlightModel.find({
    origin: fromLocation,
    destination: destination,
    date: departureDate,
  })
    .then(flights => {
      if (flights.length > 0) {
        res.json(flights); // Return the list of flights
      } else {
        res.status(404).json({ message: "No flights found for the given criteria." });
      }
    })
    .catch(err => res.status(500).json({ message: "Error fetching flights", error: err }));
});






// Route for reserving seats
app.post("/reservations", async (req, res) => {
  const { flightId, flightNumber, numSeats } = req.body;

  try {
      const flight = await FlightModel.findById(flightId);

      if (!flight) {
          return res.status(404).json({ message: "Flight not found" });
      }

      if (numSeats > flight.noOfSeats) {
          return res.status(400).json({ message: "Not enough seats available" });
      }

      // Reduce the available seats
      flight.noOfSeats -= numSeats;
      await flight.save();

      // Save reservation details
      const reservation = new ReservationModel({
          flightId,
          flightNumber,
          numSeats,
      });

      await reservation.save();

      res.json({ message: "Reservation successful", reservation });
  } catch (error) {
      console.error("Error making reservation:", error);
      res.status(500).json({ message: "Error making reservation", error });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
