'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [
          {
            username: 'Leonardo',
            email: 'theblueone@turtles.com',
            hashedPassword: bcrypt.hashSync('ImTheLeader')
          },
          {
            username: 'Donatello',
            email: 'thepurpleone@turtles.com',
            hashedPassword: bcrypt.hashSync('IDoMachines')
          },
          {
            username: 'Raphael',
            email: 'theredone@turtles.com',
            hashedPassword: bcrypt.hashSync('CoolButRude')
          },
          {
            username: 'Michelangelo',
            email: 'theorangeone@turtles.com',
            hashedPassword: bcrypt.hashSync('PartyDude')
          },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      const Op = Sequelize.Op;
      return queryInterface.bulkDelete('Users', null, {
        username: { [Op.in]: ['Leonardo', 'Donatello', 'Raphael', 'Michelangelo'] }
      }, {});
  }
};
