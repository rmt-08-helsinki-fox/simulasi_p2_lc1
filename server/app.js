require('dotenv').config()
const express = require('express')
const app = express()

const router = require('./routes/index')
const port = 3000

app.use(express.urlencoded({extended: false}))

app.use('/', router)

app.listen(port, () => {
    console.log(`server running on localhost:${port}`)
})