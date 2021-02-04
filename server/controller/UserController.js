const { User } = require('../models/index')
const { generateToken } = require('../helper/jwt')
const { comparePass } = require('../helper/bcrypt')

class UserController {
  static register(req, res, next) {
    let newUser = {
      email: req.body.email,
      password: req.body.password
    }

    User.create(newUser)
      .then(dataUser => {
        newUser = {
          id: dataUser.id,
          email: dataUser.email
        }
        res.status(201).json(newUser)
      })
      .catch( err => {
        res.status(500).json({message: 'Internal Server Error'})
      })
  }

  static login(req, res, next){
    let dataLogin = {
       email: req.body.email,
      password: req.body.password
    }

    User.findOne({where: {
      email: dataLogin.email
      }
    })
      .then(dataUser => {
        if (dataUser) {
          let matchPass = comparePass(dataLogin.password, dataUser.password)
          
          if(matchPass) {
            let payload = {
              id: dataUser.id,
              email: dataUser.email
            }
            let access_token = generateToken(payload)
            res.status(200).json({access_token})
          }
          else {
            throw({name: 'JWTError', message: 'Invalid Email or Password'})
          }
        } else {
          throw({name: 'NotFoundError', message: 'Invalid Email or Password'})
        }
      })
      .catch( err => {
        res.status(500).json({message: err.message})
      })
  }
}

module.exports = UserController