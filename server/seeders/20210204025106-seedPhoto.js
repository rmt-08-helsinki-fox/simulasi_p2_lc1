'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Photos', [{
      imageURL: 'https://unsplash.com/photos/14BVc2mD9Bk',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      {
        imageURL: 'https://unsplash.com/photos/oCUeelrm1eI',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageURL: 'https://unsplash.com/photos/e4xOmzd8vzg',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageURL: 'https://unsplash.com/photos/Ab-W3gen18Q',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Photos', null, {})
  }
};
