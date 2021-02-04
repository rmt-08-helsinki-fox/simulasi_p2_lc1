'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helpers/bcrypt')
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
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg: "Email or Password Invalid"
        }
      },
      unique : true
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg: "Email or Password Invalid"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks:{
      beforeCreate(instance,option){
        instance.password = hashPassword(instance.password)
      }
    }
  });
  return User;
};