require("dotenv").config();
const cors = require("cors");

const express = require("express");
const index = require("./routes/index.js");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", index);

app.listen(port, () => {
  console.log("running on port ", port);
});
