const {Photo} = require('../models')

class PhotoController {
    static getAll(req, res) {
        const UserId = req.decoded.id
        Photo.findAll({
            where: {
                UserId
            }
        })
            .then(photos => {
                res.status(200).json(photos)
            })
            .catch(err => {
                res.status(500).json({message: 'Internal server error'})
            })
    }
}

module.exports = PhotoController