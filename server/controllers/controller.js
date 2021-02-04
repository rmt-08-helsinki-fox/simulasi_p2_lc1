const { compare } = require('../helpers/bcrypt')
const { generateAccessToken } = require('../helpers/jwt')
const {User, Photo} = require('../models/')


class Controller {
  static register(req,res,next){
    const {email,password} = req.body
    User
      .create({
        email,
        password
      })
      .then(data => {
        const {id,email} = data
        res.status(201).json({
          id,
          email
        })
      })
      .catch(err => {
        next(err)
      })
  }
  static login(req,res,next){
    const {email,password} = req.body
    User
      .findOne({
        where: {
          email
        }
      })
      .then(data => {
        if (!data) {
          throw {msg: 'invalid email or password', status: 400}
        }
        let comparedPass = compare(password,data.password)
        if (!comparedPass) {
          throw {msg: 'invalid email or password', status: 400}
        }
        let access_token = generateAccessToken({ id : data.id , email : data.email });
        
        res.status(200).json({ id : data.id , email : data.email , access_token });
      })
      .catch(err => {
        next(err)
      })
      
  }
  static photos(req,res,next){
    const UserId = req.user.id
    console.log(UserId);
    Photo
      .findAll({
        where: {
          UserId
        }
      })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }
}
module.exports = Controller