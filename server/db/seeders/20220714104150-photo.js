'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [
      {
        url: 'photo/1l.jpeg',
        goodId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/2l.jpeg',
        goodId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/3l.jpeg',
        goodId: 3,
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
