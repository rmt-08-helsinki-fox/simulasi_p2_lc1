'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      let datas = [{
          imageUrl : 'https://unsplash.com/photos/9bLV1itrOj0',
          UserId: 5,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          imageUrl : 'https://unsplash.com/photos/Zi3n4HenIA4',
          UserId: 5,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          imageUrl : 'https://unsplash.com/photos/xcXgPdNb-dU',
          UserId: 5,
          createdAt : new Date(),
          updatedAt : new Date()
        }
      ]

      await queryInterface.bulkInsert('Photos',datas);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Photos', null, {});
  }
};
