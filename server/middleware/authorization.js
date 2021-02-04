const { User, Photo } = require("../models")

function authorization (req, res, next) {
    let {id, email} = req.decoded 
    User.findOne({
        where: {
            email
        },
        include: [Photo]
    })
        .then(data => {
            // console.log(data.Photos)
            res.status(200).json(data.Photos)
        })
        .catch(err => {
            // console.log(err)
            res.status(500).json(err)
        })
}

module.exports = authorization