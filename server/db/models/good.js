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
    static associate({User, Favourites, Category, Deal}) {
      this.hasMany(Favourites, {
        foreignKey: 'goodId'
      });
      this.hasMany(Deal, {
        foreignKey: 'firstGoodId'
      });
      this.hasMany(Deal, {
        foreignKey: 'secondGoodId'
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
    description: DataTypes.STRING,
    photo: DataTypes.STRING,
    city: DataTypes.STRING,
    isModerate: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Good',
  });
  return Good;
};
