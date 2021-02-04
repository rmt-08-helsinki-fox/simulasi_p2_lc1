const express = require('express')
const app = express()
const PORT = 3000
const router = require('./routes')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/', router)

app.listen(PORT , () => {
    console.log('this server running on', PORT)
})