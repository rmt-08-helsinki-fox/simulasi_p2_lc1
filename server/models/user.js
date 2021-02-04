'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Photo)
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Email sudah terdaftar'
      },
      validate: {
        notEmpty: {
          msg: 'Email tidak boleh kosong'
        },
        isEmail: {
          msg: 'Email Invalid'
        }
      }
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    hooks: {
      beforeBulkCreate: (user,options)=>{
        user.password = hashPass(user.password)
      },
      beforeCreate: (user,options)=>{
        user.password = hashPass(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};