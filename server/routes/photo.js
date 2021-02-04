const express = require('express')
const router = express.Router()
const Photo = require('../controllers/photoController')


router.get('/', Photo.getAllPhoto)

module.exports = router