const express = require("express");
const router = express.Router();
const { getUserData } = require("../controllers/userController");

router.get("/data", getUserData);

module.exports = router;
