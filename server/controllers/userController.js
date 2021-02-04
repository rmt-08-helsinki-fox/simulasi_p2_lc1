const {User} = require('../models')
const { comparePass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jsonwebtoken')
class UserController {
    static register(req, res) {
        const {
            email,
            password
        } = req.body
        
        User.create({email, password})
            .then(result => {
                const {id, email} = result
                res.status(201).json({
                    id, email
                })
            })
            .catch(err => {
                res.status(500).json({message: 'Internal server error'})
            })
    }

    static login(req, res) {
        const { email, password } = req.body

        User.findOne({where:{email}})
            .then(user => {
                if(!user) throw({message: 'User or password wrongs'})
                const hashedPass = user.password
                const compared = comparePass(password, hashedPass)
                if (!compared) {
                    throw({message: 'User or password wrongs'})
                } else {
                    const access_token = generateToken({
                        id: user.id,
                        email: user.email
                    })
                    
                    res.status(200).json({
                        id: user.id,
                        email: user.email,
                        access_token})
                }
            })
            .catch(err => {
                res.status(500).json({message: 'Internal server error'})
            })
    }
}

module.exports = UserController