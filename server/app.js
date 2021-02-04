require('dotenv').config()

const express = require('express')
const router = require('./routes/index')
const cors = require('cors')
const app = express()
const PORT = 3000


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(router)


app.listen(PORT,() => {
    console.log(`server running to port ${PORT}`)
})