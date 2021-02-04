const router = require('express').Router()
const GalleryController = require("../controllers/GalleryController")

router.get('/photos', GalleryController.getAllPhotos)

module.exports = router