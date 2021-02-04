const { Photo } = require('../models')

class PhotoController {
    static getAllPhoto(req,res,next) {
        Photo.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

}


module.exports = PhotoController