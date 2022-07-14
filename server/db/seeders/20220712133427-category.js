'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
    {
      name: 'Авто',
      identifier: 'automobile',
      logo: 'https://picsum.photos/id/46/300/200',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Электроника',
      identifier: 'electronics',
      logo: 'https://picsum.photos/id/47/300/200',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Хобби и отдых',
      identifier: 'hobbies',
      logo: 'https://picsum.photos/id/48/300/200',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Личные вещи',
      identifier: 'personals',
      logo: 'https://picsum.photos/id/49/300/200',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Животные',
      identifier: 'animals',
      logo: 'https://picsum.photos/id/50/300/200',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
  }
};
