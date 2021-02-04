const { Photo } = require('../models/index')

class PhotoContoller {
  static getAllPhoto(req, res, next) {
    Photo.findAll()
      .then( dataPhoto => {
        res.status(200).json(dataPhoto)
      })
      .catch( err => {
        res.status(500).json({message: 'Internal Server Error'})
      })
  }
}

module.exports = PhotoContoller