'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helper/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Galery, {foreignKey : "UserId"})
    }
  };
  User.init({
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg: 'Invalid email format'
        }
      }
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate : (user, option) => {
        user.password = hashPassword(user.password)
        console.log('inih inih hooks ')
      }
    }
  });
  return User;
};