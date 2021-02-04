const router = require("express").Router()
const Controller = require("../controller/index")
const authenticate = require("../middleware/authentication")
const authorization = require("../middleware/authorization")


router.post("/register", Controller.postRegister)
router.post("/login",Controller.postLogin)
router.use(authenticate)
router.get("/photos", authorization, Controller.getPhoto)

module.exports = router; 