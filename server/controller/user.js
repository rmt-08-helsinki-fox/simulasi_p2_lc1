const {User} = require('../models/index.js');
const { generateToken} = require('../helper/jwt.js');
const {comparePassword} = require('../helper/bcrypt.js');


class UserController {

    static login (req, res, next){
        const {email, password} = req.body
        User.findOne({where : {email}})
        .then(user =>{
            if(!user) throw new Error({msg : "invalid email or password"})
            const compPass = comparePassword(password, user.password)
            if(!compPass) throw new Error({msg: "invalid email or password"})
            const token = generateToken({
                id:user.id,
                email:user.email
            })
            res.status(200).json({
                id : user.id,
                email : user.email,
                access_token : token
            })
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
    

    static register (req, res, next ){
        User.create(req.body)
        .then((data) => {
            res.status(201).json({
              id : data.id,
              email : data.email  
            })
        }).catch((err) => {
            res.status(500).json(err)
        });
    }
}

module.exports = UserController