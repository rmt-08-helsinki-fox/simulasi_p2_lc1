const {User} = require('../models/index')
const {compare} = require('../helpers/bcrypt')
const jwt = require('jsonwebtoken')

class UserController {
    static register(req, res, next){
        let email = req.body.email || ''
        let password = req.body.password || ''
        User.create({email, password})
        .then(user => {
            res.status(201).json({id: user.id, email:user.email})
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static login(req,res,next){
        const {email, password} = req.body
        User.findOne({
            where: {email}
        })
        .then(user=>{
            if(!user)throw {msg: "Invalid email or password"}
            const comparedPassword = compare(password, user.password)

            if(!comparedPassword){
                throw {msg: "Invalid email or password"}
            }
            let access_token = jwt.sign({UserId:user.id, email}, 'secret')
            res.status(200).json({id:user.id, email, access_token})
        })
        .catch(err =>{
            const error = err.msg || 'internal server error'
            res.status(500).json({error})
        })
    }
}

module.exports = UserController