if (process.env.NODE_ENV === 'development'){
  require('dotenv').config()
}
const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)

app.listen(port, ()=>{
  console.log(`running on port ${port}`);
}) 