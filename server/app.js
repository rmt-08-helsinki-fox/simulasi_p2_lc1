const express = require('express')
const app =  express()
const PORT = 4000

const router = require('./routes/router.js')

app.use(express.jsone())
app.use(express.urlencoded({extended: false}))

app.use(router)

app.listen(PORT, () => {
    console.log(`App running at port: ${PORT}`);
})