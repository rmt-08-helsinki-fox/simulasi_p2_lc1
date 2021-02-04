const {Image} = require('../models')

function authorize() {
    let User = req.decoded.id

    Image.findAll({where: {
        Userd: User
    }})
    .then(image => {
        
    })
}