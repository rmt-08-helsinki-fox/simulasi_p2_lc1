if(process.env.NODE_ENV == 'development'){
  console.log('dotenv activated')
  require('dotenv').config()
}

const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 3000
const router = require('./routers/index.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

app.listen(PORT, () => {
  console.log('app listening on port ' + PORT)
})