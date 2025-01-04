const express = require("express")
const router = express.Router()
const {registerUser, loginUser, allUser, countUsers} = require("../controls/userControl")

router.post("/registration", registerUser)
router.post("/login", loginUser)
router.get("/all-users", allUser)
router.get("/users-total", countUsers)

module.exports = router;