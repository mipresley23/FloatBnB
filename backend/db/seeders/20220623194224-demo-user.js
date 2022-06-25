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
          {
            username: 'Tommy',
            email: 'dragonzord@mmpr.com',
            hashedPassword: bcrypt.hashSync('GreenRanger')
          },
          {
            username: 'Jason',
            email: 'tyrannosaurus@mmpr.com',
            hashedPassword: bcrypt.hashSync('RedRanger')
          },
          {
            username: 'Zack',
            email: 'mastodon@mmpr.com',
            hashedPassword: bcrypt.hashSync('BlackRanger')
          },
          {
            username: 'Billy',
            email: 'triceratops@mmpr.com',
            hashedPassword: bcrypt.hashSync('BlueRanger')
          },
          {
            username: 'Trini',
            email: 'sabertooth@mmpr.com',
            hashedPassword: bcrypt.hashSync('YellowRanger')
          },
          {
            username: 'Kimberly',
            email: 'pterodactyl@mmpr.com',
            hashedPassword: bcrypt.hashSync('PinkRanger')
          },
          {
            username: 'Karma',
            email: 'karma_akabane@classe.com',
            hashedPassword: bcrypt.hashSync('Demon8')
          },
          {
            username: 'Hanako',
            email: 'tbhk7@future.net',
            hashedPassword: bcrypt.hashSync('Toilet')
          },
          {
            username: 'Nezuko',
            email: 'nezuko_chan@kamado.com',
            hashedPassword: bcrypt.hashSync('Chan17')
          },
          {
            username: 'Lucy',
            email: 'heartfilia12@fairytail.v',
            hashedPassword: bcrypt.hashSync('happy1')
          },
          {
            username: 'Sasuke',
            email: 'uchiha13@naruto.com',
            hashedPassword: bcrypt.hashSync('swords')
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
