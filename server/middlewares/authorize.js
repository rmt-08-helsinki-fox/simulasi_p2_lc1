const { User } = require("../models/index");

const authorize = function (req, res, next) {
  User.findOne({ where: { id: req.decoded.id } }) //kayaknya decoded ya
    .then((data) => {
      if (!data) {
        res.status(404).json({ name: "ClientError", msg: "Data Not Found" });
        //ini ga perlu
      } else {
        next();
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json("Internal Server error");
    });
};

module.exports = authorize;

//kayaknya udah bisa
//isinta array kosong
//udah coba masukin body?
