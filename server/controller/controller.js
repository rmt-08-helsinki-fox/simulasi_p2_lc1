const {User, Image} = require("../models")
const {comparePass} = require('../middleware/bcrypt')
const {newToken} = require('../middleware/jwt')

class Controller {
  static register(req, res, next){
    let newUser = {
      email: req.body.email,
      password: req.body.password
    }
    console.log(newUser, "THIS IS NEW USER")

    User.create(newUser)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        console.log(err)
        res.status(401).json({msg: "Bad Request"})
    })
  }
  
  static login(req, res, next) {
    
    User.findOne({where:{email: req.body.email}})
    .then(user => {
        let compare = comparePass(req.body.password, user.password)
        if(compare) {
          let payload = {
            id: user.id,
            email: user.email
          }
            let access_token = newToken(payload)
            res.status(200).json({
              id: user.id,
              email: user.email,
              access_token: access_token
            })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({msg: "Incorrect Email or Password"})
    })
    
  }
  static getImages(req, res, next) {
    Image.findAll({
      where: {
        UserId: req.decoded.id
      }
    })
    .then(image => {
      res.status(200).json(image)
    })
    .catch(err => {
        res.status(400).json({msg: "User has no image"})
    })
  }
}

module.exports = Controller