const express = require('express')
const photoController = require('../controllers/photoController')
const router = express.Router()
const authenticate = require('../middlewares/authentice')

router.use(authenticate)
router.get('/', photoController.getPhotos)

module.exports = router