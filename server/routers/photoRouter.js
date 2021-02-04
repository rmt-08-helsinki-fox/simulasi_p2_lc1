const router = require('express').Router()

const PhotoController = require('../controllers/PhotoController')

router.get('/', PhotoController.getAllPhoto)

module.exports = router