'use strict';
const {
  Model
} = require('sequelize');
const {bcryptFile} = require('../helpers/bcrypt')
    module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Photo, { foreignKey: 'UserId' })
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, options) => {
        user.password = bcryptFile(user.password)
      }
    }
  });
  return User;
};