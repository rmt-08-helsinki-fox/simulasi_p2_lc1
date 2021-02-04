const { User, Photo } = require('../models');
const { compare } = require('../helpers/bcrypt')
const generateToken = require('../helpers/jst')

class Controller {
  static register (req, res) {
    User.create(req.body)
      .then((data) => {
        console.log(data);
        res.status(201).json({ id: data.id, email: data.email })
      })
      .catch(err => {
        if (err.errors) {
          const msg = [];
          err.errors.forEach(el => {
            msg.push(el.message);
          })

          res.status(400).json(msg);
        }
        else res.status(500).json({ msg: `Internal Server Error` });
      })
  };

  static login (req, res) {
    User.findOne({ where: { email: req.body.email } })
      .then(data => {
        if (!data) throw { msg: `Invalid email or password` };
        const comparePass = compare(req.body.password, data.password);
        if (!comparePass) throw { msg: `Invalid email or password` };
        const access_token = generateToken({
          id: data.id,
          email: data.email
        })
        res.status(200).json({ id: data.id, email: data.email, access_token });
      })
      .catch(err => {
        console.log(err);
        if (err.errors) {
          const msg = [];
          err.errors.forEach(el => {
            msg.push(el.message);
          })
          res.status(400).json(msg);
        }
        else res.status(500).json({ msg: `Internal Server Error` });
      })
  };

  static showPhotos (req, res, next) {
    Photo.findAll({ where: { UserId: req.decoded.id }})
      .then(data => {
        if (!data) throw { msg: `Data not found` };
        res.status(200).json({ photos: data })
      })
      .catch(err => {
        if (err.errors) {
          const msg = [];
          err.errors.forEach(el => {
            msg.push(el.message);
          })
          res.status(404).json(msg);
        }
        else res.status(500).json({ msg: `Internal Server Error` });
      })
  };
};

module.exports = Controller