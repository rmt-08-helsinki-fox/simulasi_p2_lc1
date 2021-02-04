if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}
const cors = require('cors')
const express = require('express');
const app = express();
const PORT = 3000;
const router = require("./routes/")

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));