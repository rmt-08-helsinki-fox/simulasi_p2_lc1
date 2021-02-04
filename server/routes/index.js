const router = require('express').Router()
const userRouter = require('./user')
const photoRouter = require('./photo')



router.use('/', userRouter)
router.use('/photo', photoRouter)


module.exports = router