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
    return queryInterface.bulkInsert('Users', [
    {
      firstname: 'Rusa',
      lastname: 'Rusi',
      phone: 012888288,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Rasu',
      lastname: 'Rasa',
      phone: 081112848,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Apel',
      lastname: 'Merah',
      phone: 085722122,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Mangga',
      lastname: 'Manis',
      phone: 0896122235,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Si',
      lastname: 'Cantik',
      phone: 0897266661,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
