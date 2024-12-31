// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const session = require("express-session");
// const registrationRoutes = require("./routes/registrationRoutes");
// const flightRoutes = require("./routes/flightRoutes");
// const cityRoutes = require("./routes/cityRoutes");
// const userRoutes = require("./routes/userRoutes");
// const authRoutes = require("./routes/authRoutes");

// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());

// // Session configuration
// app.use(
//   session({
//     secret: "your_secret_key",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false },
//   })
// );

// // MongoDB connection
// mongoose.connect("mongodb://127.0.0.1:27017/Jetset-airline-reservation", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Could not connect to MongoDB", err));

// // Register routes
// app.use("/registration", registrationRoutes);
// app.use("/flight", flightRoutes);
// app.use("/city", cityRoutes);
// app.use("/user", userRoutes);
// app.use("/auth", authRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
