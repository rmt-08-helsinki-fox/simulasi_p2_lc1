const router = require('express').Router()
const userRouter = require('./userRouter')
const photoRouter = require('./photoRouter')

router.use('/', userRouter)
router.use('/photos', photoRouter)

module.exports = router