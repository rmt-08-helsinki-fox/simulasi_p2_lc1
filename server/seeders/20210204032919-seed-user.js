'use strict';
const { hashPass } = require('../helper/bcrypt')
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
   const user = [{ 
     email : 'siapapun@gmail.com',
     password : hashPass('1234'),
     createdAt : new Date(),
     updatedAt : new Date()
   }] 
   await queryInterface.bulkInsert('Users',user,{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */ 
    await queryInterface.bulkDelete('Users',null,{})
  }
};
