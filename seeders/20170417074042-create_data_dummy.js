'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Users', [{
        firstname: 'ridho',
        lastname: 'pratama',
        phone: '088888888',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Users', null, {});

  }
};
