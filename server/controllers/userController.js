const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static login (req, res, next) {
        const { email, password } = req.body
        User.findOne({
            where: {email}
        })
        .then(data => {
            if(data) {
                let access_token = generateToken({
                    id: data.id,
                    email: data.email
                })
                res.status(200).json({
                    access_token
                })
            } else res.status(401).json({msg: `Invalid email / password / token`})
        })
        .catch(err => next(err))
    }
}

module.exports = UserController