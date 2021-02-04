const { Photo, User } = require("../models")
const { comparePassword } = require("../helpers/bcrypt")
const generateToken = require("../helpers/jwt")

class Controller {
    static getPhoto(req, res) {
        Photo.findAll()
            .then(data => {
                console.log(data);
                
            })
            .catch(err => {
                console.log(err);
            })
    }
    static postRegister(req,res){
        const email = req.body.email
        const password = req.body.password
        const newData = {
            email,
            password
        }
        User.create(newData)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
    static postLogin(req,res) {
        const email = req.body.email
        const password = req.body.password
        User.findOne({where: {email}})
            .then(user => {
                if (!user){
                    throw {name: "invalid email or password", message: "invalid email or password"}
                }
                const isPasword = comparePassword(password, user.password)
                 if (!isPasword) {
                    throw {name: "invalid email or password", message: "invalid email or password"}
                 }
                 const access_token = generateToken({
                     id: user.id,
                     email: user.email
                 })
                 res.status(200).json({access_token, email})
            })
            .catch(err => {
                if (err.name === "invalid email or password") {
                    res.status(401).json(err.message)
                } else {
                    res.status(500).json(err)
                }
            })
    }
}

module.exports = Controller