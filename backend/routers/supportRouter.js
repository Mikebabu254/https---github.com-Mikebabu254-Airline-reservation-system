const express = require("express")
const router = express.Router()
const {support} = require("../controls/supportControl")

router.post("/support", support)

module.export = router