require("dotenv").config()
const cors = require("cors")
const expres = require("express")
const app = expres()
const port = 3000;
const router = require("./routers/index")

app.use(cors())
app.use(expres.json())
app.use(expres.urlencoded({extended: false}))
app.use("/", router)

app.listen(port, () => {
    console.log(`ported at ${port}`);
})