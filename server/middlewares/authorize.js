const { Photo } = require("../models/index");

const authorize = function (req, res) {
  Photo.findOne({ where: { id: req.params.id } })
    .then((data) => {
      if (!data) {
        res.status(404).json({name: "ClientError", msg: "Data Not Found"})
      } else if (data.UserId !== req.decoded.id) {
        res.status(401).json( {
          name: "ClientError",
          msg: "You dont have authorization to access",
        })
      }
    })
    .catch((err) => {
      res.status(500).json('Internal Server error')
    });
};

module.exports = authorize;
