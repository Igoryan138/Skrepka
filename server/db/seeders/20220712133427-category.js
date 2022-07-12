'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [{
      name: 'Все категории',
      logo: './icon/all.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Авто',
      logo: './icon/auto.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Электроника',
      logo: './icon/electronics.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Хобби',
      logo: './icon/hobbi.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Личные',
      logo: './icon/personal.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Животные',
      logo: './icon/pets.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
  }
};
