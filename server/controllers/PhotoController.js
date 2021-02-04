const { Photo } = require('../models/index')

class PhotoController{
  static getAllPhoto(req, res){
    Photo.findAll()
    .then(photos => {
      res.status(200).json(photos)
    })
    .catch(err => {
      res.status(500).json({msg: 'Internal Server Error'})
    })
  }
}

module.exports = PhotoController