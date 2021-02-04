'use strict';
const photos = require("../photo.json")
module.exports = {
  up: (queryInterface, Sequelize) => {
    photos.map(photo => {
      photo.createdAt = new Date()
      photo.updatedAt = new Date()
      return photo
    })

    return queryInterface.bulkInsert("Galleries", photos, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Galleries", null, {})
  }
};
