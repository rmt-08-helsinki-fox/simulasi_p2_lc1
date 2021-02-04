const {User} = require('../models/index.js')

class UserController{

    static register(req,res){
        const {email,password} = req.body
        User.create({
            email,
            password
        }).then(user => {
            res.status(201).json({
                id: user.id,
                email: user.email
            })
        }).catch(err => {
            res.status(500).json({msg:err})
        })
    }

    static login(req,res){
        const {email,password} = req.body
        User.findOne({
            where : {email}
        }).then(user => {
            res.status(200).json(user)
        }).catch(err => {
            res.status(500).json({msg:err})
        })
    }

}

module.exports = UserController