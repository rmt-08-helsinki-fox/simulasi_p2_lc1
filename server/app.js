const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const index = require('./routes/')
const errHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', index)
app.use(errHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})