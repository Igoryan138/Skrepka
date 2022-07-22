'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
    {
      name: 'Авто',
      identifier: 'automobile',
      logo: 'icon/auto.jpg',
      title: 'icon/auto.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Электроника',
      identifier: 'electronics',
      logo: 'icon/electronics.jpg',
      title: 'icon/electronics.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Хобби и отдых',
      identifier: 'hobbies',
      logo: 'icon/hobbi.jpg',
      title: 'icon/hobbi.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Личные вещи',
      identifier: 'personals',
      logo: 'icon/personal.jpg',
      title: 'icon/personal.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Животные',
      identifier: 'animals',
      logo: 'icon/pets.jpg',
      title: 'icon/pets.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
  }
};
