'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Goods', [
      {
        title: 'товар1',
        description: 'описание1',
        exchange: '',
        city: 'Москва',
        status: 'active',
        isModerate: true,
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'товар2',
        description: 'описание2',
        exchange: '',
        city: 'Москва',
        status: 'active',
        isModerate: true,
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'товар3',
        description: 'описание3',
        exchange: '',
        city: 'Москва',
        status: 'active',
        isModerate: true,
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'товар4',
        description: 'описание4',
        exchange: '',
        city: 'Иркутск',
        status: 'active',
        isModerate: true,
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'товар5',
        description: 'описание5',
        exchange: '',
        city: 'Иркутск',
        status: 'active',
        isModerate: true,
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'товар6',
        description: 'описание6',
        exchange: '',
        city: 'Иркутск',
        status: 'active',
        isModerate: true,
        userId: 2,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'товар7',
        description: 'описание7',
        exchange: '',
        city: 'Челябинск',
        status: 'active',
        isModerate: true,
        userId: 2,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'товар8',
        description: 'описание8',
        exchange: '',
        city: 'Челябинск',
        status: 'active',
        isModerate: true,
        userId: 2,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'товар9',
        description: 'описание9',
        exchange: '',
        city: 'Челябинск',
        status: 'active',
        isModerate: true,
        userId: 2,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'товар10',
        description: 'описание10',
        exchange: '',
        city: 'Саратов',
        status: 'active',
        isModerate: true,
        userId: 2,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'товар11',
        description: 'описание11',
        exchange: '',
        city: 'Саратов',
        status: 'active',
        isModerate: true,
        userId: 3,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'товар12',
        description: 'описание12',
        exchange: '',
        city: 'Саратов',
        status: 'active',
        isModerate: true,
        userId: 3,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'товар13',
        description: 'описание13',
        exchange: '',
        city: 'Анапа',
        status: 'active',
        isModerate: true,
        userId: 3,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'товар14',
        description: 'описание14',
        exchange: '',
        city: 'Анапа',
        status: 'active',
        isModerate: true,
        userId: 3,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'товар15',
        description: 'описание15',
        exchange: '',
        city: 'Анапа',
        status: 'active',
        isModerate: true,
        userId: 3,
        categoryId: 5,
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
