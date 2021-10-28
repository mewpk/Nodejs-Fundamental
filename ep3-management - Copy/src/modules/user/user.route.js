const express = require("express")
const router = express.Router()
const userController = require('./controller/user.controllers')

router.get("/",userController.getUsers)

module.exports = router