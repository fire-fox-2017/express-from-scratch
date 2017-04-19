'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      phone:'0897865714',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Doe',
      lastName: 'Gio',
      phone:'0818050023',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Gerard',
      lastName: 'Kalrs',
      phone:'085701000888',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Kaleb',
      lastName: 'Wandy',
      phone:'082347617823',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Margareta',
      lastName: 'Retry',
      phone:'081726345888',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
