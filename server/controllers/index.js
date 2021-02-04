const { User } = require("../models/index");
const { comparePass } = require("../helpers/bcrypt.js");
const { generateToken } = require("../helpers/jwt.js");

class Controller {
  static postRegister(req, res, next) {
    let inputData = {
      email: req.body.email,
      password: req.body.password,
    };
    User.create(inputData)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => {
        next(error);
      });
  }

  static async postLogin(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: { email },
      });

      if (!user)
        throw {
          name: "CustomError",
          msg: "Invalid email or password",
          status: 400,
        };

      const comparePassword = await comparePass(password, user.password);

      if (!comparePassword)
        throw {
          name: "CustomError",
          msg: "Invalid email or password",
          status: 400,
        };

      const accessToken = generateToken({
        id: user.id,
        email: user.email,
      });

      res.status(200).json({
        id: user.id,
        email: user.email,
        access_Token: accessToken,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
