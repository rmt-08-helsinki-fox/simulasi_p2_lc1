const router = require('express').Router()
const PhotoContoller = require('../controller/PhotoController')


router.post('/register', PhotoContoller.getAllPhoto)

module.exports = router