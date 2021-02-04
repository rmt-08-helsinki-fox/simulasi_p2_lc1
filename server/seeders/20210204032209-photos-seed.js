"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Photos", [
      {
        imageUrl: "https://i.ytimg.com/vi/BvZgvz3IAzs/maxresdefault.jpg",
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date ()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Photos", null, {});
  },
};
