'use strict';

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
   return queryInterface.bulkInsert("Images", [
     {
       "imageUrl": "https://unsplash.com/photos/yC-Yzbqy7PY",
       "createdAt": "2020-06-12T16:22:40.469Z",
      "updatedAt": "2020-06-12T16:22:40.469Z"
     },
     {
      "imageUrl": "https://unsplash.com/photos/yC-Yzbqy7PY",
      "createdAt": "2020-06-12T16:22:40.469Z",
     "updatedAt": "2020-06-12T16:22:40.469Z"
    },
    {
      "imageUrl": "https://unsplash.com/photos/yC-Yzbqy7PY",
      "createdAt": "2020-06-12T16:22:40.469Z",
     "updatedAt": "2020-06-12T16:22:40.469Z"
    }
   ])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Images", null, {})
  }
};
