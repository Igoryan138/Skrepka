'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Goods', [
      {
        title: 'Брошь',
        description: 'Брошь в виде трекозы',
        exchange: 'Перстень',
        city: 'Москва',
        status: 'active',
        isModerate: true,
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ручка',
        description: 'Стильная синяя ручка',
        exchange: 'Ластик',
        city: 'Москва',
        status: 'active',
        isModerate: true,
        userId: 2,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Перстень',
        description: 'перстень-печатка',
        exchange: 'Подвеска или брошь',
        city: 'Москва',
        status: 'active',
        isModerate: true,
        userId: 3,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
