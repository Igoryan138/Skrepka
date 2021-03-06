'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Good extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Favourites, Category, Deal, Photo }) {
      this.hasMany(Favourites, {
        foreignKey: 'goodId'
      });
      this.hasMany(Deal, {
        foreignKey: 'notMineGoodId'
      });
      this.hasMany(Deal, {
        foreignKey: 'myGoodId'
      });
      this.hasMany(Photo, {
        foreignKey: 'goodId'
      });
      this.belongsTo(User, {
        foreignKey: 'userId'
      });
      this.belongsTo(Category, {
        foreignKey: 'categoryId'
      })
    }
  }
  Good.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    exchange: DataTypes.STRING,
    city: DataTypes.STRING,
    status: DataTypes.STRING,
    isModerate: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Good',
  });
  return Good;
};
