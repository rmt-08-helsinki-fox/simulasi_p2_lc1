const {Gallery} = require("../models/")

class GalleryController {
    static getAllPhotos(req, res){
        Gallery.findAll({
            where: {
                UserId: req.decoded.id
            }
        })
        .then(galleries => {
            res.status(201).json({
                galleries
            })
        })
        .catch(error => {
            res.status(500).json(error)
        })
    }
}

module.exports = GalleryController