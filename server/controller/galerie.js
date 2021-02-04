const { Galery, User } = require('../models/index.js');

class GalerieController {

    static showPict (req, res, next){
        res.send('ini galerie di controller')

    }
    static create(req, res, next) {
        const {name, imgUrl, UserId} = req.body
        Galery.create({
            name,
            imgUrl,
            UserId
        })
    }
}

module.exports = GalerieController;