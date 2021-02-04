const { Photo } = require("../models");

class PhotoController {
  static getPhotos(req, res) {
    let userid = req.decoded.id;
    Photo.findAll({
      where: {
        UserId: userid,
      },
    })
      .then((data) => {
        console.log(JSON.stringify(data, null, 2));
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
}

module.exports = PhotoController;
