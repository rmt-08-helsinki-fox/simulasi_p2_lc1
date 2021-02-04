require("dotenv").config();

const express = require("express");
const index = require("./routes/index.js");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use("/", index);

app.listen(port, () => {
  console.log("running on port ", port);
});
