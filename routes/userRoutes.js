const userCtrl = require("../controllers/userCtrl")
const  {validateUserRegistration, validateUserLogin}  = require("../middleware/userMiddlewares")
const express = require("express")

const router = express.Router()


router.post("/user/add", validateUserRegistration, userCtrl.registration)

router.post("/user/login", validateUserLogin, userCtrl.login)

module.exports = router