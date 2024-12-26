const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const flightRoutes = require("./routes/flightRoutes");
const cityRoutes = require("./routes/cityRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/Jetset-airline-reservation", {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Register Routes
app.use("/auth", authRoutes);
app.use("/flights", flightRoutes);
app.use("/cities", cityRoutes);
app.use("/users", userRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
