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
      {
        firstName: 'Антон',
        lastName: 'Краснов',
        email: 'antonK@mail.ru',
        phone: '88005553535',
        password: 'a1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Денис',
        lastName: 'Образцов',
        email: 'aDaptiB4uk@mail.ru',
        phone: '89646743173',
        password: 'apaptiv',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Тарас',
        lastName: 'Голомозый',
        email: 'taras@mail.ru',
        phone: '89099645656',
        password: 'Oboi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Дарья',
        lastName: 'Брылева',
        email: 'dashAAA@mail.ru',
        phone: '89777689016',
        password: 'dasha',
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
