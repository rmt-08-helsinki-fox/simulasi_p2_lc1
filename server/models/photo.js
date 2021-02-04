'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Photo.belongsTo(models.User)
    }
  };
  Photo.init({
    imageUrl: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg: "URL is Invalid"
        }
      }
    },
    UserId: {
      type : DataTypes.INTEGER,
       validate : {
         notEmpty : {
           msg: "User Id must Be Input"
         }
       }
    }
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};