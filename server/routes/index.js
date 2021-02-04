const router = require('express').Router()
const UserRouter = require('./UserRouter')
const PhotoRouter = require('./PhotoRouter')

router.use('/user', UserRouter)
router.use('/photo', PhotoRouter)

module.exports = router