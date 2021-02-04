const router = require('express').Router();
const Controller = require('../controllers');
const authentication = require('../middlewares/authentication');


router.post('/register', Controller.register);
router.post('/login', Controller.login);

router.use(authentication);
router.get('/photos', Controller.showPhotos);

module.exports = router;