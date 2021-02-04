const router = require('express').Router()
const galleryRoutes = require('./galleryRoutes')
const userRoutes = require('./userRoutes')
const authenticate = require('../middlewares/authenticate')


router.use('/users',userRoutes)
router.use('/galleries',authenticate, galleryRoutes)

module.exports = router