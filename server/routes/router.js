const router = require('express').Router()

const UserController = require('../controllers/userController')
const PhotoController = require('../controllers/photoController')

router.get('/', (req, res) => {
    res.send("hello")
})

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/photos', PhotoController.getAll)

module.exports = router