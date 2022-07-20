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
    static associate({Good, User}) {
      this.belongsTo(Good, {
        foreignKey: 'notMineGoodId'
      });
      this.belongsTo(Good, {
        foreignKey: 'myGoodId'
      });
      this.belongsTo(User, {
        foreignKey: 'notMineUserId'
      });
      this.belongsTo(User, {
        foreignKey: 'myUserId'
      });
    }
  }
  Deal.init({
    notMineGoodId: DataTypes.INTEGER,
    myGoodId: DataTypes.INTEGER,
    notMineUserId: DataTypes.INTEGER,
    myUserId: DataTypes.INTEGER,    
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Deal',
  });
  return Deal;
};
