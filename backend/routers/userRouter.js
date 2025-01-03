const express = require("express")
const router = express.Router()
const {registerUser, loginUser, allUser} = require("../controls/userControl")

router.post("/registration", registerUser)
router.post("/login", loginUser)
router.get("/all-users", allUser)

module.exports = router;