'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Photos', [
    {
      "imgUrl": "https://images.unsplash.com/photo-1612356700845-4b3fd814f44e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=917&q=80",
      "UserId": 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "imgUrl": "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      "UserId": 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
