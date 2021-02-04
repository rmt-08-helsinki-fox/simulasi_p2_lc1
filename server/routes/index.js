const express = require('express');
const router = express.Router();
const galeryRoutes = require('./galery.js')
const userRoutes = require('./user.js')



router.use('/photos', galeryRoutes)
router.use('/', userRoutes) 

module.exports = router