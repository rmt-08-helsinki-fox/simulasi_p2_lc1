const { User } = require("../models/index");

const authorize = function (req, res, next) {
  User.findOne({ where: { id: req.decoded.id } })
    .then((data) => {
      if (!data) {
        res.status(404).json({ name: "ClientError", msg: "Data Not Found" });
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
