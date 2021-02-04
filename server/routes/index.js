const router = require("express").Router();
const users = require("./users.js");

router.use("/users", users);

// router.use("/photos", photos);

module.exports = router;
