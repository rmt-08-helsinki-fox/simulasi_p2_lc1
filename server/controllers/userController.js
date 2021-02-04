const {User} = require('../models')
const comparePassword = require('../helper/comparePassword')
const generateToken = require('../helper/jwt')

class controller {
  static login (req, res, next){
    let {email, password} = req.body
    let dataUser= {
      email,
      password
    }

    User.findOne({
      where: {
        email
      }
    })
    .then(data=>{
      if(data){
        let check = comparePassword(dataUser.password, data.password)
        if(check){
          let payload = {id: data.id, email: data.email}
          let access_token = generateToken(payload)
          res.status(200).json({id: data.id, email: data.email ,access_token})
        } else {
          res.status(401).json({message: 'invalid email/password'})
        }
      } else {
        res.status(401).json({message: 'Invalid email/password'})
      }
    })
  }

  static register (req, res, next){
    let {email, password} = req.body
    let data = {
      email,
      password
    }

    User.create(data)
    .then(data=>{
      res.status(201).json({
        id: data.id,
        email: data.email
      })
    })
    .catch(err => {
      res.status(500).json({message: 'Internal Server Error'})
    })
  }

}

module.exports = controller
