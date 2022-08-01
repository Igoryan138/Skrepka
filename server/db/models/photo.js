'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate({Good}) {
      this.belongsTo(Good, {
        foreignKey: 'goodId'
      });
    }
  }
  Photo.init({
    url: DataTypes.STRING,
    goodId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};
