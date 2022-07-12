'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Deals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstGoodId: {
        type: Sequelize.INTEGER,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Goods',
          },
          key: 'id',
          onDelete: "cascade"
        },
      },
      secondGoodId: {
        type: Sequelize.INTEGER,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Goods',
          },
          key: 'id',
          onDelete: "cascade"
        },
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Deals');
  }
};
