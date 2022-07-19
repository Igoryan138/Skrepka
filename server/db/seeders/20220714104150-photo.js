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
        url: 'photo/2l.jpg',
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
      {
        url: 'photo/1h.jpeg',
        goodId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/2h.jpeg',
        goodId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/1el.jpeg',
        goodId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/2el.jpeg',
        goodId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/1a.jpeg',
        goodId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/2a.jpeg',
        goodId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/3a.jpeg',
        goodId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/4a.jpeg',
        goodId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/4el.jpeg',
        goodId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/5el.jpeg',
        goodId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/1p.jpeg',
        goodId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/3p.jpeg',
        goodId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/2p.jpeg',
        goodId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/10l.jpeg',
        goodId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/11l.jpeg',
        goodId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/7h.png',
        goodId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/8h.jpeg',
        goodId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/d1.png',
        goodId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/d2.png',
        goodId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/d3.png',
        goodId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/d4.png',
        goodId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/d5.png',
        goodId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/d6.png',
        goodId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/d7.png',
        goodId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/mem1.png',
        goodId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/mem2.png',
        goodId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'photo/mem3.jpeg',
        goodId: 22,
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
