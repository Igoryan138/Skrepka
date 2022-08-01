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
      notMineGoodId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Goods',
          },
          key: 'id',
          onDelete: "cascade"
        },
      },
      myGoodId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Goods',
          },
          key: 'id',
          onDelete: "cascade"
        },
      },
      notMineUserId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
          onDelete: "cascade"
        },
      },
      myUserId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
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
