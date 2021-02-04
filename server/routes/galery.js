const express = require('express');
const router = express.Router();
const GalerieController = require('../controller/galerie.js');

router.get('/', GalerieController.showPict);
router.post('/create', GalerieController.create);

module.exports = router

