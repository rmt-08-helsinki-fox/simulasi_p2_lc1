const {User} = require("../models/")
const {comparePassword} = require("../helpers/bcrypt")
const generateToken = require("../helpers/jwt")

class UserController {
    static register(req, res) {
        const {email, password} = req.body
        const userData = {email, password}
        User.create(userData)
        .then(user => {
            res.status(201).json({
                id: user.id,
                email: user.email
            })
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
    
    static login(req, res){
        const {email, password} = req.body
        User.findOne({
            where: {
                email:email
            }
        })
        .then(user => {
            if (!user){
                throw {name: "CustomError", msg: "Email or password is wrong", status: 400}
            }
            const comparedPass = comparePassword(password, user.password)
            if (!comparedPass){
                throw {name: "CustomError", msg: "Email or password is wrong", status: 400}
            }
            const access_token = generateToken({id: user.id, email: user.email})
            res.status(200).json({access_token})
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
}

module.exports = UserController