'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Good}) {
      this.belongsTo(User, {
        foreignKey: 'userId'
      });
      this.belongsTo(Good, {
        foreignKey: 'goodId'
      })      
    }
  }
  Favourites.init({
    userId: DataTypes.INTEGER,
    goodId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favourites',
  });
  return Favourites;
};
