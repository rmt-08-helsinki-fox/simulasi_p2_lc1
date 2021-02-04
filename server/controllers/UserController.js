const { User } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { use } = require('../routers')

class UserController{
  static register (req, res){
    let {email, password} = req.body
    User.create({
      email,
      password
    })
    .then(user => {
      console.log(user)
      let response = {
        id: user.id,
        email: user.email
      }
      res.status(201).json(response)
    })
    .catch(err => {
      console.log(err.name)
      if(err.name == 'SequelizeValidationError'){
        return res.status(400).json(err.errors[0].message)  
      } else if(err.name == 'SequelizeUniqueConstraintError'){
        return res.status(400).json({msg: 'Email already exist'})
      }
      res.status(500).json({msg: 'internal server error'})
    })
  }
  static async login(req, res){
    try {
      let { email, password } = req.body
      let user = await User.findOne({
        where: { email }
      })
      if(!user){
        return res.status(404).json({msg: 'Email Not Found'})
      }
      const isMatch = comparePassword(password, user.password)
      if(!isMatch){
        return res.status(401).json({msg: 'Wrong Password'})
      }
      const payload = {
        id: user.id,
        email: user.email
      }
      const access_token = generateToken(payload)
      res.status(200).json(access_token)

    } catch (err) {
      res.status(500).json({msg: 'Internal Server Error'})
    }
  }
}

module.exports = UserController