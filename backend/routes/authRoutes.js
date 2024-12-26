const express = require("express");
const RegistrationModel = require("../models/registration");
const router = express.Router();

// Registration
router.post("/register", (req, res) => {
  const { firstName, lastName, phoneNo, gender, email, DOB, password } = req.body;

  RegistrationModel.findOne({ email })
    .then((user) => {
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
          .then(() => res.json("Account created successfully"))
          .catch((err) => res.json(err));
      }
    })
    .catch((err) => res.json(err));
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  RegistrationModel.findOne({ email })
    .then((user) => {
      if (user && user.password === password) {
        req.session.user = {
          id: user._id,
          role: user.role,
          firstName: user.firstName,
          email: user.email,
        };
        res.json({
          status: "success",
          role: user.role,
          user: {
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender,
            email: user.email,
            DOB: user.DOB,
          },
        });
      } else {
        res.json({ message: "Invalid credentials" });
      }
    })
    .catch((err) => res.json({ message: "An error occurred", error: err }));
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) res.json({ message: "Logout failed", error: err });
      else res.json({ status: "success", message: "Logged out successfully" });
    });
  } else {
    res.json({ message: "No active session" });
  }
});

module.exports = router;
