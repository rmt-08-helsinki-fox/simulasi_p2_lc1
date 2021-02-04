const router = require('express').Router();
const AuthController = require('../controller/authzController.js');

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

module.exports = router;