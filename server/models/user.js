'use strict';
const {
  Model
} = require('sequelize');
const {hashing} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Photo, {
        foreignKey: 'UserId',
        targetKey: 'id'
      })
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Email cannot be empty'
        },
        isEmail: {
          args: true,
          msg: 'Must be email format'
        }
      },
      unique: {
        args: true,
        msg: 'Email has been register'
      }
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashing(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};