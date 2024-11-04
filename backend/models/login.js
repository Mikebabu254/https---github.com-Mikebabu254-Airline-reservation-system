// Required Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User'); // Import the User model created in registration
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/Jetset-airline-reservation', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((error) => console.error("MongoDB connection error:", error));

// Login Endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the email exists in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User does not exist!" });
        }

        // Compare the provided password with the stored password directly
        if (password !== user.password) {  // Direct comparison without hashing
            return res.status(400).json({ success: false, message: "Invalid password!" });
        }

        // Login successful
        res.json({ success: true, message: "Login successful!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error. Please try again." });
        console.error("Login error:", error);
    }
});

// Start the server
const PORT = 3
