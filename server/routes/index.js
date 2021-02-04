const express = require('express')
const router = express.Router()
const routerUser = require('./user') 
const routerPhoto = require('./photo')

router.use('/users', routerUser)
router.use('/photo', routerPhoto)

module.exports = router