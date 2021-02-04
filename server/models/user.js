'use strict';
const hashPassword = require('../helper/hashPassword');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Photo, {foreignKey: 'UserId'})
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Email format invalid'
        }
      }
    }, 
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6],
          msg: 'Password minimum 6 characters length'
        }
      }
    } 
  }, {hooks: {
    beforeCreate: (user, options) => {
      user.password = hashPassword(user.password)
    }
  },
    sequelize,
    modelName: 'User',
  });
  return User;
};