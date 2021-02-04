const express = require('express')
const router = express.Router()
const Controller = require('../controller/controller')
const authenticate = require('../middleware/authenticate')

router.post('w/register', Controller.register)
router.post('/login', Controller.login)
router.get('/photos', authenticate, Controller.getImages)

module.exports = router