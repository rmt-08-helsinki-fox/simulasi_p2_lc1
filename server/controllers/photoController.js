const {Photo} = require('../models/')

class photoController{
    static getPhotos(req,res, next){
        let UserId = req.headers.User.UserId
        Photo.findAll({where: {UserId}})
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }

}

module.exports = photoController