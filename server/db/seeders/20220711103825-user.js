'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Артем',
        lastName: 'Лопасов',
        email: 'artem@mail.ru',
        phone: '8999999999',
        password: '1111',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Игорь',
        lastName: 'Якушев',
        email: 'igor@mail.ru',
        phone: '8999999999',
        password: '1111',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Виталий',
        lastName: 'Бутурлин',
        email: 'vitalii@mail.ru',
        phone: '8999999999',
        password: '1111',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
