'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Photos', [
     {
    imageUrl: "https://unsplash.com/photos/yC-Yzbqy7PY",
    UserId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    imageUrl: "https://unsplash.com/photos/yC-Yzbqy7PY",
    UserId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    imageUrl: "https://unsplash.com/photos/yC-Yzbqy7PY",
    UserId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    imageUrl: "https://unsplash.com/photos/yC-Yzbqy7PY",
    UserId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    imageUrl: "https://unsplash.com/photos/yC-Yzbqy7PY",
    UserId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
]);
  },

  down:(queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
