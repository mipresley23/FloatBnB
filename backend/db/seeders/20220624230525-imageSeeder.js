'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Images', [
          {
            url: 'backend/db/assets/images/sailboat1.jpg',
            spotId: 1
          },
          {
            url: 'backend/db/assets/images/medyacht1.jpg',
            spotId: 2
          },
          {
            url: 'backend/db/assets/images/superyacht1.jpg',
            spotId: 3
          },
          {
            url: 'backend/db/assets/images/sailboat2.jpg',
            spotId: 4
          },
          {
            url: 'backend/db/assets/images/medyacht2.jpg',
            spotId: 5
          },
          {
            url: 'backend/db/assets/images/superyacht2.jpg',
            spotId: 6
          },
          {
            url: 'backend/db/assets/images/sailboat3.jpg',
            spotId: 7
          },
          {
            url: 'backend/db/assets/images/medyacht3.jpg',
            spotId: 8
          },
          {
            url: 'backend/db/assets/images/superyacht3.jpg',
            spotId: 9
          },
          {
            url: 'backend/db/assets/images/sailboat4.jpg',
            spotId: 10
          },
          {
            url: 'backend/db/assets/images/medyacht4.jpg',
            spotId: 11
          },
          {
            url: 'backend/db/assets/images/superyacht4.jpg',
            spotId: 12
          },
          {
            url: 'backend/db/assets/images/sailboat5.jpg',
            spotId: 13
          },
          {
            url: 'backend/db/assets/images/medyacht5.jpg',
            spotId: 14
          },
          {
            url: 'backend/db/assets/images/superyacht5.jpg',
            spotId: 15
          },
          {
            url: 'backend/db/assets/images/sailboat6.jpg',
            spotId: 16
          },
          {
            url: 'backend/db/assets/images/medyacht6.jpg',
            spotId: 17
          },
          {
            url: 'backend/db/assets/images/superyacht6.jpg',
            spotId: 18
          },
          {
            url: 'backend/db/assets/images/sailboat7.jpg',
            spotId: 19
          },
          {
            url: 'backend/db/assets/images/medyacht7.jpg',
            spotId: 20
          },
          {
            url: 'backend/db/assets/images/superyacht7.jpg',
            spotId: 21
          },
          {
            url: 'backend/db/assets/images/sailboat8.jpg',
            spotId: 22
          },
          {
            url: 'backend/db/assets/images/medyacht8.jpg',
            spotId: 23
          },
          {
            url: 'backend/db/assets/images/superyacht8.jpg',
            spotId: 24
          },
          {
            url: 'backend/db/assets/images/sailboat9.jpg',
            spotId: 25
          },
          {
            url: 'backend/db/assets/images/medyacht9.jpg',
            spotId: 26
          },
          {
            url: 'backend/db/assets/images/superyacht9.jpg',
            spotId: 27
          },
          {
            url: 'backend/db/assets/images/sailboat10.jpg',
            spotId: 28
          },
          {
            url: 'backend/db/assets/images/medyacht10.jpg',
            spotId: 29
          },
          {
            url: 'backend/db/assets/images/superyacht10.jpg',
            spotId: 30
          },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Images', null, {});
  }
};
