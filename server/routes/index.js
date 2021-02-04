const router = require("express").Router();
const UserController = require("../controllers/userController");
const PhotoController = require("../controllers/photoController");
const authenticate = require("../middlewares/authenticate.js");
const authorize = require("../middlewares/authorize.js");

router.post("/register", UserController.postRegister);
router.post("/login", UserController.postLogin);
router.use(authenticate);
router.get("/photos", authorize, PhotoController.getPhotos);

module.exports = router;
