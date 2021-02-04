const { User } = require("../models");
const { comparePass } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class UserController {
  static postRegister(req, res) {
    const { email, password } = req.body;
    User.create({ email, password })
      .then((user) => {
        res
          .status(201)
          .json({ msg: "Register Success", id: user.id, email: user.email });
      })
      .catch((err) => {
        res.status(500).json({ msg: "Internal Server Error" });
      });
  }

  static postLogin(req, res) {
    const { email, password } = req.body;

    User.findOne({
      where: {
        email,
      },
    })
      .then((user) => {
        if (!user)
          throw {
            name: "ClientError",
            msg: "Invalid email or password!",
            status: 400,
          };
        const comparedPassword = comparePass(password, user.password);
        if (!comparedPassword)
          throw {
            name: "ClientError",
            msg: "Invalid email or password!",
            status: 400,
          };
        const access_token = generateToken({
          id: user.id,
          email: user.email,
        });
        res.status(200).json({ access_token });
      })
      .catch((err) => {
          console.log(err)
        res.status(500).json({ msg: "internal server error" });
      });
  }
}

module.exports = UserController;
