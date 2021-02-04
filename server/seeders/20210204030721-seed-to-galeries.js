'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      let data = [
        {
          "name" : "Fox-1",
          "imgUrl" : "https://randomfox.ca/?i=114",
          "createdAt" : new Date(),
          "updatedAt" : new Date(),
          "UserId" :1
        },{
          "name" : "Fox-2",
          "imgUrl" : "https://randomfox.ca/?i=64",
          "createdAt" : new Date(),
          "updatedAt" : new Date(),
          "UserId" :1
        },{
          "name" : "Fox-3",
          "imgUrl" : "https://randomfox.ca/?i=11",
          "createdAt" : new Date(),
          "updatedAt" : new Date(),
          "UserId" :1
        },{
          "name" : "Fox-4",
          "imgUrl" : "https://randomfox.ca/?i=70",
          "createdAt" : new Date(),
          "updatedAt" : new Date(),
          "UserId" :1
        }

        
      ]
      return queryInterface.bulkInsert('Galeries',data, {} )
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Galeries', null, {})
  }
};
