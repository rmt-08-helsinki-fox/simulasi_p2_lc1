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
    const data = [
      {
          "UserId" : 1,
          "imageUrl" : "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8&auto=format&fit=crop&w=800&q=60",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
        "UserId" : 1,
        "imageUrl" : "https://i2.wp.com/www.wintersexpress.com/files/2019/08/IMG_4605.sunflower.jpg?resize=750%2C375&ssl=1",
        "createdAt": new Date(),
        "updatedAt": new Date()
    }
  ]
   return queryInterface.bulkInsert('Photos', data, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Photos', null, {})
  }
};
