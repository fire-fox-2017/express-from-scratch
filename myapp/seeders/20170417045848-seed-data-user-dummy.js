'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
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
                first_name: 'ivan',
                last_name: 'habibi',
                phone: "098376564738",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                first_name: 'ivin',
                last_name: 'habibi',
                phone: "098376564738",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                first_name: 'ivun',
                last_name: 'habibi',
                phone: "098376564738",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                first_name: 'iven',
                last_name: 'habibi',
                phone: "098376564738",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                first_name: 'ivon',
                last_name: 'habibi',
                phone: "098376564738",
                createdAt: new Date(),
                updatedAt: new Date()
            }

        ], {});
    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};
