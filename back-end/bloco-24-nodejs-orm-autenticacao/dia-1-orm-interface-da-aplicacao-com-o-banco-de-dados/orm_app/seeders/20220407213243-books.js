'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
    [
      {
        title: 'Livro #01',
        author: 'author #01',
        pageQuantity: 200,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
  
      },
      {
        title: 'Livro #02',
        author: 'author #02',
        pageQuantity: 300,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
  
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};