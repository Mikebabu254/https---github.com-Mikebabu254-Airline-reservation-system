const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById } = require("../controllers/userController");

// Define routes and attach controller functions
router.get("/", getAllUsers); // Get all users
router.get("/:id", getUserById); // Get a specific user by ID

module.exports = router;
