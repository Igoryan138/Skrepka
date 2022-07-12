'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Good}) {
      this.belongsTo(Good, {
        foreignKey: 'firstGoodId'
      });
      this.belongsTo(Good, {
        foreignKey: 'secondGoodId'
      })
    }
  }
  Deal.init({
    firstGoodId: DataTypes.INTEGER,
    secondGoodId: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Deal',
  });
  return Deal;
};
